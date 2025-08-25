import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Generate content loader from markdown files
function generateContentLoader() {
  const content = `
import { Paper, Project, AboutContent } from '@/types/content';

// This file is auto-generated from markdown files in the content directory
// Run 'npm run generate-content' to update this file

export const papers: Paper[] = [
${generatePapersArray()}
];

export const projects: Project[] = [
${generateProjectsArray()}
];

export const aboutContent: AboutContent = {
  bio: ${JSON.stringify(getMarkdownContent('../content/about/bio.md'))},
  experiences: ${JSON.stringify(getMarkdownContent('../content/about/experiences.md'))},
  interests: ${JSON.stringify(getMarkdownContent('../content/about/interests.md'))}
};

export const talks = [
${generateTalksArray()}
];
`;

  const outputPath = path.join(__dirname, '../src/lib/generatedContentLoader.ts');
  fs.writeFileSync(outputPath, content);
  console.log('Generated content loader file at', outputPath);
}

function getMarkdownContent(filePath: string) {
  try {
    const fullPath = path.join(__dirname, filePath);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return {
      ...data,
      content
    };
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return {
      title: '',
      content: ''
    };
  }
}

function generatePapersArray() {
  const papersDir = path.join(__dirname, '../content/papers');
  if (!fs.existsSync(papersDir)) {
    return '';
  }

  const files = fs.readdirSync(papersDir);
  const markdownFiles = files.filter(file => path.extname(file) === '.md');

  return markdownFiles
    .map(file => {
      const filePath = path.join(papersDir, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);
      const slug = path.basename(file, path.extname(file));

      return `  {
    title: ${JSON.stringify(data.title)},
    authors: ${JSON.stringify(data.authors)},
    conference: ${JSON.stringify(data.conference)},
    year: ${JSON.stringify(data.year)},
    tags: ${JSON.stringify(data.tags)},
    pdfUrl: ${JSON.stringify(data.pdfUrl)},
    selected: ${data.selected || 0},
    content: ${JSON.stringify(content)},
    slug: ${JSON.stringify(slug)}
  }`;
    })
    .join(',\n');
}

function generateProjectsArray() {
  const projectsDir = path.join(__dirname, '../content/projects');
  if (!fs.existsSync(projectsDir)) {
    return '';
  }

  const files = fs.readdirSync(projectsDir);
  const markdownFiles = files.filter(file => path.extname(file) === '.md');

  return markdownFiles
    .map(file => {
      const filePath = path.join(projectsDir, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);
      const slug = path.basename(file, path.extname(file));

      return `  {
    id: ${data.id},
    title: ${JSON.stringify(data.title)},
    description: ${JSON.stringify(data.description)},
    detailedDescription: ${JSON.stringify(data.detailedDescription)},
    image: ${JSON.stringify(data.image)},
    tags: ${JSON.stringify(data.tags)},
    categories: ${JSON.stringify(data.categories)},
    githubUrl: ${JSON.stringify(data.githubUrl)},
    selected: ${data.selected || 0},
    content: ${JSON.stringify(content)},
    slug: ${JSON.stringify(slug)}
  }`;
    })
    .join(',\n');
}

function generateTalksArray() {
  const talksDir = path.join(__dirname, '../content/talks');
  if (!fs.existsSync(talksDir)) {
    return '';
  }

  const files = fs.readdirSync(talksDir);
  const markdownFiles = files.filter(file => path.extname(file) === '.md');

  return markdownFiles
    .map(file => {
      const filePath = path.join(talksDir, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);
      const slug = path.basename(file, path.extname(file));

      return `  {
    title: ${JSON.stringify(data.title)},
    event: ${JSON.stringify(data.event)},
    location: ${JSON.stringify(data.location)},
    date: ${JSON.stringify(data.date)},
    slidesUrl: ${JSON.stringify(data.slidesUrl)},
    thumbnail: ${JSON.stringify(data.thumbnail)},
    videoUrl: ${JSON.stringify(data.videoUrl)},
    content: ${JSON.stringify(content)},
    slug: ${JSON.stringify(slug)}
  }`;
    })
    .join(',\n');
}

generateContentLoader();
