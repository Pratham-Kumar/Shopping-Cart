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
            stockStatusColor: function(quantity) {
                return quantity > 0 ? "Success" : "Error";
            },
            onProductSelect: function(oEvent) {
            //     var oSelectedItem = oEvent.getParameter("listItem");
            //     var oBindingContext = oSelectedItem.getBindingContext("yourModelName");
          
            //     this.getView().byId("navContainer").to("detailPage", {
            //       selectedProduct: oBindingContext.getObject()
            //     });
            //   },
          
            //   onBackPress: function() {
            //     var oNavContainer = this.getView().byId("navContainer");
            //     oNavContainer.back();
            this.getOwnerComponent().getRouter().nav2
              },
        });
    });
