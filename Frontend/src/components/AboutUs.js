import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { FaUserShield, FaGlobe, FaBrain } from "react-icons/fa";

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-800 to-black text-white">
            {/* Hero Section */}
            <section className="relative">
                <Canvas className="absolute inset-0 h-full">
                    <ambientLight intensity={0.5} />
                    <Stars />
                    <OrbitControls autoRotate enableZoom={false} />
                    {/* Add a 3D object here (like a spinning shield or globe) */}
                </Canvas>
                <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
                    <h1 className="text-5xl font-extrabold mb-4 text-yellow-400">
                        About VRV Security
                    </h1>
                    <p className="text-lg max-w-3xl mb-8">
                        Founded in 2020, VRV Security is a global leader in cybersecurity,
                        specializing in cutting-edge solutions powered by AI and advanced
                        cloud technologies. Headquartered in Chennai, Tamil Nadu, we are
                        trusted by Fortune 500 companies and governments worldwide.
                    </p>
                    <a
                        href="#mission"
                        className="bg-yellow-400 text-blue-800 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
                    >
                        Learn More
                    </a>
                </div>
            </section>

            {/* Mission and Vision Section */}
            <section
                id="mission"
                className="py-16 px-6 md:px-16 bg-gray-900 text-gray-300"
            >
                <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
                    <div className="mb-8 md:mb-0">
                        <h2 className="text-4xl font-bold text-yellow-400 mb-6">
                            Our Mission
                        </h2>
                        <p className="text-lg">
                            To provide innovative, AI-driven cybersecurity solutions to
                            protect critical data and systems. Our mission is to create a
                            safer digital world for enterprises, governments, and individuals.
                        </p>
                    </div>
                    <div className="mb-8 md:mb-0">
                        <h2 className="text-4xl font-bold text-yellow-400 mb-6">
                            Our Vision
                        </h2>
                        <p className="text-lg">
                            To be the global benchmark in cybersecurity, setting the standard
                            for innovation, trust, and excellence. We envision a future where
                            cyber threats are proactively mitigated.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto text-center px-4 ">
                    <h2 className="text-4xl font-bold text-gray-800 mb-12">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="bg-white shadow-md rounded-lg p-8">
                            <FaUserShield className="text-6xl text-blue-600 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold mb-4">Integrity</h3>
                            <p className="text-gray-600">
                                We uphold the highest standards of integrity in everything we do.
                            </p>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-8">
                            <FaGlobe className="text-6xl text-blue-600 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold mb-4">Global Leadership</h3>
                            <p className="text-gray-600">
                                We aim to lead the global cybersecurity landscape with
                                innovation.
                            </p>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-8">
                            <FaBrain className="text-6xl text-blue-600 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold mb-4">Innovation</h3>
                            <p className="text-gray-600">
                                Harnessing the power of AI and technology to stay ahead of
                                threats.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* History Section */}
            <section className="py-16 bg-gray-900 text-gray-300">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold text-yellow-400 mb-12">
                        Our Journey
                    </h2>
                    <p className="text-lg max-w-4xl mx-auto">
                        Since 2020, VRV Security has been at the forefront of cybersecurity,
                        pioneering AI-driven solutions and protecting sensitive data
                        worldwide. With over 500,000 hours of proactive threat monitoring
                        delivered annually, we have become a trusted partner for Fortune
                        500 companies and government organizations.
                    </p>
                </div>
            </section>

            {/* Call to Action Section */}
            {/* <section className="py-16 bg-gradient-to-r from-blue-700 to-indigo-900 text-white text-center">
                <h2 className="text-4xl font-bold mb-6">Join Us in Shaping the Future</h2>
                <p className="text-lg mb-8">
                    Ready to secure your digital assets with cutting-edge solutions? Let’s
                    work together to make the digital world a safer place.
                </p>
                <a
                    href="/contact"
                    className="bg-yellow-400 text-blue-800 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
                >
                    Contact Us
                </a>
            </section> */}
        </div>
    );
};

export default AboutUs;
