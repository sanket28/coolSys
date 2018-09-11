function mongofetch(req, resp) {
    ClearBlade.init({request:req});
    fetchCollectionData(req, resp);
}

function fetchCollectionData(req, resp) {
  var collection = ClearBlade.Collection({collectionName: "mongotest"});
  collection.fetch(function(err, data) {
    if(err) {
      resp.error("Error " + JSON.stringify(data));
    } else {
      log(JSON.stringify(data));
       var q = ClearBlade.Query();
        q.equalTo("truth", false);
        collection.fetch(q, function (err, data) {
          if(err) {
            resp.error("Error " + JSON.stringify(data));
          } else {
            log(JSON.stringify(data));
            resp.success("Cool");
          }
        });
    }
  });
}