function validate(){
    var bday=document.getElementById("birthday").value;
    var radio1=document.getElementById("radio1");
    var radio2=document.getElementById("radio2");
    var dd=parseInt(bday.trim().slice(0,2));
    var mm=parseInt(bday.trim().slice(3,5));
    var yyyy=parseInt(bday.trim().slice(6,10));

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
    else if(dd>31 || dd<=0 || mm> 12 || mm<=0 || yyyy<1000 || yyyy>2020){
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
        alert("Male chosen");
        alert(yyyy);
        return true;
    }
    else if (radio2.checked===true){
        alert("Female chosen");
        return true;
    }
    else{
        alert("Gender input missing");
        return false;;
    }
}