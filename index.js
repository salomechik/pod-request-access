const input = document.querySelector(".emailcheck")
const button = document.querySelector(".access")
const error = document.querySelector(".redalert")
const inputsecond = document.querySelector(".emailchecksecond")
const buttonsecond = document.querySelector(".accesssecond")
const errorsecond = document.querySelector(".redalertsecond")

    button.addEventListener("click", malfunctions)
    function malfunctions (e) {
        e.preventDefault()
        
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (input.value.match(validRegex)) {
           error.style.display = "none" 
        } else {
            error.style.display = "block"
        }; 
    }

    buttonsecond.addEventListener("click", malfunction)
    function malfunction (e) {
        e.preventDefault()
        
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (inputsecond.value.match(validRegex)) {
           errorsecond.style.display = "none" 
        } else {
            errorsecond.style.display = "block"
        }; 
    }