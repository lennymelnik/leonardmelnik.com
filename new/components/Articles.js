import Article from '../components/Article';

const articlesData = [
    {
        tagline: "Web/Security Compliance",
        title: "More than Compliance: Turn Web Scanning into a Strategic Business Asset",
        tags: ["Cybersecurity", "Data Protection", "Web Scanning"],
        description: "Discussed the criticality of web scanning in preventing data breaches and its impact on reducing escalating costs related to security failures.",
        link: "https://www.eisneramper.com/insights/blogs/outsourced-it-blog/cybersecurity-compliance-scanning-oit-blog-0923/"
    },
    {
        tagline: "Digital Forensics",
        title: "Exploring the use of Stolen Credentials in Digital Forensics",
        tags: ["Cybersecurity", "Digital Forensics", "Stolen Credentials"],
        description: "Outlines the methods by which credentials are compromised, including database breaches, malware, and phishing, and discusses how digital forensics and law enforcement can acquire these credentials for investigation. The paper highlights the benefits and challenges of using stolen credentials in forensics.",
        link: "/Files/Exploring the use of Stolen Credentials in Digital Forensics.pdf"
    },
    {
        tagline: "Threat Intelligence",
        title: "Data Breaches/CyberThreats Faced by Small Businesses and How Threat Intelligence can Help",
        tags: ["Cybersecurity", "Threat Intelligence", "Small Buisness"],
        description: " I explore the vulnerability of small businesses to cyber threats and the importance of threat intelligence in mitigating these risks.",
        link: "/Files/Data Breaches_CyberThreats Faced by Small Businesses and How Threat Intelligence can Help.pdf"
    }
]
export default function ArticlesPage() {
    return (
        <div className="articles-container  py-8 px-5">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Articles</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <div className='flex flex-wrap'>
            {articlesData.map((article, index) => (
                <Article key={index} article={article} />
            ))}
            </div>
            
        </div>
    );
}
