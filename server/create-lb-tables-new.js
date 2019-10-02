var server = require('./server');
var ds = server.dataSources.db;
var lbTables = ["user", "contact","message"];
//,
  // "news",
  // "event", 
  // "service", 
  // "role", 
  // "news_tag",
  // "tag",
  // "registry",
  // "file1"

ds.automigrate(lbTables, function(er) {
  if (er) throw er;
  console.log('Loopback tables [' - lbTables - '] created in ', ds.adapter.name);
  ds.disconnect();
});