import { UnidadeMilitar } from './UnidadeMilitar';

export class Regimento implements UnidadeMilitar {
    private nome: string;
    private unidades: UnidadeMilitar[] = [];

    constructor(nome: string) {
        this.nome = nome;
    }

    adicionar(unidade: UnidadeMilitar): void {
        this.unidades.push(unidade);
    }

    remover(unidade: UnidadeMilitar): void {
        const index = this.unidades.indexOf(unidade);

        if (index !== -1) {
            this.unidades.splice(index, 1);
        }
    }

    atacar(): void {
        console.log(`\n--- Ordem de Ataque para o Regimento: ${this.nome} ---`);

        this.unidades.forEach((unidade) => {
            unidade.atacar();
        });
    }

    clone(): UnidadeMilitar {
        const clone = new Regimento(`(Clone) ${this.nome}`);

        this.unidades.forEach((unidade) => {
            clone.adicionar(unidade.clone());
        });

        return clone;
    }
}
