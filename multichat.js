const rahimContainer = document.getElementById("rahimcontainer");
const karimContainer = document.getElementById("karimcontainer");

const rahiminput = document.getElementById("writetext");
const kariminput = document.getElementById("writetext2");

const rahimBox = document.getElementById("rahimbox");
const karimBox = document.getElementById("karimbox");

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");


button1.disabled = true;
button2.disabled = true;

// Enable/Disable button based on input value
rahiminput.addEventListener("input", () => {
    button1.disabled = rahiminput.value.trim() === "";
});

kariminput.addEventListener("input", () => {
    button2.disabled = kariminput.value.trim() === "";
});

function submitbtn(){
    if(rahiminput.value.trim() !== ""){
        const rahimdiv = document.createElement("div");
        rahimdiv.classList.add('chatlist', "anotheruser");
        const rahim = document.createElement("p");
        rahim.textContent = rahiminput.value;
    
        rahimdiv.appendChild(rahim);
        rahimBox.appendChild(rahimdiv);

         // Create mirrored message for Karim's view
         const karimdiv = rahimdiv.cloneNode(true);
         karimdiv.classList.add("chatlist");
         karimdiv.classList.remove("anotheruser")
         karimBox.appendChild(karimdiv);

         rahiminput.value = "";
         button1.disabled = true; 
    }
}

function submituser(){
    if(kariminput.value.trim() !== ""){
        const karimdiv = document.createElement("div");
        karimdiv.classList.add("chatlist", "anotheruser");
        const karim = document.createElement("p");
        karim.textContent = kariminput.value;
        kariminput.value;

        karimdiv.appendChild(karim);
        karimBox.appendChild(karimdiv);

        // Create mirrored message for Karim's view
        const rahimdiv = karimdiv.cloneNode(true);
        rahimdiv.classList.add("chatlist");
        rahimdiv.classList.remove("anotheruser")
        rahimBox.appendChild(rahimdiv);

        kariminput.value = "";
        button2.disabled = true;
    }
}


