function mongoupdate(req, resp) {
    ClearBlade.init({request:req});
    updateCollectionData(req, resp);
}

function updateCollectionData(req, resp) {
  var collection = ClearBlade.Collection({collectionName: "mongotest"});
  var q = ClearBlade.Query();
  q.equalTo("truth", false);
  var obj = {
    truth: true,
    cool: 12345
  };
  collection.update(q, obj, function(err, data) {
    if(err) {
      resp.error("Error " + JSON.stringify(data));
    } else {
      resp.success("Success " + JSON.stringify(data));
    }
  });
}
