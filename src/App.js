import { useState } from "react";
import "./App.css";
import LoadingScreen from "./components/LoadingScreen";
import CustomCursor from "./components/CustomCursor";
import ParticleBackground from "./components/ParticleBackground";
import Navbar from "./components/Navbar";
import Hero3D from "./components/Hero3D";
import AboutSection from "./components/AboutSection";
import ExperienceTimeline from "./components/ExperienceTimeline";
import TechSection from "./components/TechSection";
import GitHubProjects from "./components/GitHubProjects";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="app">
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}

      {!loading && (
        <>
          <CustomCursor />
          <ParticleBackground />
          <Navbar />
          <main>
            <Hero3D />
            <AboutSection />
            <ExperienceTimeline />
            <TechSection />
            <GitHubProjects />
            <ContactSection />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
