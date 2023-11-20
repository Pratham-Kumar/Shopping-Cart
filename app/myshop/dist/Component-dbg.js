sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
], function (UIComponent, JSONModel) {
    "use strict";

    return UIComponent.extend("com.sap.myshop.Component", {
        metadata: {
            manifest: "json"
        },

        init: function () {
            // Set up the central shopping cart model
            var oCartModel = new JSONModel({
                items: []
            });
            this.setModel(oCartModel, "cartModel");

            // Initialize router
            UIComponent.prototype.init.apply(this, arguments);
            this.getRouter().initialize();
        }
    });
});
