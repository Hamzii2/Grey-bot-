const signupForm = document.getElementById("signupForm");

if(signupForm){

    signupForm.addEventListener("submit", function(e){

        e.preventDefault();

        let username = document.getElementById("username").value;
        let email = document.getElementById("signupEmail").value;
        let password = document.getElementById("signupPassword").value;


        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);


        alert("Account created successfully!");

        window.location.href = "login.html";

    });

}



const loginForm = document.getElementById("loginForm");

if(loginForm){

    loginForm.addEventListener("submit", function(e){

        e.preventDefault();


        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;


        let savedEmail = localStorage.getItem("email");
        let savedPassword = localStorage.getItem("password");


        if(email === savedEmail && password === savedPassword){

            localStorage.setItem("loggedIn","true");

            alert("Welcome back!");

            window.location.href="dashboard.html";

        } else {

            alert("Wrong email or password");

        }

    });

           }
