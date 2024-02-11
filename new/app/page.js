import Image from "next/image";
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Projects from "@/components/Projects";
import Hero from "@/components/Hero";
import Certifications from "@/components/Certifications";
import ArticlesPage from "@/components/Articles";
export default function Home() {
  return (
    
     // Assuming you'll create this component
    // Import other components as you create them

 
        <div>
          <Head>
          <title>My page title</title>
            <meta property="og:title" content="My page title" key="title" />
            <meta name="description" content="Your Portfolio Description" />
          </Head>
    
          <main className="bg-gray-200">
          
              <Hero />
            <section id="projects" className="my-8">
              <Projects />
            </section>
            <Certifications />
            <section id="articles" className="my-8">
              {/* Articles section content */}
              <ArticlesPage />
            </section>
            <section id="videos" className="my-8">
              {/* Videos section content */}
            </section>
          </main>
        </div>
  
    
  );
}
