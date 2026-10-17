# Mi Proyecto Web

## Características

### Modo Oscuro (Dark Theme Toggle)
El encabezado (`<header>`) incluye un botón interactivo que permite alternar entre el tema claro y oscuro de la aplicación.

#### Funcionamiento técnico:
- **HTML**: Se añade un botón `<button id="theme-toggle">` dentro del encabezado y el atributo inicial `data-theme="light"` en la etiqueta `<body>`.
- **JavaScript (`script.js`)**: Escucha el evento `click` del botón y alterna el atributo `data-theme` del elemento `<body>` entre `"light"` y `"dark"`, actualizando a la vez el texto y el icono del botón.
- **CSS (`styles.css`)**: Utiliza variables CSS (`--bg-color`, `--text-color`, `--header-bg`) definidas en `:root` para el modo claro y sobreescritas bajo el selector `body[data-theme="dark"]` para aplicar la paleta oscura de forma fluida mediante transiciones.