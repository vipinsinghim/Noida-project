const loginform = document.getElementById("loginform");
loginform.addEventListener("submit", function (event) {
    const u = document.getElementById("name").value;
    const p = document.getElementById("pass").value;
    const user = "vipinr0503@gmail.com";
    const pass = "vipin8954";
    if(u===user && p===pass){
      window.location.href = "home.html";  
    } else {
      document.getElementById("result").innerText = "Invalid login details";
    }
    event.preventDefault();
});