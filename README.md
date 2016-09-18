# A Pub-Sub Zetta server

A Simple Zetta server that runs 'topic' modelled as a zetta device. Clients can publish and/or subscribe to topics. Events are delivered in real-time using the end-end Websocket supported by Zetta

#Start

```
git clone https://github.com/mukundha/zetta-pub-sub-server.git

cd zetta-pub-sub-server

npm install

npm start 
```

After this server is started, launch the [Zetta Browser](http://browser.zettajs.io/#/overview?url=http:%2F%2Flocalhost:1337%2F) to view the topics and to publish events/messages to topics

Optionally, you could run this [Sample App](https://github.com/mukundha/zetta-mux-websocket-demoapp) to subscribe to topics from this zetta server

More details on the [Multiplexed Websocket Streams](https://github.com/zettajs/zetta/wiki/Multiplexed-Websocket-Streams) available in [Zetta](https://github.com/zettajs/zetta/wiki)

