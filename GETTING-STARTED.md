# 🎯 Territory Services Bootstrap Theme - Getting Started Guide

## ✅ What's Already Built

Your project has a complete Bootstrap theme built with Territory Services design tokens:

```
design-tokens-territoryservices/
├── 📄 _variables.scss          # Territory Services design tokens (read-only)
├── 🎨 _root.scss              # CSS custom properties mapping
├── 📁 src/
│   ├── 🎯 index.scss          # Main theme entry point
│   ├── 🔘 _buttons.scss       # Button component customization
│   ├── � _accordion.scss     # Accordion component customization
│   ├── ⬆️ _backtotopbutton.scss # Back-to-top button component
│   └── 🧭 _breadcrumb.scss    # Breadcrumb navigation component
├── �📁 dist/
│   └── territoryservices-theme.css # Compiled theme (ready to use)
├── 📁 examples/
│   ├── preview.html           # Live component preview
│   ├── ExampleComponent.jsx   # React component examples
│   └── ThemeSwitcher.jsx      # Theme switching utilities
├── 📄 package.json           # Build configuration
└── 📚 README.md              # Complete documentation
```

## 🚀 Quick Start

### 1. Build and Preview

```bash
# Install dependencies (if not already done)
npm install

# Build the theme
npm run build:dev

# Open the preview
# Navigate to examples/preview.html in your browser
```

**✅ The theme is already fully functional!** All builds should work without errors.

### 2. Use in Your Project

```bash
# Copy the CSS file to your project
cp dist/territoryservices-theme.css your-project/assets/

# Or install as npm package (when published)
npm install design-tokens-territoryservices
```

**In HTML projects:**

```html
<!-- Include Bootstrap CSS -->
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  rel="stylesheet"
/>
<!-- Include Territory Services theme -->
<link href="assets/territoryservices-theme.css" rel="stylesheet" />
```

**In React projects:**

```jsx
import "bootstrap/dist/css/bootstrap.min.css";
import "design-tokens-territoryservices/dist/territoryservices-theme.css";
```

### 3. Preview Your Theme

Open `examples/preview.html` in your browser to see all components in action:

- **Accordion**: Interactive collapsible content with hover effects
- **Buttons**: Primary, secondary, tertiary variants in all sizes
- **Back to Top**: Circular icon button with Territory Services styling
- **Breadcrumbs**: Navigation component with proper icons
- **Typography**: All heading levels and text styles

### 4. Component Customizations

All components follow Bootstrap CSS custom properties pattern:

**Existing Components:**

- ✅ **Buttons** (`_buttons.scss`) - All Bootstrap button variants with Territory Services styling
- ✅ **Accordion** (`_accordion.scss`) - Complete implementation with:
  - 8px border-radius on items and buttons
  - Hover effects with drop shadows
  - 8px vertical spacing between items
  - Territory Services colors and typography
- ✅ **Back to Top Button** (`_backtotopbutton.scss`) - Circular floating action button
- ✅ **Breadcrumb** (`_breadcrumb.scss`) - Navigation with Territory Services orange icons

### 5. Add More Components

Follow the same pattern for additional components:

```scss
// Example: src/_forms.scss
.form-control {
  --bs-form-control-color: #{$semantic-colours-text-default-charcoal-700};
  --bs-form-control-bg: #{$semantic-colours-bg-base-surface};
  --bs-form-control-border-color: #{$semantic-colours-border-light-grey-200};
}
```

Then import it in `src/index.scss`:

```scss
@use "forms";
```

## 🎨 Component Examples

### Interactive Accordion

```html
<div class="accordion" id="example">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button
        class="accordion-button"
        data-bs-toggle="collapse"
        data-bs-target="#item1"
      >
        Accordion Item
      </button>
    </h2>
    <div id="item1" class="accordion-collapse collapse">
      <div class="accordion-body">Content here...</div>
    </div>
  </div>
</div>

<!-- Requires Bootstrap JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

### Back to Top Button

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

## 🎨 Theme Switching Setup

### For React Applications

```jsx
// 1. Install your theme package
npm install design-tokens-territoryservices

// 2. Import in your React app
import 'design-tokens-territoryservices/dist/territoryservices-theme.css';

// 3. Use standard Bootstrap classes
<button className="btn btn-primary">Territory Services Button</button>
```

### For Multiple Themes

1. **Clone this repository** for each theme variant
2. **Replace `_variables.scss`** with different design tokens
3. **Keep same structure** and build process
4. **Build each theme** to create different CSS files
5. **Use theme switcher** (see `examples/ThemeSwitcher.jsx`)

## 🔧 Key Technical Decisions Made

### ✅ Bootstrap CSS Custom Properties Approach

- Uses Bootstrap 5.3+ `--bs-*` custom properties
- Allows runtime theme switching
- Maintains 100% Bootstrap compatibility
- Future-proof as Bootstrap evolves

### ✅ Design Token Integration

- Maps your `_variables.scss` to Bootstrap variables
- Preserves design token naming convention
- Read-only approach prevents accidental edits

### ✅ Component-by-Component Strategy

- Start with buttons (most commonly used)
- Add components systematically
- Each component in separate file for maintainability

## 🎯 Success Criteria

Your theme is ready when:

- [ ] `npm run build` completes without errors
- [ ] `dist/territoryservices-theme.css` contains actual CSS (not just sourcemap)
- [ ] `examples/preview.html` displays Territory Services styled components
- [ ] Buttons show correct colors, fonts, and spacing
- [ ] All Bootstrap classes work as expected

## 🚨 Common Issues & Solutions

### Issue: Empty CSS Output

**Solution:** Check import paths in `src/index.scss`

### Issue: Variables Not Resolving

**Solution:** Ensure `_variables.scss` is properly imported

### Issue: Colors Not Applying

**Solution:** Verify color values don't have extra `ff` suffix in CSS output

### Issue: Build Errors

**Solution:** Check SCSS syntax, especially CSS custom property declarations

## 📚 Documentation Created

- `README.md` - Complete project documentation
- `THEME-CREATION-GUIDE.md` - Detailed theme creation process
- `examples/` - Working code examples for React integration
- `examples/ThemeSwitcher.jsx` - Complete theme switching implementation

## 🎉 What You've Achieved

You now have:

1. **Production-ready Bootstrap theme infrastructure**
2. **Design token-driven development process**
3. **Multi-theme switching capability**
4. **Complete React integration examples**
5. **Scalable component customization system**
6. **Full Bootstrap compatibility**

## 🔄 Iteration Process

For each new theme:

1. Clone this repository structure
2. Replace design tokens
3. Run build process
4. Test components
5. Deploy theme CSS file
6. Update theme switcher configuration

This approach scales to unlimited theme variants while maintaining consistency and Bootstrap compatibility.
