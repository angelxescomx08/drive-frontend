# Paleta de Colores Oscura - Tailwind CSS

Esta documentación describe la paleta de colores personalizada configurada para tu aplicación con tema oscuro.

## 🎨 Categorías de Colores

### 1. Colores Primarios (`primary`)

**Uso:** Botones principales, enlaces importantes, elementos de navegación activos.

- Basados en tonos azules profundos
- Desde `primary-50` (más claro) hasta `primary-950` (más oscuro)

```html
<!-- Ejemplos de uso -->
<button class="bg-primary-600 hover:bg-primary-700 text-white">
  Botón Principal
</button>
<a href="#" class="text-primary-400 hover:text-primary-300"
  >Enlace importante</a
>
```

### 2. Colores Secundarios (`secondary`)

**Uso:** Botones secundarios, elementos de apoyo, badges.

- Basados en tonos violetas
- Complementan los colores primarios

```html
<!-- Ejemplos de uso -->
<button class="bg-secondary-600 hover:bg-secondary-700 text-white">
  Botón Secundario
</button>
<span class="bg-secondary-800 text-secondary-200 px-2 py-1 rounded">Badge</span>
```

### 3. Colores de Acento (`accent`)

**Uso:** Call-to-actions, elementos destacados, notificaciones positivas.

- Basados en tonos verdes
- Para resaltar elementos importantes

```html
<!-- Ejemplos de uso -->
<button class="bg-accent-600 hover:bg-accent-700 text-white">
  ¡Comenzar Ahora!
</button>
<div class="border-l-4 border-accent-500 pl-4">Mensaje destacado</div>
```

### 4. Colores de Fondo (`background`)

**Uso:** Fondos principales de la aplicación.

- Grises muy oscuros para tema oscuro
- `background-950` es el más oscuro

```html
<!-- Ejemplos de uso -->
<body class="bg-background-950">
  <div class="bg-background-900 p-4">Contenedor principal</div>
</body>
```

### 5. Colores de Superficie (`surface`)

**Uso:** Cards, modales, paneles, sidebars.

- Para elementos que se elevan sobre el fondo
- Proporcionan jerarquía visual

```html
<!-- Ejemplos de uso -->
<div class="bg-surface-800 border border-surface-700 rounded-lg p-6">
  <h3 class="text-white">Título de la Card</h3>
  <p class="text-surface-300">Contenido de la card</p>
</div>
```

### 6. Colores de Estado

#### Éxito (`success`)

```html
<div class="bg-success-800 text-success-200 p-4 rounded">
  ✅ Operación completada exitosamente
</div>
```

#### Advertencia (`warning`)

```html
<div class="bg-warning-800 text-warning-200 p-4 rounded">
  ⚠️ Revisa esta información
</div>
```

#### Error (`error`)

```html
<div class="bg-error-800 text-error-200 p-4 rounded">
  ❌ Ha ocurrido un error
</div>
```

### 7. Colores de Texto (`text`)

**Uso recomendado:**

- `text-primary`: Títulos y texto principal (`#f8fafc`)
- `text-secondary`: Texto secundario (`#cbd5e1`)
- `text-tertiary`: Texto de apoyo (`#64748b`)
- `text-disabled`: Texto deshabilitado (`#475569`)

```html
<h1 class="text-text-primary">Título Principal</h1>
<p class="text-text-secondary">Texto secundario</p>
<span class="text-text-tertiary">Texto de apoyo</span>
```

### 8. Colores de Borde (`border`)

```html
<div class="border border-border-primary">Borde principal</div>
<input class="border border-border-secondary focus:border-border-accent" />
```

## 🚀 Ejemplos de Componentes

### Botones

```html
<!-- Botón Primario -->
<button
  class="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md transition-colors"
>
  Primario
</button>

<!-- Botón Secundario -->
<button
  class="bg-secondary-600 hover:bg-secondary-700 text-white px-4 py-2 rounded-md transition-colors"
>
  Secundario
</button>

<!-- Botón de Acento -->
<button
  class="bg-accent-600 hover:bg-accent-700 text-white px-4 py-2 rounded-md transition-colors"
>
  Acento
</button>

<!-- Botón Outline -->
<button
  class="border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-4 py-2 rounded-md transition-colors"
>
  Outline
</button>
```

### Cards

```html
<div class="bg-surface-800 border border-border-primary rounded-lg p-6">
  <h3 class="text-text-primary text-xl font-semibold mb-4">Título de Card</h3>
  <p class="text-text-secondary mb-4">Descripción del contenido...</p>
  <div class="flex gap-3">
    <button
      class="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md"
    >
      Acción Principal
    </button>
    <button
      class="border border-border-secondary text-text-secondary hover:bg-surface-700 px-4 py-2 rounded-md"
    >
      Acción Secundaria
    </button>
  </div>
</div>
```

### Formularios

```html
<form class="bg-surface-800 p-6 rounded-lg border border-border-primary">
  <div class="mb-4">
    <label class="block text-text-secondary text-sm font-medium mb-2">
      Nombre
    </label>
    <input
      type="text"
      class="w-full bg-surface-700 border border-border-secondary rounded-md px-3 py-2 text-text-primary focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
      placeholder="Ingresa tu nombre"
    />
  </div>

  <div class="mb-6">
    <label class="block text-text-secondary text-sm font-medium mb-2">
      Email
    </label>
    <input
      type="email"
      class="w-full bg-surface-700 border border-border-secondary rounded-md px-3 py-2 text-text-primary focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
      placeholder="tu@email.com"
    />
  </div>

  <button
    class="w-full bg-accent-600 hover:bg-accent-700 text-white py-2 rounded-md transition-colors"
  >
    Enviar
  </button>
</form>
```

### Navegación

```html
<nav class="bg-surface-900 border-b border-border-primary">
  <div class="px-6 py-4">
    <div class="flex items-center justify-between">
      <h1 class="text-text-primary text-xl font-bold">Mi App</h1>
      <div class="flex gap-4">
        <a href="#" class="text-primary-400 hover:text-primary-300">Inicio</a>
        <a href="#" class="text-text-secondary hover:text-text-primary"
          >Sobre</a
        >
        <a href="#" class="text-text-secondary hover:text-text-primary"
          >Contacto</a
        >
      </div>
    </div>
  </div>
</nav>
```

## 🔧 Configuración Técnica

### Variables CSS Configuradas

El archivo `src/index.css` contiene las variables CSS que mapean los colores personalizados:

```css
.dark {
  --background: oklch(0.08 0 0); /* background-950 */
  --foreground: oklch(0.95 0 0); /* text-primary */
  --card: oklch(0.12 0.005 235); /* surface-900 */
  --primary: oklch(0.58 0.168 257); /* primary-500 */
  /* ... más variables */
}
```

### Configuración de Tailwind

El archivo `tailwind.config.js` extiende la paleta de colores por defecto:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: { 50: '#eff6ff', /* ... */ 950: '#172554' },
        secondary: { 50: '#faf5ff', /* ... */ 950: '#3b0764' },
        // ... más colores
      },
    },
  },
};
```

## 💡 Consejos de Uso

1. **Consistencia**: Usa siempre los mismos niveles de color para elementos similares
2. **Contraste**: Asegúrate de que el contraste sea suficiente para accesibilidad
3. **Jerarquía**: Usa colores más intensos para elementos más importantes
4. **Estados**: Utiliza variaciones más claras/oscuras para estados hover y active

## 🌟 Activar Tema Oscuro

Para activar el tema oscuro, añade la clase `dark` al elemento HTML:

```html
<html class="dark">
  <!-- Tu aplicación -->
</html>
```

O contrólalo dinámicamente:

```javascript
// Activar tema oscuro
document.documentElement.classList.add('dark');

// Desactivar tema oscuro
document.documentElement.classList.remove('dark');
```
