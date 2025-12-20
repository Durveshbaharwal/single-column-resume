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
                description: "Unified computer vision suite for industrial (pipe/bag counting) and retail tracking using YOLOv8, SAM2, and React. Deployed on AWS Lambda for automated inventory management, reducing shrinkage by 40%."
            },
            {
                name: "Identity Verification & Anti-Spoofing System (SaaS)",
                tech: "Deep Learning, OpenCV, Docker, FaceNet, TensorFlow, Android",
                description: "Integrated identity verification and anti-spoofing system comparing live captures with Aadhar photos. deployed on Android/Docker with 92-95% accuracy in preventing presentation attacks."
            },
            {
                name: "Diamond Defect Detection & Analysis",
                tech: "Ghidra, Python, OpenCV, Reverse Engineering",
                description: "Reverse-engineered Sarine Advisor file formats to enable custom AI defect detection, saving significant licensing costs ($50K+ annually)."
            },
            {
                name: "Automated Map Merging System",
                tech: "OpenCV, IPAN99, Kohonen SOFM",
                description: "Jigsaw puzzle-like map stitching system using curve matching and color similarity to merge 90+ sub-divisional maps without GIS data."
            },
            {
                name: "Vehicle Detection & ANPR System",
                tech: "YOLOv8, OCR, PyTorch, TensorFlow, OpenCV",
                description: "Real-time system for vehicle detection and Automatic Number Plate Recognition (ANPR) using YOLOv8 and OCR. Implemented custom CNNs for bounding box prediction with >90% accuracy."
            },
            {
                name: "Physiotherapy Pose Detection",
                tech: "MediaPipe, OpenCV, React",
                description: "Real-time exercise monitoring system with angle calculations and form correction, providing 95%+ landmark detection accuracy."
            },

            {
                name: "Trading Automation System",
                tech: "Python, ML Models, APIs",
                description: "Automated trading system with ML-based price prediction and systematic risk management for 24/7 market participation."
            },

            {
                name: "AI Alpha Tech Corporate & Portfolio Platforms",
                tech: "React, TypeScript, Next.js, Headless CMS, Tailwind CSS",
                description: "Developed modern, responsive corporate and portfolio websites featuring service showcases, blog platforms, and client testimonials. Optimized for SEO and performance using Next.js and Vite."
            },
            {
                name: "CCTV Analytics System (SaaS)",
                tech: "YOLO, Face Recognition, Python, OpenCV",
                description: "Intelligent video surveillance system for security and monitoring, featuring anomaly detection, person tracking, and real-time alerts."
            },

            {
                name: "AI Agent - Conversational Assistant",
                tech: "Python, FastAPI, NLP, Intent Recognition",
                description: "Custom AI agent for task automation and customer support, reducing manual interactions by 40% with natural language understanding."
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
                description: "Visually rich, responsive landing page for a high-end fashion brand, featuring carousel sliders and modern UI design."
            },
            {
                name: "Telegram-to-Email AI Bot",
                tech: "AWS Lambda, Google Sheets, OpenAI, Python",
                description: "Automated email bot running on AWS Lambda Cron. Fetches leads from Sheets, sends personalized emails, and updates status with 100% automation."
            },
            {
                name: "Social Media Automation (Selenium)",
                tech: "Selenium, Python, Tkinter, GUI",
                description: "Multi-platform content scheduler for Facebook, Instagram, LinkedIn, and Twitter using cookie-based session persistence and GUI management."
            },
            {
                name: "Image Captioning System",
                tech: "TensorFlow, Keras, LSTM, CNN",
                description: "Deep learning application combining CNNs for feature extraction and LSTMs to generate descriptive text captions for images."
            },
            {
                name: "Movie Recommendation System",
                tech: "Python, Scikit-learn, Content-Based Filtering",
                description: "Hybrid recommendation engine considering demographics and content similarities (plot, cast, crew) to suggest diverse movies."
            },
            {
                name: "Speech Emotion Recognition",
                tech: "PyTorch, Hugging Face wav2vec2, SoundDevice",
                description: "Real-time audio analysis tool utilizing pre-trained transformers to detect and classify emotional states from speech input."
            },
            {
                name: "Alpine Trekkers Dashboard",
                tech: "Power BI, Data Analytics",
                description: "Interactive dashboard for event data analysis, providing insights into participant demographics and strategic marketing recommendations."
            },
            {
                name: "DOT Seismic Detector",
                tech: "Python, Streamlit, ObsPy, NASA Data",
                description: "Scientific tool for analyzing planetary seismic data from Apollo/Mars missions, featuring signal processing and event detection."
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
            "GNSS Positioning: Theoretical Groundwork For Adaptive Kalman Filter using MLE and MATLAB Simulation of Moving Window Average.",
            "Spearheaded research in satellite-based positioning systems by developing and deploying an **Adaptive Kalman Filter algorithm**, improving navigation accuracy by **37%** and reducing signal noise by **30%** using **Maximum Likelihood Estimation (MLE)**.",
            "Programmed a **MATLAB simulation of the Moving Window Average technique** for 5-epoch pseudorange averaging, achieving **87% accuracy** and increasing processing speed by **36%** across 100+ test runs.",
            "Engineered a **hybrid GNSS positioning system** by combining **Least Squares Estimation** with **Machine Learning (Random Forest Regression)**, achieving **4.48m positional accuracy** and reducing **Mean Absolute Error to 0.000122**.",
            "Conducted **seismic data analysis** on noisy datasets from the **Apollo and Mars InSight missions**, implementing noise filtering, backtracking, quadratic fitting, and moving averages to detect seismic events with **96% accuracy**, optimizing transmission efficiency."
        ]
    }
];
