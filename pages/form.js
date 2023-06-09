import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from "https://www.gstatic.com/firebasejs/9.19.1/firebase/auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyAlhgRL7F4q6XhUl0oYS1OnkIXzIn48guo",
  authDomain: "https://learningmap.netlify.app/",
  projectId: "learningmap-ed92f",
  storageBucket: "learningmap-ed92f.appspot.com",
  messagingSenderId: "741209908663",
  appId: "1:741209908663:web:9265397745216cddf23432",
  measurementId: "G-DE3NHWMTVM"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);



document.getElementById("reg-btn").addEventListener('click', function(){
    document.getElementById("register-div").style.display="inline";
    document.getElementById("login-div").style.display="none";
});

document.getElementById("log-btn").addEventListener('click', function(){
    document.getElementById("register-div").style.display="none";
    document.getElementById("login-div").style.display="inline";
});

document.getElementById("login-btn").addEventListener('click', function(){
    const loginEmail = document.getElementById("login.email").value;
    const loginPassword = document.getElementById("login.password").value;

    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then((userCredential) => {
  
      const user = userCredential.user;
      document.getElementById("result-box").style.display="inline";
      document.getElementById("login-div").style.display="none";
      document.getElementById("result").innerHTML="Welcome Back<br>"+loginEmail+" was Logged in Successfully";
   
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      document.getElementById("result-box").style.display="inline";
      document.getElementById("login-div").style.display="none";
      document.getElementById("result").innerHTML="Sorry !<br>User not found";
    });
});

document.getElementById("register-btn").addEventListener('click', function(){
    const registerEmail = document.getElementById("register.email").value;
    const registerPassword = document.getElementById("register.password").value;

    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
    .then((userCredential) => {
  
      const user = userCredential.user;
      document.getElementById("result-box").style.display="inline";
      document.getElementById("register-div").style.display="none";
      document.getElementById("result").innerHTML="Welcome Back<br>"+registerEmail+" was Registered Successfully";
   
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      document.getElementById("result-box").style.display="inline";
      document.getElementById("register-div").style.display="none";
      document.getElementById("result").innerHTML="Sorry !<br>"+errorMessage;
    });
});

document.getElementById("log-out-btn").addEventListener('click', function(){
    signOut(auth).then(() => {
        document.getElementById("result-box").style.display="none";
      document.getElementById("login-div").style.display="inline";

      }).catch((error) => {
        document.getElementById("result").innerHTML="Sorry !<br>"+errorMessage;

 
      });


});