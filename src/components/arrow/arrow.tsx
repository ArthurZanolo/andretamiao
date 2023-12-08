import React from 'react';
import styled, { keyframes } from 'styled-components';

// Defina os keyframes
const arrowAnimation = keyframes`
    0% { opacity: 0 }
    40% { opacity: 1 }
    80% { opacity: 0 }
    100% { opacity: 0 }
`;

// Estilos para o componente SVG
const ArrowsContainer = styled.svg`
    width: 60px;
    height: 172px;
    bottom: 20px;
`;

// Estilos para os paths
const ArrowPath = styled.path`
    stroke: #fff;
    fill: transparent;
    stroke-width: 1px;
    animation: ${arrowAnimation} 2s infinite;
    -webkit-animation: ${arrowAnimation} 2s infinite;

    &.a1 {
        animation-delay: -1s;
        -webkit-animation-delay: -1s;
    }

    &.a2 {
        animation-delay: -0.5s;
        -webkit-animation-delay: -0.5s;
    }

    &.a3 {
        animation-delay: 0s;
        -webkit-animation-delay: 0s;
    }
`;

const Arrows = () => {
    return (
        <ArrowsContainer>
            <ArrowPath className="a1" d="M0 0 L30 32 L60 0"></ArrowPath>
            <ArrowPath className="a2" d="M0 20 L30 52 L60 20"></ArrowPath>
            <ArrowPath className="a3" d="M0 40 L30 72 L60 40"></ArrowPath>
        </ArrowsContainer>
    );
};

export default Arrows;
