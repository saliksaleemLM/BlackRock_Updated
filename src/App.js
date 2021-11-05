
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
    '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="http://localhost:3002/Data.html"></iframe>',

};
function App() {
  const [showModal, setShowModal] = useState(false)


  const [ch, setCh] = useState(-1);

  const [GD, setGD] = useState([])
  const dataGather = (data1) => {

    setGD(GD => [data1, ...GD]);


  }

  const handleClick = () => {
    console.log("hello g" + ch)
    axios.post('http://localhost:3000/getchanneldata', { val: ch }).then((res) => {

      console.log(res)

    }).catch((err) => {
      console.log(err)
    });

  }
  useEffect(() => {


    window.addEventListener('storage', () => {
      // When local storage changes, dump the list to
      // the console.
      //   console.log(JSON.parse(window.localStorage.getItem('chan')));
      var data = window.localStorage.getItem('chan');
      // console.log(data)

      setCh(data)

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

  localStorage.setItem('chan', -1);
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
      <div>
        <Iframe iframe={demos["htmlPage"]} allow="autoplay" />
        {/* <div className="div1"></div> */}
      </div>

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
