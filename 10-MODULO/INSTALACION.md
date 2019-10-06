## Instalación de SystemJS
Es un manejados de importaciones 
>             npm install systemjs@0.19.41
 Para que no tengan diferencia con mi código y el suyo.Por que ha cambiado mucho la libreria

Esto nos permitira importar nuestras archivos sin problemas , ni llamandolos uno por uno 


```html
    <script src="node_modules/systemjs/dist/system.js"></script>

    <script>
        SystemJS.config({
            baseURL: "/js",
            defaultJSExtensions: true  // para que reconozca la EXTENSION, si no bota error
        });
        SystemJS.import("app.js")       // file MAIN
    </script>
```