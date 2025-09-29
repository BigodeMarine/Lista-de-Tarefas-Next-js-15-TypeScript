import React from 'react';
import { Tarefa } from '../data/store';


export default function ListaTarefas({ tarefas }: { tarefas: Tarefa[] }) {
    return (
        <ul>
            {tarefas.map((t) => (
                <li key={t.id}>{t.texto}</li>
            ))}
        </ul>
    );
}