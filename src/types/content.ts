export interface Paper {
  title: string;
  authors: string;
  conference: string;
  year: string;
  tags: string[];
  pdfUrl: string;
  selected: number;
  content: string;
  slug: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  detailedDescription?: string;
  image: string;
  tags: string[];
  categories: string[];
  githubUrl?: string;
  liveUrl?: string;
  selected: number;
  content: string;
  slug: string;
}

export interface AboutContent {
  bio: {
    title: string;
    content: string;
  };
  experiences: {
    title: string;
    content: string;
  };
  interests: {
    title: string;
    content: string;
  };
}

export interface Talk {
  title: string;
  event: string;
  location: string;
  date: string;
  slidesUrl: string;
  thumbnail: string;
  videoUrl: string;
  content: string;
  slug: string;
}