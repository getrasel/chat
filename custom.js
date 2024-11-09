
const main = document.getElementById("containerchat");
const text1 = document.getElementById("writetext");
const text2 = document.getElementById("writetext2");

const sub1 = document.getElementById("button1");
const sub2 = document.getElementById("button2");

function submitbtn(){
    sub1.classList.remove("enable");
    const pmsg = document.createElement("div");
    pmsg.classList.add("chatlist");
    const p1 = document.createElement("p");
    p1.textContent = text1.value;
    text1.value = "";

    pmsg.appendChild(p1);
    main.appendChild(pmsg);

}

function submituser(){
    sub1.classList.remove("enable");
    const pmsg2 = document.createElement("div");
    pmsg2.classList.add("chatlist", "anotheruser");
    const p2 = document.createElement("p");
    p2.textContent = text2.value;
    text2.value = "";
    pmsg2.appendChild(p2);
    main.appendChild(pmsg2);
}