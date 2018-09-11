function mongodelete(req, resp) {
    ClearBlade.init({request:req});
    deleteCollectionData(req, resp);
}

function deleteCollectionData(req, resp) {
  var collection = ClearBlade.Collection({collectionName: "mongotest"});
  var q = ClearBlade.Query();
  q.equalTo("truth", true);
  collection.remove(q, function(err, data) {
    if(err) {
      resp.error("Error " + JSON.stringify(data));
    } else {
      resp.success("Success " + JSON.stringify(data));
    }
  });
}