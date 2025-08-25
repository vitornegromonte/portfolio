import { Plugin } from 'vite';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function markdownContentPlugin(): Plugin {
  let config: any;

  return {
    name: 'vite-plugin-markdown-content',
    configResolved(resolvedConfig) {
      config = resolvedConfig;
    },
    resolveId(id) {
      if (id.startsWith('/content/')) {
        return id;
      }
      return null;
    },
    load(id) {
      if (id.endsWith('.md') && (id.includes('/content/papers/') || id.includes('/content/projects/'))) {
        try {
          const fileContent = fs.readFileSync(id, 'utf-8');
          const { data, content } = matter(fileContent);
          
          // Convert frontmatter to JS object
          const frontmatterObj = JSON.stringify(data);
          
          // Return a module that exports both frontmatter and content
          return `
            const frontmatter = ${frontmatterObj};
            const content = ${JSON.stringify(content)};
            export { frontmatter, content };
            export default { frontmatter, content };
          `;
        } catch (error) {
          console.error(`Error processing markdown file ${id}:`, error);
          return `export default { frontmatter: {}, content: '' };`;
        }
      }
      return null;
    }
  };
}