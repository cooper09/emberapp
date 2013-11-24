App = Ember.Application.create();

document.write("my placeholder element");

App.Router.map(function() {
  this.resource('about');
  this.resource('posts');
});

//


/* Store */
App.ApplicationAdapter = DS.FixtureAdapter;

/* Model */

App.Post = DS.Model.extend({
  name         : DS.attr(),
  email        : DS.attr(),
  bio          : DS.attr(),
  avatarUrl    : DS.attr(),
  creationDate : DS.attr()
});

App.Post.FIXTURES = [{
  id: 1,
  name: 'Sponge Bob',
  email: 'bob@sponge.com',
  bio: 'Lorem ispum dolor sit amet in voluptate fugiat nulla pariatur.',
  avatarUrl: 'http://jkneb.github.io/ember-crud/assets/images/avatars/sb.jpg',
  creationDate: 'Mon, 26 Aug 2013 20:23:43 GMT'
}, {
  id: 2,
  name: 'John David',
  email: 'john@david.com',
  bio: 'Lorem ispum dolor sit amet in voluptate fugiat nulla pariatur.',
  avatarUrl: 'http://jkneb.github.io/ember-crud/assets/images/avatars/jk.jpg',
  creationDate: 'Fri, 07 Aug 2013 10:10:10 GMT'
}

];


App.Post.reopenClass ({

	remote: function() {
			return $.getJSON("http://api.ihackernews.com/page?format=jsonp&callback=?").then(function(response) {
		        var items = [];
		 
		        response.items.forEach( function (item) {
		        	console.log(item);
		       //   items.push( App.Post.create(item) );
		        });
		 
		         return items;
		      });
		}
	});

App.Post.reopenClass ({

	local: function() {
		// return local data here

		return "local data..";
	}

});

App.IndexRoute = Ember.Route.extend({ 
	model: function() {
		return App.Post.local();
	}
});

App.PostsRoute = Ember.Route.extend({
  model: function(){
    //return this.store.find('title');
  }

/*App.PostsRoute = Ember.Route.extend ({
	model: function() {
		document.write("my model: " + App.Post.local() );
		//return App.Post.remote();
		return App.Post.local();
	}
	*/
}); 