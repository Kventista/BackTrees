Ext.define('TreeXu.view.treeview.TreeView', {
    extend: 'Ext.tree.Panel',
    xtype: 'apptreeview',
    controller: "appTreeViewController",
    requires: [
        'TreeXu.store.TreeData'
    ],
    cls: 'treeview',
    // store: ['TreeId'],
    // bind: {
    //     store: '{treeData}'
    // },
    // store: 'store.appTreeData',
    // store: ['store.appTreeData'],
    // bind: {
    //     store: '{appTreeData}',
    // },
    // store: "appTreeData",
    // store: 'TreeXu.store.TreeData',
    store:Ext.create('store.appTreeData'),
    rootVisible: true,
    title: "Directory tree",

    columns: [{
        xtype: 'treecolumn',
        text: 'Name',
        dataIndex: 'name',
        flex: 1,
        renderer: function (val, meta, rec) {
            if (rec.get('isLayover')) {
                meta.tdStyle = 'color: blue; font-style: italic;';
            }
            return val;
        }
    }, {
        text: 'Size',
        dataIndex: 'size',
        flex: 1
    },{
        xtype: 'actioncolumn',
        text: 'Add folder',
        width: 100,
        menuDisabled: true,
        tooltip: 'Add folder',
        align: 'center',
        iconCls: 'x-fa fa-folder',
        handler: 'onAddFolderAction'
    },{
        xtype: 'actioncolumn',
        text: 'Add file',
        width: 100,
        menuDisabled: true,
        tooltip: 'Add file',
        align: 'center',
        iconCls: 'x-fa fa-file',
        handler: 'onAddFileAction'
    },{
        xtype: 'actioncolumn',
        text: 'Edit',
        width: 55,
        menuDisabled: true,
        tooltip: 'Edit task',
        align: 'center',
        iconCls: 'x-fa fa-edit',
        handler: 'onEditRowAction'
    }, {
        xtype: 'actioncolumn',
        text: 'Kill',
        width: 55,
        menuDisabled: true,
        tooltip: 'Kill me plz',
        align: 'center',
        iconCls: 'x-fa fa-times',
        handler: 'onDeleteRowAction'
    }],

    viewConfig: {
        plugins: {
            treeviewdragdrop: {
                containerScroll: true
            }
        }
    }

});

