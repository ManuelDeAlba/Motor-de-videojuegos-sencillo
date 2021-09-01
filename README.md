# Motor de videojuegos sencillo :gear::gear:

```js
const configuracion = {
  width: 500,
  height: 500,
  background: "#fff",
  load: load
  loop: loop
}

const game = new Game(configuracion);

function load(){
  // Código
}

function loop(){
  // Código
}
```
___
# Métodos :factory:

## Dibujar
* ### game.dibujar.cuadrado( { x, y, tam, color } );
* ### game.dibujar.rectangulo( { x, y, w, h, color } );
* ### game.dibujar.circulo( { x, y, r, color } );
* ### game.dibujar.imagen( { img, x, y, w, h } );
    
## Crear
* ### game.crear.objeto(nombre, contenido)
* ### game.crear.grupo(nombre, contenido)

## Obtener (Get)
* ### game.obtener.objeto(nombre)
* ### game.obtener.grupo(nombre)

## Cambiar (Set)
* ### game.cambiar.objeto(nombre, contenido)
* ### game.cambiar.grupo(nombre, contenido)

## borrarCanvas
* ### game.borrarCanvas()
>Borra el canvas de acuerdo al color asignado en la configuración
