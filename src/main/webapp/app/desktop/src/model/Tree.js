Ext.define('TreeXu.model.Tree', {
    extend: 'TreeXu.model.Base',
    requires: ['Ext.data.proxy.Ajax'],
    alias: 'xu_tree_model',
    idProperty : 'id',
    fields: [{
        name: 'id',
        mapping: 'myId'
    }, {
        name: 'name',
        mapping: 'name'
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
        url: 'http://127.0.0.1:8080/treeFolder/',
        idParam: 'id',
        actionMethods: {
            create: 'POST',
            read: 'GET',
            update: 'PUT',
            destroy: 'DELETE'
        },
        api: {
            create: 'http://127.0.0.1:8080/treeFolder/',
            read: 'http://127.0.0.1:8080/treeFolder/children/',
            update: 'http://127.0.0.1:8080/treeFolder/',
            destroy: 'http://127.0.0.1:8080/treeFolder/'
        },
        reader: {
            type: 'json',
            rootProperty: '_embedded.treeFolder'
        },
        writer: {
            type: 'json',
            writeAllFields: false
        }
    }
});


