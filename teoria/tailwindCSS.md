# Tailwind CSS

### ¿Que es?

es un framework de desarrollo de CSS que se basa en clases utilitarias predefinidas para facilitar la construcción de interfaces de usuario. A diferencia de otros frameworks como Bootstrap o Foundation, que suelen tener estilos predefinidos para componentes específicos, Tailwind se centra en proporcionar clases que representan estilos individuales, como márgenes, rellenos, tamaños de texto, colores, entre otros.

Esto permite una mayor flexibilidad y personalización en el diseño de la interfaz, ya que puedes combinar y aplicar estas clases directamente en tu HTML para definir el aspecto y el comportamiento de los elementos de tu página.

dacumentacion : https://tailwindcss.com/docs/installation

</br>

### Configuracion de Tailwind en REACT

1.Instalar las dependencias a nuestro proyecto

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Esto nos creara dos archivos en nuestro proyecto llamados `tailwind.config.js` y `postcss.config.js`

2.En `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // aplicara las clases de tailwind a los archivos con estas exetenciones
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

3.En `index.css` que se crea al iniciar el proyecto en REACT

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
