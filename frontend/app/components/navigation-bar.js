import Ember from 'ember';

export default Ember.Component.extend({
	expanded: false,
	class: Ember.computed(function() {
		var css = this.get("expanded")? "nav-bar-to" : "nav-bar-top";
		return css;
	}).property("expanded"),
	actions: {
		click: function() {
			var router = this.get('container').lookup('router:main');
			if (router.currentPath === "publications") {
				this.set("expanded", !this.get("expanded"));
			}
			else {
				router.transitionTo('publications');
			}
		}
	}
});
