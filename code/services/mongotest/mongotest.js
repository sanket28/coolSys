function mongotest(req, resp) {
  ClearBlade.init({request:req});
  addCollectionData(req, resp);
}

function addCollectionData(req, resp) {
  var collection = ClearBlade.Collection({collectionName: "mongotest"});
  var obj = {
    truth: false,
    cool: 1
  };
  collection.create(obj, function(err, data) {
    if(err) {
      resp.error("Error " + JSON.stringify(data));
    } else {
      resp.success("Success " + JSON.stringify(data));
    }
  });
}