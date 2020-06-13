const store = Ext.getStore('WoodStore');

Ext.define('TreeXu.view.wood.WoodViewController', {
    extend: 'Ext.app.ViewController',
    alias: "controller.WoodViewController",
    onAddFolderAction: function (grid, rowIndex, colIndex, actionItem, event, record) {
        if (!record.isLeaf()) {
            Ext.MessageBox.prompt('New folder', 'Please enter folder name:', function (btnText, sInput) {
                if (btnText === 'ok') {
                    record.appendChild({name: sInput, leaf: false});
                    record.expand();
                    // store.sync();

                    grid.getStore('WoodStore');
                    record.get('parentId');
                    record.get('id');
                    record.get('name');

                    console.log(record.get('id'), record.get('name'))
                }

            }, this);
        } else {
            Ext.Msg.alert("Error", "You cannot add directory to file");
        }
    },


    onAddFileAction: function (grid, rowIndex, colIndex, actionItem, event, record) {
        if (!record.isLeaf()) {
            Ext.MessageBox.prompt('New file', 'Please enter file name:', function (btnText, sInput) {
                if (btnText === 'ok') {
                    record.appendChild({name: sInput, size: Math.ceil(Math.random() * 100000), leaf: true});
                    record.expand();
                    // store.sync();

                    grid.getStore('WoodStore');
                    record.get('parentId');
                    record.get('id');
                    record.get('name');
                    console.log(record.get('id'), record.get('name'))
                }

            }, this);
        } else {
            Ext.Msg.alert("Error", "You cannot add anything to file");
        }
    },

    onEditRowAction: function (grid, rowIndex, colIndex, actionItem, event, record) {
        if (!(record.id === 'root')) {
            Ext.MessageBox.prompt('Rename', 'Please enter new name:', function (btnText, sInput) {
                if (btnText === 'ok') {
                    console.log(record)
                    record.set({name: sInput, leaf: record.data.leaf});
                    record.expand();

                    grid.getStore('WoodStore');
                    record.get('parentId');
                    record.get('id');
                    record.get('name');

                    console.log(record.get('parentId'), record.get('name'))

                }
            }, this);
        }else {
            Ext.Msg.alert("Error", "You cannot edit Root. It will destroy Universe. Sorry.");
        }
    },

    onDeleteRowAction: function (grid, rowIndex, colIndex, actionItem, event, record) {
        if (!(record.id === 'root')) {
            record.erase();
        } else {
            Ext.Msg.alert("Error", "You cannot delete Root. It will destroy Universe. Sorry.");
        }
    },


});
