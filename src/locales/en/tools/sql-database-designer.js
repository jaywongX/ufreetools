export default {
  name: 'SQL Database Designer',
  description: 'Design and visualize database schemas with SQL export',
  workspace: {
    newProject: 'New Project',
    openProject: 'Open Project',
    saveProject: 'Save Project',
    exportSQL: 'Export SQL',
    undo: 'Undo',
    redo: 'Redo',
    zoomIn: 'Zoom In',
    zoomOut: 'Zoom Out',
    fitScreen: 'Fit to Screen',
    grid: 'Toggle Grid'
  },
  table: {
    newTable: 'New Table',
    editTable: 'Edit Table',
    deleteTable: 'Delete Table',
    tableName: 'Table Name',
    tableComment: 'Comment',
    copyTableName: 'Copy Name'
  },
  column: {
    name: 'Column Name',
    type: 'Data Type',
    length: 'Length',
    precision: 'Precision',
    scale: 'Scale',
    defaultValue: 'Default',
    comment: 'Comment',
    primaryKey: 'Primary Key',
    notNull: 'Not Null',
    unique: 'Unique',
    autoIncrement: 'Auto Increment',
    unsigned: 'Unsigned',
    addColumn: 'Add Column',
    deleteColumn: 'Delete Column'
  },
  relation: {
    newRelation: 'New Relation',
    editRelation: 'Edit Relation',
    deleteRelation: 'Delete Relation',
    sourceTable: 'Source Table',
    targetTable: 'Target Table',
    sourceColumn: 'Source Column',
    targetColumn: 'Target Column',
    relationType: 'Relation Type',
    onUpdate: 'On Update',
    onDelete: 'On Delete',
    relationName: 'Relation Name'
  },
  relationTypes: {
    oneToOne: 'One to One',
    oneToMany: 'One to Many',
    manyToMany: 'Many to Many'
  },
  actionTypes: {
    cascade: 'CASCADE',
    restrict: 'RESTRICT',
    setNull: 'SET NULL',
    setDefault: 'SET DEFAULT',
    noAction: 'NO ACTION'
  },
  export: {
    format: 'Format',
    ddl: 'DDL',
    includeComments: 'Include Comments',
    includeDrop: 'Include DROP statements',
    includeIndexes: 'Include Indexes',
    download: 'Download SQL'
  },
  dialects: {
    mysql: 'MySQL',
    postgresql: 'PostgreSQL',
    sqlite: 'SQLite',
    oracle: 'Oracle',
    sqlServer: 'SQL Server'
  },
  messages: {
    saved: 'Project saved successfully',
    tableCreated: 'Table created successfully',
    tableDeleted: 'Table deleted successfully',
    relationCreated: 'Relation created successfully',
    relationDeleted: 'Relation deleted successfully',
    exported: 'SQL exported successfully',
    copied: 'Copied to clipboard!'
  }
} 