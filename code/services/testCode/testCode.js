function testCode(req, resp) {
  var cool = ClearBlade.edgeId()
  resp.success('Success ' + cool);
}
