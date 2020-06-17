Ext.define('TreeXu.store.WoodStore', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.WoodStore',
    requires: ['TreeXu.view.wood.WoodViewModel'],
    model: 'TreeXu.view.wood.WoodViewModel',
    autoLoad: true,
    autoSync: true,
    async: true,
    type: 'tree',
    storeId: 'WoodStore',
        fields: [
            'id', 'leaf', 'name', 'parentId',  'size'
        ],


});



