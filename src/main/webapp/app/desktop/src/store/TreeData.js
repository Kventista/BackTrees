Ext.define('TreeXu.store.TreeData', {
    extend: 'Ext.data.TreeStore',
    alias: 'xu_tree_store',
    requires: ['TreeXu.model.Tree'],
    model: 'TreeXu.model.Tree',
    fields: ['name', 'size'],
    type: 'tree',
    storeId: 'TreeId',

});

