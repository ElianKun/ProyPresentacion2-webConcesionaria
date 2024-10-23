
                            /*CODIGO PARA CAMBIAR ESTILO*/
  function cambiarDecoracion (){
    let elemento = document.getElementById("titulo");
    elemento.style.color= "red";
  }

                           /*CODIGO PARA AGREGAR Y VER COMENTARIOS*/
function agregarMensaje(){
  let textoIngresado=document.getElementById("txtMensaje")
  let parrafoMensaje=document.createElement("p");
  parrafoMensaje.innerHTML=textoIngresado.value;
  let contenedor=document.getElementById("areaMensajes")
  contenedor.appendChild(parrafoMensaje)}
  
                  /*CODIGO PARA VER LISTA (en venta, agregados y totales) DE VEHICULOS */
   mensaje = "LISTA DE AUTOS EN VENTA";                         
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
console.log ("AUTOS: " + enVenta.marca +", "+ enVenta.modelo +
  ", "+this.enVenta.anio )

let agregadosRecientemente =[
  {marca:"Peugeot", modelo:"207 Xt",anio:2009},
  {marca:"Renault",modelo:"Clio Mio Confort",anio:2016},
  {marca:"Honda",modelo:"Acord Exrl",anio:1998},
  {marca:"Chevrolet",modelo:"Corsa Classic",anio:2007},
  {marca:"Fiat",modelo:"Punto Sporting",anio:2013},
  {marca:"Peugeot",modelo:"Allure Plus",anio:2014}
]

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
  function mostrarVehiculos (cantidadTotal){
    for (i=0; cantidadTotal.length; i++){
     console.log("Vehiculos TOTALES que posee la empresa actualmente: "
      +cantidadTotal[i])
    } }
  
                       //CODIGO AGREGAR Y ELIMINAR AUTOS A LISTA AGREGADOSRECIENTEMENTE
agregadosRecientemente.push ("Volkswagen","Clio",2005);
enVenta.pop("Peugeot","Xsd Tc Aa",1999);

                       /*CODIGO PARA MOSTRAR POR CONSOLA USANDO 
                       METODO FILTRER, INCLUDE,  CONCAT, LENGHT*/
                       
console.log ("Los autos marcas Fiat que la empresa dispone son:"+
 cantidadTotal.filter( (e)=> {return e=="Fiat"}) )

  console.log ("hay algun Chevrolet en el consesionario? "+ enVenta.includes("Chevrolet"))
  console.log ("lista total de autos= " + enVenta.concat(agregadosRecientemente))
  
  console.log("La cantidad de asistentes ingresados son: "+cantidadTotal.length)
                       
                    

  