Ext.define('TreeXu.model.Tree', {
    extend: 'TreeXu.model.Base',
    requires: ['Ext.data.proxy.Ajax'],
    alias: 'model.appTree',
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
        url: 'http://localhost:8080/treeFolder/',
        idParam: 'id',
        actionMethods: {
            create: 'POST',
            read: 'GET',
            update: 'PUT',
            destroy: 'DELETE'
        },
        api: {
            create: 'http://localhost:8080/treeFolder/',
            read: 'http://localhost:8080/treeFolder/children/',
            update: 'http://localhost:8080/treeFolder/',
            destroy: 'http://localhost:8080/treeFolder/'
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


