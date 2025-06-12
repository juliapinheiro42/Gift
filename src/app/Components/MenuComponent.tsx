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
  height: 60px;
  background: linear-gradient(90deg, #5a3e24, #3e2a15);
  border-bottom: 3px solid var(--color-accent);
  font-family: 'Cormorant Garamond', serif;
  z-index: 1000;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
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

  @media (max-width: 768px) {
    display: block;
    background: none;
    border: none;
    color: var(--color-text);
    cursor: pointer;
    z-index: 1100;
  }
`;

const MobileMenu = styled.div<{ $open: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: ${({ $open }) => ($open ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0;
    background: linear-gradient(180deg, #3e2a15, #5a3e24);
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    border-top: 1px solid var(--color-accent);
  }
`;

export default function TopMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
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
      </Menu>

      <MobileMenu $open={menuOpen}>
        {navLinks.map(({ href, label }) => (
          <MenuLink key={href} href={href} onClick={closeMenu}>
            {label}
          </MenuLink>
        ))}
      </MobileMenu>
    </>
  );
}
