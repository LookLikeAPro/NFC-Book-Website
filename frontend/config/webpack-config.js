var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var StatsPlugin = require("stats-webpack-plugin");
var loadersByExtension = require("./loadersByExtension");
var autoprefixer = require("autoprefixer");

module.exports = function(options) {
	//=====================ENTRY======================

	var entry = [
		"./index"
	];

	//=====================LOADERS======================
	var babel = "babel?presets[]=react&presets[]=es2015&presets[]=stage-0&plugins[]=syntax-decorators&plugins[]=transform-decorators&plugins[]=transform-decorators-legacy";
	var loaders = {
		json: "json-loader",
		coffee: "coffee-redux-loader",
		json5: "json5-loader",
		txt: "raw-loader",
		"png|jpg|jpeg|gif|svg": "url-loader?limit=10000",
		"woff|woff2": "url-loader?limit=100000",
		"ttf|eot": "file-loader",
		"wav|mp3": "file-loader",
		html: "html-loader",
		"md|markdown": ["html-loader", "markdown-loader"]
	};
	loaders = loadersByExtension(loaders);
	loaders.push([{
		extensions: [ "jsx" ],
		test: /\.(jsx)(\?.*)?$/,
		loader: "babel",
		query: {
			cacheDirectory: true,
			plugins: ["transform-decorators-legacy"],
			presets: ["es2015", "stage-0", "react"]
		}
	}, {
		extensions: [ "js" ],
		test: /\.(js)(\?.*)?$/,
		loader: "babel",
		include: path.join(__dirname, ".."),
		query: {
			cacheDirectory: true,
			plugins: ["transform-decorators-legacy"],
			presets: ["es2015", "stage-0", "react"]
		}
	}]);
	//CSS Modules
	var cssLoader = options.minimize ? "css-loader?module!postcss-loader" : "css-loader?module&localIdentName=[path][name]---[local]---[hash:base64:5]!postcss-loader";
	//Traditional CSS
	// var cssLoader = "css-loader!autoprefixer-loader";
	var stylesheetLoaders = {
		css: cssLoader,
		less: [cssLoader, "less-loader"],
		styl: [cssLoader, "stylus-loader"],
		"scss|sass": [cssLoader, "sass-loader"]
	};
	Object.keys(stylesheetLoaders).forEach(function(ext) {
		var stylesheetLoader = stylesheetLoaders[ext];
		if (Array.isArray(stylesheetLoader)) stylesheetLoader = stylesheetLoader.join("!");
		if (options.prerender) {
			stylesheetLoaders[ext] = stylesheetLoader.replace(/^css-loader/, "css-loader/locals");
		}
		else if (options.separateStylesheet) {
			stylesheetLoaders[ext] = ExtractTextPlugin.extract("style-loader", stylesheetLoader);
		}
		else {
			stylesheetLoaders[ext] = "style-loader!" + stylesheetLoader;
		}
	});
	var additionalLoaders = [
		// { test: /some-reg-exp$/, loader: "any-loader" }
	];
	var alias = {

	};
	var aliasLoader = {

	};
	var externals = [

	];
	//=====================PATHS======================
	var modulesDirectories = ["web_modules", "node_modules"];
	var extensions = ["", ".web.js", ".js", ".jsx"];
	var root = path.join(__dirname, "..");
	var publicPath = options.devServer ?
		"http://localhost:2992/static/" :
		"/static/client/";
	var output = {
		path: path.join(__dirname, "../build", options.prerender ? "prerender" : "client"),
		publicPath: publicPath,
		filename: "[name].js" + (options.longTermCaching && !options.prerender ? "?[chunkhash]" : ""),
		chunkFilename: (options.devServer ? "[id].js" : "[name].js") + (options.longTermCaching && !options.prerender ? "?[chunkhash]" : ""),
		sourceMapFilename: "debugging/[file].map",
		libraryTarget: options.prerender ? "commonjs2" : undefined,
		pathinfo: options.debug || options.prerender
	};
	//=====================PLUGINS======================
	var plugins = [
		new webpack.PrefetchPlugin("react"),
		new webpack.ProvidePlugin({
			// fetch: "imports?this=>global!exports?global.fetch!whatwg-fetch"
			fetch: "imports?this=>global!exports?global.fetch!isomorphic-fetch"
		})
	];

	if (options.commonsChunk) {
		plugins.push(new webpack.optimize.CommonsChunkPlugin("commons", "commons.js" + (options.longTermCaching && !options.prerender ? "?[chunkhash]" : "")));
	}
	var asyncLoader = {
		test: require("../containers/async").map(function(name) {
			return path.join(__dirname, "..", "containers", name);
		}),
		loader: options.prerender ? "react-proxy/unavailable" : "react-proxy"
	};
	if (options.separateStylesheet && !options.prerender) {
		plugins.push(new ExtractTextPlugin("[name].css" + (options.longTermCaching ? "?[contenthash]" : "")));
	}
	if (options.minimize && !options.prerender) {
		plugins.push(
			new webpack.optimize.UglifyJsPlugin({compressor: {warnings: false}}),
			new webpack.optimize.DedupePlugin()
		);
	}
	if (options.minimize) {
		plugins.push(
			new webpack.DefinePlugin({"process.env": {NODE_ENV: JSON.stringify("production")}}),
			new webpack.NoErrorsPlugin()
		);
	}
	//=====================STATS======================
	var excludeFromStats = [
		/node_modules[\\\/]react(-router)?[\\\/]/
	];
	if (options.prerender) {
		plugins.push(new StatsPlugin(path.join("../prerender", "stats.json"), {
			chunkModules: true,
			exclude: excludeFromStats
		}));
		aliasLoader["react-proxy$"] = "react-proxy/unavailable";
		aliasLoader["react-proxy-loader$"] = "react-proxy-loader/unavailable";
		externals.push(
			/^react(\/.*)?$/,
			"async"
		);
		plugins.push(new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }));
	}
	else {
		plugins.push(new StatsPlugin(path.join("../client", "stats.json"), {
			chunkModules: true,
			exclude: excludeFromStats
		}));
	}

	return {
		cache: true,
		entry: entry,
		output: output,
		target: options.prerender ? "node" : "web",
		module: {
			loaders: [asyncLoader].concat(loaders).concat(loadersByExtension(stylesheetLoaders)).concat(additionalLoaders)
		},
		postcss: function() {
			return [autoprefixer];
		},
		devtool: options.devtool,
		debug: options.debug,
		resolveLoader: {
			root: path.join(__dirname, "node_modules"),
			alias: aliasLoader
		},
		externals: externals,
		resolve: {
			root: root,
			modulesDirectories: modulesDirectories,
			extensions: extensions,
			alias: alias
		},
		plugins: plugins,
		devServer: {
			stats: {
				cached: false,
				exclude: excludeFromStats
			}
		}
	};
};
