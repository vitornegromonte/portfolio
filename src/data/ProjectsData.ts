
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
}

const projects: Project[] = [
  {
    id: 1,
    title: "MARS: Multi Agent Recommendation System",
    description: "FastAPI-based API designed to automate the collection of research papers from ArXiv.",
    detailedDescription: "A FastAPI-based API designed to automate the collection of research papers from ArXiv, use LLM-based agents to review and filter the papers, and then send selected results directly to your email. The system uses a combination of vector embeddings and LLM agents to find the most relevant papers based on your research interests.",
    image: "https://images.unsplash.com/photo-1630694093867-4b947d812bf0?q=80&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["NLP", "Python", "FastAPI", "HuggingFace"],
    categories: ["Natural Language Processing"],
    githubUrl: "https://github.com/vitornegromonte/mars",
  },
  {
    id: 2,
    title: "Parkinson Diagnosis using Computer Vision",
    description: "Developed a CNN-based approach for detecting Parkinson's disease at various stages.",
    detailedDescription: "Developed a CNN-based approach for detecting Parkinson's disease at various stages using images of spirals drawn on paper. Our model outperformed state-of-the-art methods on the same dataset by approximately 10%, achieving an impressive 95% accuracy. The approach uses a custom CNN architecture optimized for detecting subtle variations in hand-drawn spirals.",
    image: "https://images.unsplash.com/photo-1527066579998-dbbae57f45ce?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Python", "PyTorch", "CNN", "Medical Imaging", "Computer Vision"],
    categories: ["Healthcare", "Computer Vision"],
    githubUrl: "https://github.com/vitornegromonte/CPNE2024"
  },
  {
    id: 3,
    title: "Computer Vision in Breast Cancer Diagnosis",
    description: "Comparative analysis of CNN models for enhancing early detection of breast cancer.",
    detailedDescription: "A comprehensive comparative analysis of CNN models with the aim of enhancing early detection capabilities for breast cancer through the utilization of mammography images from the CBIS-DDSM dataset. The research evaluated various CNN architectures to identify the most effective approach for accurate breast cancer detection and classification.",
    image: "https://images.unsplash.com/photo-1631048004841-2e300cc687f7?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Computer Vision", "CNN", "Python", "TensorFlow", "Medical Imaging", "OpenCV"],
    categories: ["Healthcare", "Computer Vision"],
    githubUrl: "https://github.com/vitornegromonte/breast_cancer-classification "
  },
  {
    id: 4,
    title: "FashionMNIST Comparative Analysis",
    description: "Comparing various ML and deep learning models on the FashionMNIST dataset.",
    detailedDescription: "Fashion MNIST comparative analysis using multiple machine learning models: Multi-Layer Perceptron, CNNs (VGG, ResNet, GoogLeNet, DenseNet), a custom CNN model built from scratch, and traditional machine learning models (Random Forest, SVM, DecisionTree, KNN, AdaBoost, Naive Bayes, Logistic Regression). The project includes comprehensive performance metrics and analysis.",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["PyTorch", "Keras", "Python", "TensorFlow", "SciKit-Learn", "Computer Vision"],
    categories: ["Machine Learning", "Computer Vision"],
    githubUrl: "https://github.com/vitornegromonte/FashionMNIST-ComparativeAnalysis"
  }
];

export default projects;
