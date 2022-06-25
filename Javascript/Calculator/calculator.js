var data="";
var action="";

const findElement=(e)=>{
    let id=e.id;
    data=data+document.getElementById(id).innerHTML;
    document.getElementById("screen").innerHTML=data;
}   

const deleteAll=()=>{
    data="";
    document.getElementById("screen").innerHTML=data;
}

const Action=(e)=>{
    let id=e.id;
    data=data+document.getElementById(id).innerHTML;
    document.getElementById("screen").innerHTML=data;
    action=document.getElementById(id).innerHTML;
    console.log(data)
}

const doAction=()=>{
   var numbers=data.split(action);
   var num1=parseInt(numbers[0]);
   var num2=parseInt(numbers[1]);

  if(action=="+"){
     let answer=num1+num2;
     document.getElementById("screen").innerHTML="";
     document.getElementById("screen").innerHTML=answer;
  }
  else if(action=="×"){
      let answer=num1*num2;
      document.getElementById("screen").innerHTML="";
      document.getElementById("screen").innerHTML=answer;
 
  }
  else if(action=="-"){
      let answer=num1-num2;
      document.getElementById("screen").innerHTML="";
      document.getElementById("screen").innerHTML=answer;
  }
   else if(action=="÷"){
      let answer=num1/num2;
      document.getElementById("screen").innerHTML="";
      document.getElementById("screen").innerHTML=answer;
   }
  else if(action.length>1){
    let answer=num1*num1;
    document.getElementById("screen").innerHTML="";
    document.getElementById("screen").innerHTML=answer;
  }
} 