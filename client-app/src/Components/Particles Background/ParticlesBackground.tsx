import { FC, useEffect } from "react";
import { Container } from "./ParticlesBackground.style";
import { ParticlesConfig } from './contants';
import './particles.js';

const ParticlesBackground: FC = () => {
    useEffect(() => {
        window.particlesJS('particles-js', ParticlesConfig);
    }, []);

    return (
        <Container id={'particles-js'}></Container>
    );
}

export default ParticlesBackground;