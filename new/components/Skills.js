
  const Skills = () => {
    const skillsData = {
        languages: [
          { name: 'JavaScript', icon: '/icons/javascript.png' },
          { name: 'Python', icon: '/icons/python.png' },
          // Add more languages
        ],
        skills: [
          { name: 'React', icon: '/icons/react.png' },
          { name: 'Node.js', icon: '/icons/nodejs.png' },
          // Add more skills
        ],
        platforms: [
          { name: 'Docker', icon: '/icons/docker.png' },
          { name: 'Kubernetes', icon: '/icons/kubernetes.png' },
          // Add more platforms
        ]
      };
    const { languages, skills, platforms } = skillsData
  
    const renderSkillsSection = (title, skills) => (
      <div>
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <div className="flex flex-wrap -m-4 justify-center">
          {skills.map((skill, index) => (
            <div key={index} className="p-4 sm:w-1/6 w-1/2">
              <div className="h-full flex flex-col items-center justify-center text-center">
                <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2" />
                <p className="text-sm font-medium">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  
    return (
      <section className="skills-container bg-white text-gray-700 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Skills & Technologies</h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Programming languages, tools, and platforms I work with.</p>
          </div>
          {renderSkillsSection("Programming Languages", languages)}
          {renderSkillsSection("Skills", skills)}
          {renderSkillsSection("Platforms", platforms)}
        </div>
      </section>
    );
  };
  
  export default Skills;
  