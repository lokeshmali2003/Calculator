let input = document.querySelector('.display');
let buttons = document.querySelectorAll('.btn');
let string = "";

buttons.forEach(btn => {
    btn.addEventListener('click', () => {

        let value = btn.innerText;

        if(value === "C"){
            string = "";
            input.value = "";
        }
        else if(value === "="){
            string = string
                        .replace("×", "*")
                        .replace("÷", "/");

            try {
                string = eval(string).toString();
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        }
        else{
            string += value;
            input.value = string;
        }

    });
});
