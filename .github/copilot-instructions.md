# Copilot Instructions for Box It Storage

## Project Overview

This is a landing page for Box It Storage, a storage-by-the-box service. The site is a static website deployed via GitHub Pages using Jekyll.

## Technology Stack

- **Frontend**: HTML5, CSS3, vanilla JavaScript
- **React**: Loaded via CDN (UMD builds) - React 18 with Babel standalone for JSX transformation
- **Styling**: Custom CSS with gradients and animations, no CSS framework
- **Font**: DM Sans from Google Fonts
- **Deployment**: GitHub Pages with Jekyll (see `.github/workflows/jekyll-docker.yml`)
- **Payment Integration**: Stripe Pricing Table (embedded via script tag)

## Project Structure

- `index.html` - Main landing page (single-page application)
- `src/components/` - Contains Next.js components (Header.tsx) - likely for future migration
- `public/` - Static assets
- `.github/workflows/` - CI/CD configuration
- Images: `Boxit_logo.png`, `Boxes.png`, `Boxit wall.png` - project assets

## Code Style and Conventions

### HTML
- Use semantic HTML5 elements
- Always include `alt` attributes for images
- Use proper ARIA labels for accessibility
- Keep inline styles minimal - prefer CSS classes

### CSS
- Use custom CSS variables for colors when they appear multiple times
- Animation keyframes should be defined at the top of the style section
- Use mobile-first responsive design principles
- Maintain consistent spacing and indentation (2 spaces)

### JavaScript/React
- When using React via CDN, wrap code in `<script type="text/babel">` tags
- Use functional components with hooks
- Keep components simple and focused
- Avoid adding npm dependencies - the project uses CDN-loaded libraries

### File Naming
- Use kebab-case for HTML/CSS files: `index.html`, `styles.css`
- Use PascalCase for React components: `Header.tsx`, `Footer.tsx`
- Use descriptive names that indicate purpose

## Important Constraints

1. **No Build System**: The main site uses no build tools - it's vanilla HTML/CSS/JS with React via CDN
2. **Static Hosting**: Site is hosted on GitHub Pages, so no server-side code
3. **Jekyll Configuration**: Any files/folders starting with `_` are Jekyll-specific
4. **Keep It Simple**: Avoid adding complex dependencies or build processes
5. **Mobile-First**: Always test changes on mobile viewports (site should be responsive)

## Development Workflow

1. **Local Testing**: Open `index.html` directly in a browser (no server needed for basic testing)
2. **Jekyll Build**: Runs automatically via GitHub Actions on push to `main`
3. **Deployment**: Automatic via GitHub Pages after successful Jekyll build
4. **No Direct Git Operations**: Use the `report_progress` tool for commits

## Content Updates

### Stripe Integration
- Stripe Pricing Table is embedded in the pricing section
- Uses `publishable-key` (never commit secret keys)
- Look for comments like `<!-- REPLACE THIS SECTION WITH YOUR STRIPE CODE -->`

### Contact Information
- Email and phone links are in the footer
- Update these when client contact info changes

### Branding
- Primary colors: Purple gradient (`#667eea` to `#764ba2`), Blue accent (`#3498DB`)
- Logo: `Boxit_logo.png`
- Always maintain brand consistency

## Testing Strategy

- **Manual Testing**: Open in browser and test all interactive elements
- **Responsive Testing**: Check on mobile (resize browser to ~375px width)
- **Cross-browser**: Test in Chrome, Firefox, Safari if making significant changes
- **Link Testing**: Verify all internal anchors and external links work
- **Accessibility**: Check keyboard navigation and screen reader compatibility

## Common Tasks

### Adding New Sections
- Add HTML within the `<body>` tag
- Add corresponding CSS in the `<style>` section
- Use existing animations and styles for consistency

### Modifying Styles
- Color changes: Look in the `:root` or main style definitions
- Layout changes: Use existing flexbox/grid patterns
- Animations: Reference existing keyframe animations

### Image Updates
- Place new images in the root or `public/` directory
- Update image references in HTML
- Optimize images before adding (keep file sizes reasonable)
- Always include descriptive `alt` text

## What NOT to Do

- ❌ Don't add a package.json or npm dependencies
- ❌ Don't introduce build tools (webpack, vite, etc.) unless explicitly requested
- ❌ Don't modify the Jekyll workflow without understanding deployment impact
- ❌ Don't use ES6 modules (site uses script tags and CDN)
- ❌ Don't remove or modify existing animations without testing
- ❌ Don't commit sensitive data (API keys, passwords, etc.)
- ❌ Don't use TypeScript features in the main index.html (no transpilation available)

## Security Considerations

- Always use `publishable-key` for Stripe, never `secret-key`
- Validate all external script sources (CDN URLs)
- Keep CDN library versions up to date for security patches
- Don't store any user data in client-side code

## Accessibility (A11Y)

- Use semantic HTML elements (`<nav>`, `<header>`, `<main>`, `<footer>`)
- Include ARIA labels for interactive elements
- Ensure sufficient color contrast (WCAG AA minimum)
- Make all functionality keyboard accessible
- Test with screen readers when adding interactive features

## Documentation

- Update README.md when making significant changes
- Add comments for complex CSS animations or JavaScript logic
- Document any Stripe configuration changes
- Keep instructions clear for non-technical users (client may manage content)
