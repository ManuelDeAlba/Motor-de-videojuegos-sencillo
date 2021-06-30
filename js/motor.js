class Game {
  constructor({
    width = 500,
    height = 500,
    background = "#fff",
    load = () => {},
    loop = () => {}
  } = {}) {
    // CONFIGURACIÓN
    this.estilosCanvas = {
      width,
      height,
      background
    }
    this.functionLoad = load;
    this.functionLoop = loop;

    // VARIABLES
    this.objetos = {};
    this.grupos = {};

    // OBJETOS FUNCIONES
    this.dibujar = {
      cuadrado: ({ x = 0, y = 0, tam = 10, color = "#000" }) => {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, tam, tam);
      },
      rectangulo: ({ x = 0, y = 0, w = 10, h = 10, color = "#000" }) => {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, w, h);
      },
      circulo: ({ x = 0, y = 0, r = 10, color = "#000" }) => {
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        this.ctx.arc(x, y, r, 0, 2 * Math.PI);
        this.ctx.fill();
      },
      imagen: ({img, x = 0, y = 0, w = 100, h = 100}) => {
        this.ctx.drawImage(img, x, y, w, h);
      }
    }
    this.crear = {
      objeto: (nombre, contenido) => {
        if (this.objetos[nombre]) {
          console.error(`El objeto "${nombre}" ya existe`);
          return;
        }
    
        this.objetos[nombre] = contenido;
      },
      grupo: (nombre, contenido) => {
        if (this.grupos[nombre]) {
          console.error(`El grupo "${nombre}" ya existe`);
          return;
        }
    
        this.grupos[nombre] = contenido;
      }
    }
    this.obtener = {
      objeto: (nombre) => {
        return this.objetos[nombre];
      },
      grupo: (nombre) => {
        return this.grupos[nombre];
      }
    }

    // Iniciar load
    // El setTimeout sirve para que me deje acceder al objeto game desde afuera (se evita el error de no llamar antes de la inicialización)
    setTimeout(() => {
      this.load();
    }, 10);
  }

  // MÉTODOS DEL CICLO DEL JUEGO
  load() {
    // Creación del canvas
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    // Estilos canvas
    this.canvas.width = this.estilosCanvas.width;
    this.canvas.height = this.estilosCanvas.height;
    this.canvas.style.border = "1px solid #000";
    // Agregar canvas
    document.body.append(this.canvas);

    this.borrarCanvas();

    // Funcion load fuera
    this.functionLoad();

    this.loop();
  }
  loop() {
    // Funcion loop fuera
    this.functionLoop();

    requestAnimationFrame(() => this.loop());
  }

  // MÉTODOS DE AYUDA PARA EL DESARROLLO
  borrarCanvas() {
    this.ctx.fillStyle = this.estilosCanvas.background;
    this.ctx.fillRect(0, 0, this.estilosCanvas.width, this.estilosCanvas.height);
  }
}
