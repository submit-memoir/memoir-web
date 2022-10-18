const loginIdInput = document.getElementById("idInput");
const loginPasswordInput = document.getElementById("passwordInput");
const loginLoginBtn = document.getElementById("loginButton");

const loginIdDiv = document.getElementById("idInputDiv");
const loginPasswordDiv = document.getElementById("passwordInputDiv");
const loginInputWarn = document.getElementsByClassName("warnText");

const loginMoveToSignUp = document.getElementById("signupButton");

/** ID&비밀번호 내용이 있는지를 구분해 경고 주는 팡션 */
function isLoginBlank(){
    if(loginIdInput.value.length==0){
        loginIdDiv.classList.add("warn");
        loginInputWarn[0].classList.remove('transparent');
        return true;
    }
    else if(loginPasswordInput.value.length==0){
        loginPasswordDiv.classList.add("warn");
        loginInputWarn[1].classList.remove('transparent');
        return true;
    }
    else if(loginPasswordInput.value.length!=0&&loginIdInput.value.length!=0){
        return false;
    }
}

function loginServerPost(){
    if(!isLoginBlank()){
        axios({
            
        })
    }
}

/** ID와 비밀번호 변경을 감지해 경고를 지워주는 팡션 */
loginIdInput.addEventListener('change',function(){
    loginInputWarn[0].classList.add('transparent');
    loginIdDiv.classList.remove("warn");
});
loginPasswordInput.addEventListener('change',function(){
    loginInputWarn[1].classList.add('transparent');
    loginIdDiv.classList.remove("warn");
});

loginLoginBtn.addEventListener('click',loginServerPost);
loginMoveToSignUp.addEventListener("click",function(){location.replace("../signup/signup.html")});