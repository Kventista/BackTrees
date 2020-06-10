Ext.define('TreeXu.store.WoodStore', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.WoodStore',
    requires: ['TreeXu.view.wood.WoodViewModel'],
    model: 'TreeXu.view.wood.WoodViewModel',
    autoLoad: true,
    autoSync: true,
    type: 'tree',
    storeId: 'TreeId',
    fields: ['name', 'size'],

});

