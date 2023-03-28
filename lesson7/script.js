// Comments
/*
    Mitut rida Comment
*/

function subtraction(num1, num2, num3) {
    return num1-num2-num3;
}


console.log("Tere");
console.log("Tere2");

// muutujad e variables-võimaldavad salvestada andmeid, et pärast kasutada
var text= "hello world"; // muutuja nimetus, muutuja väärtus
var text2= "hello 2"; // string e tavaline text, selle tunnuseks on ülakoma
var number1= 100; // integer(int) täisarv
var komaga= 100.50; // double/ foat-suuremad bitid, ainult matem tehted
var kaksik= false // Boolean-ainult kaks väärtust õige/vale True/False

console.log(number1);
number1=9876562525252;
console.log(number1);
number1=9876562525252
console.log(number1);
console.log(komaga);

//BIT
/*

3 bit süsteem

0-000
1-001
2-010
3-011
4-100
5-101
6-110
7-111

*/
text2= "90098722727272772727277727277";
text= "1111"
console.log(text2)
console.log(text);
console.log(parseInt (text2))
console.log(parseInt (text))

var x="aaaa"
console.log(x);
X = 10;
console.log(x);


var y =0; // 1995-2015
let y2 =0; // 2015->+
const y3=0;// 2015-> on muutumatu
const pi= "3.14"
const login="alar"
const pass="1234"
y=1;
y2=2;


console.log(y);
console.log(y);
console.log(y);
x=1;
y=1;
console.log(x+y)
x="1";
y="1";
console.log(x+y);
x=2;
y="2";
console.log(x+y);
x=10;
y=4.5;
console.log(x*y);
console.log(x*y+5);
console.log(x*(y+5));
console.log("x+y="+ x+y);
console.log("x+y="+ (x+y));

var counter= 1;
console.log("counter:");
console.log(counter);
counter=counter +1
console.log(counter);
counter+=1;
console.log(counter);
counter++;
x=1;
y=1;
console.log(x+y);
console.log(x++ +y);
console.log(x+y);
console.log(++x+y);
console.log(--x+y);
console.log((x+1)+y);
console.log(x+y);

console.log(x==y); //x=2, y=1
console.log(--x==y); // x=1, y=1
/*

== kas on võrdsed
> kas on suurem
< kas on väiksem
=> kas on suurem ja võrdne
<= kas on väiksem ja võrdne
! eitav
!= kas ei ole võrdsed
*/
console.log("!="+(x!=y));
console.log("=="+(x==y));
console.log("=="+ !(x+y));

var student= {Nimi: "Alar", Vanus: 43, City: "Valga"}; // võtmed ja väärtused JSON objekt

console.log(student)
console.log(student.Nimi)
console.log(student.Vanus)
console.log(student.Linn)



var cars= ["BMW", "Audi", "Tesla" ]; // [] == Array, Array lugemine hakkab pihta "0"
console.log(cars);  // Pikkus in 3, aga viimane element asub kohal 
console.log(cars[0]);
console.log(cars[1]);
console.log(cars [2]);

var students = [
    {Nimi: "Alar", Vanus: 43, Linn: "Valga", Grades:[5, 5, 4, 7]},
    {Nimi: "Alar2", Vanus: 43, Linn: "Põlva", Grades:[5, 5, 4, 7]},
    {Nimi: "Alar3", Vanus: 43, Linn: "Võru", Grades:[5, 5, 4, 7]},
]
console.log(students);
console.log(students[1].Nimi);
console.log(students[0].Grades[3]);

x=15;
y=10;
//console.log((x * 2) + y); // Kui on olemas üks ja see sama tehe, siis teeme funktsiooni

sumTwoNum(x, y);// Funktsiooni välja kutsumine
sumTwoNum(x, y);
sumTwoNum(x, y);
sumTwoNum(x, y);
sumTwoNum(x, y);

function sumTwoNum(num1, num2) {
    console.log((num1 * 3) + num2);
}

console.log(subtraction(2, 3, 5));
//                    -6                  -6 - -6 + -6 = -12
console.log(subtraction(2, 3, 5) + subtraction(2, 3, 5));


emtyFunction();

function emtyFunction() {
    console.log("EMPTY");
}

var nimi1="Alar";
var nimi2="Arlis";


function onclik() {
    var para = document.getElementById("firstPara");
    para .innerHTML= "<strong>Test</strong>" // InnerHTML muudab elemendi sisu
    console.log (para);
}

function onclik2(text){
    var para = document.getElementById("para");
    para .innerHTML=text;
    console.log(para);
}

function onclik3(){
    var para = document.getElementById("span1");
    para .innerHTML = nimi1;
}

function onclik4(){
    var para = document.getElementById("span1");
    para .innerHTML = nimi2;
}
function onclik5() {
    nimi1="Ott";
}



var text3="";
var text4=null; // ei oma mingit tüüpi










