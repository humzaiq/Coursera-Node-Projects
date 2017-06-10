var express = require('express');
var leaderRouter = express.Router();

leaderRouter.route('/')
.all(function(req,res,next) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      next();
})

.get(function(req,res,next){
    res.end('Will send all the leaderships to you')
})

.post(function(req,res,next){
    res.end('Will add the lead: ' + req.body.name + '  with details: ' + req.body.description);
})

.delete(function(req,res,next) {
    res.end('Deleting all leads');
})

leaderRouter.route('/:leadId')
.all(function(req,res,next){
    res.writehead(200, {'Content-Type' : 'text/plain'});
  next();
})

.get(function(req,res,next){
    res.end('Will send details of the lead: ' + req.params.leadId + ' to you');

})

.put(function(req,res,next){
    res.write('Updating the lead: ' + req.params.leadId + '\n');
    res.end('Will update the lead: ' + req.body.name + ' with details: ' + req.body.description);
  
})
.delete(function(req,res,next){
    res.end('Deleting lead' + req.params.leadId);
});

module.exports = leaderRouter;