const btn = document.querySelector(".submit")
const p = document.querySelector(".hide")

btn.addEventListener('click', function (event) {
    event.preventDefault();
    redirectToMainpage()
})

function redirectToMainpage() {
    let input = document.querySelector(".input").value
    if (input == "") {
        alert('Write Name ')
        window.location.href="Registration.html"
    }
    else {
        window.location.href = "index1.html"
    }
}
