import type { Experience } from './types';

export const experience: Experience[] = [
    {
        title: "Associate Full Stack AI Engineer",
        company: "AI Alpha Tech, Nashik",
        period: "06/2024 - Present",
        location: "Nashik, India",
        contact: "hr@aialphatech.com - +91 86240 77980",
        projects: [
            {
                name: "Industrial & Retail Object Tracking Systems (SaaS)",
                tech: "YOLOv8, SAM2, AWS Lambda, Docker, OpenCV, React",
                description: "Unified retail/industrial tracking suite (YOLOv8, SAM2, React) on AWS Lambda. Autonomous inventory management reduced shrinkage by 40%."
            },
            {
                name: "Identity Verification & Anti-Spoofing System (SaaS)",
                tech: "Deep Learning, OpenCV, Docker, FaceNet, TensorFlow, Android",
                description: "Identity verification & anti-spoofing system (92-95% accuracy). Deployed on Android/Docker to prevent presentation attacks."
            },
            {
                name: "Diamond Defect Detection & Analysis",
                tech: "Ghidra, Python, OpenCV, Reverse Engineering",
                description: "Reverse-engineered Sarine formats for custom AI defect detection, saving $50K+/year in licensing."
            },
            {
                name: "Automated Map Merging System",
                tech: "OpenCV, IPAN99, Kohonen SOFM",
                description: "Jigsaw-like map stitching system using curve matching/color similarity to merge 90+ sub-divisional maps without GIS data."
            },
            {
                name: "Vehicle Detection & ANPR System",
                tech: "YOLOv8, OCR, PyTorch, TensorFlow, OpenCV",
                description: "Real-time ANPR & vehicle detection (YOLOv8, OCR). Implemented custom CNNs for >90% accuracy."
            },
            {
                name: "Physiotherapy Pose Detection",
                tech: "MediaPipe, OpenCV, React",
                description: "Real-time exercise monitoring system with angle calculations and form correction, providing 95%+ landmark detection accuracy."
            },

            {
                name: "Trading Automation System",
                tech: "Python, ML Models, APIs",
                description: "Algorithmic trading platform with ML-based price prediction and systematic risk management for 24/7 market participation."
            },

            {
                name: "AI Alpha Tech Corporate & Portfolio Platforms",
                tech: "React, TypeScript, Next.js, Headless CMS, Tailwind CSS",
                description: "Built responsive corporate/portfolio sites with Next.js/Vite. Optimized for SEO and performance."
            },
            {
                name: "CCTV Analytics System (SaaS)",
                tech: "YOLO, Face Recognition, Python, OpenCV",
                description: "Intelligent video surveillance system for security and monitoring, incorporating anomaly detection, person tracking, and real-time alerts."
            },

            {
                name: "AI Agent - Conversational Assistant",
                tech: "Python, FastAPI, NLP, Intent Recognition",
                description: "Custom AI agent for task automation/customer support, reducing manual interactions by 40% via NLP."
            },

        ]
    },
    {
        title: "Junior Full Stack Developer",
        company: "N B Productions & Films",
        period: "04/2021 - 05/2024",
        location: "Pune, India",
        contact: "nbproductionsandfilms@gmail.com - +91 98239 99633",
        projects: [
            {
                name: "Fury (Booth) - Fashion E-commerce",
                tech: "HTML5, CSS3, Vanilla JS, Swiper.js",
                description: "Responsive, visually rich landing page for high-end fashion, integrating carousel sliders and modern UI."
            },
            {
                name: "Telegram-to-Email AI Bot",
                tech: "AWS Lambda, Google Sheets, OpenAI, Python",
                description: "Serverless AWS Lambda email agent. Automated lead fetching and personalized emailing (100% automation)."
            },
            {
                name: "Social Media Automation (Selenium)",
                tech: "Selenium, Python, Tkinter, GUI",
                description: "Multi-platform content scheduler (FB, Insta, LinkedIn, Twitter) using cookie-based session persistence."
            },
            {
                name: "Image Captioning System",
                tech: "TensorFlow, Keras, LSTM, CNN",
                description: "Deep learning application combining CNNs for feature extraction and LSTMs to generate descriptive text captions for images."
            },
            {
                name: "Movie Recommendation System",
                tech: "Python, Scikit-learn, Content-Based Filtering",
                description: "Hybrid recommendation engine merging demographics and content similarities (plot/cast) for diverse suggestions."
            },
            {
                name: "Speech Emotion Recognition",
                tech: "PyTorch, Hugging Face wav2vec2, SoundDevice",
                description: "Real-time speech emotion recognition tool utilizing pre-trained transformers."
            },


            {
                name: "Marketing & Team Automation System",
                tech: "n8n, Agentic AI, Webhooks, Automation",
                description: "Implemented n8n workflows and Agentic AI agents to automate marketing campaigns and streamline team management tasks, boosting operational efficiency."
            }
        ]
    },
    {
        title: "Data Science & Research Intern",
        company: "Indian Space Research Organization (ISRO)",
        period: "07/2023 - 12/2023",
        location: "Ahmedabad, Gujarat, India",
        contact: "SMT. Durga Digdarsini - digdarsini@sac.isro.gov.in",
        descriptionLines: [
            "**GNSS Positioning Research**: Developed Adaptive Kalman Filter (MLE), improving navigation accuracy by **37%** and reducing noise by **30%**.",
            "**Simulation & Hybrid Systems**: Simulated Moving Window Average (87% accuracy) and built hybrid GNSS system (Least Squares + Random Forest) for 4.48m positional accuracy.",
            "**DOT Seismic Detector**: Analyzed Apollo/Mars seismic data using signal processing (noise filtering, quadratic fitting), achieving **96% event detection accuracy**."
        ]
    }
];
