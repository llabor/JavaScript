$(function() { 
     
     var num, acc = 0, op = "";
     num = $("#num");

    $("#num").on("click", /* vaciar() */
      function(){ $("#num").val("");}
    );

    $("#btn_C").on("click", 
      function(){ $("#num").val("");}
    );

    $("#btn_igual").on("click", /* calcular() */
      function(){ 
        if (op === "+") {num.val((+acc + +num.val()))} 
        if (op === "-") {num.val((+acc - +num.val()))}
        if (op === "*") {num.val((+acc * +num.val()))} 
        if (op === "/") {num.val((+acc / +num.val()).toFixed(6))}
        if (op === "^") {num.val(Math.pow(+acc, +num.val()))}
      }
    );

     /* Operaciones unitarias, un solo operando */
  $("#cuadrado").on("click", 
      function(){ 
        var num = $("#num");
        num.val(num.val() * num.val()).toFixed(6); // limitamos el resultado a 6 digitos decimales para que quepa en la caja de los operandos
      }
  );

  $("#inverso").on("click", 
      function(){ 
        var num = $("#num");
        num.val(1/num.val()).toFixed(6);
      }
  );

  $("#raiz_cuadrada").on("click", 
      function(){ 
        var num = $("#num");
        num.val(Math.sqrt(num.val())).toFixed(6);
      }
  );

  $("#entera").on("click", 
      function(){ 
        var num = $("#num");
        var valor = num.val();
        if (valor > 0) {
          num.val(Math.floor(valor));
        } else {
      // ceil() requiere valor absoluto para número negativo
      // para que devuelva el redondeo superior correctamente
          num.val(-Math.ceil(Math.abs(valor)));
        }
      }
  );

  $("#potencia_2_x").on("click", 
      function(){ 
        var num = $("#num");
        num.val(Math.pow(2, +num.val())).toFixed(6);
      }
  );

  $("#factorial").on("click", 
      function(){ 
        var i = 1, acc = 1;
        var num = $("#num");
        while (i <= num.val()) {
          acc = acc * i ;
          i++;
        }
        num.val(acc);
      }
  );

  /* Operaciones binarias, dos operandos */
  $("#mas").on("click", 
      function(){ acc = num.val();  op = "+";}
  );

  $("#menos").on("click", 
      function(){ acc = num.val();  op = "-"; }
  );

  $("#mult").on("click", 
      function(){ acc = num.val();  op = "*"; }
  );

  $("#dividir").on("click", 
      function(){ acc = num.val();  op = "/"; }
  );

  $("#potencia").on("click", 
      function(){ acc = num.val();  op = "^"; }
  );

 /* Operaciones con n operandos introducidos en formato CSV
sumatorio(x) (sumatorio de n números)
producto(x) (producto de n números)*/
  $("#sumatorio_x").on("click", 
      function(){ 
        var i = 0, acc = 0;
        var num = $("#num");
        var lista = num.val().split(",");
        while ( i < lista.length ) {
          acc = acc + (+lista[i]);
          i++;
         }
        num.val(acc);
      }
  );

  $("#producto_x").on("click", 
      function(){ 
        var i = 0, acc = 1;
        var num = $("#num");
        var lista = num.val().split(",");
        while ( i < lista.length ) {
          acc = acc * (+lista[i]);
          i++;
         }
        num.val(acc);
      }
  );
});