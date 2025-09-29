import React from 'react';
import { fetchTarefas } from '../data/store';
import dynamic from 'next/dynamic';
import ListaTarefas from '../components/ListaTarefas';


const NovaTarefa = dynamic(() => import('../components/NovaTarefa'), { ssr: false });


export default async function Page() {
  const tarefas = await fetchTarefas();


  return (
    <main>
      <h1>Minhas Tarefas</h1>
      <p>Quantidade: {tarefas.length}</p>
      <ListaTarefas tarefas={tarefas} />
      <NovaTarefa />
    </main>
  );
}