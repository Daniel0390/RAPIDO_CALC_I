function limpiar(){
    document.getElementById("mi_formulario").reset ;
    
}

function calcular (){
   let ancho  = parseFloat  (document.getElementById("valor1").value );
   let resto  = parseFloat  (document.getElementById("elresto").value );
   let result = document.getElementById("alf_result").innerHTML= ancho - resto  ;
   let divisor= parseFloat (document.getElementById("eldivisor").value);    
let ancho_total =document. Number(getElementById("alf_result2").innerHTML= result / divisor ).tofixed(2);

    let alto = parseFloat(document.getElementById("valor2").value);
    let resto_de_alto = parseFloat(document.getElementById("elresto_alt").value);
    let alto_total = Number(document.getElementById("jamb_result").innerHTML= alto - resto_de_alto).tofixed(2);

    let rieles = parseFloat(document.getElementById("valor1").value);
    let resto_rieles = parseFloat(document.getElementById("elrestorieles").value);
    Number(document.getElementById("rieles_result").innerHTML= rieles - resto_rieles).tofixed(2);
    
     let latera = parseFloat(document.getElementById("valor2").value);
     let  resto_laerale=parseFloat(document.getElementById("elrestolate").value);
     Number(document.getElementById("laterales_result").innerHTML= latera - resto_laerale)tofixed(2);


     let achovid = parseFloat(document.getElementById("restodeanchodevidrio").value);
     Number(document.getElementById("Vidr.Anch_result").innerHTML= ancho_total - achovid )tofixed(2); 

     let altovid = parseFloat(document.getElementById("restodealtodevidrio").value);
      Number(document.getElementById("Vidr.Alt_result").innerHTML= alto_total - altovid )tofixed(2); 

      
}







 



