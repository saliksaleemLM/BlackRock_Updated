
import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


import Example from "./components/bootstrap_modal"

import axios from "axios"
import { io } from "socket.io-client"
import './App.css';
// import { useLocalStorage } from "react-use-storage";


const demos = {
  htmlPage:
    '<iframe width="100%" height="100%" scrolling="no" frameborder="no" allow="autoplay" src="http://localhost/BRwEB/Data.html"></iframe>'

};
const socket = io.connect("http://localhost:4000")
function App() {
  const [showModal, setShowModal] = useState(false)
  
  const [count, setCount] = useState(0)
  
  const [GD, setGD] = useState([])
  const dataGather = (data1) => {



    setGD(GD => [data1, ...GD])

  }
  // const handleChannelId = () => {
  //   axios.get("http://localhost:3000/getChannelId").then((res) => {
  //     const getCh = res.data.chan
  //     setCh(getCh);

  //   }).catch((err) => {
  //     console.log(err.response)
  //   })
  // }
  useEffect(() => {


  
 
      
        socket.on('wave', (data1) => {
        
          // console.log("count"+count);
          //i  want to run this part only one time so i used count here
          if (count < 1) {
            setCount(1)
            setShowModal(true);
            // handleChannelId();
    
          }
         
       
            dataGather(data1);
          
    
        })
   
    
  
  }, [socket]);



  const hideModal = () => {
    // socket.disconnect();
    setCount(0);
    setShowModal(false)
    setGD([])
   

  }

  return (
    <div className="App">

      <Iframe iframe={demos["htmlPage"]} allow="autoplay" className="ifr1" sandbox="allow-scripts"  />


      {showModal == true ? <Example hideModal={hideModal} GD={GD}  showModal={showModal} /> : <></>}
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
