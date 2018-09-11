function mongofetchgreaterthan(req, resp) {
    ClearBlade.init({request:req});
    fetchCollectionData(req, resp);
}

function fetchCollectionData(req, resp) {
  var collection = ClearBlade.Collection({collectionName: "mongotest"});
  var q = ClearBlade.Query();
  q.greaterThan("x", 1);
  collection.fetch(q, function(err, data) {
    if(err) {
      resp.error("Error " + JSON.stringify(data));
    } else {
      log(JSON.stringify(data));
      resp.success("Yo");
    }
  });
}
