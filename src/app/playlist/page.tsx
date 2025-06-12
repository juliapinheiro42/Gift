'use client';
import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  background-color: var(--color-background);
  color: var(--color-text);
  padding: 2rem;
  font-family: var(--font-medieval), serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const DiscLink = styled.a`
  margin-bottom: 2rem;
  img {
    width: clamp(100px, 30vw, 140px);
    height: clamp(100px, 30vw, 140px);
    border-radius: 50%;
    box-shadow: 0 0 16px var(--color-accent);
    transition: transform 0.4s ease;
    &:hover {
      transform: scale(1.1) rotate(6deg);
    }
  }
`;

const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  color: var(--color-accent);
  cursor: pointer;
  flex: 0 0 auto;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

const Item = styled.div`
  flex: 1 1 auto;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.3);
  transition: opacity 0.3s ease-in-out;
`;

const Title = styled.h3`
  font-size: clamp(1rem, 2vw, 1.2rem);
  margin: 0;
`;

const Artist = styled.p`
  font-size: clamp(0.8rem, 1.8vw, 1rem);
  margin-top: 0.5rem;
  opacity: 0.9;
`;



const SpotifyEmbed = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;

  iframe {
    width: 100%;
    max-width: 400px;
    height: 152px;
    border: none;
    border-radius: 12px;
  }
`;

const musicas = [
  {
    title: "Estava tocando no momento em que te vi pela primeira vez",
    artist: "Um dia depois essa música tocava em looping no meu spotify",
    embedUrl: "https://open.spotify.com/embed/track/5NeIONQWJ25uPylJBJiO4c?utm_source=generator",
  },
  {
    title: "Você jura que essa era a música tocava no nosso primeiro beijo",
    artist: "Não sei se é verdade, mas amo Creed!",
    embedUrl: "https://open.spotify.com/embed/track/2VSbEXqs6NbNiZSTcHlIDR?utm_source=generator&theme=0",
  },
  {
    title: "Nossa música",
    artist: "Porque we fell in love in October",
    embedUrl: "https://open.spotify.com/embed/track/6IPwKM3fUUzlElbvKw2sKl?utm_source=generator",
  },
  {
    title: "Você falou que essa música te lembrava de mim",
    artist: "Desde então é a única música do Ghost que eu escuto",
    embedUrl: "https://open.spotify.com/embed/track/2KGCpxjbU3Mqf1elFvVabE?utm_source=generator",
  },
  {
    title: "E essa música me faz lembrar você",
    artist: "E o spoiler é que vai tocar no nosso casamento",
    embedUrl: "https://open.spotify.com/embed/track/1WH0HcFJhu5r6Jxqdsh54N?utm_source=generator",
  },
];

export default function PlaylistPage() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % musicas.length);
  const prev = () => setCurrent((prev) => (prev - 1 + musicas.length) % musicas.length);

  return (
    <Container>
      <h1 style={{ fontSize: "clamp(1.5rem, 5vw, 2rem)", marginBottom: "1rem" }}>
        Músicas que escuto quando sinto saudades
      </h1>

      <DiscLink
        href="https://open.spotify.com/playlist/57mqALkkadEXh0AXnTC7yq?si=e7gQ0KDtTgWRIKXYsz2zBw&pi=nHHQ6DN2RsSNq"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/vinyl_spinning_full.gif" alt="Disco girando" />
      </DiscLink>

      <CarouselWrapper>
        <ArrowButton onClick={prev}>⟨</ArrowButton>
        <Item>
          <Title>{musicas[current].title}</Title>
          <Artist>{musicas[current].artist}</Artist>
          <SpotifyEmbed>
            <iframe
              src={musicas[current].embedUrl}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </SpotifyEmbed>
        </Item>
        <ArrowButton onClick={next}>⟩</ArrowButton>
      </CarouselWrapper>
    </Container>
  );
}
