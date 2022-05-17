const validCPF = (cpf) => {
    if (cpf.length === 11) {
        let nums = cpf.substring(0, 9);
        let dgts = cpf.substring(9);
        let sum = 0;

        for (let i = 10; i > 1; i--) {
            sum += nums.charAt(10 - i) * i;
        }

        // validação do primeiro dígito
        let result = (sum % 11) < 2 ? 0 : 11 - (sum % 11);
        if (result != dgts.charAt(0)) return false;

        nums = cpf.substring(0, 10);
        sum = 0;
        for (let k = 11; k > 1; k--) {
            sum += nums.charAt(11 - k) * k;
        }

        // validação do segundo dígito
        result = (sum % 11) < 2 ? 0 : 11 - (sum % 11);
        if (result != dgts.charAt(1)) return false;

        return true;
    } else {
        return false;
    }
}

const valid = () => {
    const cpf = document.getElementById('txtCPF').value;

    if (cpf !== '') {
        validCPF(cpf) ? message('success') : message('error');
    } else {
        message('empty');
    }
}

// função para limpar a caixa de texto
const clean = () => {
    document.getElementById('txtCPF').value = '';
    document.getElementById('txtCPF').focus();

    message('clean');
}

// função para exibir/ocultar as mensagens do validador
const message = (type) => {
    const types = ['success', 'error', 'empty'];

    for (t in types) {
        document.getElementById(types[t]).style.display = type === types[t] ? 'block' : 'none';
    }
}
