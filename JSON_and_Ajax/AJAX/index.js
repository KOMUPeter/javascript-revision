// ajax is not a progamation code but a request intergrated to navigator and javascript
// ajax can transport data like xml or other formats of texts like JSON or txt
// NOTE THAT The cornerstone of AJAX is the XMLHttpRequest object.
// All modern browsers support it This means that it is possible to update parts of a web page without reloading the entire page
// EXAMPLE IN CODE

function loadDoc() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = ()=>{
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('demo').innerHTML = this.responseText;
        }
    };

    xhttp.open("GET", "demo.txt", true);
    xhttp.send();
}

////////////// REVISIT CORRECTLY