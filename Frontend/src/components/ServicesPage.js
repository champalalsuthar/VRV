import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceCard = ({ title, description, icon, aosEffect }) => (
    <div
        className="bg-white shadow-md rounded-lg p-8 text-gray-800"
        data-aos={aosEffect}
    >
        <div className="flex items-center justify-center text-4xl mb-4 text-blue-600">
            {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p>{description}</p>
    </div>
);

const ServicesPage = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-900 to-black text-white">
            {/* Hero Section with 3D Animation */}
            <section className="relative">
                <Canvas className="absolute inset-0 h-full">
                    <ambientLight intensity={0.5} />
                    <Stars />
                    <OrbitControls autoRotate enableZoom={false} />
                    {/* Add a 3D object (globe/shield) */}
                </Canvas>
                <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
                    <h1 className="text-5xl font-extrabold mb-4 text-yellow-400">
                        Our Services
                    </h1>
                    <p className="text-lg max-w-3xl mb-8">
                        VRV Security is a trusted leader in the cybersecurity domain,
                        providing tailored solutions to safeguard your digital assets
                        against ever-evolving threats.
                    </p>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 bg-gray-100 text-gray-900">
                <div className="container mx-auto text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Discover Our Services
                    </h2>
                    <p className="text-lg text-gray-600">
                        Delivered over 500,000 hours of proactive threat monitoring
                        annually, trusted by Fortune 500 companies and governments.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
                    {/* Individual Service Cards */}
                    <ServiceCard
                        title="Vulnerability Assessment and Penetration Testing"
                        description="Comprehensive VAPT combining automated and manual techniques to identify and mitigate risks, ensuring compliance with global standards."
                        icon="🔒"
                        aosEffect="fade-up"
                    />
                    <ServiceCard
                        title="Cloud Security Solutions"
                        description="Tailored solutions for securing cloud infrastructure and data, including AWS, Azure, and Google Cloud configuration reviews."
                        icon="☁️"
                        aosEffect="fade-right"
                    />
                    <ServiceCard
                        title="AI-Driven Threat Intelligence"
                        description="Advanced AI systems that monitor, detect anomalies, and mitigate risks using behavioral analysis to prevent sophisticated attacks."
                        icon="🤖"
                        aosEffect="fade-left"
                    />
                    <ServiceCard
                        title="Incident Response and Forensics"
                        description="24/7 incident response and digital forensics to recover from breaches and strengthen security against future threats."
                        icon="🛡️"
                        aosEffect="fade-up"
                    />
                    <ServiceCard
                        title="Security Consultation and Training"
                        description="Customized strategies and employee training to recognize and respond to cyber threats effectively."
                        icon="📘"
                        aosEffect="fade-right"
                    />
                    <ServiceCard
                        title="Critical Infrastructure Protection"
                        description="Specialized solutions for ICS/SCADA systems to safeguard critical services like energy, healthcare, and manufacturing."
                        icon="⚙️"
                        aosEffect="fade-left"
                    />
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-blue-700 to-indigo-900 text-white text-center">
                <h2 className="text-4xl font-bold mb-6">
                    Secure Your Digital Assets Today
                </h2>
                <p className="text-lg mb-8">
                    Partner with VRV Security to safeguard your organization against
                    ever-evolving cyber threats. Contact us now for tailored solutions!
                </p>
                <a
                    href="/contact"
                    className="bg-yellow-400 text-blue-800 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
                >
                    Get in Touch
                </a>
            </section>
        </div>
    );
};

export default ServicesPage;
