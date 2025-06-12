'use client';
import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Menu as MenuIcon, X as CloseIcon } from 'lucide-react';

const Menu = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(90deg, #5a3e24, #3e2a15);
  border-bottom: 3px solid var(--color-accent);
  padding: 0.75rem 2rem;
  font-family: 'Cormorant Garamond', serif;
  z-index: 1000;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
`;

const DesktopMenu = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: linear-gradient(90deg, #5a3e24, #3e2a15);
  padding: 1rem 2rem;
  gap: 1rem;
  border-top: 1px solid var(--color-accent);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);

  @media (min-width: 769px) {
    display: none;
  }
`;

const MenuLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--color-accent);
    color: #3e1f27;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    text-align: center;
  }
`;

export default function TopMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Menu>
      <DesktopMenu>
        <MenuLink href="/">Home</MenuLink>
        <MenuLink href="/timeLine">Linha do Tempo</MenuLink>
        <MenuLink href="/playlist">Playlist</MenuLink>
        <MenuLink href="/abraquando">Abra Quando...</MenuLink>
        <MenuLink href="/mensagem">Mensagem Final</MenuLink>
      </DesktopMenu>

      <MobileMenuButton 
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
      >
        {menuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
      </MobileMenuButton>

      <MobileMenu open={menuOpen}>
        <MenuLink href="/" onClick={() => setMenuOpen(false)}>Home</MenuLink>
        <MenuLink href="/timeline" onClick={() => setMenuOpen(false)}>Linha do Tempo</MenuLink>
        <MenuLink href="/playlist" onClick={() => setMenuOpen(false)}>Playlist</MenuLink>
        <MenuLink href="/abraquando" onClick={() => setMenuOpen(false)}>Abra Quando...</MenuLink>
        <MenuLink href="/mensagem" onClick={() => setMenuOpen(false)}>Mensagem Final</MenuLink>
      </MobileMenu>
    </Menu>
  );
}