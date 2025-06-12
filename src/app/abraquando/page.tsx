'use client';
import { useState, useRef } from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  background-color: var(--color-background);
  color: #000;
  font-family: var(--font-medieval), serif;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin: 2rem;
  text-align: center;
  color: var(--color-text);
`;

const LettersGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  justify-content: center;
  width: 100%;
  max-width: 1000px;
`;

const EnvelopeWrapper = styled.div`
  perspective: 800px; /* para o efeito 3D da aba */
`;

const Envelope = styled.div<{ open: boolean }>`
  width: 280px;
  height: 300px;
  background:rgb(243, 226, 185); /* tom de papel antigo */
  background-image: url('/beige-paper.png') ; 
  background-size: cover;
  background-blend-mode: multiply;
  border: 2px solid rgb(138, 112, 79); /* cor mais suave */
  border-radius: 10px;
  box-shadow: 0 0 16px rgba(0,0,0,0.4);
  position: relative;
  cursor: pointer;
  padding: 1.5rem;
  transition: background 0.4s ease;
  user-select: none;
  overflow: hidden;
`;


const Flap = styled.div<{ open: boolean }>`
  width: 100%;
  height: 80px;
  background: var(--color-secondary);
    background-image: url('/beige-paper.png') ; 
  border-bottom: 2px solid var(--color-accent);
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(0 0, 100% 0, 50% 100%);
  transform-origin: top center;
  transition: transform 0.5s ease;
  z-index: 2;

  ${({ open }) =>
    open &&
    css`
      transform: rotateX(-160deg);
    `}
`;

const EnvelopeContent = styled.div<{ open: boolean }>`
  opacity: ${({ open }) => (open ? 1 : 0)};
  transform: translateY(${({ open }) => (open ? '0' : '20px')});
  transition: opacity 0.5s ease, transform 0.5s ease;
  margin-top: 50px;
  white-space: pre-line;
  max-height: 100px;
  overflow-y: auto;

   /* Scrollbar personalizada */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color:rgb(204, 163, 53); /* tom de couro/papel envelhecido */
    border-radius: 3px;
    border: 1px solidrgb(109, 97, 28);
  }

  scrollbar-color:rgb(195, 163, 21) transparent; /* Firefox */
  scrollbar-width: thin;
`;

const TitleEnvelope = styled.h3`
  margin: 0;
  text-align: center;
  user-select: none;
  position: relative;
  z-index: 3; /* acima do flap */
  margin-top: 90px; /* desce o texto pra não ficar atrás do flap */
`;

const cartas = [
  {
    title: "Abra quando estiver com saudades",
    content: "Onde quer que eu esteja, estou pensando em você. Um dia iremos não precisar mais sentir saudades, pois depois do trabalho, você chegará em casa e eu estarei te esperando junto aos nossos bichinhos para deitarmos e assistirmos séries. NEOQEAV  💌",
  },
  {
    title: "Abra quando estiver triste",
    content: "Amor, sei que as coisas estão difíceis agora, me dói saber que você está triste, mas tudo isso vai passar. Você é forte, capaz, inteligente, extremamente apetitoso, e dono de uma personalidade incrível. Não estou com você para te abraçar agora, mas saiba que eu te amo demais! NEOQEAV ",
  },
  {
    title: "Abra quando quiser sorrir",
    content: "Lembra do nosso primeiro encontro, da nossa partida de sinuca, da prima da Anitta confundindo os álbuns de Pink Floyd. Lembra da gente julgando as pessoas de reality show, dos nossos rolês com amigos, das nossas brincadeiras. NEOQEAV.",
  },
  {
    title: "Abra quando precisar lembrar do quanto te amo",
    content: "Você abriu essa por quê? Está duvidando do meu amor por você? Pode fechando essa carta agora e vai dormir que amanhã é outro dia! NEOQEAV",
  },
];

// Som de papel (mp3 base64 leve)
const paperSound = "/opening-letter-69854.mp3";


export default function AbraQuandoPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleOpen = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
      // Tocar som ao abrir
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
    }
  };

  return (
    <Container>
      <Title>Nunca esqueça o quanto eu amo você</Title>
      <LettersGrid>
        {cartas.map((carta, index) => (
          <EnvelopeWrapper key={index}>
            <Envelope open={openIndex === index} onClick={() => toggleOpen(index)}>
              <Flap open={openIndex === index} />
              <TitleEnvelope>{carta.title}</TitleEnvelope>
              <EnvelopeContent open={openIndex === index}>{carta.content}</EnvelopeContent>
            </Envelope>
          </EnvelopeWrapper>
        ))}
      </LettersGrid>

      <audio ref={audioRef} src={paperSound} />
    </Container>
  );
}