import { spawn } from 'child_process';
import { resolve } from 'path';

const mode = process.argv[2] || 'core';
const toolLimitArg = process.argv[3];
const heapArg = process.argv[4];

const normalizedMode = mode === 'all' ? 'all' : 'core';
const heapSize = Number.parseInt(heapArg || process.env.PRERENDER_HEAP_MB || '8192', 10);

// 设置环境变量
const env = {
  ...process.env,
  PRERENDER_MODE: normalizedMode,
  ...(toolLimitArg ? { PRERENDER_TOOL_LIMIT: toolLimitArg } : {})
};

const nodeArgs = [`--max-old-space-size=${Number.isFinite(heapSize) ? heapSize : 8192}`];

// 步骤1：先执行 vite build 构建 SPA
const viteBin = resolve(process.cwd(), 'node_modules', 'vite', 'bin', 'vite.js');

console.log(`[run-prerender-build] Step 1: Building SPA with vite...`);

const buildChild = spawn(
  process.execPath,
  [...nodeArgs, viteBin, 'build', '--config', 'vite.config.prerender.js'],
  {
    stdio: 'inherit',
    env,
  }
);

buildChild.on('exit', (buildCode) => {
  if (buildCode !== 0) {
    console.error(`[run-prerender-build] Vite build failed with code ${buildCode}`);
    process.exit(buildCode ?? 1);
  }

  // 步骤2：使用 Puppeteer 进行预渲染
  console.log(`[run-prerender-build] Step 2: Prerendering with Puppeteer...`);

  const prerenderScript = resolve(process.cwd(), 'scripts', 'puppeteer-prerender.js');
  const prerenderChild = spawn(
    process.execPath,
    [...nodeArgs, prerenderScript],
    {
      stdio: 'inherit',
      env,
    }
  );

  prerenderChild.on('exit', (prerenderCode) => {
    process.exit(prerenderCode ?? 1);
  });
});
