Ext.define('TreeXu.view.wood.WoodViewModel', {
    extend: 'TreeXu.view.wood.BaseViewModel',
    requires: ['Ext.data.proxy.Ajax'],
    alias: 'viewmodel.WoodViewModel',
    xtype: 'woodviewmodel',
    idProperty : 'id',
    fields: [{
        name: 'id',
        mapping: 'myId',

    }, {
        name: 'name',
        mapping: 'name',

    }, {
        name: 'size',
        mapping: 'size'
    },
        {
            name: 'leaf',
            mapping: 'leaf'
        },
        {
            name: 'parentId',
            mapping: 'parentId'
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
            // create: 'http://localhost:8080/treeFolder/',
            // read: 'http://localhost:8080/treeFolder/children/',
            // update: 'http://localhost:8080/treeFolder/',
            // destroy: 'http://localhost:8080/treeFolder/'
            create: '/treeFolder/',
            read: '/treeFolder/children/',
            update: '/treeFolder/',
            destroy: '/treeFolder/'

        },
        reader: {
            type: 'json',
            rootProperty: '_embedded.treeFolder',
            successProperty: 'success'   //*попытки настроить store

        },
        writer: {
            type: 'json',
            writeAllFields: true //*был false
        },



    }
});


