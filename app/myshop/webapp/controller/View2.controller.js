sap.ui.define(
  [
      "sap/ui/core/mvc/Controller",
      "sap/ui/core/UIComponent",
      "sap/m/MessageToast"
  ],
  function (BaseController, UIComponent,MessageToast) {
      "use strict";

      return BaseController.extend("com.sap.myshop.controller.View2", {
          onInit: function () {
              let oRouter = UIComponent.getRouterFor(this);
              oRouter.getRoute("RouteView2").attachPatternMatched(this._getMatchedRoute, this);
          },

          _getMatchedRoute: function (e) {
              let ID = e.getParameters().arguments.ID;
              let sPath = `/Products(${ID})`;
              this.getView().bindElement(sPath);
          },

          onAddCart: function () {
              // Get the selected product
              var oProduct = this.getView().getBindingContext().getObject();

              // Get the shopping cart model
              var oCartModel = this.getOwnerComponent().getModel("cartModel");

              // Add the selected product to the cart
              var aItems = oCartModel.getProperty("/items");
              aItems.push(oProduct);
              oCartModel.setProperty("/items", aItems);
              MessageToast.show("Item Added Successfully")
          },
          onMyCart:function(){
            this.getOwnerComponent().getRouter().navTo("RouteView3")
          }
      });
  }
);
