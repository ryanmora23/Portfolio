;
(function(window, undefined) {
    "use strict";
    window.app = window.app || {};
    var AppView = Backbone.View.extend({
        el: 'body',
        initialize: function() {
            this.render();
        },
        render: function() {
            console.log("appview-render");
        }
    });
    app.AppView = AppView;
})(window, undefined);