const password = document.querySelector(".inpt-pass");
const button= document.querySelector(".hide");
const hideBtn= document.querySelector(".hide img");
const check= document.querySelector("#check");
function hide(){
    if(check.value=="on"){
        check.value="off";
        hideBtn.src="hide.png";
        password.type="text";
    }else{
        check.value="on";
        hideBtn.src="show.png";
        password.type="password";
    }

}
