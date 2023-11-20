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
            onAfterRendering: function () {
                this.updateTotalAmount();
            },
            updateTotalAmount: function () {
                var cartModel = this.getView().getModel("cartModel");
                var cartData = cartModel.getProperty("/items");
                var totalAmount = 0;
            
                cartData.forEach(function (element) {
                    totalAmount += parseInt(element.price);
                });
            
                // Update the totalAmount property in the model
                cartModel.setProperty("/totalAmount", totalAmount);
            
                // Update the Text control in the view with the formatted total amount
                this.getView().byId("amount").setText(`Total Amount: ₹ ${totalAmount}`);
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
            confirmOrder : function(){
                const oModel = this.getOwnerComponent().getModel();
               
                const oName = this.getView().byId("name").getValue();
                const oAddress = this.getView().byId("add").getValue();
                const oMobile = this.getView().byId("mob").getValue();
                const oPin_code = this.getView().byId("pin").getValue();
 
                let myData = {
                    "name" : oName,
                    "address" : oAddress,
                    "mobile" : oMobile,
                    "pin_code" : oPin_code
                }
 
                oModel.create("/Customer", myData, {
                    success: function (res) {
                      MessageBox.success("saved successfully");
                      console.log("done")
                    },
                    error: function (err) {
                      MessageBox.error("ERROR");
                    }
                  })
            }
        });
    }
);
