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
            {
                name: "Taparia Tools Manufacturing and Packaging Optimization",
                tech: "Prescriptive Analytics, NVIDIA cuOpt, WILP, Microsoft Azure ML, Data Analysis",
                description: "Optimized manufacturing and packaging workflows using prescriptive analytics and NVIDIA cuOpt. Leveraged WILP for mathematical modeling and Microsoft Azure ML for cloud-scale data analysis."
            },

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
