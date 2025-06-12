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
  border-bottom: 3px solid var(--color-accent, #ffc0cb);
  padding: 0.75rem 2rem;
  font-family: 'Cormorant Garamond', serif;
  z-index: 1000;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.7);

  display: flex;
  justify-content: space-between;
  align-items: center;
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
  color: var(--color-text, #fff);
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div<{ $open: boolean }>`
  display: ${({ $open }) => ($open ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: linear-gradient(90deg, #5a3e24, #3e2a15);
  padding: 1rem 2rem;
  gap: 1rem;
  border-top: 1px solid var(--color-accent, #ffc0cb);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);

  @media (min-width: 769px) {
    display: none;
  }
`;

const MenuLink = styled(Link)`
  color: var(--color-text, #fff);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--color-accent, #ffc0cb);
    color: #3e1f27;
  }

  &, &:visited, &:active {
    color: var(--color-text, #fff);
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
        {menuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
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
