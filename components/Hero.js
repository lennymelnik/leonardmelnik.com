import Skills from "./Skills";

const Hero = () => {
    return (
     
                <section id="hero" className="text-gray-700 body-font bg-gray-100">
                    <div className="container mx-auto flex px-5 py-12 items-end space-x-8">
                        <img className="lg:w-2/6 md:w-1/4 w-2/5 object-cover object-center rounded" src="/me.png" alt="Your Photo" />
                        <div className="lg:w-2/3 w-full h-fit flex flex-col justify-end">
                            <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-900">Hi, I am Leonard</h1>
                            <p className="leading-relaxed">leonardmelnik@pm.me</p>
                            <p className="leading-relaxed">Cybersecurity enthusiast and software developer...</p>
                        </div>
                        <div className="flex items-center">
                            {/* Navigation Links */}
                            <a href="#projects" className="text-gray-800 hover:text-gray-600 mx-4 sm:mx-6">
                                <p>Projects</p>
                                <div className="h-1 bg-indigo-500 rounded"></div>
                            </a>
                          
                            <a href="#certifications" className="text-gray-800 hover:text-gray-600 mx-4 sm:mx-6">
                                Certifications
                                <div className="h-1 bg-indigo-500 rounded"></div>
                            </a>
                            <a href="#certifications" className="text-gray-800 hover:text-gray-600 mx-4 sm:mx-6">
                                Articles
                                <div className="h-1 bg-indigo-500 rounded"></div>
                            </a>
                          
                        </div>
                    </div>
                 
                </section>
    )
};

export default Hero;
