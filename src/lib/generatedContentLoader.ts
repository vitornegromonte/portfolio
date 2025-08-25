
import { Paper, Project, AboutContent } from '@/types/content';

// This file is auto-generated from markdown files in the content directory
// Run 'npm run generate-content' to update this file

export const papers: Paper[] = [
  {
    title: "A Mapping Review to Understand Web and Mobile Apps Accessibility for Adults with Autism",
    authors: "D. M. Ribeiro, F. V. Melo, V. Cabral de Oliveira, C. Pereira, A. P. C. Steinmacher, K. Gama",
    conference: "SBSI",
    year: "2025",
    tags: ["Software Engineering","Accessibility"],
    pdfUrl: "https://sol.sbc.org.br/index.php/sbsi/article/view/34351",
    selected: 1,
    content: "\n# A Mapping Review to Understand Web and Mobile Apps Accessibility for Adults with Autism\n\nThis paper presents a comprehensive mapping review to understand the current state of accessibility in web and mobile applications for adults with autism. Our research identifies key challenges, existing solutions, and gaps in the literature that need to be addressed to improve digital accessibility for this demographic.",
    slug: "paper-1"
  },
  {
    title: "A Comparative Study on Accessibility for Autistic Individuals with Urban Mobility Apps",
    authors: "D. M. Ribeiro, F. V. Melo, V. Negromonte, G. W. Matias, A. Farias, C. Azul, A. P. Chaves, K. Gama",
    conference: "IHC",
    year: "2024",
    tags: ["Software Engineering","Accessibility"],
    pdfUrl: "https://sol.sbc.org.br/index.php/ihc/article/view/32895",
    selected: 1,
    content: "\n# A Comparative Study on Accessibility for Autistic Individuals with Urban Mobility Apps\n\nThis research presents a comparative study on the accessibility features of urban mobility apps for individuals with autism. We analyzed popular transportation apps to identify accessibility features, evaluate their effectiveness, and provide recommendations for improvement. Our findings highlight the need for more inclusive design practices in urban mobility applications.",
    slug: "paper-2"
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "MARS: Multi Agent Recommendation System",
    description: "FastAPI-based API designed to automate the collection of research papers from ArXiv.",
    detailedDescription: "A FastAPI-based API designed to automate the collection of research papers from ArXiv, use LLM-based agents to review and filter the papers, and then send selected results directly to your email. The system uses a combination of vector embeddings and LLM agents to find the most relevant papers based on your research interests.",
    image: "https://images.unsplash.com/photo-1630694093867-4b947d812bf0?q=80&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["NLP","Python","FastAPI","HuggingFace"],
    categories: ["Natural Language Processing"],
    githubUrl: "https://github.com/vitornegromonte/mars",
    selected: 1,
    content: "\n# MARS: Multi Agent Recommendation System\n\nThis project implements a sophisticated paper recommendation system that leverages multiple AI agents to filter and recommend research papers from ArXiv based on user interests. The system combines vector embeddings with LLM-based agents to provide highly relevant paper recommendations.\n\n## Features\n\n- Automated paper collection from ArXiv\n- Multi-agent filtering system\n- Email notifications with recommended papers\n- Customizable research interests\n- FastAPI-based RESTful API\n\n## Technologies Used\n\n- FastAPI\n- Hugging Face Transformers\n- Vector embeddings\n- Python",
    slug: "project-1"
  },
  {
    id: 2,
    title: "Parkinson Diagnosis using Computer Vision",
    description: "Developed a CNN-based approach for detecting Parkinson's disease at various stages.",
    detailedDescription: "Developed a CNN-based approach for detecting Parkinson's disease at various stages using images of spirals drawn on paper. Our model outperformed state-of-the-art methods on the same dataset by approximately 10%, achieving an impressive 95% accuracy. The approach uses a custom CNN architecture optimized for detecting subtle variations in hand-drawn spirals.",
    image: "https://images.unsplash.com/photo-1527066579998-dbbae57f45ce?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Python","PyTorch","CNN","Medical Imaging","Computer Vision"],
    categories: ["Healthcare","Computer Vision"],
    githubUrl: "https://github.com/vitornegromonte/CPNE2024",
    selected: 1,
    content: "\n# Parkinson Diagnosis using Computer Vision\n\nThis project focuses on developing a computer vision solution for early detection of Parkinson's disease using spiral drawings. The system analyzes hand-drawn spirals to identify patterns indicative of Parkinson's disease at various stages.\n\n## Key Achievements\n\n- Achieved 95% accuracy on the test dataset\n- Outperformed state-of-the-art methods by 10%\n- Custom CNN architecture optimized for spiral analysis\n- Real-world medical application with significant impact\n\n## Technologies Used\n\n- PyTorch\n- Convolutional Neural Networks (CNN)\n- Python\n- Medical imaging processing",
    slug: "project-2"
  },
  {
    id: 3,
    title: "Computer Vision in Breast Cancer Diagnosis",
    description: "Comparative analysis of CNN models for enhancing early detection of breast cancer.",
    detailedDescription: "A comprehensive comparative analysis of CNN models with the aim of enhancing early detection capabilities for breast cancer through the utilization of mammography images from the CBIS-DDSM dataset. The research evaluated various CNN architectures to identify the most effective approach for accurate breast cancer detection and classification.",
    image: "https://images.unsplash.com/photo-1631048004841-2e300cc687f7?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Computer Vision","CNN","Python","TensorFlow","Medical Imaging","OpenCV"],
    categories: ["Healthcare","Computer Vision"],
    githubUrl: "https://github.com/vitornegromonte/breast_cancer-classification",
    selected: 1,
    content: "\n# Computer Vision in Breast Cancer Diagnosis\n\nThis research project provides a comprehensive comparison of various CNN architectures for breast cancer detection using mammography images. The goal is to identify the most effective approach for early detection and classification of breast cancer.\n\n## Methodology\n\n- Analysis of CBIS-DDSM dataset\n- Implementation of multiple CNN architectures\n- Performance comparison and evaluation\n- Identification of optimal model for breast cancer detection\n\n## Results\n\n- Detailed performance metrics for each model\n- Identification of most effective CNN architecture\n- Practical recommendations for medical imaging applications\n\n## Technologies Used\n\n- TensorFlow\n- Convolutional Neural Networks (CNN)\n- Python\n- Medical imaging datasets",
    slug: "project-3"
  },
  {
    id: 4,
    title: "FashionMNIST Comparative Analysis",
    description: "Comparing various ML and deep learning models on the FashionMNIST dataset.",
    detailedDescription: "Fashion MNIST comparative analysis using multiple machine learning models: Multi-Layer Perceptron, CNNs (VGG, ResNet, GoogLeNet, DenseNet), a custom CNN model built from scratch, and traditional machine learning models (Random Forest, SVM, DecisionTree, KNN, AdaBoost, Naive Bayes, Logistic Regression). The project includes comprehensive performance metrics and analysis.",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["PyTorch","Keras","Python","TensorFlow","SciKit-Learn","Computer Vision"],
    categories: ["Machine Learning","Computer Vision"],
    githubUrl: "https://github.com/vitornegromonte/FashionMNIST-ComparativeAnalysis",
    selected: 0,
    content: "\n# FashionMNIST Comparative Analysis\n\nThis project provides a comprehensive comparative analysis of various machine learning and deep learning models on the FashionMNIST dataset. The research evaluates the performance of both traditional ML algorithms and modern deep learning architectures.\n\n## Models Evaluated\n\n- Multi-Layer Perceptron (MLP)\n- Convolutional Neural Networks (CNNs)\n- VGG, ResNet, GoogLeNet, DenseNet architectures\n- Traditional ML models (Random Forest, SVM, Decision Tree, etc.)\n- Custom CNN model built from scratch\n\n## Key Findings\n\n- Performance comparison across all models\n- Analysis of computational efficiency\n- Identification of optimal approaches for image classification\n- Practical insights for model selection\n\n## Technologies Used\n\n- PyTorch\n- Keras/TensorFlow\n- SciKit-Learn\n- Python",
    slug: "project-4"
  }
];

export const aboutContent: AboutContent = {
  bio: {"title":"Bio","content":"\nUndergraduate Information Systems student at the Federal University of Pernambuco (UFPE), focused on machine learning and AI. Currently working as a researcher at Geraia (Generative AI and LLMs).\n\nCo-founded Ligia (AI League at UFPE) and previously co-founded the startup redduo.ai. My research interests include computer vision and energy-efficient machine learning.\n\n<!-- LONG_BIO_START -->\n\nUndergraduate Information Systems student at the Federal University of Pernambuco (UFPE), focused on data science and machine learning. Served as a teaching assistant for Computational Creativity and Introduction to Deep Learning.\n\nDuring my sophomore year, I joined the Brazilian National Institute of Software Engineering as a Research Assistant in the Smart Cities and IoT Group, advised by Kiev Gama, Ana Paula Chaves (NAU), and Danilo Ribeiro (Cesar School). I co-authored papers accepted at IHC 2024 and SBSI 2025.\n\nAt the end of that year, I joined the Geraia group, where I research Generative AI — evaluating large language models in Portuguese and other emerging languages. I'm also interested in energy-efficient generative models, with a focus on low-resource deployment scenarios.\n\nI co-founded Ligia — UFPE's Artificial Intelligence League, a nonprofit initiative dedicated to AI research, competitions, and education. As Outreach Director, I lead strategic partnerships, organize AI-centered events, and develop educational materials to promote AI understanding and application across disciplines.\n\nI also co-founded the AI startup redduo.ai, where I briefly served as Chief Data Officer and co-Chief Technology Officer.\n\nOutside academics, I enjoy photography, reading, sports, and creative coding.\n\n<!-- LONG_BIO_END -->"},
  experiences: {"title":"Experiences","content":"\n## Education\n\n- **B.Sc. in Information Systems**\n  2025 - Present\n  Federal University of Pernambuco\n  After three years majoring in Statistics, transferred to Information Systems/Computer Science.\n\n- **B.Sc. in Statistics**\n  2022 - 2024\n  Federal University of Pernambuco\n  Major in Statistics but with research focus on machine learning and computational intelligence.\n\n## Work Experience\n\n- **Machine Learning Engineer (Freelancer)**\n  2024 - Present\n  Confidential Client - Under NDA\n  Designed and implemented a complete computer vision pipeline for edge deployment, including dataset creation, image pre-processing, model training, and inference. Managed cluster setup and optimization for efficient large-scale training. Work conducted under NDA, with a focus on scalable, resource-efficient solutions for AI on edge devices.\n\n- **Co-founder and Data Scientist**\n  2023 - 2024\n  redduo.ai\n  Worked as a Data Scientist, conducting data analysis to support business intelligence initiatives and developing software automations. Additionally served as an AI Scientist, contributing to the development of core AI models with a focus on optimization and performance enhancement.\n\n## Research Experience\n\n- **Undergraduate Researcher**\n  2023 - Present\n  Geraia, Federal University of Pernambuco\n  Conducting research in Generative AI, focusing on evaluating Language Models in Portuguese for performance, scalability, and adaptability in emergent languages. Investigating energy-efficient AI for sustainable training and inference, optimizing generative models for deployment on low-resource devices.\n\n- **Undergraduate Research Assistant**\n  2023 - 2024\n  National Institute of Software Engineering (INES)\n  While working at the Brazilian Ministry of Science and Technology - National Institute of Software Engineering I have assisted in developing quantitative tools for analysis and enhancing accessibility techniques for apps designed to support adults on the autism spectrum.\n\n## Extracurricular\n\n- **Co-founder and Outreach Director**\n  2024 - Present\n  Ligia\n  Ligia is a nonprofit based at the Federal University of Pernambuco, focused on research, competitions, and education in Artificial Intelligence. We aim to support innovation and develop talent within the university and nearby communities. Our work includes advancing research, building real-world AI solutions, and making AI and Data Science education more accessible through free, high-quality content.\n\n## Teaching\n\n- **Introduction to Deep Learning**\n  2024 - Present\n  Federal University of Pernambuco\n  Taught fundamental Deep Learning concepts, covering Recurrent Neural Networks (RNNs), Convolutional Neural Networks (CNNs), and Transformer architectures.\n\n- **Computational Creativity**\n  2023 - 2025\n  Federal University of Pernambuco\n  Assisted in a Computational Creativity course that investigated the use of Generative AI (Diffusion Models, LLMs) in creative applications."},
  interests: {"title":"Skills & Interests","content":"\n## Programming Languages\n\n- Python\n- R\n- SQL\n- LaTeX\n\n## Tools & Frameworks\n\n- TensorFlow\n- PyTorch\n- Scikit-learn\n- Pandas\n- NumPy\n- Matplotlib\n- Jupyter\n- Git\n- PostgreSQL\n- FastAPI\n- Plotly\n- OpenCV\n\n## Research Interests\n\n- Bio-inspired computing\n- Data-centric modeling\n- Efficient AI/TinyML\n- Diffusion and Energy-based models\n- Meta-learning\n- Reinforcement Learning"}
};

export const talks = [
  {
    title: "Parkinson Diagnosis using Computer Vision",
    event: "Campus Party",
    location: "Recife, Brazil",
    date: "Sep 2024",
    slidesUrl: "/cp_keynote.pdf",
    thumbnail: "/cp_thumbnail.jpg",
    videoUrl: "",
    content: "\n# Parkinson Diagnosis using Computer Vision\n\nExplored the current state and future directions of AI in Parkinson Diagnosis.\n\nThis talk presented our research on using computer vision techniques to diagnose Parkinson's disease through the analysis of spiral drawings. The presentation covered:\n\n- Our CNN-based approach for detecting Parkinson's disease at various stages\n- Dataset creation and preprocessing techniques\n- Model architecture and training methodology\n- Results and performance metrics\n- Future directions for research in this area\n\nThe talk was well-received and sparked interesting discussions about the potential applications of AI in healthcare diagnostics.",
    slug: "talk-1"
  },
  {
    title: "Really Important Talk",
    event: "Life",
    location: "World",
    date: "",
    slidesUrl: "",
    thumbnail: "https://t4.ftcdn.net/jpg/05/20/17/95/360_F_520179522_wrI8zucLkyCbBylaMXL8RMd8Jt4iniZR.jpg",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    content: "\n# Really Important Talk\n\nThis is a really important talk that you should watch.",
    slug: "talk-2"
  }
];
