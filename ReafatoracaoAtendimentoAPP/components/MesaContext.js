import { EstadoAtender, EstadoAtendido, EstadoDesocupado } from './MesaStates.js';

export class MesaContext {
    constructor(numero, statusTexto) {
        this.numero = numero;
        this.definirEstado(statusTexto);
    }

    // Altera o estado de acordo com a string vinda do banco
    definirEstado(statusTexto) {
        if (statusTexto === 'atender') {
            this.estadoAtual = new EstadoAtender(this);
        } else if (statusTexto === 'atendido') {
            this.estadoAtual = new EstadoAtendido(this);
        } else {
            this.estadoAtual = new EstadoDesocupado(this);
        }
    }

    // Renderiza a caixinha da mesa na tela
    renderizar() {
        const div = document.createElement('div');
        div.classList.add('mesa', this.estadoAtual.obterClasseCss());
        div.innerText = this.numero.toString().padStart(2, '0');

        // Delega o comportamento do clique para o estado atual
        div.addEventListener('click', () => {
            this.estadoAtual.aoClicar();
        });

        return div;
    }
}