// lev 3_1

// Finde Freitag, den 13.
// Erstelle eine Funktion mit dem Parameter für das Jahr.
// In dieser Funktion solltet ihr über das ganze Jahr loopen um alle Freitage, die auf einen 13. fallen, zu finden.

// Gebe das Ergebnis anschließend in HTML aus:
// Das Jahr xy hat x Unglückstage.
// Diese Tage sind ...

// Hinweis: 
// Nutze new Date() und Get Date Methods
// createElement & appendChild

// Probiere die Jahre 2020,2016 und 2015 in der Funktion aus.

// let dat = new Date();
// console.log(dat);
// let yr = dat.getFullYear();
// let dy = dat.getDay();
// let dateNumber = dat.getDate();
// console.log(dateNumber);

// let weekdays = ["So", "Mo", "Di", "Mi", "Do", "Freitag ☠️", "Sa"];
// console.log(weekdays[5]);



yr = 2017;

//get arr for yr

let startDate = new Date(yr + "-01")
let endDate = new Date(yr + "-12-30")

var date = new Date(2015, 0, 1);
var end = new Date(date);
end.setFullYear(end.getFullYear() + 1);
var array = [];
while (date < end) {
    array.push(new Date(date));
    date.setDate(date.getDate() + 1)
}

console.log(array);
let counter = 0;

array.forEach(myFunction)

function myFunction(item) {
    if (item.getDay() === 5 && item.getDate() === 13) {
        counter++
        console.log(counter);
        return counter;
    }
}

let fridays = document.createElement("p");
fridays.textContent = `${yr} hatte ${counter} x schwarze Freitage`;
document.body.appendChild(fridays);




