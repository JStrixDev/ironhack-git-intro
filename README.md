# Web Project

## Features

### Dark Theme Toggle
The header includes an interactive button that allows users to switch seamlessly between light and dark themes.

#### Implementation Details:
- **HTML**: Contains a `<header>` structured with Flexbox and a theme toggle button (`#theme-toggle`).
- **CSS**: Uses custom CSS variables defined in `:root` and overridden under `body[data-theme="dark"]` with accessible contrast ratios.
- **JavaScript**: Listens for click events on the button to toggle the `data-theme` attribute between `light` and `dark`.
