import React from "react";
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { FaCloud, FaShieldAlt, FaNetworkWired, FaDatabase } from "react-icons/fa";
import { MdSecurity, MdAssessment } from "react-icons/md";

const RotatingCube = () => {
    return (
        <mesh rotation={[10, 10, 0]}>
            {/* <boxBufferGeometry attach="geometry" args={[1, 1, 1]} /> */}
            <meshStandardMaterial attach="material" color="royalblue" />
        </mesh>
    );
};

const RotatingSphere = () => {
    return (
        <>
            <mesh>
                {/* <sphereBufferGeometry attach="geometry" args={[0.5, 32, 32]} /> */}
                <meshStandardMaterial attach="material" color="lightgreen" />
            </mesh>
        </>
    );
};

const Home = () => {
    return (
        <div className="mt-16">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white relative">
                <div className="container mx-auto text-center">
                    <h1 className="text-6xl font-bold mb-6 animate-fadeIn">
                        #1 on <span className="text-yellow-400">Cyber Defense</span>
                    </h1>
                    <p className="text-lg mb-6">
                        Trusted global leader in AI-driven cybersecurity and cloud-based VAPT solutions.
                    </p>
                    <Link
                        to="/services"
                        className="bg-yellow-400 text-blue-800 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition animate-fadeIn delay-300"
                    >
                        Discover Our Services
                    </Link>
                </div>
                <Canvas className="absolute top-0 left-0 w-full h-full opacity-30">
                    <ambientLight intensity={0.5} />
                    <RotatingCube />
                    <OrbitControls />
                </Canvas>
            </section>

            {/* Achievements Section */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-12 animate-slideIn">
                        Why Choose VRV Security?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="bg-white shadow-lg rounded-lg p-8">
                            <FaShieldAlt className="text-5xl text-blue-600 mx-auto mb-4 animate-spinSlow" />
                            <h3 className="text-2xl font-bold mb-4">500,000+ Hours</h3>
                            <p className="text-gray-600">Proactive threat monitoring annually.</p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-8">
                            <FaDatabase className="text-5xl text-blue-600 mx-auto mb-4 animate-pulse" />
                            <h3 className="text-2xl font-bold mb-4">Fortune 500 Trusted</h3>
                            <p className="text-gray-600">Trusted by leading enterprises globally.</p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-8">
                            <FaNetworkWired className="text-5xl text-blue-600 mx-auto mb-4 animate-bounce" />
                            <h3 className="text-2xl font-bold mb-4">Global Expertise</h3>
                            <p className="text-gray-600">Leaders in diverse industries.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 bg-gray-50 relative">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-12">Our Core Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
                        <div className="bg-white shadow-lg rounded-lg p-8">
                            <MdSecurity className="text-5xl text-blue-600 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold mb-4">ICS/SCADA Security</h3>
                            <p className="text-gray-600">
                                Enhance the cybersecurity of industrial control systems.
                            </p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-8">
                            <FaCloud className="text-5xl text-blue-600 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold mb-4">Cloud Security</h3>
                            <p className="text-gray-600">
                                Secure your cloud environments effectively.
                            </p>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-8">
                            <FaShieldAlt className="text-5xl text-blue-600 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold mb-4">Network Security</h3>
                            <p className="text-gray-600">
                                Continuous threat monitoring for networks.
                            </p>
                        </div>
                    </div>
                    <Canvas className="absolute inset-0 z-0 opacity-20">
                        <ambientLight intensity={0.5} />
                        <pointLight position={[5, 5, 5]} />
                        <RotatingSphere />
                    </Canvas>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 bg-gradient-to-r from-blue-700 to-indigo-900 text-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">Secure Your Future</h2>
                    <p className="text-lg mb-8">
                        Ready to experience cutting-edge cybersecurity solutions? Let us help you stay ahead.
                    </p>
                    <Link
                        to="/contact"
                        className="bg-yellow-400 text-blue-800 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
                    >
                        Contact Us Now
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;



// import React from "react";
// import { Link } from "react-router-dom";
// import { FaCloud, FaShieldAlt, FaNetworkWired, FaDatabase } from "react-icons/fa";
// import { MdSecurity, MdAssessment } from "react-icons/md";

// const Home = () => {
//     return (
//         <div className="mt-16">
//             {/* Hero Section */}
//             <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-16 text-white">
//                 <div className="container mx-auto text-center">
//                     <h1 className="text-5xl font-bold mb-4">
//                         #1 on <span className="text-yellow-400">Cyber Defense</span>
//                     </h1>
//                     <p className="text-lg mb-6">
//                         Global leader in cybersecurity, trusted by Fortune 500 companies and government organizations.
//                     </p>
//                     <p className="text-sm italic mb-6">
//                         Founded in 2020 in Chennai, Tamil Nadu, VRV Security has delivered innovative AI-driven solutions and
//                         cloud-based Vulnerability Assessment and Penetration Testing (VAPT).
//                     </p>
//                     <Link
//                         to="/services"
//                         className="bg-yellow-400 text-blue-800 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
//                     >
//                         Discover Our Services
//                     </Link>
//                 </div>
//             </section>

//             {/* Achievements Section */}
//             <section className="py-16 bg-gray-100">
//                 <div className="container mx-auto px-4">
//                     <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
//                         Why Choose VRV Security?
//                     </h2>
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
//                         <div className="bg-white shadow-md rounded-lg p-8">
//                             <FaShieldAlt className="text-5xl text-blue-600 mx-auto mb-4" />
//                             <h3 className="text-2xl font-bold mb-4">500,000+ Hours</h3>
//                             <p className="text-gray-600">Proactive threat monitoring delivered annually.</p>
//                         </div>
//                         <div className="bg-white shadow-md rounded-lg p-8">
//                             <FaDatabase className="text-5xl text-blue-600 mx-auto mb-4" />
//                             <h3 className="text-2xl font-bold mb-4">Fortune 500 Trusted</h3>
//                             <p className="text-gray-600">Relied upon by top enterprises and government organizations.</p>
//                         </div>
//                         <div className="bg-white shadow-md rounded-lg p-8">
//                             <FaNetworkWired className="text-5xl text-blue-600 mx-auto mb-4" />
//                             <h3 className="text-2xl font-bold mb-4">Global Expertise</h3>
//                             <p className="text-gray-600">Leaders in cybersecurity for diverse industries.</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Services Section */}
//             <section className="py-16 bg-gray-50">
//                 <div className="container mx-auto px-4">
//                     <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
//                         Our Core Services
//                     </h2>
//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//                         {/* Service 1 */}
//                         <div className="bg-white shadow-md rounded-lg p-8 text-center hover:shadow-xl transition">
//                             <FaDatabase className="text-5xl text-blue-600 mx-auto mb-4" />
//                             <h3 className="text-2xl font-bold mb-4">Data Protection Services</h3>
//                             <p className="text-gray-600">
//                                 Safeguard sensitive information from breaches and unauthorized access.
//                             </p>
//                         </div>
//                         {/* Service 2 */}
//                         <div className="bg-white shadow-md rounded-lg p-8 text-center hover:shadow-xl transition">
//                             <MdAssessment className="text-5xl text-blue-600 mx-auto mb-4" />
//                             <h3 className="text-2xl font-bold mb-4">Compliance Audits</h3>
//                             <p className="text-gray-600">
//                                 Ensure your operations align with industry standards and regulations.
//                             </p>
//                         </div>
//                         {/* Service 3 */}
//                         <div className="bg-white shadow-md rounded-lg p-8 text-center hover:shadow-xl transition">
//                             <FaNetworkWired className="text-5xl text-blue-600 mx-auto mb-4" />
//                             <h3 className="text-2xl font-bold mb-4">Supply Chain Security</h3>
//                             <p className="text-gray-600">
//                                 Evaluate and secure the integrity of your supply chain networks.
//                             </p>
//                         </div>
//                         {/* Service 4 */}
//                         <div className="bg-white shadow-md rounded-lg p-8 text-center hover:shadow-xl transition">
//                             <MdSecurity className="text-5xl text-blue-600 mx-auto mb-4" />
//                             <h3 className="text-2xl font-bold mb-4">ICS/SCADA Security</h3>
//                             <p className="text-gray-600">
//                                 Enhance the cybersecurity posture of industrial control systems.
//                             </p>
//                         </div>
//                         {/* Service 5 */}
//                         <div className="bg-white shadow-md rounded-lg p-8 text-center hover:shadow-xl transition">
//                             <FaCloud className="text-5xl text-blue-600 mx-auto mb-4" />
//                             <h3 className="text-2xl font-bold mb-4">Cloud Security</h3>
//                             <p className="text-gray-600">
//                                 Safeguard your cloud environments against evolving cyber threats.
//                             </p>
//                         </div>
//                         {/* Service 6 */}
//                         <div className="bg-white shadow-md rounded-lg p-8 text-center hover:shadow-xl transition">
//                             <FaShieldAlt className="text-5xl text-blue-600 mx-auto mb-4" />
//                             <h3 className="text-2xl font-bold mb-4">Network Security</h3>
//                             <p className="text-gray-600">
//                                 Continuously monitor networks to detect and respond to threats.
//                             </p>
//                         </div>
//                     </div>
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
