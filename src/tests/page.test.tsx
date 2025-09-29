import React from 'react';
import { render, screen } from '@testing-library/react';
import Page from '../app/page';
import * as store from '../data/store';

jest.mock('../data/store');

describe('app/page (Server Component)', () => {
    it('renderiza a lista com tarefas vindas do store', async () => {
        const fake = [
            { id: '1', texto: 'T1', criadaEm: new Date().toISOString() },
            { id: '2', texto: 'T2', criadaEm: new Date().toISOString() }
        ];

        (store.fetchTarefas as jest.Mock).mockResolvedValue(fake);

        const element = await Page();

        render(element as unknown as React.ReactElement);

        expect(screen.getByText(/Minhas Tarefas/i)).toBeInTheDocument();
        expect(screen.getByText(/Quantidade: 2/)).toBeInTheDocument();
        expect(screen.getByText('T1')).toBeInTheDocument();
        expect(screen.getByText('T2')).toBeInTheDocument();
    });
});