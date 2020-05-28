Ext.define('TreeXu.store.TreeData', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.appTreeData',
    requires: ['TreeXu.model.Tree'],
    model: 'TreeXu.model.Tree',
    autoLoad: true,
    //autoSync: true,
    type: 'tree',
    storeId: 'TreeId',
    fields: ['name', 'size'],

});

