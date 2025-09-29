import { addTarefa, fetchTarefas, subscribe, _resetStore } from "../data/store";

describe("store.ts", () => {
    beforeEach(() => {
        _resetStore();
    });

    it("começa com tarefas iniciais", async () => {
        const tarefas = await fetchTarefas();
        expect(tarefas.length).toBeGreaterThan(0);
    });

    it("adiciona uma nova tarefa", async () => {
        const inicial = await fetchTarefas();
        const nova = await addTarefa("Primeira");
        expect(nova.texto).toBe("Primeira");

        const depois = await fetchTarefas();
        expect(depois).toHaveLength(inicial.length + 1);
    });

    it("gera IDs únicos para cada tarefa", async () => {
        const t1 = await addTarefa("Uma");
        const t2 = await addTarefa("Outra");
        expect(t1.id).not.toBe(t2.id);
    });

    it("notifica subscribers quando uma tarefa é adicionada", async () => {
        const callback = jest.fn();
        subscribe(callback);

        await addTarefa("Teste callback");

        expect(callback).toHaveBeenCalled();
    });

    it("reset volta para o estado inicial", async () => {
        const inicial = await fetchTarefas();
        await addTarefa("A");
        await addTarefa("B");
        let depois = await fetchTarefas();
        expect(depois).toHaveLength(inicial.length + 2);

        _resetStore();
        const resetado = await fetchTarefas();
        expect(resetado).toHaveLength(inicial.length);
    });
});
