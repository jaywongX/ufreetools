export default {
  name: 'Git冲突解决模拟器',
  description: '模拟Git合并冲突场景，练习解决代码冲突',
  title: 'Git 冲突解决模拟器',
  intro: '此工具可以帮助你理解并练习解决 Git 合并冲突。输入冲突内容或使用示例，然后手动解决冲突。',
  buttons: {
    generateExample: '生成示例冲突',
    resolveOurs: '使用我的更改 (HEAD)',
    resolveTheirs: '使用他们的更改',
    validate: '验证解决方案',
    reset: '重置',
    useOurs: '使用我的',
    useTheirs: '使用他们的',
    useBoth: '合并两者'
  },
  conflictArea: {
    label: '冲突内容',
    hasConflict: '⚠️ 存在未解决冲突',
    noConflict: '✓ 无冲突'
  },
  analysis: {
    title: '冲突分析',
    conflict: '冲突 #{number}',
    ours: '我的更改 (HEAD)',
    theirs: '他们的更改'
  },
  tutorial: {
    title: '如何解决 Git 冲突',
    intro: 'Git 冲突通常在合并或变基操作中出现，当两个分支修改了同一文件的同一部分时会发生冲突。',
    markerExplanation: '冲突标记通常看起来像这样：',
    markerExample: `<<<<<<< HEAD
你的更改 (当前分支)
=======
他们的更改 (合并进来的分支)
>>>>>>> 分支名称`,
    steps: {
      title: '解决冲突的基本步骤：',
      step1: '找到所有冲突标记 (<code><<<<<<< HEAD</code>, <code>=======</code>, <code>>>>>>> 分支名</code>)',
      step2: '决定保留哪些代码（你的、他们的，或者两者的组合）',
      step3: '删除冲突标记，保留你决定要保留的代码',
      step4: '继续处理下一个冲突，直到解决所有冲突'
    },
    commands: {
      title: '常用的 Git 命令：',
      status: '<code>git status</code> - 查看哪些文件有冲突',
      diff: '<code>git diff</code> - 查看冲突的详细内容',
      abort: '<code>git merge --abort</code> - 取消合并，回到合并前的状态',
      add: '<code>git add &lt;文件&gt;</code> - 标记冲突文件为已解决',
      commit: '<code>git commit</code> - 完成合并'
    }
  },
  messages: {
    generated: "已生成示例冲突内容",
    resolvedOurs: "已使用所有「我的更改」解决冲突",
    resolvedTheirs: "已使用所有「他们的更改」解决冲突",
    resolvedSingle: "已解决冲突 #{number}",
    allResolved: "✅ 所有冲突已成功解决！",
    stillHasConflicts: "⚠️ 仍有未解决的冲突，请检查并解决所有标记"
  }
} 