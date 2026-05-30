export class DatabaseAdapter {
    constructor() {
        const firebaseConfig = {
            apiKey: "AIzaSyAd6lyUihMOcXuwa_BMf859iQE9uCmP_ag",
            authDomain: "extensao-c74de.firebaseapp.com",
            databaseURL: "https://extensao-c74de-default-rtdb.firebaseio.com",
            projectId: "extensao-c74de",
            storageBucket: "extensao-c74de.appspot.com",
            messagingSenderId: "1046201466680",
            appId: "1:1046201466680:web:ce8d912b30aa7fe55b4bcd"
        };
        
        // Inicializa o Firebase internamente usando o objeto global exposto pelo script compat
        firebase.initializeApp(firebaseConfig);
        this.db = firebase.database();
    }

    // Escuta mudanças em tempo real
    escutarMesas(aoMudar) {
        this.db.ref('mesas').on('value', (snapshot) => {
            const dados = snapshot.val() || {};
            aoMudar(dados);
        });
    }

    // Salva o novo status diretamente no banco de dados
    atualizarStatusMesa(numero, novoStatus) {
        this.db.ref('mesas/' + numero).set(novoStatus);
    }
}

// Instancia global para facilitar o uso no app
export const bancoDeDados = new DatabaseAdapter();