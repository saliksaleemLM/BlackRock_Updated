
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
    '<iframe width="100%" height="100%" scrolling="no" frameborder="no" allow="autoplay" src="http://localhost:3002/Data.html"></iframe>'

};
function App() {
  const [showModal, setShowModal] = useState(true)


  const [ch, setCh] = useState(2);

  const [GD, setGD] = useState([])
  const dataGather = (data1) => {

    setGD(GD => [data1, ...GD]);


  }

  const handleClick = () => {
    console.log("hello g" + ch)
    axios.post('http://localhost:3000/getchanneldata', { val: ch }).then((res) => {

      console.log(res)
      console.log("handle CLick called again")

    }).catch((err) => {
      console.log(err)
    });

  }
  useEffect(() => {


    window.addEventListener("message", handleMessage, false);

    function handleMessage(e) {
      let { key, value, method } = e.data;
      if (method == 'store') {
        window.localStorage.setItem(key, value); // Store data in iframe domain local storage
      } else if (method == 'retrieve') {
        let response = window.localStorage.getItem(key);
        e.source.postMessage({
          key,
          response,
          method: 'response'
        }, '*'); // Retrieve local storage data
      }
    }
    // -------------------------------------------------------------------- 
    // --------------Dont delete this below portion ----------------------
    // --------------------------------------------------------------------



    // window.addEventListener('storage', (event) => {
    //   // When local storage changes, dump the list to
    //   // the console.
    //   console.log(event.origin)
    //   //   console.log(JSON.parse(window.localStorage.getItem('chan')));
    //   var data = window.sessionStorage.getItem('chan');
    //   // console.log(data)

    //   setCh(data)

    // });
    // console.log(localStorage.key(0))
    var PERMITTED_DOMAIN = "http://127.0.0.1:5501/my-app/Data.html";
    /**
     * Receiving message from other domain
     */
    window.addEventListener('message', function (event) {
      if (event.origin === PERMITTED_DOMAIN) {
        if (event.data) {
          localStorage.setItem("localstorage", event.data);
        } else {
          localStorage.removeItem("localstorage");
        }
      }
    });




    if (ch > 1) {

      setShowModal(true);



      //   console.log("channel1")
      socket.on('wave', (data1) => {


        dataGather(data1);

      })
      //   console.log("hele")
      handleClick()

    }




  }, [ch]);


  const hideModal = () => {

    sessionStorage.setItem('chan', -1);
    setShowModal(false)


    setGD([])

    axios.get("http://localhost:3000/closeclient").then((response) => {
      console.log(response)

      setGD([])


    }).catch((err) => {
      console.log(err)

    })

  }

  return (
    <div className="App">
     
        <Iframe iframe={demos["htmlPage"]} allow="autoplay" id="ifr" />
        {/* <div className="div1"></div> */}
     

      {showModal === true ? <Example className="i am here" showModal={showModal} hideModal={hideModal} ch={ch} GD={GD} /> : <></>}
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
