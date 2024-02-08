'use client'
import { useEffect, useState } from "react";

const ProjectCard = ({ project }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);


    // Change to the next image every 3 seconds
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    //     }, 3000);
    //     return () => clearInterval(timer);
    // }, [project.images.length]);
    useEffect(() => {
       
        let timer;
        if (isHovering) {
            timer = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
            }, 3000);
        } else {
            clearInterval(timer);
        }

        return () => clearInterval(timer);
    }, [isHovering, project.images.length]);

    // Function to manually change image
    const changeImage = (direction) => {
        setCurrentImageIndex((prevIndex) => {
            if (direction === 'next') {
                return (prevIndex + 1) % project.images.length;
            } else {
                return (prevIndex - 1 + project.images.length) % project.images.length;
            }
        });
    };

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white flex flex-col justify-start hover:bg-gray-100 group" onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}>
            {/* Logo container */}
            <div className="p-4 flex justify-center items-center bg-gray-100 group-hover:bg-gray-200 space-x-2 ">
                {project.logo?<img src={project.logo} alt={`${project.title} logo`} className="h-16 object-cover" />:<div className="h-16"></div>} {project.logoTitle?<p className="text-4xl font-medium text-gray-800">{project.logoTitle}</p>:null}
            </div>
            <div className="relative" >
                <img className="object-cover w-full h-56" src={project.images[currentImageIndex]} alt={`Screenshot of ${project.title}`} />
             
            </div>
            {/* Content */}
            <div>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2 text-gray-800">{project.title}</div>
                    <p className="text-gray-700 text-base">
                        {project.description}
                    </p>
                </div>
            </div>
            {/* Stats section */}
            {project.stat?
            <div className="px-6 py-4 flex flex-col h-full justify-end">
                <span className="inline-block bg-blue-500 rounded-xl px-3 py-1 font-semibold text-white mr-2 mb-2">{project.stat}</span>
            </div>:null}
        </div>
    );
};

export default ProjectCard;
