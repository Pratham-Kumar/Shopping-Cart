sap.ui.define(
    ["sap/ui/core/mvc/Controller", "sap/m/MessageBox", "sap/m/MessageToast"],
    function (Controller, MessageBox, MessageToast) {
        "use strict";
 
        return Controller.extend("com.sap.myshop.controller.View4", {
            onInit: function () {
   
            },
 
            confirmOrder: function () {
                debugger;
                const oModel = this.getView().getModel();  // Use getView() instead of getOwnerComponent()
            
                const oName = this.getView().byId("name").getValue();
                const oAddress = this.getView().byId("add").getValue();
                const oMobile = this.getView().byId("mob").getValue();
                const oPin_code = this.getView().byId("pin").getValue();
            
                // Create Customer entry
                let customerData = {
                    "ID": Math.floor(Math.random() * 900) + 100,
                    "name": oName,
                    "address": oAddress,
                    "mobile": oMobile,
                    "pin_code": oPin_code
                };
            
                oModel.create("/Customers", customerData, {
                    success: function (customerRes) {
                        // Create Orders after creating Customer
                        let cartModel = this.getView().getModel("cartModel");  // Use getView() instead of getOwnerComponent()
                        let cartItems = cartModel.getProperty("/items");
            
                        cartItems.forEach(function (cartItem) {
                            let orderData = {
                                "ID": Math.floor(Math.random() * 900) + 100,
                                "productID": cartItem.ID,
                                "quantity": 1,
                                "total": cartItem.price * 1,
                                "customer_ID": customerRes.ID
                            };
            
                            oModel.create("/Orders", orderData, {
                                success: function (orderRes) {
                                    MessageToast.show("Your Order is placed and Order ID is: " + orderRes.ID);
                                    console.log("done");
                                },
                                error: function (orderErr) {
                                    MessageBox.error("Error creating Order");
                                }
                            });
                        });
            
                        // Reset cart after placing the order
                        cartModel.setProperty("/items", []);
                        cartModel.setProperty("/totalAmount", 0);
                    }.bind(this),  // Bind 'this' to the success callback function
                    error: function (customerErr) {
                        MessageBox.error("Error creating Customer");
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
