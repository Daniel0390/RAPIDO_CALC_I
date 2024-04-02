function limpiar(){
    document.getElementById("mi_formulario").reset ;
    
}

function calcular (){
   let ancho  = parseFloat  (document.getElementById("valor1").value );
   let resto  = parseFloat  (document.getElementById("elresto").value );
   let result = document.getElementById("alf_result").innerHTML= ancho - resto  ;
   let divisor= parseFloat (document.getElementById("eldivisor").value);    
let ancho_total = Number(document.getElementById("alf_result2").innerHTML= result / divisor).toFixed(2);

    let alto = parseFloat(document.getElementById("valor2").value);
    let resto_de_alto = parseFloat(document.getElementById("elresto_alt").value);
    let alto_total = document.getElementById("jamb_result").innerHTML= alto - resto_de_alto;

    let rieles = parseFloat(document.getElementById("valor1").value);
    let resto_rieles = parseFloat(document.getElementById("elrestorieles").value);
    document.getElementById("rieles_result").innerHTML= rieles - resto_rieles;
    
     let latera = parseFloat(document.getElementById("valor2").value);
     let  resto_laerale=parseFloat(document.getElementById("elrestolate").value);
     document.getElementById("laterales_result").innerHTML= latera - resto_laerale;


     let achovid = parseFloat(document.getElementById("restodeanchodevidrio").value);
     document.getElementById("Vidr.Anch_result").innerHTML= ancho_total - achovid ; 

     let altovid = parseFloat(document.getElementById("restodealtodevidrio").value);
      document.getElementById("Vidr.Alt_result").innerHTML= alto_total - altovid ; 

      
}







 



