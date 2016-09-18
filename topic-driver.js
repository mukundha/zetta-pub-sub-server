var util = require('util');
var Device = require('zetta-device');

module.exports = function(topic) {      
  var TOPIC = function(led) {    
    this.message = topic;     
    Device.call(this);
  }

  util.inherits(TOPIC, Device);

  TOPIC.prototype.init = function(config) {
    config
      .type(topic)
      .name('topic')
      .state('active')      
      .when('active', {allow:['publish']})  
      .map('publish', this.publish, [{name:'event',type:'text'}])      
      .monitor(this.message)  
  }

  TOPIC.prototype.publish = function(text,cb) {
    this.message = text;
    cb();
  }

  return TOPIC
}
