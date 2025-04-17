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
  },
  article: {
    title: "Understanding Git Conflicts and How to Resolve Them",
    overview: {
      title: "What is Git Conflict Resolution?",
      content: "Git conflict resolution is the process of managing and resolving conflicts that occur when merging or rebasing branches in Git. When multiple developers modify the same part of a file, Git cannot automatically determine which changes to keep. This is where a Git conflict resolver comes in.<br><br>This Git conflict resolver simulator helps you understand and practice resolving Git merge conflicts in a safe environment. By simulating common conflict scenarios, you can learn the mechanics of conflict resolution without risking actual project code. The simulator highlights merge conflicts, shows side-by-side comparisons of conflicting changes, and provides tools to practice resolving these conflicts efficiently."
    },
    useCases: {
      title: "Common Scenarios Where Git Conflict Resolution is Needed",
      items: [
        {
          title: "Team Collaboration on Shared Codebase",
          description: "When multiple team members modify the same file simultaneously, conflicts are likely to arise during merges. Learning conflict resolution skills ensures smooth team collaboration."
        },
        {
          title: "Feature Branch Integration",
          description: "When merging feature branches into main development branches, conflicts often occur in areas where parallel development has taken place."
        },
        {
          title: "Pull Request Management",
          description: "Resolving conflicts that arise when a pull request is being integrated into the main repository, ensuring changes can be safely incorporated."
        },
        {
          title: "Long-lived Branch Management",
          description: "When a branch has been separated from the main development line for an extended period, resolving the accumulated conflicts during reintegration can be challenging."
        },
        {
          title: "Open Source Contribution",
          description: "Contributors to open source projects often face conflicts when their changes overlap with updates made by other contributors or maintainers."
        }
      ]
    },
    guide: {
      title: "Step-by-Step Guide to Resolving Git Conflicts",
      intro: "Resolving Git conflicts may seem intimidating at first, but following a systematic approach makes the process manageable. Here's how to effectively resolve Git conflicts:",
      steps: [
        {
          title: "Identify Conflicted Files",
          description: "Use 'git status' to identify files marked as conflicted. These files contain conflict markers that need to be resolved."
        },
        {
          title: "Open Conflicted Files",
          description: "Open the conflicted files in your editor. Look for conflict markers (<<<<<<< HEAD, =======, and >>>>>>> branch-name) that indicate where conflicts exist."
        },
        {
          title: "Understand Both Changes",
          description: "Review the changes from both sides of the conflict. The content between <<<<<<< HEAD and ======= shows your current branch changes, while the content between ======= and >>>>>>> shows the incoming changes."
        },
        {
          title: "Decide How to Resolve Each Conflict",
          description: "Decide whether to keep your changes, accept the incoming changes, or create a combination of both. Consider the intent behind each change rather than simply choosing one over the other."
        },
        {
          title: "Edit the File to Resolve Conflicts",
          description: "Edit the file to remove the conflict markers and keep only the final, desired content. This could involve choosing one version or manually combining elements from both."
        },
        {
          title: "Mark as Resolved",
          description: "After editing, use 'git add <filename>' to mark the file as resolved. This stages the resolved file for the commit."
        },
        {
          title: "Complete the Merge Process",
          description: "Once all conflicts are resolved and files are staged, use 'git commit' to complete the merge process. Git will create a merge commit to record the resolution."
        }
      ]
    },
    conflictTypes: {
      title: "Common Types of Git Conflicts",
      intro: "Git conflicts can appear in various forms, each requiring a slightly different approach. Understanding these types helps you recognize and resolve them efficiently:",
      types: [
        {
          title: "Content Conflicts",
          description: "The most common conflict type occurs when two branches modify the same line(s) of code. Git cannot automatically determine which changes to keep."
        },
        {
          title: "Deleted File Conflicts",
          description: "Conflicts that arise when one branch modifies a file while another branch deletes it. Git needs to know whether to keep the modified file or confirm its deletion."
        },
        {
          title: "Renamed File Conflicts",
          description: "When one branch renames a file while another branch modifies the original file, Git might struggle to track these changes correctly."
        },
        {
          title: "Binary File Conflicts",
          description: "Conflicts in non-text files like images or compiled files which cannot be merged line-by-line. These often require choosing one version entirely."
        },
        {
          title: "Whitespace Conflicts",
          description: "Sometimes conflicts occur due to whitespace changes like indentation or line endings, which can be particularly frustrating but usually simple to resolve."
        }
      ]
    },
    faq: {
      title: "Frequently Asked Questions About Git Conflict Resolution",
      items: [
        {
          question: "How can I prevent Git conflicts?",
          answer: "While you can't entirely prevent conflicts, especially in active projects, you can minimize them by: communicating with your team about which files you're working on, pulling changes frequently, keeping feature branches short-lived, and using smaller, focused commits that are easier to merge."
        },
        {
          question: "Can I use tools to help resolve Git conflicts?",
          answer: "Yes, many Git clients and IDEs offer visual conflict resolution tools that make the process easier by showing conflicts side by side. Popular options include Visual Studio Code, IntelliJ IDEA, GitKraken, and SourceTree. These tools highlight conflicts and provide buttons to choose between different versions."
        },
        {
          question: "What happens if I resolve a conflict incorrectly?",
          answer: "If you make a mistake during conflict resolution, you can always abort the current merge using 'git merge --abort' (if you haven't committed yet) or revert the commit after completion. It's a good practice to test your code after resolving conflicts to ensure it works as expected."
        },
        {
          question: "How do I resolve conflicts during a rebasing operation?",
          answer: "The process is similar to resolving merge conflicts, but occurs for each commit being rebased. You'll need to resolve conflicts, then use 'git add' to mark files as resolved, followed by 'git rebase --continue' to proceed to the next commit (or conflict) in the rebase process."
        },
        {
          question: "Should I use merge or rebase to minimize conflicts?",
          answer: "Both strategies have their place. Merging preserves the exact history but can create a complex graph with many merge commits. Rebasing creates a cleaner, linear history but rewrites commit history which can be problematic for shared branches. Teams should agree on a workflow that suits their needs."
        },
        {
          question: "What is a 'merge conflict marker' in Git?",
          answer: "Merge conflict markers are special text sequences that Git inserts into files to indicate conflicting changes. They include: <<<<<<< HEAD (marking the beginning of your changes), ======= (separating your changes from incoming changes), and >>>>>>> branch-name (marking the end of incoming changes from the specified branch)."
        },
        {
          question: "How do I practice Git conflict resolution safely?",
          answer: "This Git conflict resolver simulator is designed specifically for practice. Additionally, you can create a test repository locally, make conflicting changes in different branches, and practice merging them. This gives you a safe environment to build confidence in handling conflicts."
        }
      ]
    },
    bestPractices: {
      title: "Best Practices for Efficient Conflict Resolution",
      items: [
        "Communicate with your team before starting work on files that might create conflicts",
        "Pull and merge from the main branch frequently to reduce the size and complexity of conflicts",
        "Use feature flags to allow incomplete features to be merged early without affecting functionality",
        "Break large changes into smaller, more focused commits that are easier to merge",
        "Understand the code context and intent of both changes before resolving conflicts",
        "Consider pair programming when resolving complex conflicts to combine perspectives",
        "Always test your application after resolving conflicts to ensure it works correctly",
        "Document your conflict resolution strategy for team-wide consistency",
        "Use meaningful commit messages when resolving conflicts to explain your decisions",
        "Leverage Git's configuration options like 'git config merge.conflictstyle diff3' to see the original content alongside conflicting changes"
      ]
    }
  }
}