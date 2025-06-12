'use client';
import { useState } from 'react';
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
  height: 150px;
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

  &:hover {
    background-color: #b30030;
  }
`;

const NoButton = styled(Button)<{ position: { x: number; y: number } }>`
  position: absolute;
  left: ${({ position }) => position.x}px;
  top: ${({ position }) => position.y}px;
  pointer-events: auto;
`;

export default function MensagemFinalPage() {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [showResponse, setShowResponse] = useState(false);

  const moveNoButton = () => {
    const containerWidth = 300;
    const containerHeight = 100;

    const x = Math.floor(Math.random() * containerWidth - containerWidth / 2);
    const y = Math.floor(Math.random() * containerHeight - containerHeight / 2);

    setNoPosition({ x, y });
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
        <ButtonGroup>
          <Button onClick={handleYesClick}>Sim</Button>
          <NoButton
            position={noPosition}
            onMouseEnter={moveNoButton}
            onTouchStart={moveNoButton}
            onClick={moveNoButton}
          >
            Não
          </NoButton>
        </ButtonGroup>
      ) : (
        <Message>
          Você assinou o contrato que diz que te amo mais. <br/>
          Não poderá desdizer!
          
        </Message>
      )}
    </Container>
  );
}
