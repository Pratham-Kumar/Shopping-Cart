sap.ui.define(
    ["sap/ui/core/mvc/Controller", "sap/m/MessageBox", "sap/m/MessageToast"],
    function (Controller, MessageBox, MessageToast) {
        "use strict";
 
        return Controller.extend("com.sap.myshop.controller.View4", {
            onInit: function () {
   
            },
 
            confirmOrder: function () {
                debugger;
                const oModel = this.getOwnerComponent().getModel();
               
                const oName = this.getView().byId("name").getValue();
                const oAddress = this.getView().byId("add").getValue();
                const oMobile = this.getView().byId("mob").getValue();
                const oPin_code = this.getView().byId("pin").getValue();
               
                let myData = {
                    "ID": Math.floor(Math.random() * 900) + 100,
                    "name" : oName,
                    "address" : oAddress,
                    "mobile" : oMobile,
                    "pin_code" : oPin_code
                }
 
                oModel.create("/Customers", myData, {
                    success: function (res) {
                        MessageToast.show("Your Order is placed and Order ID is: " + res.ID);
                        console.log("done")
                    },
                    error: function (err) {
                        MessageBox.error("ERROR");
                    }
                });
            },
 
            onCancelOrder: function () {
                const oName = this.getView().byId("name").setValue("");
                const oAddress = this.getView().byId("add").setValue("");
                const oMobile = this.getView().byId("mob").setValue("");
                const oPin_code = this.getView().byId("pin").setValue("");
            }
        });
    }
);
