# Calendar App - Aplicación de Gestión de Eventos

## 🚀 Descripción

Calendar App es una aplicación web moderna desarrollada con React que permite a los usuarios gestionar eventos y citas de manera eficiente. La aplicación implementa un sistema de autenticación robusto y ofrece una interfaz intuitiva para la gestión de eventos.

## 🛠️ Tecnologías Principales

- **Frontend Framework**: React 19
- **Estado Global**: Redux Toolkit
- **Routing**: React Router v7
- **Calendario**: React Big Calendar
- **Gestión de Fechas**: date-fns
- **Bundler**: Vite 6
- **Linting**: ESLint 9

## 🏗️ Arquitectura y Patrones de Diseño

### Estructura del Proyecto

```
src/
├── auth/         # Autenticación y autorización
├── calendar/     # Componentes del calendario
├── hooks/        # Custom hooks
├── router/       # Configuración de rutas
├── store/        # Estado global (Redux)
└── helpers/      # Utilidades y helpers
```

### Patrones Implementados

- **Container/Presentational Pattern**: Separación clara entre lógica y presentación
- **Custom Hooks**: Reutilización de lógica de negocio
- **Redux Toolkit**: Gestión centralizada del estado
- **Componentes Modulares**: Alta cohesión y bajo acoplamiento

## ✨ Características Principales

- Sistema de autenticación completo
- Gestión de eventos con calendario interactivo
- Interfaz de usuario moderna y responsive
- Persistencia de datos
- Validaciones de formularios
- Gestión de estado global con Redux

## 🎯 Buenas Prácticas Implementadas

1. **Código Limpio**

   - Estructura de carpetas organizada
   - Nombres descriptivos
   - Componentes reutilizables

2. **Performance**

   - Lazy loading de rutas
   - Optimización de renders
   - Gestión eficiente del estado

3. **Seguridad**

   - Autenticación robusta
   - Protección de rutas
   - Validación de datos

4. **Mantenibilidad**
   - Código modular
   - Documentación clara
   - Patrones de diseño establecidos

## 🚀 Instalación y Uso

```bash
# Instalar dependencias
yarn install

# Iniciar servidor de desarrollo
yarn dev

# Construir para producción
yarn build
```

## 🧪 Testing

La aplicación incluye pruebas unitarias y de integración para garantizar la calidad del código.

## 📦 Dependencias Principales

- `@reduxjs/toolkit`: Gestión del estado global
- `react-big-calendar`: Componente de calendario
- `date-fns`: Manipulación de fechas
- `react-modal`: Modales interactivos
- `react-router`: Enrutamiento de la aplicación

## 🎨 UI/UX

- Diseño moderno y minimalista
- Interfaz intuitiva
- Experiencia de usuario fluida
- Componentes reutilizables
- Diseño responsive

## 📸 Capturas de Pantalla

### Vista del Calendario

![Vista del Calendario](https://github.com/jorgearguellles/calendar/blob/main/public/1.png)
![Vista del Calendario](https://github.com/jorgearguellles/calendar/blob/main/public/2.png)
![Vista del Calendario](https://github.com/jorgearguellles/calendar/blob/main/public/3.png)
![Vista del Calendario](https://github.com/jorgearguellles/calendar/blob/main/public/4.png)

### Formulario de Evento

![Formulario de Evento](https://github.com/jorgearguellles/calendar/blob/main/public/5.png)

### Panel de Autenticación

![Panel de Autenticación](https://github.com/jorgearguellles/calendar/blob/main/public/6.png)

## 🔄 Flujo de Trabajo

1. Autenticación de usuarios
2. Gestión de eventos
3. Visualización en calendario
4. Edición y eliminación de eventos
5. Filtrado y búsqueda

## 📈 Escalabilidad

La arquitectura del proyecto está diseñada para ser escalable, permitiendo:

- Añadir nuevas funcionalidades fácilmente
- Mantener el código organizado
- Implementar nuevas características sin afectar el código existente

## 🤝 Contribución

El proyecto sigue las mejores prácticas de desarrollo y está abierto a contribuciones. Se recomienda seguir las guías de estilo y documentación existentes.

## 📝 Licencia

Este proyecto está bajo la Licencia MIT.
