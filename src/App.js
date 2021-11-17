import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Example from "./components/bootstrap_modal"
import { io } from "socket.io-client"
import './App.css';
const demos = {
  htmlPage:
    '<iframe width="100%" height="100%" scrolling="no" frameborder="no" allow="autoplay" src="http://192.168.70.8/BRwEB/Data.html"></iframe>'

};
const socket = io.connect("http://192.168.70.8:4000")
function App() {
  const [showModal, setShowModal] = useState(false)

  const [count, setCount] = useState(0)

  const [GD, setGD] = useState([])
  const [err, setErr] = useState(false)
  const dataGather = (data1) => {
    var len = GD.length;

    if (len > 50) {
      var array = GD; // make a separate copy of the array

      var index = array.indexOf(len);
      array.splice(index, 1);
      
      setGD(array);


    } else {
      setGD(GD => [data1, ...GD])
    }

  }

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected Successfully");
    });


    socket.on('wave', (data1) => {

      setErr(true)
      //i  want to run this part only one time so i used count here
      if (count < 1) {
        setCount(1)
        setShowModal(true);
      }
     if(showModal==true) {
        dataGather(data1);
     }

    })



  }, []);
  const handleGD=()=>{
setGD([]);
  }
  const hideModal = async () => {
    // socket.disconnect();
    await setGD([])
    await setCount(0);
    await setShowModal(false)
    // console.log(showModal)


  }

  return (
    <div className="App">
      <Iframe iframe={demos["htmlPage"]} allow="autoplay" className="ifr1" sandbox="allow-scripts" />
      {showModal == true ? <Example hideModal={hideModal} handleGD={handleGD}  GD={GD} showModal={showModal} /> : <></>}


    </div>

  );
}
//using iframe to show html page.
function Iframe(props) {
  return (
    <div className="ifram"
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
}
export default App;
