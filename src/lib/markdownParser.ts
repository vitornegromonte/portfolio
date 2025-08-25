import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface FrontMatter {
  [key: string]: any;
}

export interface MarkdownContent<T extends FrontMatter> {
  frontMatter: T;
  content: string;
  slug: string;
}

export function parseMarkdownFile<T extends FrontMatter>(
  filePath: string
): MarkdownContent<T> {
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const slug = path.basename(filePath, path.extname(filePath));
  
  return {
    frontMatter: data as T,
    content,
    slug
  };
}

export function parseMarkdownDirectory<T extends FrontMatter>(
  directory: string
): MarkdownContent<T>[] {
  const files = fs.readdirSync(directory);
  const markdownFiles = files.filter(file => path.extname(file) === '.md');
  
  return markdownFiles
    .map(file => parseMarkdownFile<T>(path.join(directory, file)))
    .sort((a, b) => {
      // Sort by date if available, otherwise by filename
      const dateA = a.frontMatter.date ? new Date(a.frontMatter.date).getTime() : 0;
      const dateB = b.frontMatter.date ? new Date(b.frontMatter.date).getTime() : 0;
      return dateB - dateA; // Newest first
    });
}