export type Tarefa = {
    id: string;
    texto: string;
    criadaEm: string;
};


let tarefas: Tarefa[] = [
    { id: '1', texto: 'Aprender a forjar espadas', criadaEm: new Date().toISOString() },
    { id: '2', texto: 'Escrever testes unitários', criadaEm: new Date().toISOString() }
];


const listeners: Array<() => void> = [];


export async function fetchTarefas(): Promise<Tarefa[]> {

    return Promise.resolve([...tarefas]);
}


export async function addTarefa(texto: string): Promise<Tarefa> {
    const t: Tarefa = { id: String(Date.now()), texto, criadaEm: new Date().toISOString() };
    tarefas.push(t);
    listeners.forEach((l) => l());
    return Promise.resolve(t);
}


export function subscribe(fn: () => void) {
    listeners.push(fn);
    return () => {
        const idx = listeners.indexOf(fn);
        if (idx >= 0) listeners.splice(idx, 1);
    };
}


export function _resetStore(forced: Tarefa[] = []) {
    tarefas = forced.length ? forced : [
        { id: '1', texto: 'Aprender a forjar espadas', criadaEm: new Date().toISOString() },
        { id: '2', texto: 'Escrever testes unitários', criadaEm: new Date().toISOString() }
    ];
}