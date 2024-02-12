
  const Certifications = () => {
    const certifications = [
        {
          id: 1,
          title: "Microsoft Certifications",
          logo: "Logos/microsoft.png",
          details: ["Power BI Data Analyst Associate","Azure AI Fundamentals"],
        },
        {
            id: 2,
            title: "Stripe Certified Professional Developer",
            logo: "Logos/stripe.jpeg",
            details: [],
          },
        {
          id: 2,
          title: "Kusto Detective Gold Star",
          logo: "Logos/kusto.png",
          details: [],
        },
        {
          id: 3,
          title: "Qualys Certifications",
          logo: "Logos/Qualys.png",
          details: [
            "CyberSecurity Asset Management (CSAM)",
            "Web Application Scanning",
            "Vulnerability Management Detection & Response",
          ],
        },
        {
          id: 4,
          title: "Hubspot Certifications",
          logo: "Logos/hubspot.png",
          details: [
            "Sales Software",
            "Inbound",
            "Frictionless Sales",
            "Revenue Operations",
          ],
        },
        {
          id: 4,
          title: "CSI Linux Certified Investigator",
          logo: "Logos/csi.jpeg",
          details: [
            
          ],
        },
        // Add more certifications as needed
      ];
  
    return (
      <section id="certifications" className="text-gray-700 body-font bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Certifications</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              A showcase of my certifications and qualifications in various domains.
            </p>
          </div>
  
          <div className="flex flex-wrap -m-4">
            {certifications.map((certification) => (
              <div key={certification.id} className="p-4 lg:w-1/3 sm:w-1/2 w-full">
                <div className="h-full bg-gray-100 bg-opacity-75 px-8 py-6 rounded-lg flex items-center space-x-2">
                  <img className="h-12 w-12 mr-3" src={certification.logo} alt="Certification Icon" />
                  <div>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">{certification.title}</h2>
                    {certification.details.length > 0 && (
                      <ul className="list-disc ml-4">
                        {certification.details.map((detail, index) => (
                          <li key={index}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Certifications;
  