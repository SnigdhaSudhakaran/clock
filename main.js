

function clockTime(){
    // to getsystem time
    let date=new Date()
    let hours=date.getHours()
    let minute=date.getMinutes()
    let second=date.getSeconds()
    clock.innerHTML=`${hours}:${minute}:${second}`
    setTimeout(()=>{
        clockTime()
    },1000);
}

// function call
clockTime()