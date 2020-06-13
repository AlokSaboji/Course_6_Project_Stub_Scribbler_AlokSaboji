// window.onclick = function(event) {
//     if (event.target === document.getElementById("signup-modal")) {
//         document.getElementById("signup-modal").style.display = "none";
//     }
// }
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

