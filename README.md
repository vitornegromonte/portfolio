# Personal Portfolio

This is my personal portfolio website built with React, TypeScript, and Vite.

## Deployment to GitHub Pages

This repository is configured to automatically deploy to GitHub Pages using GitHub Actions.

### Automatic Deployment

The site is automatically deployed to GitHub Pages whenever changes are pushed to the `main` branch. The deployment workflow is defined in `.github/workflows/deploy.yml`.

### Manual Deployment

If you need to deploy manually, you can use the following commands:

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### Custom Domain

The custom domain `vitornegromonte.github.io` is configured in the `public/CNAME` file.

## Development

### Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser to `http://localhost:8080`

### Building for Production

```bash
npm run build
```

The build output will be in the `dist` directory.

### Updating Content

Content is managed through markdown files in the `content` directory:
- `content/papers/` - Academic papers
- `content/projects/` - Projects
- `content/talks/` - Talks and presentations
- `content/about/` - About page content

To update content, simply edit the markdown files and rebuild the site.

## Technologies Used

- React with TypeScript
- Vite for building
- Tailwind CSS for styling
- shadcn/ui components
- GitHub Actions for CI/CD
- GitHub Pages for hosting

## License

This project is licensed under the MIT License.