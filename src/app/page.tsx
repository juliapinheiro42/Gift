"use client";
import { useEffect, useState, useMemo } from 'react';
import styled from 'styled-components';

// Componentes estilizados otimizados
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
  padding: clamp(1rem, 3vw, 2rem);
`;

const Photo = styled.img`
  width: min(100%, 320px);
  aspect-ratio: 1;
  object-fit: cover;
  border: 4px solid var(--color-accent);
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.6);
  
  @media (max-width: 480px) {
    width: min(100%, 240px);
  }
`;

const Timer = styled.h2`
  font-size: clamp(1.5rem, 4vw, 2rem);
  background: rgba(255, 255, 255, 0.05);
  padding: clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2rem);
  border-radius: 12px;
  border: 2px solid var(--color-secondary);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  min-width: 280px;
`;

// Formatação do tempo separada em função utilitária
const formatTime = (date: Date) => {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
};

const Home = () => {
  const [time, setTime] = useState('');

  // Data inicial memoizada para evitar recriação
  const startDate = useMemo(() => new Date('2024-12-06T00:00:00'), []);

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      setTime(`${days} dias e ${formatTime(now)}`);
    };

    // Atualização imediata e intervalo
    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    
    // Limpeza do intervalo
    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <Container>
      <Photo 
        src="/Us.jpeg" 
        alt="Foto do casal" 
        loading="lazy" 
        decoding="async"
      />
      <Timer>Te amo há {time} ❤️</Timer>
    </Container>
  );
};

export default Home;