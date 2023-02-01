//adding event listeners 

const frm = document.getElementById("conform");



frm.addEventListener("submit",(e) => {
    e.preventDefault();
    alert("Response recorded successfully");
    localStorage.setItem("name",document.forms["myform"]["name"].value),
    localStorage.setItem("email",document.forms["myform"]["email"].value),
    localStorage.setItem("query",document.forms["myform"]["query"].value)
    location.replace("index.html");

})





