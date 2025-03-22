export default {
  name: 'SQL数据库设计器',
  description: '设计和可视化数据库架构，并导出SQL',
  workspace: {
    newProject: '新建项目',
    openProject: '打开项目',
    saveProject: '保存项目',
    exportSQL: '导出SQL',
    undo: '撤销',
    redo: '重做',
    zoomIn: '放大',
    zoomOut: '缩小',
    fitScreen: '适应屏幕',
    grid: '切换网格'
  },
  table: {
    newTable: '新建表',
    editTable: '编辑表',
    deleteTable: '删除表',
    tableName: '表名称',
    tableComment: '注释',
    copyTableName: '复制表名'
  },
  column: {
    name: '列名',
    type: '数据类型',
    length: '长度',
    precision: '精度',
    scale: '小数位数',
    defaultValue: '默认值',
    comment: '注释',
    primaryKey: '主键',
    notNull: '非空',
    unique: '唯一',
    autoIncrement: '自增',
    unsigned: '无符号',
    addColumn: '添加列',
    deleteColumn: '删除列'
  },
  relation: {
    newRelation: '新建关系',
    editRelation: '编辑关系',
    deleteRelation: '删除关系',
    sourceTable: '源表',
    targetTable: '目标表',
    sourceColumn: '源列',
    targetColumn: '目标列',
    relationType: '关系类型',
    onUpdate: '更新时',
    onDelete: '删除时',
    relationName: '关系名称'
  },
  relationTypes: {
    oneToOne: '一对一',
    oneToMany: '一对多',
    manyToMany: '多对多'
  },
  actionTypes: {
    cascade: '级联',
    restrict: '限制',
    setNull: '设为空',
    setDefault: '设为默认值',
    noAction: '无操作'
  },
  export: {
    format: '格式',
    ddl: '数据定义语言',
    includeComments: '包含注释',
    includeDrop: '包含DROP语句',
    includeIndexes: '包含索引',
    download: '下载SQL'
  },
  dialects: {
    mysql: 'MySQL',
    postgresql: 'PostgreSQL',
    sqlite: 'SQLite',
    oracle: 'Oracle',
    sqlServer: 'SQL Server'
  },
  messages: {
    saved: '项目保存成功',
    tableCreated: '表创建成功',
    tableDeleted: '表删除成功',
    relationCreated: '关系创建成功',
    relationDeleted: '关系删除成功',
    exported: 'SQL导出成功',
    copied: '已复制到剪贴板！'
  }
} 