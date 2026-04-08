import type { Experience } from './types';

export const experience: Experience[] = [
    {
        title: "Associate Full Stack AI Engineer",
        company: "AI Alpha Tech, Nashik",
        period: "04/2025 - Present",
        location: "Nashik, India",
        contact: "hr@aialphatech.com - +91 86240 77980",
        projects: [
            {
                name: "EdgeCam & Industrial Object Tracking (SaaS)",
                tech: "C++17, TFLite, YOLOv8, SAM2, GStreamer, AWS Lambda, Docker, NB-IoT",
                description: "Unified edge-to-cloud tracking system using C++ daemons on Raspberry Pi 5 and React/SaaS on AWS. Achieved 30+ FPS real-time detection and autonomous inventory management, reducing shrinkage by 40% and manual oversight by 80%."
            },
            {
                name: "Chairman Saheb App Chatbot (SaaS)",
                tech: "Flutter, Node.js, AI Agent, UI Automation",
                description: "Conversational chatbot with tutorial mode that dynamically generates guides and interacts with the UI to navigate and assist users in real-time."
            },
            {
                name: "Taparia Tools Manufacturing and Packaging Optimization",
                tech: "Prescriptive Analytics, NVIDIA cuOpt, WILP, Microsoft Azure ML, Data Analysis",
                description: "Optimized manufacturing and packaging workflows using prescriptive analytics and NVIDIA cuOpt. Leveraged WILP for mathematical modeling and Microsoft Azure ML for cloud-scale data analysis."
            },
            {
                name: "Identity Verification & Anti-Spoofing System (SaaS)",
                tech: "Deep Learning, OpenCV, Docker, FaceNet, TensorFlow, Android",
                description: "Identity verification & anti-spoofing system (92-95% accuracy). Deployed on Android/Docker to prevent presentation attacks."
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

        ]
    },
];
