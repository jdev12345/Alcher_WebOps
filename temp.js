const apple = document.getElementById("A");
const getloc=()=>{
    const loc=document.querySelector(".locbar");
    const success=(position)=>{
        console.log(position);
        const lat=position.coords.latitude;
        const longi=position.coords.longitude;
        const getAPI=`https://us1.locationiq.com/v1/reverse.php?key=pk.a0204321ba8ee81a400d928c060b1dde&lat=${lat}&lon=${longi}&format=json`
        fetch(getAPI).then(res => res.json())
        .then(data =>{
            console.log(data);
            apple.innerHTML=data.display_name;
        }
        )
    }
    const error=() =>{
        console.log("unable to get location");
    }
    navigator.geolocation.getCurrentPosition(success,error)
}
window.addEventListener("load",getloc)