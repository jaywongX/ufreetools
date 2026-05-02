import { spawn } from 'child_process';
import { resolve } from 'path';

const mode = process.argv[2] || 'core';
const toolLimitArg = process.argv[3];
const heapArg = process.argv[4];

const normalizedMode = mode === 'all' ? 'all' : 'core';
const heapSize = Number.parseInt(heapArg || process.env.PRERENDER_HEAP_MB || '8192', 10);
const viteBin = resolve(process.cwd(), 'node_modules', 'vite', 'bin', 'vite.js');

const child = spawn(
  process.execPath,
  [`--max-old-space-size=${Number.isFinite(heapSize) ? heapSize : 8192}`, viteBin, 'build', '--config', 'vite.config.prerender.js'],
  {
    stdio: 'inherit',
    env: {
      ...process.env,
      PRERENDER_MODE: normalizedMode,
      ...(toolLimitArg ? { PRERENDER_TOOL_LIMIT: toolLimitArg } : {})
    }
  }
);

child.on('exit', code => {
  process.exit(code ?? 1);
});
