var clientes = [
    {nome:"Sasha grey", DataNascimento:"20/12/1990", prof:"Moreninha"},
    {nome:"Ava Sparxx", DataNascimento:"05/03/1995", prof:"Ruivinha"},
    {nome:"Travecão da favela", DataNascimento:"19/09/1988", prof:"Seduzir negão"},
    {nome:"Comedor de 9inha", DataNascimento:"30/05/1998", prof:"Seduzir Loirinha"},
    {nome:"Frango frito", DataNascimento:"12/12/1969", prof:"Fritar"},
    {nome:"Frango frito", DataNascimento:"12/12/1969", prof:"Fritar"},
    {nome:"Frango frito", DataNascimento:"12/12/1969", prof:"Fritar"},
    {nome:"Frango frito", DataNascimento:"12/12/1969", prof:"Fritar"},
       {nome:"Frango frito", DataNascimento:"12/12/1969", prof:"Fritar"}
];





 function extrair () {
     var htmlresultante = "";
     for (var i = 0; i<clientes.length; i++){
         let cliente = clientes[i]
        htmlresultante += "<tr><td>" + clientes[i].nome + "</td><td>" + clientes[i].DataNascimento + "</td><td>" + clientes[i].prof + "</td></tr>"
     }
     return htmlresultante;
 }



 document.getElementById("batata").innerHTML = extrair()

 /*
 Posição inicial: 
 -Valor de i : 0
 -Valor de htmlresultante: ""

 Primeira iteração:
 -Valor de i : 0
 -Valor de htmlresultante:"<tr><td> Sasha Grey </td><td> 20/12/1990 </td><td> Moreninha </td></tr>"


 Segunda iteração:
 -Valor de i : 1
 -Valor de htmlresultante:"<tr><td> Sasha Grey </td><td> 20/12/1990 </td><td> Moreninha </td></tr> <tr><td> ava </td><td> 25/12/1990 </td><td> Ruivinha </td></tr>" 

 Terceira iteração:
 -Valor de i : 2
 -Valor de htmlresultante:"<tr><td> Sasha Grey </td><td> 20/12/1990 </td><td> Moreninha </td></tr> <tr><td> ava </td><td> 25/12/1990 </td><td> Ruivinha </td></tr><tr><td> Travecão de Favela </td><td> 19/09/1988 </td><td> Atrair negão </td></tr>
 */
 