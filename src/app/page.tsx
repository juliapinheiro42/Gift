"use client";
import { useEffect, useState } from 'react';
import styled from 'styled-components';

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
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const Photo = styled.img`
  width: 100%;
  max-width: 320px;
  border: 4px solid var(--color-accent);
  border-radius: 12px;
  margin-bottom: 2rem;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.6);
  @media (max-width: 480px) {
    max-width: 240px;
  }
`;

const Timer = styled.h2`
  font-size: 2rem;
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem 2rem;
  border-radius: 12px;
  border: 2px solid var(--color-secondary);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  @media (max-width: 480px) {
    font-size: 1.5rem;
    padding: 0.75rem 1.5rem;
  }
`;

const Home = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const startDate = new Date('2024-12-06T00:00:00');

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
  }, []);

  return (
    <Container>
      <Photo src="/Us.jpeg" alt="Foto do casal" />
      <Timer>Te amo há {time} ❤️</Timer>
    </Container>
  );
};

export default Home;
