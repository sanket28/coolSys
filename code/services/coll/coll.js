function coll(req, resp) {
  ClearBlade.init({
			systemKey: req.systemKey,
			systemSecret: req.systemSecret,
			email: "test@test.com",
			password: "test",
			callback: function(err, body) {
				if(err) {
					resp.error("initialization error " + JSON.stringify(body));
				} else {
					addCollectionData(req, resp);
				}
			}
		});
}

function addCollectionData(req, resp) {
  var collection = ClearBlade.Collection({collectionName: "test"});
  var obj = {
    "name": "yolo"
  };
  collection.create(obj, function(err, data) {
    if(err) {
      resp.error("Error " + JSON.stringify(data));
    } else {
      resp.success("Success " + JSON.stringify(data));
    }
  });
}
