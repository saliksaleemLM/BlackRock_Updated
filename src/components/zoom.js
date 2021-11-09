function Zoom(val){
    console.log(val)
    let scal=val*0.01;
    console.log(scal)
    document.getElementById("zoom-col").style.trasnform = `scale(${scal})`



}
export default Zoom;