sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent"
  ],
  function (BaseController, UIComponent) {
    "use strict";
 
    return BaseController.extend("com.sap.myshop.controller.View2", {
      onInit: function () {
        let oRouter = UIComponent.getRouterFor(this);
        oRouter.getRoute("RouteView2").attachPatternMatched(this._getMatchedRoute, this);
 
 
      },
      _getMatchedRoute: function (e) {
        debugger;
        let ID = e.getParameters().arguments.ID;
 
        let sPath = `/Products(${ID})`;
        this.getView().bindElement(sPath);
     
      },
      onAddCart : function(){
       
      }
    });
  }
);