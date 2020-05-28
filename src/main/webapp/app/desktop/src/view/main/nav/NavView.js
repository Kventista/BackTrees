Ext.define("TreeXu.view.main.nav.NavView", {
	extend: "Ext.Panel",
	xtype: "navview",
	controller: "navviewcontroller",
	viewModel: { type: "navviewmodel"},
	cls: "navview",
	id: 'navview',
	layout: "fit",
	ui: 'navw',
	frame: 'true',

	// This is like a normal config -- where the values are applied as the object is created --
	// but with a renderConfig, the values aren't applied until the component has been rendered.
	renderConfig: {
			store: null,
			micro: false,
			name: null,
			selection: null
	},
	twoWayBindable: ["selection"],

	// Each config property may have a corresponding update method. Ideally, the view should
	// be purely declarative, so these methods are an awkward exception. To minimize the code
	// in the view, just have these call a method in the controller. Another solution is to
	// put the update methods in a separate class, then mix in the class.
	updateStore: function(store) {
			this.lookup("menuview").setStore(store);
	},
	updateMicro: function(micro) {
			this.getController().updateMicro(micro);
	},

	updateSelection: function(selection) {
			this.getController().updateSelection(selection);
	},

	tbar: {
			xtype: "topview",
			reference: "topview",
			dock: "top",
			// height: 50
	},
	items: [
			{
					xtype: "menuview",
					reference: "menuview",
					listeners: {
							selectionchange: "onMenuViewSelectionChange"
					}
			}
	],
});

