sap.ui.define(
    ["sap/ui/core/mvc/Controller", "sap/m/MessageBox"],
    function (Controller, MessageBox) {
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
                    "ID": 2,
                    "name" : "Abhiiiiiii",
                    "address" : "qqqqqqq",
                    "mobile" : 3434343456,
                    "pin_code" : 201206
                }
 
                oModel.create("/Customers", myData, {
                    success: function (res) {
                      MessageBox.success("saved successfully");
                      console.log("done")
                    },
                    error: function (err) {
                      MessageBox.error("ERROR");
                    }
                  })
            },
 
            onCancelOrder: function () {
               const oName = this.getView().byId("name").setValue();
                const oAddress = this.getView().byId("add").setValue();
                const oMobile = this.getView().byId("mob").setValue();
                const oPin_code = this.getView().byId("pin").setValue();
            }
        });
    }
);