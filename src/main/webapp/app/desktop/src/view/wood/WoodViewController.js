const store = Ext.getStore('WoodStore');

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

Ext.define('TreeXu.view.wood.WoodViewController', {
    extend: 'Ext.app.ViewController',
    alias: "controller.WoodViewController",
    onAddFolderAction: function (grid, rowIndex, colIndex, actionItem, event, record) {
        if (!record.isLeaf()) {
            Ext.MessageBox.prompt('New folder', 'Please enter folder name:', function (btnText, sInput) {
                if (btnText === 'ok') {
                    record.appendChild({id: uuidv4(), name: sInput, leaf: false});
                    record.expand();

                    grid.getStore('WoodStore');

                    console.log(record.getData())
                }}, this);
        } else {
            Ext.Msg.alert("Error", "You cannot add directory to file");
        }
    },


    onAddFileAction: function (grid, rowIndex, colIndex, actionItem, event, record) {
        if (!record.isLeaf()) {
            Ext.MessageBox.prompt('New file', 'Please enter file name:', function (btnText, sInput) {
                if (btnText === 'ok') {
                    record.appendChild({id: uuidv4(), name: sInput, size: Math.ceil(Math.random() * 100000), leaf: true});

                    record.expand();

                    grid.getStore('WoodStore');
                    console.log(record.getData())

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
                    console.log(record.getData())
                }},
                this);
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
