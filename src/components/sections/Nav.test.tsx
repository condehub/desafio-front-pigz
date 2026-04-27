import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { it, expect } from 'vitest';
import Nav from './Nav';

it('deve ter o carregamento preguiçoso ativado para performance', () => {
  render(<Nav />);
  const elemento = screen.getByTestId('container-hamburguer') as HTMLImageElement;

  // Verificamos se o atributo loading é igual a 'lazy'
  expect(elemento.getAttribute('loading')).toBe('lazy');
});