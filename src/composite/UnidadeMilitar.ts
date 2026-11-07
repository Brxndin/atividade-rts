export interface UnidadeMilitar {
    atacar(): void;
    clone(): UnidadeMilitar;
    adicionar(unidade: UnidadeMilitar): void;
    remover(unidade: UnidadeMilitar): void;
}
