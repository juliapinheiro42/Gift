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

const Menu = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: linear-gradient(90deg, #5a3e24, #3e2a15);
  border-bottom: 3px solid var(--color-accent);
  padding: 0.75rem 2rem;
  font-family: 'Cormorant Garamond', serif;
  z-index: 1000;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.7);
`;

const DesktopMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--color-text);
  font-size: 2rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0.75rem;
    right: 1.5rem;
  }
`;

const MobileMenu = styled.div<{ $open: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: ${({ $open }) => ($open ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
    padding-bottom: 1rem;
    border-top: 1px solid var(--color-accent);
    background: linear-gradient(90deg, #5a3e24, #3e2a15);
  }
`;

const MenuLink = styled(Link)`
  color: var(--color-text);
  text-decoration: none;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: var(--color-accent);
    color: #3e1f27;
    box-shadow: 0 0 8px var(--color-accent);
  }

  /* Garante que os links não herdem cores do navegador */
  &, &:visited, &:active {
    color: var(--color-text);
  }
`;

export default function TopMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <Menu>
      <DesktopMenu>
        {navLinks.map(({ href, label }) => (
          <MenuLink key={href} href={href}>{label}</MenuLink>
        ))}
      </DesktopMenu>

      <MobileMenuButton
        onClick={toggleMenu}
        aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <CloseIcon size={28} /> : <MenuIcon size={28} />}
      </MobileMenuButton>

      <MobileMenu $open={menuOpen}>
        {navLinks.map(({ href, label }) => (
          <MenuLink key={href} href={href} onClick={closeMenu}>
            {label}
          </MenuLink>
        ))}
      </MobileMenu>
    </Menu>
  );
}