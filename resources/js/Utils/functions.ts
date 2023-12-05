const statusOrdemByValue = (value:any) => {
    switch(value){
        case 1: return "Ordem Aberta";
        case 2: return "Ordem Fechada";
        case 3: return "Executando reparo";
        case 4: return "(CA)Serviço concluído";
        case 5: return "(CN)Serviço concluído";
        case 6: return "Entregue ao cliente";
    }
}

const statusUserByValue = (value:any) => {
    switch(value){
        case 1: return "Ativo";
        case 2: return "Inativo";
    }
}

const roleByValue = (value:any) => {
    switch(value){
        case 1: return "Administrador";
        case 2: return "Usuário";
        case 3: return "Técnico";
    }
}

export {statusOrdemByValue, statusUserByValue, roleByValue};