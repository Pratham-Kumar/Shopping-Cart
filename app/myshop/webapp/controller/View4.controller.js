sap.ui.define(
    ["sap/ui/core/mvc/Controller", "sap/m/MessageBox"],
    function (Controller, MessageBox) {
        "use strict";
 
        return Controller.extend("com.sap.myshop.controller.View4", {
            onInit: function () {
    
            },
 
            onConfirmOrder: function () {
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
               
            },
 
            validateFormData: function (oFormData) {
                // Add your validation logic here
                return !!oFormData.name && !!oFormData.mobile && !!oFormData.address && !!oFormData.pin_code;
            },
        });
    }
);