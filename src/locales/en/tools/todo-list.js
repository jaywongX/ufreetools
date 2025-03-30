export default {
  name: 'Todo List',
  description: 'Create, manage and organize your tasks and to-do items',
  
  // Main interface text
  newTask: 'New Task',
  addTask: 'Add Task',
  taskTitle: 'Task Title',
  description: 'Description',
  dueDate: 'Due Date',
  priority: 'Priority',
  category: 'Category',
  status: 'Status',
  actions: 'Actions',
  
  // Priorities
  priorities: {
    high: 'High',
    medium: 'Medium',
    low: 'Low'
  },
  
  // Categories
  categories: {
    work: 'Work',
    personal: 'Personal',
    shopping: 'Shopping',
    health: 'Health',
    finance: 'Finance',
    other: 'Other'
  },
  
  // Statuses
  statuses: {
    all: 'All',
    pending: 'Pending',
    completed: 'Completed'
  },
  
  // Button text
  edit: 'Edit',
  delete: 'Delete',
  save: 'Save',
  cancel: 'Cancel',
  clear: 'Clear Completed',
  clearAll: 'Clear All',
  
  // Filter and sort
  filter: 'Filter',
  filterBy: 'Filter By',
  sortBy: 'Sort By',
  search: 'Search tasks...',
  
  // Sort options
  sortOptions: {
    dateCreatedAsc: 'Date Created (Asc)',
    dateCreatedDesc: 'Date Created (Desc)',
    dueDateAsc: 'Due Date (Asc)',
    dueDateDesc: 'Due Date (Desc)',
    priorityAsc: 'Priority (Asc)',
    priorityDesc: 'Priority (Desc)',
    titleAsc: 'Title (A-Z)',
    titleDesc: 'Title (Z-A)'
  },
  
  // Statistics
  statistics: 'Statistics',
  totalTasks: 'Total Tasks',
  completedTasks: 'Completed Tasks',
  pendingTasks: 'Pending Tasks',
  completionRate: 'Completion Rate',
  tasks: 'Tasks',
  
  // Prompts and confirmations
  taskAdded: 'Task added',
  taskUpdated: 'Task updated',
  taskDeleted: 'Task deleted',
  confirmDelete: 'Are you sure you want to delete this task?',
  confirmDeleteAll: 'Are you sure you want to delete all completed tasks?',
  confirmClearAll: 'Are you sure you want to clear all tasks?',
  noTasks: 'No tasks',
  noFilteredTasks: 'No tasks match your filter criteria',
  titleRequired: 'Task title is required',
  
  // Tool introduction
  aboutTitle: 'About Todo List',
  aboutDescription: 'Todo List is a simple and efficient task management tool that helps you organize tasks you need to complete in your work and personal life. By adding, editing, and marking tasks, you can clearly track your progress and improve your productivity.',
  
  featuresTitle: 'Key Features',
  feature1: 'Add, edit, and delete tasks',
  feature2: 'Set task priorities and due dates',
  feature3: 'Organize tasks by categories',
  feature4: 'Mark tasks as completed',
  feature5: 'Filter and sort tasks by multiple criteria',
  feature6: 'Local storage to preserve your data',
  
  howToUseTitle: 'How to Use',
  howToUseStep1: '1. Click the "New Task" button to add a new to-do item',
  howToUseStep2: '2. Fill in the task title, description, due date, and other details',
  howToUseStep3: '3. Use filtering and sorting to organize your task list',
  howToUseStep4: '4. Check the checkbox to mark a task as completed',
  howToUseStep5: '5. Use edit and delete functions to manage existing tasks',
  
  tipsTitle: 'Usage Tips',
  tip1: 'Set high priority for important tasks to handle them first',
  tip2: 'Use categories to organize tasks in different areas',
  tip3: 'Regularly clear completed tasks to keep your list tidy',
  tip4: 'Make use of filters to focus on the most important tasks at hand',
  tip5: 'Set appropriate due dates to help you schedule your time effectively'
}; 