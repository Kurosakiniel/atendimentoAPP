import { MesaContext } from './MesaContext.js';

export class MesaFactory {
    static criarMesa(numero, statusTexto) {
        return new MesaContext(numero, statusTexto);
    }
}