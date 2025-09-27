# 🎮 Wordle - Juego de Palabras

Una implementación completa del popular juego Wordle en español, desarrollada como aplicación web usando HTML, CSS y JavaScript vanilla.

## 📋 Descripción

Wordle es un juego de adivinanza de palabras donde el jugador tiene 6 intentos para adivinar una palabra de 5 letras. Después de cada intento, las letras se colorean para dar pistas:

- 🟩 **Verde**: La letra está en la palabra y en la posición correcta
- 🟨 **Amarillo**: La letra está en la palabra pero en posición incorrecta  
- ⬜ **Gris**: La letra no está en la palabra

## 🚀 Características

- ✅ Interfaz moderna y responsive
- ✅ Teclado virtual interactivo
- ✅ Soporte para teclado físico
- ✅ Más de 40 palabras en español
- ✅ Animaciones suaves
- ✅ Mensajes informativos
- ✅ Botón para nuevo juego
- ✅ Compatible con dispositivos móviles

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con Grid y Flexbox
- **JavaScript ES6+**: Lógica del juego con clases

## 📁 Estructura del Proyecto

```
NERDEARLA-HOY/
├── index.html          # Página principal
├── styles.css          # Estilos del juego
├── script.js           # Lógica del juego
└── README.md           # Documentación
```

## 🎯 Cómo Jugar

1. **Objetivo**: Adivina la palabra secreta de 5 letras en máximo 6 intentos

2. **Controles**:
   - Escribe usando el teclado físico o haz clic en el teclado virtual
   - Presiona `ENTER` o haz clic en "ENTER" para enviar tu palabra
   - Usa `BACKSPACE` o "BORRAR" para eliminar letras

3. **Pistas**:
   - Las letras cambiarán de color después de cada intento
   - Verde = posición correcta
   - Amarillo = letra correcta, posición incorrecta
   - Gris = letra no está en la palabra

4. **Victoria**: Adivina la palabra en 6 intentos o menos

## 🚀 Instalación y Uso

### Opción 1: Ejecutar Localmente

1. **Clona o descarga** los archivos del proyecto
2. **Abre** `index.html` en tu navegador web
3. **¡Comienza a jugar!**

### Opción 2: Servidor Local (Recomendado)

```bash
# Si tienes Python instalado
python -m http.server 8000

# Si tienes Node.js instalado
npx serve .

# Si tienes PHP instalado
php -S localhost:8000
```

Luego visita `http://localhost:8000` en tu navegador.

## 🎮 Palabras Incluidas

El juego incluye más de 40 palabras en español cuidadosamente seleccionadas:

- Objetos cotidianos (PIANO, LIBRO, CASA)
- Naturaleza (FLOR, ARBOL, CIELO)
- Colores (VERDE, AZUL, ROJO)
- Emociones (AMOR, FELIZ, MIEDO)
- Y muchas más...

## 📱 Compatibilidad

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Dispositivos móviles (iOS/Android)

## 🔧 Personalización

### Agregar Nuevas Palabras

Edita el array `words` en `script.js`:

```javascript
this.words = [
    'PIANO', 'GATOS', 'PERRO',
    // Agrega tus palabras aquí
    'NUEVA', 'PALABRA'
];
```

### Cambiar Colores

Modifica las variables CSS en `styles.css`:

```css
.tile.correct {
    background-color: #538d4e; /* Verde para correcta */
}

.tile.present {
    background-color: #b59f3b; /* Amarillo para presente */
}

.tile.absent {
    background-color: #3a3a3c; /* Gris para ausente */
}
```

## 🐛 Solución de Problemas

### El juego no carga
- Verifica que todos los archivos estén en el mismo directorio
- Asegúrate de que tu navegador soporte JavaScript

### Las teclas no responden
- Verifica que el foco esté en la página del juego
- Intenta hacer clic en el área del juego primero

### Problemas de visualización
- Actualiza tu navegador a la versión más reciente
- Verifica que CSS esté habilitado

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Puedes:

1. Reportar bugs
2. Sugerir nuevas características
3. Mejorar el código existente
4. Agregar más palabras al diccionario

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 🎉 Créditos

Inspirado en el juego original Wordle creado por Josh Wardle.

---

**¡Disfruta jugando Wordle en español! 🇪🇸**