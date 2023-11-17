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
                debugger;
                Fragment.load({
                    id: this.getView().getId(),
                    name: "com.sap.view.fragment.CustomerDetail",
                    controller: this
                }).then(oDialog => {
                    this.getview().addDependent(oDialog)
                    oDialog.open()
                })
            }
        });
    }
);
