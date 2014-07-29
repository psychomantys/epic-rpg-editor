
require.config({
	"baseUrl": ".",
	"paths": {
		"jquery": "thirdparty/jquery",
		"Handlebars": "thirdparty/handlebars",
		"bootstrap": "thirdparty/bootstrap/dist/js/bootstrap.min",
		"yaap": "thirdparty/yaap/yaap/yaap",
		"Backbone": "thirdparty/backbone",
		'underscore': 'thirdparty/underscore'
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
		underscore: {
			exports: '_'
		}
	}
});


require(['Handlebars', 'Backbone', 'jquery', "js/DeT3EA/DeT3EA", "bootstrap"],
function( Handlebars, Backbone, $, DeT3EA ) {
	function render(tmpl_name, tmpl_data) {
		if ( !render.tmpl_cache ) { 
			render.tmpl_cache = {};
		}

		if ( ! render.tmpl_cache[tmpl_name] ) {
			var tmpl_dir = 'templates/DeT3EA';
			var tmpl_url = tmpl_dir + '/' + tmpl_name + '.html';

			var tmpl_string;
			$.ajax({
				url: tmpl_url,
				method: 'GET',
				async: false,
				dataType: 'html',
				success: function(data) {
					tmpl_string = data;
				}
			});

			render.tmpl_cache[tmpl_name] = Handlebars.compile(tmpl_string);
		}

		return render.tmpl_cache[tmpl_name](tmpl_data);
	}
	function reprint_template( nome , data ){
		$(".main-view").html( render( nome, data) );
	};




	var player = new DeT3EA();

	$( document ).ready( function() {
		$("a[href='"+window.location.hash.substr(1)+"']").addClass("active");


		var AppRouter = Backbone.Router.extend({
			routes: {
				"info": "render_info",
				"vantagens": "render_vantagens",
				"desvantagens": "render_desvantagens",
				"pericias": "render_pericias",
				"*actions": "render_info" // matches http://example.com/#anything-here
			}
		});
		// Initiate the router
		var app_router = new AppRouter;

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

		// Start Backbone history a necessary step for bookmarkable URL's
		Backbone.history.start();
	});
});

