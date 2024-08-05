type prioridade = 'MEDIA' | 'BAIXA' | 'ALTA';
export interface Lembrete {

    id: number;
    conteudo: string;
    arquivado: boolean;
    prioridade: prioridade;
    modificado: number ;
}
