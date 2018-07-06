onload = function(){
    let rainbowColors = ["red","blue","yellow","green","violet","indigo","orange"]

    let rainbow = [
        document.getElementById("red"),
        document.getElementById("blue"),
        document.getElementById("yellow"),
        document.getElementById("green"),
        document.getElementById("violet"),
        document.getElementById("indigo"),
        document.getElementById("orange"),
    ];

    for(let i = 0; i < rainbow.length; i++){
        rainbow[i].style.backgroundColor = rainbowColors[i];
        rainbow[i].style.height = "80px";
        rainbow[i].style.color ="#fff"
        rainbow[i].style.textAlign = "center";
        rainbow[i].style.fontSize = "2em"
        rainbow[i].innerHTML = rainbowColors[i];
    }
}