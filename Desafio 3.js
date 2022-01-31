var clientes = [
    {nome:"Sasha grey", DataNascimento:"20/12/1990", prof:"Moreninha"},
    {nome:"Ava Sparxx", DataNascimento:"05/03/1995", prof:"Ruivinha"},
    {nome:"Travecão da favela", DataNascimento:"19/09/1988", prof:"Seduzir negão"},
    {nome:"Comedor de 9inha", DataNascimento:"30/05/1998", prof:"Seduzir Loirinha"}
];


var vtd1 = "<td>" + clientes[0].nome + "</td>";
var vtd2 = "<td>" + clientes[0].DataNascimento + "</td>";
var vtd3 = "<td>" + clientes[0].prof + "</td>";
var vtd4 = "<td>" + clientes[1].nome + "</td>";
var vtd5 = "<td>" + clientes[1].DataNascimento + "</td>";
var vtd6 = "<td>" + clientes[1].prof + "</td>";
var vtd7 = "<td>" + clientes[2].nome + "</td>";
var vtd8 = "<td>" + clientes[2].DataNascimento + "</td>";
var vtd9 = "<td>" + clientes[2].prof + "</td>";
var vtd10 = "<td>" + clientes[3].nome + "</td>";
var vtd11 = "<td>" + clientes[3].DataNascimento + "</td>";
var vtd12 = "<td>" + clientes[3].prof + "</td>";

function teste () {
    document.getElementById("t1").innerHTML = vtd1;
    document.getElementById("t2").innerHTML = vtd2;
    document.getElementById("t3").innerHTML = vtd3;
    document.getElementById("t4").innerHTML = vtd4;
    document.getElementById("t5").innerHTML = vtd5;
    document.getElementById("t6").innerHTML = vtd6;
    document.getElementById("t7").innerHTML = vtd7;
    document.getElementById("t8").innerHTML = vtd8;
    document.getElementById("t9").innerHTML = vtd9;
    document.getElementById("t10").innerHTML = vtd10;
    document.getElementById("t11").innerHTML = vtd11;
    document.getElementById("t12").innerHTML = vtd12;


}

teste()
