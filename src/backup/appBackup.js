
import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Example from "./components/bootstrap_modal"

import axios from "axios"
import { io } from "socket.io-client"
import './App.css';
// import { useLocalStorage } from "react-use-storage";

const socket = io.connect("http://localhost:4000")

const demos = {
  htmlPage:
    '<iframe width="100%" height="100%" scrolling="no" frameborder="no" allow="autoplay" src="http://localhost/BRwEB/Data.html"></iframe>'

};
function App() {
  const [showModal, setShowModal] = useState(false)
  const [ch, setCh] = useState(-1);
  const[count,setCount]=useState(0)
  const [zoom,setZoom]=useState(1);
  const [GD, setGD] = useState([])
  const dataGather = (data1) => {
    setGD(GD => [data1, ...GD])




  }
  const handleChannelId = () => {
    axios.get("http://localhost:3000/getChannelId").then((res) => {
      const getCh = res.data.chan
      setCh(getCh);
    }).catch((err) => {
      console.log(err.response)
    })
  }
  useEffect(() => {



    socket.on('wave', (data1) => {

      // console.log("count"+count);
      if (count<1) {
        setShowModal(true);
        setCount(count+1);
        handleChannelId()

      }


      dataGather(data1*zoom);
    })

  }, [count]);
  const handleZoom=()=>{


  }



  const hideModal = () => {
    // console.log("hello g")
    setCount(0)

    axios.get("http://localhost:3000/closeclient").then((response) => {
      console.log(response)
      setShowModal(false)
    
      setGD([])

    }).catch((err) => {
      console.log(err)

    })

  }

  return (
    <div className="App">

      <Iframe iframe={demos["htmlPage"]} allow="autoplay" className="ifr1" sandbox="allow-scripts" onChange={() => { console.log("changing") }} />



      {showModal == true ? <Example showModal={showModal} hideModal={hideModal} GD={GD} ch={ch} /> : <></>}
    </div>
  );
}
function Iframe(props) {
  return (
    <div className="ifram"
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
}
export default App;
