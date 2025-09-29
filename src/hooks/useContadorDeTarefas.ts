'use client';


import { useEffect, useState } from 'react';
import { fetchTarefas, subscribe } from '../data/store';


export default function useContadorDeTarefas() {
    const [count, setCount] = useState<number>(0);


    useEffect(() => {
        let mounted = true;
        async function load() {
            const t = await fetchTarefas();
            if (mounted) setCount(t.length);
        }
        load();


        const unsub = subscribe(async () => {
            const t = await fetchTarefas();
            setCount(t.length);
        });


        return () => {
            mounted = false;
            unsub();
        };
    }, []);


    return count;
}