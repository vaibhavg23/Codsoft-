document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".btn");
    
    let displayValue = '';
    
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.getAttribute("data-value");
            
            if (value === "C") {
                displayValue = '';
            } else if (value === "=") {
                try {
                    displayValue = eval(displayValue);
                } catch {
                    displayValue = "Error";
                }
            } else {
                displayValue += value;
            }
            
            display.innerText = displayValue;
        });
    });
});
