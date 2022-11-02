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

var pass= document.querySelector(".password");
const borde= document.querySelector("#border");
function bold(){
    if(borde.value){
        pass.style.borderBottom="4px solid #111";
        borde.value="off";
    }else{
        pass.style.borderBottom="4px solid #333";
        borde.value="on";
    }
}
