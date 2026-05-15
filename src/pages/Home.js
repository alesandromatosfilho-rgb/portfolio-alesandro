import React, { Suspense } from 'react'; // Importar Suspense
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { Text } from '@react-three/drei'; // Para texto 3D
import DynamicBackground from '../components/DynamicBackground'; // Nosso novo componente de fundo
import './Home.css';

function Home() {
  return (
    <div className="home-page-3d">
      <div className="background-canvas">
        <Suspense fallback={null}> {/* Suspense para carregar o 3D */}
          <DynamicBackground />
        </Suspense>
      </div>

      <div className="hero-content-3d">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <Text
              position={[0, 1, 0]}
              fontSize={0.8}
              color="#007bff" // Cor do seu nome
              anchorX="center"
              anchorY="middle"
              font="/fonts/Montserrat-Bold.ttf" // Você precisará de uma fonte .ttf
            >
              ALESANDRO MATOS ALMEIDA FILHO
            </Text>
            <Text
              position={[0, -0.2, 0]}
              fontSize={0.3}
              color="white"
              anchorX="center"
              anchorY="middle"
              font="/fonts/Montserrat-Regular.ttf" // Você precisará de uma fonte .ttf
            >
              Desenvolvedor Full-Stack | Especialista em Soluções Digitais
            </Text>
          </Suspense>
        </Canvas>
        <p className="tagline">Transformando ideias em realidade com tecnologia e inovação.</p>
        <div className="hero-actions-3d">
          <Link to="/projects" className="btn btn-primary">Ver Projetos</Link>
          <Link to="/contact" className="btn btn-secondary">Entrar em Contato</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;