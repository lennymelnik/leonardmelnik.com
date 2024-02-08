import ProjectCard from './ProjectCard';

// Dummy projects data
const projects = [
    {
        title: "Unime.io",
        description: "A free tool that displays official Professor evaluation surveys in a comprehensive and concise manner. Initial version had over 10k unique visitors.",
        images:["/Unime.png"], // Replace with actual path
        stat: "215 Registered Users",
        logo : "/Logos/unime.png"
    },
    {
        title: "BreachByte",
        description: "Digestible Threat Intelligence. Free and open tool to view latest breaches.",
        images:["/BreachByte.png"],
        stat: "10,000 Breached Entities",
        logoTitle: "BreachByte"
    },
    {
        title: "Evaluable",
        description: "Advanced multi-variate surveying platform currently implemented in several latin-american companies.",
        images:["/Evaluable.png"],
        stat: " 1,700 Survey Submissions ",
        logo : '/Logos/evaluable.svg',
        logoTitle : 'Evaluable'
    },
    {
        title: "SimpleStatus",
        description: "Super basic platform to allow monitoring of processes/scripts/and more",
        images:["/simplestatus.jpeg"],
        logoTitle : 'SimpleStatus'
    },
    {
        title: "Watchdog.ID",
        description: "Individual, Family, and Corperate credential monitoring and remediation platform",
        images:["/Watchdog.png"],
        stat: " 9 Billion+ Credentials",
        logo : '/Logos/watchdog.svg',
        logoTitle: 'Watchdog'
    },
    {
        title: "Watchdog Extension",
        description: "Individual, Family, and Corperate credential monitoring and remediation platform",
        images:["/watchdog_extension.png"],
        stat: " 9 Billion+ Credentials",
        logo : '/Logos/watchdog.svg',
        logoTitle: 'Watchdog (Web Ext)'
    },
    {
        title: "Enigma",
        description: "Advanced multi-variate surveying platform currently implemented in several latin-american companies.",
        images:["/Evaluable.png"],
        stat: "20 Downloads",
        logo : '/Logos/enigma.png',
        logoTitle: 'Enigma'
    },
    {
        title: "ThreatRecord",
        description: "Threat Intelligence platform. Custom Dashboards, Analytics, Alerting with advanced filtering.",
        images:["/ThreatRecord.png","/threatrecord_dashboard.jpeg"],
        stat: " 10,000 Breached Entities ",
        logo : '/Logos/tr.svg',
        logoTitle : "ThreatRecord"
    }
    // Add more projects here
];

const Projects = () => {
    return (
        <section id="projects" className="py-8">
            <div className="container mx-auto px-4">
                <div class="lg:w-1/2 w-full mb-6 lg:mb-6">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Projects</h1>
                    <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                </div>
                <div className="flex flex-wrap justify-center">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;