# Cognitive Skills & Student Performance Dashboard

## **Project Description**
This project is a **full-stack educational dashboard** that evaluates and visualizes student cognitive skills and performance. It combines **Python (Jupyter Notebook)** for data analysis and machine learning with a **Next.js frontend** for interactive visualization.  

The main objectives are:  
- Analyze correlations between cognitive skills (comprehension, attention, focus, retention) and student performance.  
- Build a simple ML model to predict assessment scores.  
- Cluster students into **learning personas** for better insights.  
- Display an interactive **dashboard** with charts, radar plots, and a searchable/sortable student table.  

This tool is ideal for **educators, researchers, and students** to understand learning patterns and performance trends.

---

## **📁 Folder Structure**

cognitive-dashboard/
│── data/
│ └── students.json # Synthetic student dataset
│
│── notebook/
│ └── analysis.ipynb # Jupyter Notebook: EDA + ML
│
│── dashboard/ # Next.js frontend
│ │── package.json
│ │── next.config.js
│ │── tailwind.config.js
│ │── postcss.config.js
│ │── tsconfig.json (optional if using TypeScript)
│ │
│ ├── public/
│ │ └── students.json # Dataset for frontend
│ │
│ ├── pages/
│ │ ├── index.js # Main dashboard page
│ │ └── _app.js # Global wrapper
│ │
│ ├── components/
│ │ ├── OverviewStats.js # Display average scores/skills
│ │ ├── SkillBarChart.js # Bar chart for skills
│ │ ├── AttentionScatter.js # Scatter plot: attention vs score
│ │ ├── StudentRadar.js # Radar chart per student
│ │ ├── StudentTable.js # Searchable/sortable table
│ │ └── Insights.js # Key insights from data
│ │
│ └── styles/
│ └── globals.css # Tailwind/global styles
│
└── README.md # Project instructions

# **📊 Project Features**

### **1. Jupyter Notebook**
- Load `students.json` dataset
- Correlation analysis between cognitive skills and performance
- Predict `assessment_score` using a simple ML model (Linear Regression)
- Cluster students into learning personas (KMeans)
- Generate visualizations for insights

### **2. Next.js Dashboard**
- Overview stats for average scores and cognitive skills
- Charts:
  - Bar Chart: Cognitive skills vs students
  - Scatter Plot: Attention vs Assessment Score
  - Radar Chart: Individual student skill profile
- Searchable and sortable student table
- Dynamic insights section

---

## **💻 Setup Instructions**

### **1. Prerequisites**
- Node.js (v18+ recommended)
- npm (comes with Node.js)
- Python 3.x (with Jupyter Notebook)
- Optional: Anaconda for easier Python environment management

---

### **2. Run Jupyter Notebook**
1. Navigate to the notebook folder:

```bash
cd cognitive-dashboard/notebook

📬 Author

Hemanth SK
B.Tech CSE (AIML) – REVA University
gmail- hemanthskreddy2@gmail.com