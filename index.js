var zetta = require('zetta');
var topic1 = require('./topic-driver')('topic1')
var topic2 = require('./topic-driver')('topic2')
var topic3 = require('./topic-driver')('topic3')
var topic4 = require('./topic-driver')('topic4')
var topic5 = require('./topic-driver')('topic5')
var topic6 = require('./topic-driver')('topic6')

zetta()
  .name('Topicserver')
  .use(topic1)
  .use(topic2)
  .use(topic3)
  .use(topic4)
  .use(topic5)
  .use(topic6)    
  .listen(1337, function(){
     console.log('Zetta is running at http://127.0.0.1:1337');
});
