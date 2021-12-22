var num =null;
var num1=null;
var num2=null;
var flag=false;
var sign=null;
function click1(btn)
{
    if(btn.innerHTML=="C")
    {
        document.getElementById("display1").innerHTML=0;
        num1=null;
        num2=null;
        flag=false;
        num=null;
        sign=null;
        return;
    }
    if(flag==false || flag==undefined)
    {

    if(num==undefined)
    {
        num=btn.innerHTML;
        document.getElementById("display1").innerHTML=num;
        return;
    } 
    if(btn.innerHTML=="+")
    {
        sign="+";
        document.getElementById("display1").innerHTML="+";
            num1= parseInt(num);
            num=undefined;
            flag=true;
            return;
    }
    if(btn.innerHTML=="-")
    {
        sign="-";
        document.getElementById("display1").innerHTML="-";
            num1= parseInt(num);
            num=undefined;
            flag=true;
            return;
    }
    if(btn.innerHTML=="x")
    {
        sign="x";
        document.getElementById("display1").innerHTML="x";
            num1= parseInt(num);
            num=undefined;
            flag=true;
            return;
    }
    if(btn.id=="divide")
    {
        sign="/";
        document.getElementById("display1").innerHTML="&divide;";
            num1= parseInt(num);
            num=undefined;
            flag=true;
            return;
    }
}
else
{
    if(num==undefined)
    {
        num=btn.innerHTML;
        document.getElementById("display1").innerHTML=num;
        return;
    }
   if(btn.id=="equal")
    {
        num2=parseInt(num);
        if(sign=="+")
        {
            num=num1+num2;
        }
        else if(sign=="-")
        {
           num=num1-num2; 
        }
        else if(sign=="x")
        {
            num=num1*num2;
        }
        else if(sign=="/")
        {
            num=num1/num2;
        }
        document.getElementById("display1").innerHTML=num;
        num1=null;
        num2=null;
        flag=false;
        sign=null;
        return;   
    }
    
}
    num=num+btn.innerHTML;
    document.getElementById("display1").innerHTML=num;

}

