
                            

                           /*CODIGO PARA AGREGAR Y VER COMENTARIOS*/
function agregarMensaje(){
  let textoIngresado=document.getElementById("txtMensaje")
  let parrafoMensaje=document.createElement("p");
  parrafoMensaje.innerHTML=textoIngresado.value;
  let contenedor=document.getElementById("areaMensajes")
  contenedor.appendChild(parrafoMensaje)}
  
                  /*CODIGO VER LISTA DE AUTOS (en venta, agregados y totales) */
   mensaje = "----------Concesionaria LT-------------";                         
  console.log (mensaje)

  enVenta =[
    {marca:"Volkswagen", modelo:"Vento Advance",anio:2010},
    {marca:"Volkswagen",modelo:"Vento Luxury",anio:2012},
    {marca:"Peugeot",modelo:"Style D",anio:2000},
    {marca:"Volkswagen", modelo:"Bora Highline",anio:2013},
    {marca:"Ford",modelo:"Focus Plus",anio:2016},
    {marca:"Chevrolet",modelo:"Cruze li",anio:2017},
    {marca:"Volkswagen", modelo:"Virtus Msi",anio:2022},
    {marca:"Ford",modelo:"Ecosport Xlt",anio:2005},
    {marca:"Ford",modelo:"Ecosport Xls",anio:2010},
    {marca:"Peugeot",modelo:"Xsd Tc Aa",anio:1999}
  ] 
  console.log ("Autos EN VENTA")
console.log (JSON.stringify (enVenta))

let agregadosRecientemente =[
  {marca:"Peugeot", modelo:"207 Xt",anio:2009},
  {marca:"Renault",modelo:"Clio Mio Confort",anio:2016},
  {marca:"Honda",modelo:"Acord Exrl",anio:1998},
  {marca:"Chevrolet",modelo:"Corsa Classic",anio:2007},
  {marca:"Fiat",modelo:"Punto Sporting",anio:2013},
  {marca:"Peugeot",modelo:"Allure Plus",anio:2014}
]
console.log ("Autos AGREGADOS RECIENTEMENTE")
console.log (JSON.stringify (enVenta))

let  cantidadTotal =[
  {marca:"Volkswagen", modelo:"Vento Advance",anio:2010},
  {marca:"Volkswagen",modelo:"Vento Luxury",anio:2012},
  {marca:"Peugeot",modelo:"Style D",anio:2000},
  {marca:"Volkswagen", modelo:"Bora Highline",anio:2013},
  {marca:"Ford",modelo:"Focus Plus",anio:2016},
  {marca:"Chevrolet",modelo:"Cruze li",anio:2017},
  {marca:"Volkswagen", modelo:"Virtus Msi",anio:2022},
  {marca:"Ford",modelo:"Ecosport Xlt",anio:2005},
  {marca:"Ford",modelo:"Ecosport Xls",anio:2010},
  {marca:"Peugeot",modelo:"Xsd Tc Aa",anio:1999},
  {marca:"Peugeot", modelo:"207 Xt",anio:2009},
  {marca:"Renault",modelo:"Clio Mio Confort",anio:2016},
  {marca:"Honda",modelo:"Acord Exrl",anio:1998},
  {marca:"Chevrolet",modelo:"Corsa Classic",anio:2007},
  {marca:"Fiat",modelo:"Punto Sporting",anio:2013},
  {marca:"Peugeot",modelo:"Allure Plus",anio:2014}
]

/*CODIGO PARA MOSTRAR POR CONSOLA USANDO 
                       METODO FILTRER, INCLUDE,  CONCAT, LENGHT*/

console.log ("TOTAL de autos (enVenta + agregadosRecientemente)= ");
console.log(JSON.stringify (enVenta.concat(agregadosRecientemente)));
                       
console.log ("¿Hay algun Chevrolet en la consesionaria? - Respuesta: "+ enVenta.includes("Chevrolet"));
  
console.log("Cantidad total de autos que posee la empresa: "+cantidadTotal.length);
            
console.log("Autos en venta en 6° y 10° posicion de la lista");
console.log(JSON.stringify(enVenta[5]));
console.log(JSON.stringify(enVenta[9]));//NOTA: array comienza en 0

console.log ("Autos marca -Fiat- que la empresa dispone:");


//let algunFiat = cantidadTotal.filter ((a)=> {return a.marca="Fiat"})

  console.log(JSON.stringify (cantidadTotal.filter ((a)=> {return a.marca="Fiat"})) );           

  