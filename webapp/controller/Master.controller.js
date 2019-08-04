sap.ui.define([
    "com/myorg/o4/controller/BaseController"
  ], function(BaseController) {
    "use strict";
  
    return BaseController.extend("com.myorg.o4.controller.Master", {
        onListItemPressed : function(oEvent){
			var oItem, oCtx;
			oItem = oEvent.getSource();
			oCtx = oItem.getBindingContext();
			this.getRouter().navTo("bookdetail",{
				bookId : oCtx.getProperty("ID")
			});
		}
    });
  });
  