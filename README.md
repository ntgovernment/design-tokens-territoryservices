# Territory Services Bootstrap Theme

A Bootstrap 5.3+ compatible theme built with Territory Services design tokens. This theme maintains full Bootstrap compatibility while applying the Territory Services visual identity through CSS custom properties.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Build the theme
npm run build

# Preview the theme
npm run build:dev
# Then open examples/preview.html in your browser
```

## 🌐 Live Preview

Open `examples/preview.html` in your browser to see all components in action:

- **Interactive Accordion**: Collapsible content with hover effects and smooth animations
- **Button Variants**: Primary, secondary, tertiary in all sizes and states
- **Back to Top Button**: Circular icon button with Territory Services styling
- **Breadcrumb Navigation**: Complete navigation component with icons
- **Typography**: All heading levels and text styles with Territory Services fonts

The preview includes Bootstrap JavaScript for full accordion functionality.

## 📦 Installation in React Projects

```bash
npm install design-tokens-territoryservices
```

```jsx
// Import the theme in your React app
import "design-tokens-territoryservices/dist/territoryservices-theme.css";

function App() {
  return (
    <div>
      <h1>Welcome to Territory Services</h1>
      <button className="btn btn-primary">Get Started</button>
    </div>
  );
}
```

## 🎨 Features

- **Bootstrap Compatible**: All standard Bootstrap classes work unchanged
- **Design Token Driven**: Built from Territory Services design tokens
- **CSS Custom Properties**: Easy runtime theme switching
- **Component Focused**: Systematic component customization
- **Multi-Theme Ready**: Designed for theme switching applications
- **Interactive Components**: Fully functional accordion, buttons, and navigation
- **Accessibility First**: WCAG compliant focus states and screen reader support
- **Responsive Design**: Mobile-first approach with proper breakpoints

## 🏗️ Project Structure

```
design-tokens-territoryservices/
├── _variables.scss          # Generated design tokens (read-only)
├── _root.scss              # CSS custom properties mapping
├── src/
│   ├── index.scss          # Main theme entry point
│   ├── _buttons.scss       # Button component customizations
│   ├── _accordion.scss     # Accordion component customizations
│   ├── _backtotopbutton.scss # Back-to-top button component
│   └── _breadcrumb.scss    # Breadcrumb navigation component
├── dist/
│   └── territoryservices-theme.css   # Compiled theme
├── examples/
│   ├── preview.html        # Live component preview
│   ├── ExampleComponent.jsx # React component examples
│   └── ThemeSwitcher.jsx   # Theme switching utilities
└── package.json           # Build configuration
```

## 🔧 Development

### Available Scripts

- `npm run build` - Production build (compressed)
- `npm run build:dev` - Development build (expanded)
- `npm run watch` - Watch mode for development
- `npm run build:all` - Build both dev and production

### Adding New Components

1. Create a new SCSS file in `src/` (e.g., `_forms.scss`)
2. Import it in `src/index.scss`
3. Use Bootstrap CSS custom properties pattern
4. Test with examples

### Design Token Updates

The `_variables.scss` file is generated from `design-tokens.json` and should not be edited directly. When design tokens are updated:

1. Regenerate `_variables.scss`
2. Run `npm run build`
3. Test components in examples

## 🎛️ Theme Switching

This theme is designed to work with runtime theme switching:

```jsx
import { ThemeProvider, ThemeSwitcher } from "./components/ThemeSwitcher";

function App() {
  return (
    <ThemeProvider>
      <header>
        <h1>My App</h1>
        <ThemeSwitcher />
      </header>
      <main>
        <button className="btn btn-primary">Themed Button</button>
      </main>
    </ThemeProvider>
  );
}
```

See `examples/ThemeSwitcher.jsx` for a complete implementation.

## 🎨 Components

### Buttons

All Bootstrap button classes are supported with Territory Services styling:

```html
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-tertiary">Tertiary</button>

<!-- Sizes -->
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary">Default</button>
<button class="btn btn-primary btn-lg">Large</button>

<!-- States -->
<button class="btn btn-primary">Normal</button>
<button class="btn btn-primary active">Active</button>
<button class="btn btn-primary" disabled>Disabled</button>
```

### Accordion

Bootstrap accordion components with Territory Services styling:

```html
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button
        class="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
      >
        Accordion Item #1
      </button>
    </h2>
    <div
      id="collapseOne"
      class="accordion-collapse collapse show"
      aria-labelledby="headingOne"
      data-bs-parent="#accordionExample"
    >
      <div class="accordion-body">Your content here...</div>
    </div>
  </div>
</div>
```

**Features:**

- 8px border-radius on all accordion items and buttons
- Territory Services color scheme and typography
- Hover effects with subtle drop shadows (0 0 12px 0 rgba(0,0,0,0.08))
- 8px vertical spacing between accordion items
- Smooth transitions and animations
- Proper focus states with orange focus ring
- Individual item borders with light grey color

**Requirements:** Bootstrap JavaScript bundle is required for accordion functionality.

### Back to Top Button

Circular icon button for page navigation:

```html
<button class="btn back-to-top" type="button">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
  </svg>
  <span class="visually-hidden">Back to top</span>
</button>
```

**Features:**

- Circular design with full border radius
- Icon-only display (text is visually hidden but accessible)
- Territory Services charcoal background with white icon
- Hover and focus states with orange accent
- Proper touch target sizing
- Screen reader accessible

### Breadcrumb Navigation

Navigation component with Territory Services styling:

```html
<nav class="breadcrumb d-flex align-items-center gap-2" aria-label="breadcrumb">
  <button class="btn btn-tertiary btn-sm">
    <span>Home</span>
  </button>
  <svg class="ntg-icon" viewBox="0 0 320 512" aria-hidden="true">
    <path
      fill="currentColor"
      d="M311.1 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L243.2 256 73.9 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"
    />
  </svg>
  <button class="btn btn-tertiary btn-sm" disabled aria-current="page">
    <span>Current Page</span>
  </button>
</nav>
```

**Features:**

- Territory Services orange icon colors
- Proper sizing using typography tokens
- Accessible with proper ARIA labels
- Disabled state for current page

### Typography

Bootstrap typography classes with Territory Services fonts and sizing:

```html
<h1>Heading 1</h1>
<h2 class="h3">Heading with class</h2>
<p class="text-primary">Primary text</p>
<p class="text-muted">Muted text</p>
```

### Colors

Bootstrap color utilities with Territory Services palette:

```html
<div class="bg-primary text-white">Primary background</div>
<div class="bg-info">Info background</div>
<p class="text-success">Success text</p>
```

## 🔄 Creating Additional Themes

To create additional themes (e.g., Central Australia variant):

1. **Clone this repository** with new name: `design-tokens-central`
2. **Replace design tokens**: Update `design-tokens.json` and regenerate `_variables.scss`
3. **Keep same structure**: Use identical file structure and build process
4. **Build new theme**: Run `npm run build` to create `central-theme.css`
5. **Integrate with switcher**: Add to theme configuration

## 📖 Examples

- `examples/preview.html` - Complete theme preview
- `examples/react-example.jsx` - Basic React integration
- `examples/ThemeSwitcher.jsx` - Theme switching implementation

## 🛠️ CSS Custom Properties

This theme uses Bootstrap 5.3+ CSS custom properties for theming:

```css
/* Buttons use custom properties */
.btn {
  --bs-btn-color: #ffffff;
  --bs-btn-bg: #1f1f5f;
  --bs-btn-border-color: #1f1f5f;
}

/* Override in JavaScript for runtime changes */
document.documentElement.style.setProperty('--bs-primary', '#new-color');
```

## 🎯 Bootstrap Compatibility

This theme maintains 100% compatibility with Bootstrap:

- ✅ All utility classes work unchanged
- ✅ Component markup is identical
- ✅ JavaScript behavior is preserved
- ✅ Grid system works as expected
- ✅ Responsive breakpoints maintained

## 📋 Browser Support

Supports all modern browsers that support CSS custom properties:

- Chrome 49+
- Firefox 31+
- Safari 9.1+
- Edge 16+

## 🤝 Contributing

1. Follow the established component pattern
2. Use Bootstrap CSS custom properties
3. Test with examples
4. Update documentation

## 📄 License

MIT License - see LICENSE file for details.

## 🔗 Related

- [Territory Services Design System](https://designsystem.nt.gov.au/)
- [Bootstrap 5.3 Documentation](https://getbootstrap.com/docs/5.3/)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
