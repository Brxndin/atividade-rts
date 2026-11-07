import { IAAgressiva } from './bridge/IAAgressiva';
import { IADefensiva } from './bridge/IADefensiva';
import { Regimento } from './composite/Regimento';
import { Soldado } from './composite/Soldado';

// 1. Instanciando os comportamentos (Bridge)
const iaAgressiva = new IAAgressiva();
const iaDefensiva = new IADefensiva();

// 2. Criando Soldados (Leaf)
const s1 = new Soldado('Arqueiro Alpha', iaAgressiva);
const s2 = new Soldado('Guardião Beta', iaDefensiva);

// 3. Montando Estruturas Hierárquicas (Composite)
const pelotaoFrente = new Regimento('Pelotão de Choque');

pelotaoFrente.adicionar(s1);
pelotaoFrente.adicionar(s2);

const exercitoPrincipal = new Regimento('Exército Imperial');

exercitoPrincipal.adicionar(pelotaoFrente);
exercitoPrincipal.adicionar(new Soldado('Cavaleiro Real', iaAgressiva));

// 4. Teste de Ordem de Ataque no Exército Original
console.log('=== TESTE 1: EXÉRCITO ORIGINAL ===');

exercitoPrincipal.atacar();

// 5. Teste de Clonagem Profunda (Prototype)
console.log('\n=== TESTE 2: EXÉRCITO CLONADO (REFORÇO) ===');

const exercitoReforco = exercitoPrincipal.clone();

exercitoReforco.atacar();
