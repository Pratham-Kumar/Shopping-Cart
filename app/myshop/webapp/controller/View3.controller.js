sap.ui.define(
    ["sap/ui/core/mvc/Controller"],
    function (Controller) {
        "use strict";

        return Controller.extend("com.sap.myshop.controller.View3", {
            onInit: function () {
                var oCartModel = this.getOwnerComponent().getModel("cartModel");
                this.getView().setModel(oCartModel);
            }
        });
    }
);
