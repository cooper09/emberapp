App = Ember.Application.create();

App.Router.map(function() {
  this.resource('about');
  this.resource('posts');
});

App.PostsRoute = Ember.Route.extend ({
	model: function() {
		return App.Post.find();
	}
});

App.Store = DS.Store.extend ({
	revision: 12,
	adapter: 'DS.FIXTURES'
});

App.Post = DS.Model.extend ({
  title: 	DS.attr('string'),
  auther: 	DS.attr('string'),
  intro:    DS.attr('string'),
  extended: DS.attr('string'),
  publishedAt: DS.attr('date')  
});

App.Post.FIXTURES = [{
	id: 1,
	title: "Tales of the Bizarre",
	author: "The Kid",
	publishedAt: new Date('11-19-2013'),
	intro: "These are the Times to Try Men's Souls!!",
	extended: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat"
}, {
	id: 2,
	title: "Great Minds Think Alike",
	author: "The Kid",
	publishedAt: new Date('11-19-2013'),
	intro: "This is the Bomb!!",
	extended: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat"

}]