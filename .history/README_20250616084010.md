# 🎮 Adivina el Pokémon

Un juego interactivo donde debes adivinar el nombre del Pokémon basándote en su silueta. ¡Pon a prueba tus conocimientos sobre Pokémon!

## ✨ Características

- 🔍 **Siluetas misteriosas**: Adivina el Pokémon por su sombra
- 🎯 **Sistema de puntuación**: Rastrea tus aciertos y errores
- 🎊 **Efectos visuales**: Confeti y animaciones al ganar
- 🔊 **Efectos de sonido**: Audio inmersivo para victorias y derrotas
- 📱 **Diseño responsivo**: Funciona perfectamente en móviles y escritorio
- 🎨 **Interfaz moderna**: Diseño limpio con Tailwind CSS
- ⚡ **Rendimiento optimizado**: Construido con Vite para carga rápida

## 🎯 Cómo Jugar

1. **Observa** la silueta del Pokémon mostrada
2. **Escribe** el nombre que crees que es correcto
3. **Presiona Enter** o haz clic en "Comprobar"
4. **Descubre** si acertaste y ve la imagen real
5. **Continúa** jugando para mejorar tu puntuación

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm, yarn o bun

### Instalación

**Con npm:**
npm install
npm run dev

**Con yarn:**
yarn install
yarn dev

**Con bun:**
bun install
bun dev

El juego estará disponible en `http://localhost:5173`

### Comandos Disponibles

- `dev` - Inicia el servidor de desarrollo
- `build` - Construye la aplicación para producción
- `preview` - Previsualiza la build de producción
- `lint` - Ejecuta el linter de código

## 🛠️ Stack Tecnológico

| Tecnología     | Propósito               | Versión |
| -------------- | ----------------------- | ------- |
| React          | Framework de UI         | ^18.2.0 |
| Vite           | Build tool y dev server | ^5.2.0  |
| Tailwind CSS   | Framework de estilos    | ^3.4.1  |
| React Confetti | Efectos de confeti      | ^6.1.0  |
| React Use      | Hooks utilitarios       | ^17.5.0 |
| Luckiest Guy   | Fuente personalizada    | ^1.0.0  |

## 📁 Estructura del Proyecto

src/
├── 📄 App.jsx # Componente principal
├── 🎮 components/
│ ├── 🎯 Game.jsx # Lógica principal del juego
│ ├── 📊 Score.jsx # Contador de puntuación
│ └── 🎊 ConfettiEffect.jsx # Efectos de confeti
├── 🔧 utils/
│ ├── ✅ checkName.js # Validación de nombres
│ └── 📈 scoreHandler.js # Manejo de puntuaciones
├── 🎵 assets/ # Recursos multimedia
├── 🌐 api.js # Integración con PokéAPI
└── 🎨 index.css # Estilos globales

## 🗺️ Roadmap de Desarrollo

### ✅ Milestone 1 - Funcionalidad Básica

- [x] Mostrar silueta de Pokémon aleatorio
- [x] Revelar imagen y nombre al hacer clic
- [x] Interfaz básica funcional

### ✅ Milestone 2 - Mecánicas de Juego

- [x] Sistema de victoria/derrota
- [x] Botón para reiniciar juego
- [x] Validación de entrada (insensible a mayúsculas/espacios)
- [x] Efectos de sonido

### ✅ Milestone 3 - Características Avanzadas

- [x] Contador de puntuación persistente
- [x] Efectos visuales (confeti)
- [x] Diseño responsivo moderno
- [x] Optimización de rendimiento

### 🔮 Futuras Mejoras

- [ ] Modo multijugador
- [ ] Diferentes niveles de dificultad
- [ ] Pokémon por generaciones
- [ ] Sistema de logros
- [ ] Modo oscuro/claro
- [ ] Soporte para múltiples idiomas

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Si quieres mejorar el juego:

1. **Fork** el repositorio
2. **Crea** una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. **Abre** un Pull Request

### Guías de Contribución

- Sigue las convenciones de código existentes
- Añade tests para nuevas funcionalidades
- Actualiza la documentación según sea necesario
- Asegúrate de que todos los tests pasen

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Agradecimientos

- **PokéAPI** - Por proporcionar los datos de Pokémon
- **Nintendo/Game Freak** - Por crear el universo Pokémon
- **Comunidad React** - Por las increíbles herramientas y librerías
- **Tailwind CSS** - Por el framework de estilos
- **Vite** - Por la excelente experiencia de desarrollo

## 📸 Screenshots

_Próximamente: Capturas de pantalla del juego en acción_

---

**¿Encontraste un bug?** [Reporta un issue](../../issues)
**¿Tienes una idea?** [Inicia una discusión](../../discussions)
**¿Te gusta el proyecto?** ¡Dale una ⭐!

_Hecho con ❤️ y mucho ☕_
