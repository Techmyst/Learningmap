import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    if(user != null){

        var email_id = user.email;

        document.getElementById("user_para").innerHTML = "Welcome User : " + email;
    }

    // ...
  } else {
    // User is signed out
    // ...
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
  }
});



function login(){
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_filed").value;

    
    createUserWithEmailAndPassword(auth, userEmail, userPass)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    
  });


}

function logout(){
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });



}





