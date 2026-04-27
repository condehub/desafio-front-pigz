import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { describe, it, expect } from 'vitest';
import { Form } from './Form'; // Confirme se o caminho do import está correto

describe('Componente Form', () => {
  
  it('deve avançar para a tela 2 ao clicar no botão Continuar', () => {
    // 1. Desenhamos o formulário na tela virtual
    render(<Form />);

    // 2. Garantimos que ele começou na Tela 1 corretamente
    expect(screen.getByText('Quero vender no Pigz')).toBeInTheDocument();

    // 3. Capturamos o botão principal pelo texto dele na Tela 1
    const botao = screen.getByText('Continuar');

    // 4. AÇÃO: Simulamos o clique do usuário! 🖱️
    fireEvent.click(botao);

    // 5. EXPECTATIVA: Como provamos que a tela mudou?
    expect(screen.getByText('Próximo')).toBeInTheDocument();
  });

});