function init() {
    /*------------------------------------Constants----------------------------------- */

    /*-----------------------------------variables---------------------------------- */
    let current = ''
    let result = ''

    /*----------------------------------Cached Element References--------------------------------- */
    const buttons = document.querySelectorAll('.button');
    const displayElm = document.querySelector('.display');
  

    /*----------------------------------Functions--------------------------------- */

    function clear() {
        displayElm.textContent = "";
        current = ''
    }

    //Evaluate the value of the current variable
    function displayResult() {
        result = eval(current)
        displayElm.textContent = result;

        console.log(result)
    }

    /*----------------------------------Event listeners--------------------------------- */

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
        //check the button clicked if its not = and C than add the value to current
        if (event.target.innerText !== "=" && event.target.innerText !== "C") {
            displayElm.textContent += event.target.innerText;
            current += event.target.innerText
            console.log(current)
        }

        //clear the calculator
        if (event.target.innerText === "C") {
            clear()
        }

        // if user click on equal than display the result
        if (event.target.innerText === "=") {
            displayElm.textContent += event.target.innerText;
            displayResult()
        }
    });
    })

}
document.addEventListener('DOMContentLoaded', init)