import { Paper, Project } from '@/types/content';

// This is a placeholder - in a real implementation, we'd generate this file at build time
// For now, we'll export the existing data structure converted to the new format

export const papers: Paper[] = [
  {
    title: "A Mapping Review to Understand Web and Mobile Apps Accessibility for Adults with Autism",
    authors: "D. M. Ribeiro, F. V. Melo, V. Cabral de Oliveira, C. Pereira, A. P. C. Steinmacher, K. Gama",
    conference: "SBSI",
    year: "2025",
    tags: ["Software Engineering", "Accessibility"],
    pdfUrl: "https://sol.sbc.org.br/index.php/sbsi/article/view/34351",
    content: "# A Mapping Review to Understand Web and Mobile Apps Accessibility for Adults with Autism\n\nThis paper presents a comprehensive mapping review to understand the current state of accessibility in web and mobile applications for adults with autism. Our research identifies key challenges, existing solutions, and gaps in the literature that need to be addressed to improve digital accessibility for this demographic.",
    slug: "paper-1"
  },
  {
    title: "A Comparative Study on Accessibility for Autistic Individuals with Urban Mobility Apps",
    authors: "D. M. Ribeiro, F. V. Melo, V. Negromonte, G. W. Matias, A. Farias, C. Azul, A. P. Chaves, K. Gama",
    conference: "IHC",
    year: "2024",
    tags: ["Software Engineering", "Accessibility"],
    pdfUrl: "https://sol.sbc.org.br/index.php/ihc/article/view/32895",
    content: "# A Comparative Study on Accessibility for Autistic Individuals with Urban Mobility Apps\n\nThis research presents a comparative study on the accessibility features of urban mobility apps for individuals with autism. We analyzed popular transportation apps to identify accessibility features, evaluate their effectiveness, and provide recommendations for improvement. Our findings highlight the need for more inclusive design practices in urban mobility applications.",
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
    tags: ["NLP", "Python", "FastAPI", "HuggingFace"],
    categories: ["Natural Language Processing"],
    githubUrl: "https://github.com/vitornegromonte/mars",
    content: "# MARS: Multi Agent Recommendation System\n\nThis project implements a sophisticated paper recommendation system that leverages multiple AI agents to filter and recommend research papers from ArXiv based on user interests. The system combines vector embeddings with LLM-based agents to provide highly relevant paper recommendations.\n\n## Features\n\n- Automated paper collection from ArXiv\n- Multi-agent filtering system\n- Email notifications with recommended papers\n- Customizable research interests\n- FastAPI-based RESTful API\n\n## Technologies Used\n\n- FastAPI\n- Hugging Face Transformers\n- Vector embeddings\n- Python",
    slug: "project-1"
  },
  {
    id: 2,
    title: "Parkinson Diagnosis using Computer Vision",
    description: "Developed a CNN-based approach for detecting Parkinson's disease at various stages.",
    detailedDescription: "Developed a CNN-based approach for detecting Parkinson's disease at various stages using images of spirals drawn on paper. Our model outperformed state-of-the-art methods on the same dataset by approximately 10%, achieving an impressive 95% accuracy. The approach uses a custom CNN architecture optimized for detecting subtle variations in hand-drawn spirals.",
    image: "https://images.unsplash.com/photo-1527066579998-dbbae57f45ce?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Python", "PyTorch", "CNN", "Medical Imaging", "Computer Vision"],
    categories: ["Healthcare", "Computer Vision"],
    githubUrl: "https://github.com/vitornegromonte/CPNE2024",
    content: "# Parkinson Diagnosis using Computer Vision\n\nThis project focuses on developing a computer vision solution for early detection of Parkinson's disease using spiral drawings. The system analyzes hand-drawn spirals to identify patterns indicative of Parkinson's disease at various stages.\n\n## Key Achievements\n\n- Achieved 95% accuracy on the test dataset\n- Outperformed state-of-the-art methods by 10%\n- Custom CNN architecture optimized for spiral analysis\n- Real-world medical application with significant impact\n\n## Technologies Used\n\n- PyTorch\n- Convolutional Neural Networks (CNN)\n- Python\n- Medical imaging processing",
    slug: "project-2"
  },
  {
    id: 3,
    title: "Computer Vision in Breast Cancer Diagnosis",
    description: "Comparative analysis of CNN models for enhancing early detection of breast cancer.",
    detailedDescription: "A comprehensive comparative analysis of CNN models with the aim of enhancing early detection capabilities for breast cancer through the utilization of mammography images from the CBIS-DDSM dataset. The research evaluated various CNN architectures to identify the most effective approach for accurate breast cancer detection and classification.",
    image: "https://images.unsplash.com/photo-1631048004841-2e300cc687f7?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Computer Vision", "CNN", "Python", "TensorFlow", "Medical Imaging", "OpenCV"],
    categories: ["Healthcare", "Computer Vision"],
    githubUrl: "https://github.com/vitornegromonte/breast_cancer-classification",
    content: "# Computer Vision in Breast Cancer Diagnosis\n\nThis research project provides a comprehensive comparison of various CNN architectures for breast cancer detection using mammography images. The goal is to identify the most effective approach for early detection and classification of breast cancer.\n\n## Methodology\n\n- Analysis of CBIS-DDSM dataset\n- Implementation of multiple CNN architectures\n- Performance comparison and evaluation\n- Identification of optimal model for breast cancer detection\n\n## Results\n\n- Detailed performance metrics for each model\n- Identification of most effective CNN architecture\n- Practical recommendations for medical imaging applications\n\n## Technologies Used\n\n- TensorFlow\n- Convolutional Neural Networks (CNN)\n- Python\n- Medical imaging datasets",
    slug: "project-3"
  },
  {
    id: 4,
    title: "FashionMNIST Comparative Analysis",
    description: "Comparing various ML and deep learning models on the FashionMNIST dataset.",
    detailedDescription: "Fashion MNIST comparative analysis using multiple machine learning models: Multi-Layer Perceptron, CNNs (VGG, ResNet, GoogLeNet, DenseNet), a custom CNN model built from scratch, and traditional machine learning models (Random Forest, SVM, DecisionTree, KNN, AdaBoost, Naive Bayes, Logistic Regression). The project includes comprehensive performance metrics and analysis.",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["PyTorch", "Keras", "Python", "TensorFlow", "SciKit-Learn", "Computer Vision"],
    categories: ["Machine Learning", "Computer Vision"],
    githubUrl: "https://github.com/vitornegromonte/FashionMNIST-ComparativeAnalysis",
    content: "# FashionMNIST Comparative Analysis\n\nThis project provides a comprehensive comparative analysis of various machine learning and deep learning models on the FashionMNIST dataset. The research evaluates the performance of both traditional ML algorithms and modern deep learning architectures.\n\n## Models Evaluated\n\n- Multi-Layer Perceptron (MLP)\n- Convolutional Neural Networks (CNNs)\n- VGG, ResNet, GoogLeNet, DenseNet architectures\n- Traditional ML models (Random Forest, SVM, Decision Tree, etc.)\n- Custom CNN model built from scratch\n\n## Key Findings\n\n- Performance comparison across all models\n- Analysis of computational efficiency\n- Identification of optimal approaches for image classification\n- Practical insights for model selection\n\n## Technologies Used\n\n- PyTorch\n- Keras/TensorFlow\n- SciKit-Learn\n- Python",
    slug: "project-4"
  }
];