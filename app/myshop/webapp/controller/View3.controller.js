sap.ui.define(
    ["sap/ui/core/mvc/Controller",
        "sap/ui/core/Fragment"
    ],
    function (Controller, Fragment) {
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
            },
            onCancelOrder: function () {
                this.resetDialogFields();
                this._oDialog.close();
                this._oDialog.destroy();
                this._oDialog = null;
            },
            resetDialogFields: function () {
                var oContent = this._oDialog.getAggregation("content");

                if (oContent) {
                    var aFormContent = oContent[0].getAggregation("content");

                    if (aFormContent) {
                        aFormContent.forEach(function (oItem) {
                            if (oItem.setValue) {
                                oItem.setValue("");
                            }
                        });
                    }
                }
            },
            onAfterRendering : function(){
                debugger;
                let cartModel = this.getView().getModel("cartModel");
                let cartData = cartModel.getProperty("/items");
                let totalAmount = 0;
                cartData.forEach((element)=>{
                    totalAmount = totalAmount + parseInt(element.price);
                   
                })
                this.getView().byId("amount").setText(`Total Amount : ₹ ${totalAmount}`);
               
            }
        });
    }
);
