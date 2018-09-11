function mongoCreateAsync(req, resp) {
  ClearBlade.init({request:req});
  addCollectionData(req, resp);
}

function addCollectionData(req, resp) {
  var collection = ClearBlade.Collection({collectionName: "mongotest"});
  var obj = {
    yo: "We're good!",
    cool: 1.11
  };
  collection.createAsync(obj);
  resp.success("Done!");
}