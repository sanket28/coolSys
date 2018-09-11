function deptest(req, resp) {
	log(JSON.stringify(req));
  ClearBlade.init(req);
	updateDeployment(req, resp);
}

function updateDeployment(req, resp) {
  var deployment = ClearBlade.Deployment();deployment.update("test", {"edges": {"add": ["cool1"]}}, function(err, data){
    if (err) { 
			log("error " + JSON.stringify(data));
      resp.error("Error updating deployment: " + JSON.stringify(data)); 
    } else { 
			log("Success " + JSON.stringify(data));
      resp.success('Success'); 
    }
});
}
