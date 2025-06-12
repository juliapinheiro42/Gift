'use client';
import styled from 'styled-components';
import { useState } from 'react';

const CarouselWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
`;

const SlideTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

const Slide = styled.div`
  min-width: 100%;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 400px;
  object-fit: contain;
  border: 3px solid var(--color-accent);
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`;

const Caption = styled.p`
  margin-top: 1rem;
  font-size: 1.2rem;
  background: rgba(0, 0, 0, 0.5);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  color: var(--color-text);
`;

const NavButtons = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: var(--color-accent);
  color: #000;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const photos = [
  { src: '/TeConheci.jpeg', caption: 'Quando nos vimos pela primeira vez' },
  { src: '/PrimeiraFoto.jpeg', caption: 'Nossa primeira foto juntos' },
  { src: '/PedidodeNamoro.jpeg', caption: 'Dia que começamos a namorar' },
  { src: '/Natal.jpeg', caption: 'Primeiro natal also primeiro dia dormindo de conchinha' },
  { src: '/Viagem.jpeg', caption: 'Primeira viagem juntos' },
  { src: '/1mes.jpeg', caption: 'Completamos 1 mês de namoro' },
  { src: '/MaisViagem.jpeg', caption: 'Primeira viagem juntos(sem gays)' },
  { src: '/GagaCabana.jpeg', caption: 'Primeiro apocalipse juntos' },
  { src: '/SOAD.jpeg', caption: 'Primeiro show(também tinha muitos gays)' },
];

export default function Timeline() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % photos.length);
  const prev = () => setIndex((i) => (i - 1 + photos.length) % photos.length);

  return (
    <div style={{ padding: '2rem', textAlign: 'center', marginTop: '2rem' }}>
      <h1>Linha do Tempo</h1>
      <CarouselWrapper>
        <SlideTrack style={{ transform: `translateX(-${index * 100}%)` }}>
          {photos.map((photo, i) => (
            <Slide key={i}>
              <Image src={photo.src} alt={`Foto ${i + 1}`} />
              <Caption>{photo.caption}</Caption>
            </Slide>
          ))}
        </SlideTrack>
      </CarouselWrapper>
      <NavButtons>
        <Button onClick={prev}>◀ Anterior</Button>
        <Button onClick={next}>Próximo ▶</Button>
      </NavButtons>
    </div>
  );
}
