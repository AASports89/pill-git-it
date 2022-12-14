//***************************************************** USER LOGIN MENU ***************************************************//
const loginFormHandler = async (event) => {
    event.preventDefault();
    const username = document.querySelector(".username-input").value.trim();
    const email = document.querySelector(".email-input").value.trim();
    const password = document.querySelector(".password-input").value.trim();
//USERNAME LOGIN//
if (username && email && password) {
    const response = await fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({username, email, password}),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
        document.location.replace("/");

            } else {
                alert("Error❗⛔ Invalid login credentials❗⛔" +
                    response.status +
                        ": " +
                    response.statusText);
        }
        } else {
            alert("Error❗⛔ Please fill out all required fields❗⛔");
        }            
};

//EVENT LISTENERS//
document
    .querySelector(".login-button")
    .addEventListener("click", loginFormHandler);