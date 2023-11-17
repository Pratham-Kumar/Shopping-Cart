sap.ui.define(
    ["sap/ui/core/mvc/Controller",
        "sap/ui/core/Fragment"
    ],
    function (Controller,Fragment) {
        "use strict";

        return Controller.extend("com.sap.myshop.controller.View3", {
            onInit: function () {
                var oCartModel = this.getOwnerComponent().getModel("cartModel");
                this.getView().setModel(oCartModel);
            },
            onPlaceOrder: function () {
                console.log("onPlaceOrder function is called");
                debugger;
            
                if (!this._oDialog) {
                    this._oDialog = sap.ui.xmlfragment(
                        "com.sap.myshop.view.fragment.CustomerDetail",
                        this
                    );
            
                    this.getView().addDependent(this._oDialog);
                }
            
                this._oDialog.open();
            }            
        });
    }
);
