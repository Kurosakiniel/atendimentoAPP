import { bancoDeDados } from '../backend/DatabaseAdapter.js';

// Classe base (Interface)
class MesaState {
    constructor(mesaContexto) {
        this.mesa = mesaContexto;
    }
    obterClasseCss() { return ''; }
    aoClicar() {}
}

// Estado: Livre / Desocupada
export class EstadoDesocupado extends MesaState {
    obterClasseCss() { return 'desocupado'; }
    aoClicar() {
        bancoDeDados.atualizarStatusMesa(this.mesa.numero, 'atender');
    }
}

// Estado: Chamando Garçom
export class EstadoAtender extends MesaState {
    obterClasseCss() { return 'atender'; }
    aoClicar() {
        bancoDeDados.atualizarStatusMesa(this.mesa.numero, 'atendido');
    }
}

// Estado: Sendo Atendida
export class EstadoAtendido extends MesaState {
    obterClasseCss() { return 'atendido'; }
    aoClicar() {
        bancoDeDados.atualizarStatusMesa(this.mesa.numero, 'desocupado');
    }
}