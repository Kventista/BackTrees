/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
const store = Ext.getStore('TreeId');

Ext.define('TreeXu.view.wood.WoodViewController', {
    extend: 'Ext.app.ViewController',
    alias: "controller.WoodViewController",
    onAddFolderAction: function (grid, rowIndex, colIndex, actionItem, event, record) {
        if (!record.isLeaf()) {
            Ext.MessageBox.prompt('New folder', 'Please enter folder name:', function (btnText, sInput) {
                if (btnText === 'ok') {
                    record.appendChild({name: sInput, leaf: false});
                    store.sync();
                    record.expand();
                    // grid.getStore('TreeId');

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
                    store.sync();
                    record.expand();
                    // grid.getStore('TreeId');

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
                    store.sync();
                    // grid.getStore('TreeId');

                }
            }, this);
        } else {
            Ext.Msg.alert("Error", "You cannot edit Root. It will destroy Universe. Sorry.");
        }
    },

    onDeleteRowAction: function (grid, rowIndex, colIndex, actionItem, event, record) {
        if (!(record.id === 'root')) {
            record.erase();
        } else {
            Ext.Msg.alert("Error", "You cannot delete Root. It will destroy Universe. Sorry.");
        }
    }
});
