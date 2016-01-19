Meteor.startup(function(){
  var itemsCount = Items.find().count();
  Meteor.call("getCGSpaceItems", {limit: 100, offset: itemsCount}, function(error, results) {
    if((results.data.length)){
      _.each(results.data, function(item){
        Items.insert({
          itemId: item.id,
          handle: "http://hdl.handle.net/" + item.handle,
          title: item.name,
          lastModified: item.lastModified,
          tweeted: false,
          createdDate: new Date()
        });
      });
    }
  });

});
