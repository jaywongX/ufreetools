export default {
  name: 'Git Conflict Resolver Simulator',
  description: 'Simulate Git merge conflict scenarios and practice resolving code conflicts',
  title: 'Git Conflict Resolver Simulator',
  intro: 'This tool helps you understand and practice resolving Git merge conflicts. Input conflict content or use examples, then manually resolve the conflicts.',

  buttons: {
    generateExample: 'Generate Example Conflict',
    resolveOurs: 'Use My Changes (HEAD)',
    resolveTheirs: 'Use Their Changes',
    validate: 'Validate Solution',
    reset: 'Reset',
    useOurs: 'Use Mine',
    useTheirs: 'Use Theirs',
    useBoth: 'Merge Both'
  },

  conflictArea: {
    label: 'Conflict Content',
    hasConflict: '⚠️ Unresolved conflicts exist',
    noConflict: '✓ No conflicts'
  },

  analysis: {
    title: 'Conflict Analysis',
    conflict: 'Conflict #{number}',
    ours: "My Changes (HEAD)",
    theirs: "Their Changes"
  },

  tutorial: {
    title: 'How to Resolve Git Conflicts',
    intro: 'Git conflicts typically occur during merge or rebase operations when two branches modify the same part of a file.',
    markerExplanation: 'Conflict markers usually look like this:',
    markerExample: `<<<<<<< HEAD
Your changes (current branch)
=======
Their changes (incoming branch)
>>>>>>> Branch Name`,
    steps: {
      title: 'Basic Steps to Resolve Conflicts:',
      step1: 'Find all conflict markers (<code><<<<<<< HEAD</code>, <code>=======</code>, <code>>>>>>> Branch Name</code>)',
      step2: 'Decide which code to keep (yours, theirs, or a combination of both)',
      step3: 'Remove the conflict markers and keep the code you decided to retain',
      step4: 'Proceed to the next conflict until all conflicts are resolved'
    },
    commands: {
      title: 'Commonly Used Git Commands:',
      status: '<code>git status</code> - View files with conflicts',
      diff: '<code>git diff</code> - View detailed conflict content',
      abort: '<code>git merge --abort</code> - Cancel the merge and return to the pre-merge state',
      add: '<code>git add <file></code> - Mark the conflicted file as resolved',
      commit: '<code>git commit</code> - Complete the merge'
    }
  },

  messages: {
    generated: "Example conflict content has been generated",
    resolvedOurs: "All conflicts resolved using 'My Changes'",
    resolvedTheirs: "All conflicts resolved using 'Their Changes'",
    resolvedSingle: "Conflict #{number} resolved",
    allResolved: "✅ All conflicts have been successfully resolved!",
    stillHasConflicts: "⚠️ There are still unresolved conflicts. Please check and resolve all markers."
  }
};