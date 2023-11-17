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
               
                debugger;
                let selectedRow=oEvent.getParameters().listItem.getBindingContext().getObject()
                this.getOwnerComponent().getRouter().navTo("RouteView2",{
                    "ID":selectedRow.ID
                })
            },
            onNav : function(){
                this.getOwnerComponent().getRouter().navTo("RouteView2");
            },
        });
    });