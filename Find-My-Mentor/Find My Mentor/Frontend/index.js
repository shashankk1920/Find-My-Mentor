const btn = document.querySelector(".submit")
const p = document.querySelector(".hide")

btn.addEventListener('click', function (event) {
    event.preventDefault();
    redirectToMainpage()
})

function redirectToMainpage() {
    let input = document.querySelector(".input").value
    if (input == "") {
        alert('Write username and password')
        window.location.href="login.html"
    }
    else {
        window.location.href = "index1.html"
    }
}
