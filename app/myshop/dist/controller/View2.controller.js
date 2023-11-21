sap.ui.define(["sap/ui/core/mvc/Controller","sap/ui/core/UIComponent","sap/m/MessageToast"],function(t,e,o){"use strict";return t.extend("com.sap.myshop.controller.View2",{onInit:function(){let t=e.getRouterFor(this);t.getRoute("RouteView2").attachPatternMatched(this._getMatchedRoute,this)},_getMatchedRoute:function(t){let e=t.getParameters().arguments.ID;let o=`/Products(${e})`;this.getView().bindElement(o)},onAddCart:function(){var t=this.getView().getBindingContext().getObject();var e=this.getOwnerComponent().getModel("cartModel");var n=e.getProperty("/items");n.push(t);e.setProperty("/items",n);this._updateTotalAmount();var r=e.getProperty("/totalAmount");o.show(`Item Added Successfully\nTotal Amount: ₹ ${r}`)},onMyCart:function(){this.getOwnerComponent().getRouter().navTo("RouteView3")},_updateTotalAmount:function(){var t=this.getOwnerComponent().getModel("cartModel");var e=t.getProperty("/items");var o=0;e.forEach(function(t){o+=parseInt(t.price)});t.setProperty("/totalAmount",o)}})});