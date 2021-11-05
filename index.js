require('dotenv').config();
const express = require("express");
var closeFlag=false;
const PORT = process.env.SERVER_PORT; //|| 3000;

const bodyParser = require("body-parser");
const app = express();
const serverTCP = require('http').createServer(app)
const tcpsock = require("socket.io")(serverTCP)

var ini = require('ini');
const fs = require('fs');
const configPath = process.env.ConfigPath;
var configuration = ini.parse(fs.readFileSync(configPath, 'utf-8'));

serverTCP.listen(4000, '0.0.0.0', () => {
  console.log(`Server is active on port`);
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

var cors = require('cors');
const { Console } = require("console");

// use it before all route definitions
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
const readIni = () => {
  console.log(configuration.fsetting.fmin);
}
app.post("/updateFSettingIni", (req, res) => {
  console.log('Updating FSetting', req.body);
  console.log("fmin = " + req.body.fmin);
  console.log("fmax = " + req.body.fmax)
  updateFSettingIni(req.body.fmin, req.body.fmax)
  res.json({ message: "FSetting is updated" });
});
const updateFSettingIni = (fmin_value, fmax_value) => {
  configuration.fsetting.fmin = fmin_value;
  configuration.fsetting.fmax = fmax_value;
  console.log("hello" + configPath)

  fs.writeFileSync(configPath, ini.stringify(configuration))

}
app.post("/updateSpikeSelectionIni", (req, res) => {
  console.log('SpikeSelection');
  console.log("nodes = " + req.body.nodes)
  updateSpikeSelectionIni(req.body.nodes)
  res.json({ message: "FSetting is updated" });
});
const updateSpikeSelectionIni = (nodes) => {
  console.log(nodes)
  configuration.spikeselection.nodes = nodes;
  fs.writeFileSync(configPath, ini.stringify(configuration))
}
var wave = [];
//  var client=null;
var dgram = require('dgram');
var client = null;
var UDP_PORT = process.env.UDP_PORT;
var UDP_HOST = process.env.UDP_HOST;
var counter=0;
app.post("/getchanneldata", (req, res) => {
  closeFlag=false;
  console.log(req.body);
  
  console.log('Hi');
  var message = (req.body.val).toString()
  console.log(message);

  client = dgram.createSocket({ type: 'udp4', reuseAddr: true });
  client.bind(UDP_PORT);
  client.on('listening', () => {

    const address = client.address();

    console.log(`server listening ${address.address}:${address.port}`);
  });
  
    client.on('message', function (message1, remote) {

      var arr = message1.toString().split(',');
      console.log("message: "+message1);
      //console.log(remote.address);
      console.log(arr);
      tcpsock.emit("wave", arr);
      wave.push(arr);
      if (wave.length === 500) {
        console.log("Data Removed");
        wave = [];
      }
      if(message1!=="" && closeFlag==false)
      {

        client.send(message, 0, message.length, UDP_PORT, UDP_HOST, function (err, bytes) {
        
          if (err) throw err;
          counter++
          console.log(message);
          console.log('UDP client message sent to ' + UDP_HOST + ':' + UDP_PORT);

          // message="";
          console.log("counter :"+counter);
        });
       
      }
      
    });

    client.send(message, 0, message.length, UDP_PORT, UDP_HOST, function (err, bytes) {
      if (err) throw err;
      console.log(message);
      console.log('UDP client message sent to ' + UDP_HOST + ':' + UDP_PORT);
      // message="";
    });
    

    client.on('disconnect', (msg) => {
      client.Diconnected()
      client.log(client.client)


    })
  }
);

app.get("/getdata", (req, res) => {
  res.json(wave);
  wave = [];
});


app.get("/closeclient", (req, res) => {
  
  console.log('closed');

  var message = '-1';
  closeFlag=true;
  client.send(message, 0, message.length, UDP_PORT, UDP_HOST, function (err, bytes) {
    if (err) throw err;
    console.log('UDP client message sent to ' + UDP_HOST + ':' + UDP_PORT);
    res.json({ message: 'closed' });
  });
  wave = [];
  client.close();

});