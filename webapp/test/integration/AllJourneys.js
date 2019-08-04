sap.ui.define([
	"sap/ui/test/Opa5",
	"com/myorg/o4/test/integration/arrangements/Startup",
	"com/myorg/o4/test/integration/BasicJourney"
], function(Opa5, Startup) {
	"use strict";

	Opa5.extendConfig({
		arrangements: new Startup(),
		pollingInterval: 1
	});

});
