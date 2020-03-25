var bday;
var radio1;
var radio2;
var dd;
var mm;
var yyyy;

function validate(){
    bday=document.getElementById("birthday").value;
    radio1=document.getElementById("radio1");
    radio2=document.getElementById("radio2");
    dd=parseInt(bday.trim().slice(0,2));
    mm=parseInt(bday.trim().slice(3,5));
    yyyy=parseInt(bday.trim().slice(6,10));

    if (bday.trim()===""){
        alert("Blank birthday input");
        return false;
    }
    
    if (bday.trim().length!==10){
        return false;
    }
    else if(parseInt(bday.trim().charAt(0))>=0 === false || parseInt(bday.trim().charAt(1))>=0 === false
    || parseInt(bday.trim().charAt(3))>=0 === false || parseInt(bday.trim().charAt(4))>=0 === false){
        return false;
    }
    else if(dd>31 || dd<=0 || mm> 12 || mm<=0 || yyyy<=1900 || yyyy>2020){
        return false;
    }    
    else if (yyyy%4===0 && mm===02 && dd>29){
        return false;
    }
    else if(yyyy%4!==0 && mm===02 && dd>28) {
        return false;
    }
    else if(mm<=7 && mm%2===0 && dd>30){
        return false;
    }
    else if(mm<=7 && mm%2!==0 && dd>31){
        return false;
    }
    else if(mm>7 && mm%2===0 && dd>31){
        return false;
    }
    else if(mm>7 && mm%2!==0 && dd>30){
        return false;
    }

    if (radio1.checked===true){
        //alert("Male chosen");
        //alert(bday);        
        document.getElementById("myform").reset();
        dayWeek();
        return true;
    }
    else if (radio2.checked===true){
        alert("Female chosen");
        document.getElementById("myform").reset();
        return true;
    }
    else{
        alert("Gender input missing");
        return false;
    }    
}

function dayWeek(){ 
    var CC=parseInt(yyyy.toString().slice(0,2));
    var YY=parseInt(yyyy.toString().slice(2,4));
    var MM=parseInt(mm);
    var DD=parseInt(dd);
    var YearCode=(YY+Math.trunc(YY/4))%7;
    var month_codes=[0,3,3,6,1,4,6,2,5,0,3,5];
    var MonthCode=month_codes[MM-1];
    var CenturyCode;
    if (CC===19){
        CenturyCode=0;
    }
    else if(CC===20){
        CenturyCode=6;
    }
    var LeapYearCode;
    if (yyyy%4===0 && (MM===1 || MM===2)){
        LeapYearCode=-1;
    }
    else{
        LeapYearCode=0;
    }
    var dayOfWeek=(YearCode+MonthCode+CenturyCode+DD+LeapYearCode)%7;
    var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var dayOfWeekName=days[dayOfWeek];    
    document.getElementById("akanBirthday").innerHTML="Your were born on "+dayOfWeekName;
}
