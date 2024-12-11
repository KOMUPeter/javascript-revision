let windowButton = document.getElementById("window")
let count =5;
function openNewW() {
        let p = document.createElement("p");
        document.body.appendChild(p);
         // Start countdown
        let interval = setInterval(() => {
            p.textContent = `Opening in ${count} seconds...`;
            count--;

            if (count < 0) {
                clearInterval(interval); // Stop the countdown
                p.textContent = "Window opened!";
                window.open("https://eliebwelfare.com/");
            }
        }, 1000);
    }

    windowButton.addEventListener("click", openNewW);
