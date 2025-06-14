'use client';
import { useEffect, useState, useMemo } from 'react';
import styled, { keyframes } from 'styled-components';

const SpinnerContainer = styled.div`
  min-height: 100vh;
  background-color: var(--color-background);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  min-height: 100vh;
  background-color: var(--color-background);
  color: var(--color-text);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: var(--font-medieval), serif;
  text-align: center;
  padding: 1rem;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Photo = styled.img`
  width: 100%;
  max-width: 320px;
  height: auto;
  border: 4px solid var(--color-accent);
  border-radius: 12px;
  margin: 2rem 0;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.6);
  object-fit: cover;
`;

const Timer = styled.h2`
  font-size: 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-radius: 12px;
  border: 2px solid var(--color-secondary);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  width: 100%;
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.1);
  border-top: 4px solid var(--color-accent);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite;
`;

export default function Home() {
  const [time, setTime] = useState('Carregando...');
  const [imageLoaded, setImageLoaded] = useState(false);
  const startDate = useMemo(() => new Date('2024-12-06T00:00:00'), []);

  useEffect(() => {
    const img = new Image();
    img.src = "/Us.jpeg";
    img.onload = () => setImageLoaded(true);
  }, []);

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setTime(`${days} dias e ${hours}:${minutes}:${seconds}`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [startDate]);

  if (!imageLoaded) {
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    );
  }

  return (
    <Container>
      <ContentWrapper>
        <Photo src="/Us.jpeg" alt="Foto do casal" />
        <Timer>Te amo há {time}</Timer>
      </ContentWrapper>
    </Container>
  );
}
