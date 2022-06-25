//5-12....mornong
//gearter then 12 -15....afternon
// greater then 15 -24....night
//leser then 1 and gearter theb 24.....
//input time 1-24....



function timeManagment(){
    var time=document.getElementById('enterTime').value;
     console.log(time)
     if(time==""){
         return
     }
    if(time<12){
        document.getElementById('time').innerHTML="gud mrng";
    }
    else if(time>12 && time<=15){
    console.log("gud afternoon");
    }
    else if(time>15 && time<=24){
    console.log("gud night");
    }
    else{
    console.log("pls enter valid time");
   }
}

