import { renderHook, act, waitFor } from '@testing-library/react';
import useContadorDeTarefas from '../hooks/useContadorDeTarefas';
import * as store from '../data/store';


jest.mock('../data/store');


describe('useContadorDeTarefas', () => {
    it('retorna o número inicial e atualiza quando ouve mudanças', async () => {
        const fake = [
            { id: '1', texto: 'a', criadaEm: new Date().toISOString() },
            { id: '2', texto: 'b', criadaEm: new Date().toISOString() }
        ];
        (store.fetchTarefas as jest.Mock).mockResolvedValue(fake);

        let savedCb: (() => void) | null = null;
        (store.subscribe as jest.Mock).mockImplementation((cb: () => void) => {
            savedCb = cb;
            return () => {
                savedCb = null;
            };
        });

        const { result } = renderHook(() => useContadorDeTarefas());

        await waitFor(() => {
            expect(result.current).toBe(2);
        });

        (store.fetchTarefas as jest.Mock).mockResolvedValue([
            ...fake,
            { id: '3', texto: 'c', criadaEm: new Date().toISOString() }
        ]);

        await act(async () => {
            if (savedCb) savedCb();
        });

        await waitFor(() => {
            expect(result.current).toBe(3);
        });
    });
});