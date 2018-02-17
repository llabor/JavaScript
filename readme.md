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

Solución
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

## jQuery
## Bootstrap

## Angular
### Angular JS
AngularJS es un framework MVC de JavaScript para el Desarrollo Web Front End que permite crear aplicaciones SPA Single-Page Applications. 

### Angular
Angular es un framework para aplicaciones web de TypeScript de código abierto, mantenido por Google, que se utiliza para crear y mantener SPAs (Single Page Application) aplicaciones web de una sola página. Angular es la evolución de AngularJS aunque incompatible con su predecesor.
