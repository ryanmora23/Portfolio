
window.onload = app;
// runs when the DOM is loaded
function app(){
    "use strict";
    // load some scripts (uses promises :D)
    loader.load(
        {url: "./bower_components/jquery/dist/jquery.min.js"},
        {url: "./bower_components/lodash/dist/lodash.min.js"},
        {url: "./bower_components/backbone/backbone.js"},
        {url: "./dist/style.css"},
        //views
        {url: "./js/views/AppView.js"},
        //router
        {url: "./js/routers/Router.js"}
    ).then(function(){
        _.templateSettings.interpolate = /{([\s\S]+?)}/g;
        document.body.style.opacity = 1;
        // start app?
    });
}
    
