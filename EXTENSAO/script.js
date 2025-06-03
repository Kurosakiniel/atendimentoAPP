// CONFIGURAÇÃO DO FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyAd6lyUihMOcXuwa_BMf859iQE9uCmP_ag",
    authDomain: "extensao-c74de.firebaseapp.com",
    databaseURL: "https://extensao-c74de-default-rtdb.firebaseio.com",
    projectId: "extensao-c74de",
    storageBucket: "extensao-c74de.appspot.com",
    messagingSenderId: "1046201466680",
    appId: "1:1046201466680:web:ce8d912b30aa7fe55b4bcd"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

const container = document.getElementById('mesas-container');
const totalMesas = 9;

function criarMesa(num, status) {
    const div = document.createElement('div');
    div.classList.add('mesa', status);
    div.innerText = num.toString().padStart(2, '0');

    div.addEventListener('click', () => {
        if (status === 'atender') {
            atualizarStatus(num, 'atendido');
        } else if (status === 'atendido') {
            atualizarStatus(num, 'desocupado');
        } else {
            atualizarStatus(num, 'atender');
        }
    });

    container.appendChild(div);
}

function atualizarStatus(numero, novoStatus) {
    db.ref('mesas/' + numero).set(novoStatus);
}

function atualizarTela(dados) {
    container.innerHTML = '';
    for (let i = 1; i <= totalMesas; i++) {
        const status = dados[i] || 'desocupado';
        criarMesa(i, status);
    }
}

db.ref('mesas').on('value', (snapshot) => {
    const dados = snapshot.val() || {};
    atualizarTela(dados);
});
