// Przydatne metody obiektu array
var produkty = 
[
    "JavaScript",
    "Java",
    "CSS",
    "Python"
];

var tmp= 
[
    "Ajxksk",
    "Placek"
]
produkty[produkty.length] = "ostatni"
var array =document.getElementById("rezultat");
array.innerHTML = produkty.concat(tmp).join("<br>");
array.innerHTML += "<br>------<br>";
array.innerHTML += produkty