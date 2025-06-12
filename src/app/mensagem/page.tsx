'use client';
import { useState, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  background-color: var(--color-background);
  color: var(--color-text);
  font-family: var(--font-medieval), serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  overflow: hidden; /* Impede que o botão saia da tela */
`;

const Message = styled.h1`
  max-width: 600px;
  font-size: 1.8rem;
  margin-bottom: 2rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 2rem;
  position: relative;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 60px; /* Mantém espaço para o botão fugitivo */
`;

const Button = styled.button`
  background-color: var(--color-accent);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-family: var(--font-medieval), serif;
  border-radius: 12px;
  cursor: pointer;
  transition: none;
  z-index: 1;
  
  &:hover {
    background-color: #b30030;
  }
`;

const NoButton = styled(Button)<{ position: { x: number; y: number } }>`
  position: absolute;
  left: ${({ position }) => position.x}px;
  top: ${({ position }) => position.y}px;
  transition: ${({ position }) => 
    position.x === 0 && position.y === 0 ? 'none' : 'all 0.1s ease-out'};
  pointer-events: ${({ position }) => 
    position.x === 0 && position.y === 0 ? 'auto' : 'none'};
`;

export default function MensagemFinalPage() {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [showResponse, setShowResponse] = useState(false);
  const buttonGroupRef = useRef<HTMLDivElement>(null);

  const handleNoHover = () => {
    if (!buttonGroupRef.current) return;
    
    const groupRect = buttonGroupRef.current.getBoundingClientRect();
    const maxX = groupRect.width - 100; // Largura do botão
    const maxY = groupRect.height - 50; // Altura do botão
    
    const x = Math.random() * maxX * 0.8 - maxX * 0.4;
    const y = Math.random() * maxY * 0.8 - maxY * 0.4;
    
    setNoPosition({ x, y });
    
    // Reset rápido da posição para permitir nova interação
    setTimeout(() => {
      setNoPosition({ x: 0, y: 0 });
    }, 100);
  };

  const handleYesClick = () => {
    setShowResponse(true);
  };

  return (
    <Container>
      <Message>
        Amor, depois de tudo isso...<br />
        Você admite que eu amo mais? 💖
      </Message>

      {!showResponse ? (
        <ButtonGroup ref={buttonGroupRef}>
          <Button onClick={handleYesClick}>Sim</Button>
          <NoButton
            position={noPosition}
            onMouseEnter={handleNoHover}
            onTouchStart={handleNoHover} // Para dispositivos touch
            onClick={handleNoHover}
          >
            Não
          </NoButton>
        </ButtonGroup>
      ) : (
        <Message>
          Eu sabia! <br />
          Eu saberei que venci essa!
        </Message>
      )}
    </Container>
  );
}