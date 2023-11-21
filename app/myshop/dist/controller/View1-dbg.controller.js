sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";
 
        return Controller.extend("com.sap.myshop.controller.View1", {
            onInit: function () {
               
            },
            stockStatusColor: function (quantity) {
                return quantity > 0 ? "Success" : "Error";
            },
            onProductSelect: function (oEvent) {
                let selectedRow = oEvent.getParameters().listItem.getBindingContext().getObject();
                this.getOwnerComponent().getRouter().navTo("RouteView2", {
                    "ID": selectedRow.ID
                });
            },
    
            onAddToCartPress: function (oEvent) {
                var oSelectedItem = oEvent.getSource().getBindingContext("yourModelName").getObject();
                var oCartModel = this.getOwnerComponent().getModel("cartModel");
    
                // Add the selected product to the cart
                var aItems = oCartModel.getProperty("/items");
                aItems.push(oSelectedItem);
                oCartModel.setProperty("/items", aItems);
            },
    
            onNav: function () {
                this.getOwnerComponent().getRouter().navTo("RouteView2");
            },
            onMyCart:function(){
                this.getOwnerComponent().getRouter().navTo("RouteView3")
              }
        });
    });