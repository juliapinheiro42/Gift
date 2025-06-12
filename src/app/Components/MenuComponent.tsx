'use client';

import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Menu as MenuIcon, X as CloseIcon } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/timeline', label: 'Linha do Tempo' },
  { href: '/playlist', label: 'Playlist' },
  { href: '/abraquando', label: 'Abra Quando...' },
  { href: '/mensagem', label: 'Mensagem Final' },
];

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: #5a3e24;
  border-bottom: 3px solid #f7c59f;
  padding: 0.75rem 2rem;
  font-family: var(--font-medieval), serif;
  z-index: 1000;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Links = styled.div<{ mobile?: boolean }>`
  display: ${({ mobile }) => (mobile ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #5a3e24;
  padding: 1rem 2rem;

  & > a {
    margin-bottom: 1rem;
  }

  @media (min-width: 769px) {
    display: ${({ mobile }) => (mobile ? 'none' : 'flex')};
    flex-direction: row;
    gap: 2rem;
    position: static;
    background: none;
    padding: 0;
  }
`;

const Button = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;

  &:hover {
    background: #f7c59f;
    color: #3e1f27;
  }
`;

export default function TopMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <div />
      <Links mobile={false}>
        {navLinks.map(({ href, label }) => (
          <StyledLink key={href} href={href}>
            {label}
          </StyledLink>
        ))}
      </Links>
      <Button onClick={() => setOpen((o) => !o)}>
        {open ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
      </Button>
      {open && (
        <Links mobile>
          {navLinks.map(({ href, label }) => (
            <StyledLink key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </StyledLink>
          ))}
        </Links>
      )}
    </Wrapper>
  );
}
