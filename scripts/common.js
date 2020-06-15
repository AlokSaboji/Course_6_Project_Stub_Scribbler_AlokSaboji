$(document).ready(function () {
        if (window.location.pathname.indexOf('index.html') > -1) {
            $('#header-div').load("html/header.html");
        } else{
            $('#header-div').load("../html/header.html");
        }
});

function showSignUpModal() {
        document.getElementById("signup-modal").style.display = "block";
}

function hideSignUpModal(){
        document.getElementById("signup-modal").style.display = "none";
}

function showSignInModal(){
    document.getElementById("signin-modal").style.display = "block";
}

function hideSignINModal(){
    document.getElementById("signin-modal").style.display = "none";
}
function CloseSigninshowSignUpModal() {
    document.getElementById("signin-modal").style.display = "none";
    document.getElementById("signup-modal").style.display = "block";
}

