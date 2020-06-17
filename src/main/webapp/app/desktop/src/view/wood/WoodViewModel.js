Ext.define('TreeXu.view.wood.WoodViewModel', {
    extend: 'TreeXu.view.wood.BaseViewModel',
    requires: ['TreeXu.view.wood.BaseViewModel',
        'Ext.data.proxy.Ajax',
        //'Ext.data.identifier.Uuid'
        ],
    alias: 'viewmodel.WoodViewModel',
    identifier: 'uuid',
    xtype: 'woodviewmodel',
    idProperty : 'id',
    fields: [{
            name: 'id',
            mapping: 'id',
        },
        {
            name: 'leaf',
            mapping: 'leaf',
        },
        {
            name: 'name',
            mapping: 'name',

            },
        {
            name: 'parentId',
            mapping: 'parentId',
        },
        {
            name: 'size',
            mapping: 'size',
    }
    ],
    proxy: {
        type: 'rest',
        url: '/treeFolder/',
        idParam: 'id',
        actionMethods: {
            create: 'POST',
            read: 'GET',
            update: 'PUT',
            destroy: 'DELETE'
        },
        api: {
            create: '/treeFolder/',
            read: '/treeFolder/children/',
            update: '/treeFolder/',
            destroy: '/treeFolder/'

        },
        reader: {
            type: 'json',
            rootProperty: '_embedded.treeFolder',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        },



    }
});


