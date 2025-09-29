import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import NovaTarefa from '../components/NovaTarefa';
import * as store from '../data/store';

jest.mock('../data/store');

describe('<NovaTarefa />', () => {
    beforeEach(() => {
        (store.addTarefa as jest.Mock).mockResolvedValue({
            id: 'x',
            texto: 'ola',
            criadaEm: new Date().toISOString()
        });
    });

    it('renderiza input e botão desabilitado quando vazio', () => {
        render(<NovaTarefa />);
        const input = screen.getByPlaceholderText(/O que precisa ser feito\?/i);
        const button = screen.getByRole('button', { name: /adicionar/i });
        expect(input).toBeInTheDocument();
        expect(button).toBeDisabled();
    });

    it('habilita botão quando há texto e envia', async () => {
        render(<NovaTarefa />);
        const input = screen.getByPlaceholderText(/O que precisa ser feito\?/i);
        const button = screen.getByRole('button', { name: /adicionar/i });

        fireEvent.change(input, { target: { value: 'Nova' } });
        expect(button).not.toBeDisabled();

        fireEvent.click(button);

        await waitFor(() => {
            expect(store.addTarefa).toHaveBeenCalledWith('Nova');
            expect((input as HTMLInputElement).value).toBe('');
        });
    });
});