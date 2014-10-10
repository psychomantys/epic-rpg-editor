"use strict";

require.config({
	"baseUrl": ".",
	"paths": {
		'jquery': 'thirdparty/jquery',
		'Handlebars': 'thirdparty/handlebars',
		'bootstrap': 'thirdparty/bootstrap/dist/js/bootstrap.min',
		'yaap': 'thirdparty/yaap/yaap/yaap',
		'Backbone': 'thirdparty/backbone',
		'underscore': 'thirdparty/underscore',
		'Templates': 'js/epic-rpg-editor/templates',
		'DeT3EA': 'js/DeT3EA/DeT3EA'
	},
	shim: {
		'jquery': {
			exports: '$'
		},
		'Handlebars': {
			exports: 'Handlebars'
		},
		'Backbone': {
			exports: 'Backbone',
			deps: ['jquery','underscore']
		},
		'bootstrap': {
			deps: ['jquery']
		},
		'underscore': {
			exports: '_'
		}
	}
});


require(['Backbone', 'jquery', 'DeT3EA', 'Templates', 'bootstrap'],
function(Backbone, $, DeT3EA, Templates ) {
	var player = new DeT3EA();
	var t = new Templates('templates/DeT3EA');

	global_ns.pericia_edit=function(n){
		alert(player.pericias[n].nome);
	};
	global_ns.vantagem_edit=function(n){
		alert(player.vantagens[n].nome);
	};
	global_ns.desvantagem_edit=function(n){
		alert(player.desvantagens[n].nome);
	};

	function reprint_template( nome , data ){
		$(".main-view").html( t.render( nome, data) );
	}

	$( document ).ready( function() {
		$("a[href='"+window.location.hash.substr(1)+"']").addClass("active");

		var AppRouter = Backbone.Router.extend({
			routes: {
				"info": "render_info",
				"vantagens": "render_vantagens",
				"desvantagens": "render_desvantagens",
				"pericias": "render_pericias",
				"save": "render_save",
				"load": "render_load",
				"*actions": "render_info" // matches http://example.com/#anything-here
			}
		});
		// Initiate the router
		var app_router = new AppRouter();

		app_router.on('route:render_info', function(actions) {
			$("li.active").removeClass("active");
			$("a[href='#/info']").parent().addClass("active");
			reprint_template("info",player.stats);
		});
		app_router.on('route:render_vantagens', function(actions) {
			$("li.active").removeClass("active");
			$("a[href='#/vantagens']").parent().addClass("active");
			reprint_template("vantagens",player.vantagens);
		});
		app_router.on('route:render_desvantagens', function(actions) {
			$("li.active").removeClass("active");
			$("a[href='#/desvantagens']").parent().addClass("active");
			reprint_template("desvantagens",player.desvantagens);
		});
		app_router.on('route:render_pericias', function(actions) {
			$("li.active").removeClass("active");
			$("a[href='#/pericias']").parent().addClass("active");
			reprint_template("pericias",player.pericias);
		});
		app_router.on('route:render_save', function(actions) {
			$("li.active").removeClass("active");
			$("a[href='#/save']").parent().addClass("active");
			reprint_template("save",undefined);
		});
		app_router.on('route:render_load', function(actions) {
			$("li.active").removeClass("active");
			$("a[href='#/load']").parent().addClass("active");
			reprint_template("load",undefined);
		});

		// Start Backbone history a necessary step for bookmarkable URL's
		Backbone.history.start();
	});
});

