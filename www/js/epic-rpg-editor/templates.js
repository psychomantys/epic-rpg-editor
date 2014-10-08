"use strict";

define(['Handlebars', 'jquery'],
function( Handlebars, $ ) {
	return function templates( tmpl_dir ) {

		this.tmpl_dir = tmpl_dir;

		this.render=function(tmpl_name, tmpl_data) {
			if ( !this.tmpl_cache ) { 
				this.tmpl_cache = {};
			}

			if ( ! this.tmpl_cache[tmpl_name] ) {
				var tmpl_url = this.tmpl_dir + '/' + tmpl_name + '.html';

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

				this.tmpl_cache[tmpl_name] = Handlebars.compile(tmpl_string);
			}
			return this.tmpl_cache[tmpl_name](tmpl_data);
		};
	};
});


