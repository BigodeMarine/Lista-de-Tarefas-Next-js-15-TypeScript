'use client';


import React, { useState } from 'react';
import { addTarefa } from '../data/store';


export default function NovaTarefa({ onCriado }: { onCriado?: () => void }) {
    const [texto, setTexto] = useState('');
    const [submetendo, setSubmetendo] = useState(false);


    const valido = texto.trim().length > 0;


    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!valido) return;
        setSubmetendo(true);
        await addTarefa(texto.trim());
        setTexto('');
        setSubmetendo(false);
        onCriado?.();
    }


    return (
        <form onSubmit={handleSubmit} aria-label="form-nova-tarefa">
            <label htmlFor="nova">Nova tarefa</label>
            <input
                id="nova"
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
                placeholder="O que precisa ser feito?"
            />
            <button type="submit" disabled={!valido || submetendo}>
                {submetendo ? 'Salvando...' : 'Adicionar'}
            </button>
        </form>
    );
}