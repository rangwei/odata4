sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/core/UIComponent"
], function(Controller, UIComponent) {
  "use strict";

  return Controller.extend("com.myorg.o4.controller.MainView", {
    onNavToBooks: function() {
        var router = UIComponent.getRouterFor(this);
        router.navTo("booklist");
    }
  });
});
