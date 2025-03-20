export default {
  name: 'Git Conflict Resolver',
  description: 'Simulate Git merge conflict scenarios, practice resolving code conflicts',
  options: {
    conflictStyle: 'Conflict Style',
    resolveStrategy: 'Resolution Strategy',
    showLineNumbers: 'Show Line Numbers'
  },
  actions: {
    generateConflict: 'Generate Conflict',
    resolve: 'Resolve Conflict',
    copy: 'Copy Result',
    reset: 'Reset'
  },
  messages: {
    copied: 'Copied to clipboard!',
    resolveSuccess: 'Conflict resolved successfully',
    resolveError: 'Error resolving conflict'
  }
} 