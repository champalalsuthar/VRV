import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaShieldAlt, FaDatabase, FaNetworkWired } from "react-icons/fa";

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

const Home = () => {
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
                </Canvas>
                <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
                    <h1 className="text-5xl font-extrabold mb-4 text-yellow-400">
                        Welcome to VRV Security
                    </h1>
                    <p className="text-lg max-w-3xl mb-8">
                        Trusted global leader in AI-driven cybersecurity and
                        cloud-based VAPT solutions. Protecting digital assets
                        with cutting-edge technologies.
                    </p>
                    <Link
                        to="/services"
                        className="bg-yellow-400 text-blue-800 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
                    >
                        Explore Our Services
                    </Link>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="py-16 bg-gray-100 text-gray-900">
                <div className="container mx-auto text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Why Choose VRV Security?
                    </h2>
                    <p className="text-lg text-gray-600">
                        Delivered over 500,000 hours of proactive threat
                        monitoring annually. Trusted by Fortune 500 companies.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
                    <ServiceCard
                        title="500,000+ Hours"
                        description="Proactive threat monitoring annually."
                        icon={<FaShieldAlt />}
                        aosEffect="fade-up"
                    />
                    <ServiceCard
                        title="Fortune 500 Trusted"
                        description="Trusted by leading enterprises globally."
                        icon={<FaDatabase />}
                        aosEffect="fade-right"
                    />
                    <ServiceCard
                        title="Global Expertise"
                        description="Leaders in diverse industries."
                        icon={<FaNetworkWired />}
                        aosEffect="fade-left"
                    />
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-blue-700 to-indigo-900 text-white text-center">
                <h2 className="text-4xl font-bold mb-6">
                    Secure Your Future with VRV Security
                </h2>
                <p className="text-lg mb-8">
                    Ready to experience cutting-edge cybersecurity solutions?
                    Let us help you stay ahead.
                </p>
                <Link
                    to="/contact"
                    className="bg-yellow-400 text-blue-800 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
                >
                    Contact Us Now
                </Link>
            </section>
        </div>
    );
};

export default Home;



// import React from "react";
// import { Link } from "react-router-dom";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import { FaCloud, FaShieldAlt, FaNetworkWired, FaDatabase } from "react-icons/fa";
// import { MdSecurity, MdAssessment } from "react-icons/md";

// const RotatingCube = () => {
//     return (
//         <mesh rotation={[10, 10, 0]}>
//             <boxGeometry args={[1, 1, 1]} />
//             <meshStandardMaterial attach="material" color="royalblue" />
//         </mesh>
//     );
// };

// const RotatingSphere = () => {
//     return (
//         <>
//             <mesh>
//                 <sphereGeometry args={[0.5, 32, 32]} />
//                 <meshStandardMaterial attach="material" color="lightgreen" />
//             </mesh>
//         </>
//     );
// };

// const Home = () => {
//     return (
//         <div className="mt-16">
//             {/* Hero Section */}
//             <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white relative">
//                 <div className="container mx-auto text-center">
//                     <h1 className="text-6xl font-bold mb-6 animate-fadeIn">
//                         #1 on <span className="text-yellow-400">Cyber Defense</span>
//                     </h1>
//                     <p className="text-lg mb-6">
//                         Trusted global leader in AI-driven cybersecurity and cloud-based VAPT solutions.
//                     </p>
//                     <Link
//                         to="/services"
//                         className="bg-yellow-400 text-blue-800 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition animate-fadeIn delay-300"
//                     >
//                         Discover Our Services
//                     </Link>
//                 </div>
//                 <Canvas className="absolute top-0 left-0 w-full h-full opacity-30">
//                     <ambientLight intensity={0.5} />
//                     <RotatingCube />
//                     <OrbitControls />
//                 </Canvas>
//             </section>

//             {/* Achievements Section */}
//             <section className="py-16 bg-gray-100">
//                 <div className="container mx-auto px-4 text-center">
//                     <h2 className="text-4xl font-bold text-gray-800 mb-12 animate-slideIn">
//                         Why Choose VRV Security?
//                     </h2>
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//                         <div className="bg-white shadow-lg rounded-lg p-8">
//                             <FaShieldAlt className="text-5xl text-blue-600 mx-auto mb-4 animate-spinSlow" />
//                             <h3 className="text-2xl font-bold mb-4">500,000+ Hours</h3>
//                             <p className="text-gray-600">Proactive threat monitoring annually.</p>
//                         </div>
//                         <div className="bg-white shadow-lg rounded-lg p-8">
//                             <FaDatabase className="text-5xl text-blue-600 mx-auto mb-4 animate-pulse" />
//                             <h3 className="text-2xl font-bold mb-4">Fortune 500 Trusted</h3>
//                             <p className="text-gray-600">Trusted by leading enterprises globally.</p>
//                         </div>
//                         <div className="bg-white shadow-lg rounded-lg p-8">
//                             <FaNetworkWired className="text-5xl text-blue-600 mx-auto mb-4 animate-bounce" />
//                             <h3 className="text-2xl font-bold mb-4">Global Expertise</h3>
//                             <p className="text-gray-600">Leaders in diverse industries.</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Services Section */}
//             <section className="py-16 bg-gray-50 relative">
//                 <div className="container mx-auto px-4 text-center">
//                     <h2 className="text-4xl font-bold text-gray-800 mb-12">Our Core Services</h2>
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
//                         <div className="bg-white shadow-lg rounded-lg p-8">
//                             <MdSecurity className="text-5xl text-blue-600 mx-auto mb-4" />
//                             <h3 className="text-2xl font-bold mb-4">ICS/SCADA Security</h3>
//                             <p className="text-gray-600">
//                                 Enhance the cybersecurity of industrial control systems.
//                             </p>
//                         </div>
//                         <div className="bg-white shadow-lg rounded-lg p-8">
//                             <FaCloud className="text-5xl text-blue-600 mx-auto mb-4" />
//                             <h3 className="text-2xl font-bold mb-4">Cloud Security</h3>
//                             <p className="text-gray-600">
//                                 Secure your cloud environments effectively.
//                             </p>
//                         </div>
//                         <div className="bg-white shadow-lg rounded-lg p-8">
//                             <FaShieldAlt className="text-5xl text-blue-600 mx-auto mb-4" />
//                             <h3 className="text-2xl font-bold mb-4">Network Security</h3>
//                             <p className="text-gray-600">
//                                 Continuous threat monitoring for networks.
//                             </p>
//                         </div>
//                     </div>
//                     <Canvas className="absolute inset-0 z-0 opacity-20">
//                         <ambientLight intensity={0.5} />
//                         <pointLight position={[5, 5, 5]} />
//                         <RotatingSphere />
//                     </Canvas>
//                 </div>
//             </section>

//             {/* Contact Section */}
//             <section className="py-16 bg-gradient-to-r from-blue-700 to-indigo-900 text-white">
//                 <div className="container mx-auto text-center">
//                     <h2 className="text-4xl font-bold mb-6">Secure Your Future</h2>
//                     <p className="text-lg mb-8">
//                         Ready to experience cutting-edge cybersecurity solutions? Let us help you stay ahead.
//                     </p>
//                     <Link
//                         to="/contact"
//                         className="bg-yellow-400 text-blue-800 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
//                     >
//                         Contact Us Now
//                     </Link>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Home;


