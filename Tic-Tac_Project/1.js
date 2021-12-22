let num=0;
let flag=false;
function click1(){
    if(flag==false)
    {
    if(document.getElementById("a1").innerHTML=='&nbsp;')
    {
    if(num%2==0)
    {
    document.getElementById("a1").innerHTML="O";
    }
    else
    document.getElementById("a1").innerHTML="X";
    num++;
}
}
}
function click2(){
    if(flag==false)
    {
    if(document.getElementById("a2").innerHTML=='&nbsp;')
    {
    if(num%2==0)
    {
    document.getElementById("a2").innerHTML="O";
    }
    else
    document.getElementById("a2").innerHTML="X";
    num++;
}
}
}
function click3(){
    if(flag==false)
    {
    if(document.getElementById("a3").innerHTML=='&nbsp;')
    {
    if(num%2==0)
    {
    document.getElementById("a3").innerHTML="O";
    }
    else
    document.getElementById("a3").innerHTML="X";
    num++;
}
}
}
function click4(){
    if(flag==false)
    {
    if(document.getElementById("a4").innerHTML=='&nbsp;')
    {
    if(num%2==0)
    {
    document.getElementById("a4").innerHTML="O";
    }
    else
    document.getElementById("a4").innerHTML="X";
    num++;
}
}
}
function click5(){
    if(flag==false)
    {
    if(document.getElementById("a5").innerHTML=='&nbsp;')
    {
    if(num%2==0)
    {
    document.getElementById("a5").innerHTML="O";
    }
    else
    document.getElementById("a5").innerHTML="X";
    num++;
    }
}
}
function click6(){
    if(flag==false)
    {

    if(document.getElementById("a6").innerHTML=='&nbsp;')
    {
    if(num%2==0)
    {
    document.getElementById("a6").innerHTML="O";
    }
    else
    document.getElementById("a6").innerHTML="X";
    num++;
}
}
}
function click7(){
    if(flag==false)
    {
    if(document.getElementById("a7").innerHTML=='&nbsp;')
    {
    if(num%2==0)
    {
    document.getElementById("a7").innerHTML="O";
    }
    else
    document.getElementById("a7").innerHTML="X";
    num++;
}
}
}
function click8(){
    if(flag==false)
    {
    if(document.getElementById("a8").innerHTML=='&nbsp;')
    {
    if(num%2==0)
    {
    document.getElementById("a8").innerHTML="O";
    }
    else
    document.getElementById("a8").innerHTML="X";
    num++;
}
}
}
function click9(){
    if(flag==false)
    {
    if(document.getElementById("a9").innerHTML=='&nbsp;')
    {
    if(num%2==0)
    {
    document.getElementById("a9").innerHTML="O";0
    }
    else
    document.getElementById("a9").innerHTML="X";
    num++;
}
}
}


function check1(){
    var a1=document.getElementById("a1").innerHTML;
    var a2=document.getElementById("a2").innerHTML;
    var a3=document.getElementById("a3").innerHTML;
    var a4=document.getElementById("a4").innerHTML;
    var a5=document.getElementById("a5").innerHTML;
    var a6=document.getElementById("a6").innerHTML;
    var a7=document.getElementById("a7").innerHTML;
    var a8=document.getElementById("a8").innerHTML;
    var a9=document.getElementById("a9").innerHTML;
    
    if((a1=="X" && a2=="X" && a3=="X") || (a1=="O" && a2=="O" && a3=="O"))
    {
        document.getElementById("a1").style.background="red";
        document.getElementById("a2").style.background="red";
        document.getElementById("a3").style.background="red";
    document.getElementById("result1").innerHTML= "WIN";
    flag=true;
    }
    if((a1=="X" && a5=="X" && a9=="X") || (a1=="O" && a5=="O" && a9=="O"))
    {
        document.getElementById("a1").style.background="red";
        document.getElementById("a5").style.background="red";
        document.getElementById("a9").style.background="red";
    document.getElementById("result1").innerHTML= "WIN";
    flag=true;
    }
    if((a3=="X" && a5=="X" && a7=="X") || (a3=="O" && a5=="O" && a7=="O"))
    {
        document.getElementById("a3").style.background="red";
        document.getElementById("a5").style.background="red";
        document.getElementById("a7").style.background="red";
    document.getElementById("result1").innerHTML= "WIN";
    flag=true;
    }
    if((a1=="X" && a4=="X" && a7=="X") || (a1=="O" && a4=="O" && a7=="O"))
    {
        document.getElementById("a1").style.background="red";
        document.getElementById("a4").style.background="red";
        document.getElementById("a7").style.background="red";
    document.getElementById("result1").innerHTML= "WIN";
    flag=true;
    }
    if((a2=="X" && a5=="X" && a8=="X") || (a2=="O" && a5=="O" && a8=="O"))
    {
        document.getElementById("a2").style.background="red";
        document.getElementById("a5").style.background="red";
        document.getElementById("a8").style.background="red";
    document.getElementById("result1").innerHTML= "WIN";
    flag=true;
    }
    if((a3=="X" && a6=="X" && a9=="X") || (a3=="O" && a6=="O" && a9=="O"))
    {
        document.getElementById("a3").style.background="red";
        document.getElementById("a6").style.background="red";
        document.getElementById("a9").style.background="red";
    document.getElementById("result1").innerHTML= "WIN";
    flag=true;
    }
    if((a4=="X" && a5=="X" && a6=="X") || (a4=="O" && a5=="O" && a6=="O"))
    {
        document.getElementById("a4").style.background="red";
        document.getElementById("a5").style.background="red";
        document.getElementById("a6").style.background="red";
    document.getElementById("result1").innerHTML= "WIN";
    flag=true;
    }
    if((a7=="X" && a8=="X" && a9=="X") || (a7=="O" && a8=="O" && a9=="O"))
    {
        document.getElementById("a7").style.background="red";
        document.getElementById("a8").style.background="red";
        document.getElementById("a9").style.background="red";
    document.getElementById("result1").innerHTML= "WIN";
    flag=true;
    }
    else if(num==9)
    {
        document.getElementById("result1").innerHTML= "It's Tie";
    }
}