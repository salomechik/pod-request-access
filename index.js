const input = document.querySelector(".emailcheck")
const button = document.querySelector(".access")
const error = document.querySelector(".redalert")

    button.addEventListener("click", myfunctions)
    function myfunctions (e) {
        e.preventDefault()
        
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (input.value.match(validRegex)) {
           error.style.display = "none"
        } else {
         error.style.display = "block"
        }

    }