
    
 function checkInput(){
     var check = document.getElementsByClassName("check");
     if (!(check && check.value)) {
        document.getElementsByTagName('button')[0].style.background = '#5f96ef';
    }
}

var arr={
    username:"",
    password:""
};

var click = document.getElementById("click");

click.onclick= function(){

    var username = document.getElementsByClassName("check")[0].value;
    var password = document.getElementsByClassName("pass")[0].value;
if(username!==''&& password!==''){
    arr['username']= username 
    arr['password']=password
    console.log(arr)
    window.location =" https://www.instagram.com/world_record_egg/?hl=en";
}
}
