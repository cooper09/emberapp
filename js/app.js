App = Ember.Application.create();

document.write("my placeholder element");

App.Router.map(function() {
  this.resource('about');
  this.resource('posts');
});

//
/* Store */

App.Store = DS.Store.extend({
	revision:12,
	adapter: 'DS.FixtureAdapter',
});

/* Model */

App.Post = DS.Model.extend({
  name         : DS.attr('string'),
  email        : DS.attr('string'),
  bio          : DS.attr('string'),
  avatarUrl    : DS.attr('string'),
  creationDate : DS.attr('date')
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
		          items.push( App.Post.createRecord(item) );
		        });
		 
		         return items;
		      });
		}
	});

App.Post.reopenClass ({

	local: function() {
		// return local data here

		var	dataArr = [{
			      name: "Tommy J",
			      email: "thomasjefferson@gmail.com"
			    }, {
			       name: "Georgie W",
			      email: "georgewashington@gmail.com"
			    }];

		return dataArr;
	}

});

App.PostsRoute = Ember.Route.extend({
  
  model: function(){
   	//return this.store.find('post');

    myArr = App.Post.local();

    //myArr = App.Post.remote();

    //myArr = App.Post.find();

    //myArr = this.store.find('#/posts');

    return myArr;
	}

});

