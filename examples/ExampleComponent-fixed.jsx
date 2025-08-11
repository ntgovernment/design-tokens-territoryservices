// Example React component using Territory Services Design Tokens
// Save this as ExampleComponent.jsx in your React project

import React from "react";
// Import the compiled CSS theme
import "design-tokens-territoryservices/dist/territoryservices-theme.css";

const ExampleComponent = () => {
  return (
    <div className="container-fluid">
      {/* Header section */}
      <header className="bg-dark text-white p-5">
        <h1 className="h2 mb-3">Territory Services Bootstrap Theme</h1>
        <p className="mb-0">
          Using Bootstrap classes with Territory Services design tokens
        </p>
      </header>

      {/* Main content */}
      <main className="p-5">
        <div className="mb-5">
          <h2 className="h3 mb-4">Typography Examples</h2>

          <h3 className="h4 mb-3">Headings</h3>
          <h1 className="h1">Heading 1</h1>
          <h2 className="h2">Heading 2</h2>
          <h3 className="h3">Heading 3</h3>
          <h4 className="h4">Heading 4</h4>
          <h5 className="h5">Heading 5</h5>
          <h6 className="h6">Heading 6</h6>

          <h3 className="h4 mb-3">Body Text</h3>
          <p className="fs-5">Large body text for important content</p>
          <p>Medium body text for regular content</p>
          <p className="small">Small body text for secondary information</p>
        </div>

        {/* Button examples */}
        <div className="mb-5">
          <h2 className="h3 mb-4">Button Examples</h2>
          <div className="mb-4">
            <button className="btn btn-primary me-3">Primary Button</button>
            <button className="btn btn-secondary me-3">Secondary Button</button>
            <button className="btn btn-outline-primary me-3">
              Outline Primary
            </button>
          </div>

          <div className="mb-4">
            <button className="btn btn-primary btn-sm me-3">
              Small Button
            </button>
            <button className="btn btn-primary me-3">Default Button</button>
            <button className="btn btn-primary btn-lg me-3">
              Large Button
            </button>
          </div>

          <div className="mb-4">
            <button className="btn btn-primary me-3">Normal</button>
            <button className="btn btn-primary me-3" disabled>
              Disabled Button
            </button>
          </div>
        </div>

        {/* Accordion examples */}
        <div className="mb-5">
          <h2 className="h3 mb-4">Accordion Examples</h2>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
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
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  This is the first item's accordion body with Territory
                  Services styling.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Accordion Item #2
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  This is the second item's accordion body. It features rounded
                  corners, hover effects, and proper spacing.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Accordion Item #3
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  This is the third item's accordion body with all Territory
                  Services design tokens applied.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Color examples */}
        <div className="mb-5">
          <h2 className="h3 mb-4">Bootstrap Color Classes</h2>

          <div className="mb-4">
            <h3 className="h5 mb-3">Text Colors</h3>
            <p className="text-body mb-3">Default body text</p>
            <p className="text-primary mb-3">Primary text</p>
            <p className="text-info mb-3">Info text</p>
            <p className="text-success mb-3">Success text</p>
            <p className="text-warning mb-3">Warning text</p>
            <p className="text-danger mb-3">Danger text</p>
            <p className="text-muted mb-3">Muted text</p>
          </div>

          <div className="mb-4">
            <h3 className="h5 mb-3">Background Colors</h3>
            <div className="bg-info p-3 mb-3">Info background</div>
            <div className="bg-success p-3 mb-3">Success background</div>
            <div className="bg-warning p-3 mb-3">Warning background</div>
            <div className="bg-danger p-3 mb-3">Danger background</div>
            <div className="bg-light p-3 mb-3">Light background</div>
            <div className="bg-secondary p-3 mb-3">Secondary background</div>
          </div>
        </div>

        {/* Bootstrap Grid example */}
        <div className="mb-5">
          <h2 className="h3 mb-4">Bootstrap Grid System</h2>

          <div className="row">
            <div className="col-md-4">
              <div className="bg-primary text-white p-3 mb-3">Column 1</div>
            </div>
            <div className="col-md-4">
              <div className="bg-secondary p-3 mb-3">Column 2</div>
            </div>
            <div className="col-md-4">
              <div className="bg-info p-3 mb-3">Column 3</div>
            </div>
          </div>
        </div>

        {/* CSS Custom Properties example */}
        <div className="mb-5">
          <h2 className="h3 mb-4">CSS Custom Properties</h2>
          <div
            style={{
              backgroundColor: "var(--bs-primary)",
              color: "var(--bs-white)",
              padding: "1rem",
              borderRadius: "0.375rem",
            }}
          >
            This div uses Bootstrap CSS custom properties with Territory
            Services values
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-secondary p-4 text-center">
        <p className="small mb-0">
          Built with Bootstrap classes and Territory Services Design Tokens
        </p>
      </footer>
    </div>
  );
};

export default ExampleComponent;
