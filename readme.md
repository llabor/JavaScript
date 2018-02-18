## JavaScript
¿Cómo se carga una página web?
El proceso de carga de una página web se puede simplificar de la siguiente manera:

1. El navegador obtiene la página HTML
2. Comienza la fase de parsing (análisis sintáctico)
3. El analizador encuentra una etiqueta script que hace referencia a un archivo externo
4. El navegador hace una petición para obtener el archivo. Mientras tanto el analizador entra en una fase de bloqueo.
5. El navegador obtiene el script, lo analiza y lo ejecuta.
6. El analizador continua con el resto de la página.

El paso 4 es potencialmente la causa de una demora en la carga de la página, porque antes de mostrar los elementos visuales, el navegador debe descargar y ejecutar todos los scripts.

Solución:
Tomando en cuenta el comportamiento del navegador cuando encuentra una etiqueta script, una posible solución es colocar dichas etiquetas lo más abajo posible dentro de la etiqueta body.

```bash
<!DOCTYPE html>
<html>
  <head>
  <meta charset="utf-8">
  <title>Website</title>
  </head>
  <body>
  <!-- contenido de la página -->
  <script type="text/javascript" src="script.js"></script>
  <script>
  function myFunction() {
     document.getElementById("demo").innerHTML = "Paragraph changed.";
  }
  </script>
  </body>
</html>
```
 
### var vs let
The difference is scoping. ```bash var``` is scoped to the nearest function block and ```bash let``` is scoped to the nearest enclosing block, which can be smaller than a function block. Both are global if outside any block.

## jQuery

## Bootstrap


