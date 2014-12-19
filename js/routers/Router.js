;
(function(window, undefined) {

    window.app = window.app || {};

    var Router = Backbone.Router.extend({
        routes: {
            "Resume": "Resume",
            "About": "About",
            "Projects": "Projects",
            "Contact": "Contact",
            "*default": "Home"
        },
        Home: function() {
            console.log("router-home");
            $("body").get(0).scrollIntoView();
            window.scrollBy(0,-50);
        },
        Resume: function() {
            console.log("resume");
            $("#resume").get(0).scrollIntoView();
            window.scrollBy(0,-50);
        },
        About: function() {
            console.log("about");
            $("#about").get(0).scrollIntoView();
            window.scrollBy(0,-50);
        },
        Projects: function() {
            console.log("projects");
            $("#projects").get(0).scrollIntoView();
            window.scrollBy(0,-50);
        },
        Contact: function() {
            console.log("contact me");
            $("#contact").get(0).scrollIntoView();
        },
        initialize: function() {
            // app view
            this.AppView = new app.AppView();
            console.log("router initialize");

            Backbone.history.start();
        }
    });

    app.Router = new Router();

})(window, undefined);
