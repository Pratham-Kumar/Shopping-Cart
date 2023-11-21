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
                // this.getView().byId("amount").setText(`Total Amount: ₹ ${totalAmount}`);
            },
            
            onPlaceOrder: function () {
                this.getOwnerComponent().getRouter().navTo("RouteView4");
                   
            },
            
            confirmOrder: function () {
                const oModel = this.getOwnerComponent().getModel();
            
                // Access controls directly by ID
                const oNameField = sap.ui.core.Fragment.byId("com.sap.myshop.view.fragment.CustomerDetail", "name");
                const oAddressField = sap.ui.core.Fragment.byId("com.sap.myshop.view.fragment.CustomerDetail", "add");
                const oMobileField = sap.ui.core.Fragment.byId("com.sap.myshop.view.fragment.CustomerDetail", "mob");
                const oPinCodeField = sap.ui.core.Fragment.byId("com.sap.myshop.view.fragment.CustomerDetail", "pin");
            
                if (oNameField && oAddressField && oMobileField && oPinCodeField) {
                    const oName = oNameField.getValue();
                    const oAddress = oAddressField.getValue();
                    const oMobile = oMobileField.getValue();
                    const oPin_code = oPinCodeField.getValue();
            
                    let myData = {
                        "name": oName,
                        "address": oAddress,
                        "mobile": parseInt(oMobile), // Convert to integer if mobile is numeric
                        "pin_code": parseInt(oPin_code) // Convert to integer if pin_code is numeric
                    };
            
                    oModel.create("/Customers", myData, {
                        success: function (res) {
                            MessageBox.success("Order confirmed successfully");
                            console.log("Customer data saved successfully");
                        },
                        error: function (err) {
                            MessageBox.error("Error confirming order");
                        }
                    });
            
                    // Close the dialog after confirming the order
                    this._oDialog.close();
                } else {
                    console.error("One or more input fields are undefined. Check your IDs and ensure the controls exist.");
                }
            }
            
        });
    }
);
