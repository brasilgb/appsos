const statusServico = [
    { value: 1, label: "Ordem Aberta" },
    { value: 2, label: "Ordem Fechada" },
    { value: 3, label: "Executando reparo" },
    { value: 4, label: "(CA)Serviço concluído" },
    { value: 5, label: "(CN)Serviço concluído" },
    { value: 6, label: "Entregue ao cliente" },
];

const statusOrcamento = [
    { value: 1, label: "Gerado" },
    { value: 2, label: "Aprovado" },
];

const roleUser = [
    { value: 1, label: "Administrador" },
    { value: 2, label: "Usuário" },
    { value: 3, label: "Técnico" },
];

const statusUser = [
    { value: 1, label: "Ativo" },
    { value: 2, label: "Inativo" },
];

export { statusServico, statusOrcamento, statusUser, roleUser };