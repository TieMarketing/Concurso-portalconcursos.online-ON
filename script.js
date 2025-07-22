// Estado da aplicação
let appState = {
    termsAccepted: false,
    dadosLocalizacao: null,
    dadosMock: null,
    cargoSelecionado: null
};

// Dados mock dos concursos por região
const concursosPorRegiao = {
    'Norte': {
        regiao: 'Norte',
        cargos: [
            {
                id: 1,
                nome: 'Auxiliar Administrativo',
                descricao: 'Apoio administrativo e organizacional nas unidades de ensino municipais.',
                remuneracao: { min: 3322, max: 4783 },
                cargaHoraria: '40h semanais',
                modalidade: 'Presencial',
                requisitos: 'Ensino médio completo',
                disponivel: true
            },
            {
                id: 2,
                nome: 'Auxiliar de Produção Escolar',
                descricao: 'Responsável pela preparação e distribuição da alimentação nas escolas municipais.',
                remuneracao: { min: 3667, max: 4975 },
                cargaHoraria: '40h semanais',
                modalidade: 'Presencial',
                requisitos: 'Ensino fundamental completo',
                disponivel: true
            },
            {
                id: 3,
                nome: 'Auxiliar de Secretaria',
                descricao: 'Suporte administrativo em secretarias e departamentos municipais.',
                remuneracao: { min: 3260, max: 4536 },
                cargaHoraria: '40h semanais',
                modalidade: 'Presencial',
                requisitos: 'Ensino médio completo',
                disponivel: true
            },
            {
                id: 4,
                nome: 'Auxiliar de Segurança Escolar',
                descricao: 'Responsável pela segurança e monitoramento nas unidades escolares.',
                remuneracao: { min: 3871, max: 5061 },
                cargaHoraria: '40h semanais',
                modalidade: 'Presencial',
                requisitos: 'Ensino médio completo',
                disponivel: true
            },
            {
                id: 5,
                nome: 'Auxiliar de Serviços de Limpeza',
                descricao: 'Manutenção da limpeza e conservação de prédios públicos municipais.',
                remuneracao: { min: 3307, max: 4445 },
                cargaHoraria: '40h semanais',
                modalidade: 'Presencial',
                requisitos: 'Ensino fundamental completo',
                disponivel: true
            },
            {
                id: 6,
                nome: 'Auxiliar de Cozinha Escolar',
                descricao: 'Preparo e distribuição da merenda escolar nas unidades de ensino.',
                remuneracao: { min: 3479, max: 4896 },
                cargaHoraria: '40h semanais',
                modalidade: 'Presencial',
                requisitos: 'Ensino fundamental completo',
                disponivel: true
            },
            {
                id: 7,
                nome: 'Técnico em Manutenção Predial',
                descricao: 'Manutenção preventiva e corretiva de equipamentos e instalações.',
                remuneracao: { min: 4200, max: 5800 },
                cargaHoraria: '40h semanais',
                modalidade: 'Presencial',
                requisitos: 'Ensino técnico completo',
                disponivel: false
            },
            {
                id: 8,
                nome: 'Secretário Escolar (home office)',
                descricao: 'Gestão administrativa escolar com possibilidade de trabalho remoto.',
                remuneracao: { min: 3800, max: 5200 },
                cargaHoraria: '40h semanais',
                modalidade: 'Home office',
                requisitos: 'Ensino superior completo',
                disponivel: false
            }
        ]
    },
    'Nordeste': {
        regiao: 'Nordeste',
        cargos: [
            {
                id: 1,
                nome: 'Auxiliar Administrativo',
                descricao: 'Apoio administrativo e organizacional nas unidades de ensino municipais.',
                remuneracao: { min: 3322, max: 4783 },
                cargaHoraria: '40h semanais',
                modalidade: 'Presencial',
                requisitos: 'Ensino médio completo',
                disponivel: true
            },
            {
                id: 2,
                nome: 'Auxiliar de Produção Escolar',
                descricao: 'Responsável pela preparação e distribuição da alimentação nas escolas municipais.',
                remuneracao: { min: 3667, max: 4975 },
                cargaHoraria: '40h semanais',
                modalidade: 'Presencial',
                requisitos: 'Ensino fundamental completo',
                disponivel: true
            },
            {
                id: 3,
                nome: 'Auxiliar de Secretaria',
                descricao: 'Suporte administrativo em secretarias e departamentos municipais.',
                remuneracao: { min: 3260, max: 4536 },
                cargaHoraria: '40h semanais',
                modalidade: 'Presencial',
                requisitos: 'Ensino médio completo',
                disponivel: true
            },
            {
                id: 4,
                nome: 'Auxiliar de Segurança Escolar',
                descricao: 'Responsável pela segurança e monitoramento nas unidades escolares.',
                remuneracao: { min: 3871, max: 5061 },
                cargaHoraria: '40h semanais',
                modalidade: 'Presencial',
                requisitos: 'Ensino médio completo',
                disponivel: true
            },
            {
                id: 5,
                nome: 'Auxiliar de Serviços de Limpeza',
                descricao: 'Manutenção da limpeza e conservação de prédios públicos municipais.',
                remuneracao: { min: 3307, max: 4445 },
                cargaHoraria: '40h semanais',
                modalidade: 'Presencial',
                requisitos: 'Ensino fundamental completo',
                disponivel: true
            },
            {
                id: 6,
                nome: 'Auxiliar de Cozinha Escolar',
                descricao: 'Preparo e distribuição da merenda escolar nas unidades de ensino.',
                remuneracao: { min: 3479, max: 4896 },
                cargaHoraria: '40h semanais',
                modalidade: 'Presencial',
                requisitos: 'Ensino fundamental completo',
                disponivel: true
            },
            {
                id: 7,
                nome: 'Técnico em Manutenção Predial',
                descricao: 'Manutenção preventiva e corretiva de equipamentos e instalações.',
                remuneracao: { min: 4200, max: 5800 },
                cargaHoraria: '40h semanais',
                modalidade: 'Presencial',
                requisitos: 'Ensino técnico completo',
                disponivel: false
            },
            {
                id: 8,
                nome: 'Secretário Escolar (home office)',
                descricao: 'Gestão administrativa escolar com possibilidade de trabalho remoto.',
                remuneracao: { min: 3800, max: 5200 },
                cargaHoraria: '40h semanais',
                modalidade: 'Home office',
                requisitos: 'Ensino superior completo',
                disponivel: false
            }
        ]
    },
    'Centro-Oeste': {
        regiao: 'Centro-Oeste',
        cargos: [
            {
                id: 1,
                nome: 'Auxiliar Administrativo',
                descricao: 'Apoio administrativo e organizacional nas unidades de ensino municipais.',
                remuneracao: { min: 3322, max: 4783 },
                cargaHoraria: '40h semanais',
                modalidade: 'Presencial',
                requisitos: 'Ensino médio completo',
                disponivel: true
            },
            {
                id: 2,
                nome: 'Auxiliar de Produção Escolar',
                descricao: 'Responsável pela preparação e distribuição da alimentação nas escolas municipais.',
                remuneracao: { min: 3667, max: 4975 },
                cargaHoraria: '40h semanais',
                modalidade: 'Presencial',
                requisitos: 'Ensino fundamental completo',
                disponivel: true
            },
            {
                id: 3,
                nome: 'Auxiliar de Secretaria',
                descricao: 'Suporte administrativo em secretarias e departamentos municipais.',
                remuneracao: { min: 3260, max: 4536 },
                cargaHoraria: '40h semanais',
                modalidade: 'Presencial',
                requisitos: 'Ensino médio completo',
                disponivel: true
            },
            {
                id: 4,
                nome: 'Auxiliar de Segurança Escolar',
                descricao: 'Responsável pela segurança e monitoramento nas unidades escolares.',
                remuneracao: { min: 3871, max: 5061 },
                cargaHoraria: '40h semanais',
                modalidade: 'Presencial',
                requisitos: 'Ensino médio completo',
                disponivel: true
            },
            {
                id: 5,
                nome: 'Auxiliar de Serviços de Limpeza',
                descricao: 'Manutenção da limpeza e conservação de prédios públicos municipais.',
                remuneracao: { min: 3307, max: 4445 },
                cargaHoraria: '40h semanais',
                modalidade: 'Presencial',
                requisitos: 'Ensino fundamental completo',
                disponivel: true
            },
            {
                id: 6,
                nome: 'Auxiliar de Cozinha Escolar',
                descricao: 'Preparo e distribuição da merenda escolar nas unidades de ensino.',
                remuneracao: { min: 3479, max: 4896 },
                cargaHoraria: '40h semanais',
                modalidade: 'Presencial',
                requisitos: 'Ensino fundamental completo',
                disponivel: true
            },
            {
                id: 7,
                nome: 'Técnico em Manutenção Predial',
                descricao: 'Manutenção preventiva e corretiva de equipamentos e instalações.',
                remuneracao: { min: 4200, max: 5800 },
                cargaHoraria: '40h semanais',
                modalidade: 'Presencial',
                requisitos: 'Ensino técnico completo',
                disponivel: false
            },
            {
                id: 8,
                nome: 'Secretário Escolar (home office)',
                descricao: 'Gestão administrativa escolar com possibilidade de trabalho remoto.',
                remuneracao: { min: 3800, max: 5200 },
                cargaHoraria: '40h semanais',
                modalidade: 'Home office',
                requisitos: 'Ensino superior completo',
                disponivel: false
            }
        ]
    },
    'Sudeste': {
        regiao: 'Sudeste',
        cargos: [
            {
                id: 1,
                nome: 'Auxiliar Administrativo',
                descricao: 'Apoio administrativo e organizacional nas unidades de ensino municipais.',
                remuneracao: { min: 3322, max: 4783 },
                cargaHoraria: '40h semanais',
                modalidade: 'Presencial',
                requisitos: 'Ensino médio completo',
                disponivel: true
            },
            {
                id: 2,
                nome: 'Auxiliar de Produção Escolar',
                descricao: 'Responsável pela preparação e distribuição da alimentação nas escolas municipais.',
                remuneracao: { min: 3667, max: 4975 },
                cargaHoraria: '40h semanais',
                modalidade: 'Presencial',
                requisitos: 'Ensino fundamental completo',
                disponivel: true
            },
            {
                id: 3,
                nome: 'Auxiliar de Secretaria',
                descricao: 'Suporte administrativo em secretarias e departamentos municipais.',
                remuneracao: { min: 3260, max: 4536 },
                cargaHoraria: '40h semanais',
                modalidade: 'Presencial',
                requisitos: 'Ensino médio completo',
                disponivel: true
            },
            {
                id: 4,
                nome: 'Auxiliar de Segurança Escolar',
                descricao: 'Responsável pela segurança e monitoramento nas unidades escolares.',
                remuneracao: { min: 3871, max: 5061 },
                cargaHoraria: '40h semanais',
                modalidade: 'Presencial',
                requisitos: 'Ensino médio completo',
                disponivel: true
            },
            {
                id: 5,
                nome: 'Auxiliar de Serviços de Limpeza',
                descricao: 'Manutenção da limpeza e conservação de prédios públicos municipais.',
                remuneracao: { min: 3307, max: 4445 },
                cargaHoraria: '40h semanais',
                modalidade: 'Presencial',
                requisitos: 'Ensino fundamental completo',
                disponivel: true
            },
            {
                id: 6,
                nome: 'Auxiliar de Cozinha Escolar',
                descricao: 'Preparo e distribuição da merenda escolar nas unidades de ensino.',
                remuneracao: { min: 3479, max: 4896 },
                cargaHoraria: '40h semanais',
                modalidade: 'Presencial',
                requisitos: 'Ensino fundamental completo',
                disponivel: true
            },
            {
                id: 7,
                nome: 'Técnico em Manutenção Predial',
                descricao: 'Manutenção preventiva e corretiva de equipamentos e instalações.',
                remuneracao: { min: 4200, max: 5800 },
                cargaHoraria: '40h semanais',
                modalidade: 'Presencial',
                requisitos: 'Ensino técnico completo',
                disponivel: false
            },
            {
                id: 8,
                nome: 'Secretário Escolar (home office)',
                descricao: 'Gestão administrativa escolar com possibilidade de trabalho remoto.',
                remuneracao: { min: 3800, max: 5200 },
                cargaHoraria: '40h semanais',
                modalidade: 'Home office',
                requisitos: 'Ensino superior completo',
                disponivel: false
            }
        ]
    },
    'Sul': {
        regiao: 'Sul',
        cargos: [
            {
                id: 1,
                nome: 'Auxiliar Administrativo',
                descricao: 'Apoio administrativo e organizacional nas unidades de ensino municipais.',
                remuneracao: { min: 3322, max: 4783 },
                cargaHoraria: '40h semanais',
                modalidade: 'Presencial',
                requisitos: 'Ensino médio completo',
                disponivel: true
            },
            {
                id: 2,
                nome: 'Auxiliar de Produção Escolar',
                descricao: 'Responsável pela preparação e distribuição da alimentação nas escolas municipais.',
                remuneracao: { min: 3667, max: 4975 },
                cargaHoraria: '40h semanais',
                modalidade: 'Presencial',
                requisitos: 'Ensino fundamental completo',
                disponivel: true
            },
            {
                id: 3,
                nome: 'Auxiliar de Secretaria',
                descricao: 'Suporte administrativo em secretarias e departamentos municipais.',
                remuneracao: { min: 3260, max: 4536 },
                cargaHoraria: '40h semanais',
                modalidade: 'Presencial',
                requisitos: 'Ensino médio completo',
                disponivel: true
            },
            {
                id: 4,
                nome: 'Auxiliar de Segurança Escolar',
                descricao: 'Responsável pela segurança e monitoramento nas unidades escolares.',
                remuneracao: { min: 3871, max: 5061 },
                cargaHoraria: '40h semanais',
                modalidade: 'Presencial',
                requisitos: 'Ensino médio completo',
                disponivel: true
            },
            {
                id: 5,
                nome: 'Auxiliar de Serviços de Limpeza',
                descricao: 'Manutenção da limpeza e conservação de prédios públicos municipais.',
                remuneracao: { min: 3307, max: 4445 },
                cargaHoraria: '40h semanais',
                modalidade: 'Presencial',
                requisitos: 'Ensino fundamental completo',
                disponivel: true
            },
            {
                id: 6,
                nome: 'Auxiliar de Cozinha Escolar',
                descricao: 'Preparo e distribuição da merenda escolar nas unidades de ensino.',
                remuneracao: { min: 3479, max: 4896 },
                cargaHoraria: '40h semanais',
                modalidade: 'Presencial',
                requisitos: 'Ensino fundamental completo',
                disponivel: true
            },
            {
                id: 7,
                nome: 'Técnico em Manutenção Predial',
                descricao: 'Manutenção preventiva e corretiva de equipamentos e instalações.',
                remuneracao: { min: 4200, max: 5800 },
                cargaHoraria: '40h semanais',
                modalidade: 'Presencial',
                requisitos: 'Ensino técnico completo',
                disponivel: false
            },
            {
                id: 8,
                nome: 'Secretário Escolar (home office)',
                descricao: 'Gestão administrativa escolar com possibilidade de trabalho remoto.',
                remuneracao: { min: 3800, max: 5200 },
                cargaHoraria: '40h semanais',
                modalidade: 'Home office',
                requisitos: 'Ensino superior completo',
                disponivel: false
            }
        ]
    }
};

// Mapeamento de estados para regiões
const estadosParaRegioes = {
    'AC': 'Norte', 'AP': 'Norte', 'AM': 'Norte', 'PA': 'Norte', 'RO': 'Norte', 'RR': 'Norte', 'TO': 'Norte',
    'AL': 'Nordeste', 'BA': 'Nordeste', 'CE': 'Nordeste', 'MA': 'Nordeste', 'PB': 'Nordeste', 'PE': 'Nordeste', 'PI': 'Nordeste', 'RN': 'Nordeste', 'SE': 'Nordeste',
    'DF': 'Centro-Oeste', 'GO': 'Centro-Oeste', 'MT': 'Centro-Oeste', 'MS': 'Centro-Oeste',
    'ES': 'Sudeste', 'MG': 'Sudeste', 'RJ': 'Sudeste', 'SP': 'Sudeste',
    'PR': 'Sul', 'RS': 'Sul', 'SC': 'Sul'
};


// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function () {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    updateTermsIndicator();
}

function setupEventListeners() {
    // Checkbox dos termos
    const termsCheckbox = document.getElementById('terms');
    termsCheckbox.addEventListener('change', handleTermsChange);

    // Campo CEP
    const cepInput = document.getElementById('cep');
    cepInput.addEventListener('input', handleCepInput);

    // Botão de busca
    const searchBtn = document.getElementById('search-btn');
    searchBtn.addEventListener('click', handleSearch);

    // Botão voltar
    const voltarBtn = document.getElementById('voltar-btn');
    voltarBtn.addEventListener('click', handleVoltar);

    // Botão fechar modal de conclusão
    const fecharModalBtn = document.getElementById('fechar-modal-conclusao');
    fecharModalBtn.addEventListener('click', hideModalConclusao);

    // Botão iniciar inscrição
    const iniciarInscricaoBtn = document.getElementById('iniciar-inscricao-btn');
    iniciarInscricaoBtn.addEventListener('click', handleIniciarInscricao);
}

function handleTermsChange(event) {
    appState.termsAccepted = event.target.checked;
    updateTermsIndicator();
}

function updateTermsIndicator() {
    const indicator = document.getElementById('terms-indicator');

    if (appState.termsAccepted) {
        indicator.className = 'mt-4 p-3 rounded-lg transition-all duration-300 bg-green-100 border border-green-300';
        indicator.innerHTML = `
            <div class="flex items-center">
                <i class="fas fa-check-circle text-green-600 mr-2"></i>
                <span class="text-green-800 font-medium">✅ Termos aceitos! Agora você pode prosseguir.</span>
            </div>
        `;
    } else {
        indicator.className = 'mt-4 p-3 rounded-lg transition-all duration-300 bg-yellow-100 border border-yellow-300 animate-pulse';
        indicator.innerHTML = `
            <div class="flex items-center">
                <i class="fas fa-exclamation-triangle text-yellow-600 mr-2"></i>
                <span class="text-yellow-800 font-medium">⚠️ É necessário aceitar os termos para continuar</span>
            </div>
        `;
    }
}

function handleCepInput(event) {
    let value = event.target.value.replace(/\D/g, '');

    if (value.length > 5) {
        value = value.substring(0, 5) + '-' + value.substring(5, 8);
    }

    event.target.value = value;
}

async function handleSearch() {
    if (!appState.termsAccepted) {
        showError('É necessário aceitar os termos para continuar.');
        return;
    }

    const cep = document.getElementById('cep').value.replace(/\D/g, '');

    if (cep.length !== 8) {
        showError('Por favor, digite um CEP válido.');
        return;
    }

    try {
        // Mostrar modal de busca
        showModalBusca();

        // Buscar dados do CEP
        const dadosCep = await buscarCep(cep);

        if (dadosCep.erro) {
            throw new Error('CEP não encontrado.');
        }

        // Determinar região
        const regiao = estadosParaRegioes[dadosCep.uf] || 'Sudeste';

        // Salvar dados
        appState.dadosLocalizacao = dadosCep;
        appState.dadosMock = concursosPorRegiao[regiao];

        // Aguardar um pouco para mostrar o modal de busca
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Esconder modal de busca
        hideModalBusca();

        // Ir para página de cargos
        showCargosPage();

        // Mostrar modal de conclusão
        setTimeout(() => {
            showModalConclusao();
        }, 500);

    } catch (error) {
        hideModalBusca();
        showError(error.message || 'Erro ao buscar CEP. Tente novamente.');
    }
}

async function buscarCep(cep) {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    return await response.json();
}

function showError(message) {
    const errorDiv = document.getElementById('error-message');
    errorDiv.querySelector('span').textContent = message;
    errorDiv.classList.remove('hidden');
    errorDiv.classList.add('flex');

    setTimeout(() => {
        errorDiv.classList.add('hidden');
        errorDiv.classList.remove('flex');
    }, 5000);
}

function showModalBusca() {
    const modal = document.getElementById('modal-busca');
    modal.classList.remove('hidden');
}

function hideModalBusca() {
    const modal = document.getElementById('modal-busca');
    modal.classList.add('hidden');
}

function showModalConclusao() {
    const modal = document.getElementById('modal-conclusao');
    const localizacaoText = document.getElementById('modal-localizacao');

    if (appState.dadosLocalizacao) {
        localizacaoText.textContent = `Encontramos oportunidades em ${appState.dadosLocalizacao.localidade}/${appState.dadosLocalizacao.uf}`;
    }

    modal.classList.remove('hidden');

    // Auto-hide após 5 segundos
    setTimeout(() => {
        hideModalConclusao();
    }, 5000);
}

function hideModalConclusao() {
    const modal = document.getElementById('modal-conclusao');
    modal.classList.add('hidden');
}

function showCargosPage() {
    // Esconder página principal
    document.getElementById('main-page').classList.add('hidden');

    // Mostrar página de cargos
    document.getElementById('cargos-page').classList.remove('hidden');

    // Preencher dados da localização
    preencherDadosLocalizacao();

    // Renderizar lista de cargos
    renderizarCargos();

    // Scroll para o topo
    window.scrollTo(0, 0);
}

function preencherDadosLocalizacao() {
    if (!appState.dadosLocalizacao) return;

    const dados = appState.dadosLocalizacao;

    // Preencher campos de localização
    document.getElementById('display-cep').textContent = dados.cep || '';
    document.getElementById('display-logradouro').textContent = dados.logradouro || 'Não informado';
    document.getElementById('display-bairro').textContent = dados.bairro || '';
    document.getElementById('display-localidade').textContent = dados.localidade || '';
    document.getElementById('display-uf').textContent = dados.uf || '';

    // Atualizar textos dinâmicos
    const cidadeUf = `${dados.localidade}/${dados.uf}`;
    document.getElementById('cidade-uf').textContent = cidadeUf;
    document.getElementById('cidade-estado').textContent = cidadeUf;
}

function renderizarCargos() {
    if (!appState.dadosMock) return;

    const container = document.getElementById('cargos-lista');
    container.innerHTML = '';

    appState.dadosMock.cargos.forEach(cargo => {
        const cargoElement = criarElementoCargo(cargo);
        container.appendChild(cargoElement);
    });
}

function criarElementoCargo(cargo) {
    const div = document.createElement('div');
    div.className = `cargo-card ${cargo.disponivel ? 'cargo-disponivel' : 'cargo-esgotado'}`;

    const remuneracaoFormatada = `R$ ${cargo.remuneracao.min.toLocaleString('pt-BR')} - R$ ${cargo.remuneracao.max.toLocaleString('pt-BR')}`;

    div.innerHTML = `
        <div class="flex items-start justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-900">• ${cargo.nome}</h3>
            <span class="text-sm px-2 py-1 rounded ${cargo.disponivel ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}">
                ${cargo.disponivel ? 'Disponível' : 'Esgotado'}
            </span>
        </div>
        
        <p class="text-gray-600 mb-4">${cargo.descricao}</p>
        
        <div class="cargo-info">
            <div class="cargo-info-item">
                <i class="fas fa-dollar-sign"></i>
                <div>
                    <span class="text-sm text-gray-500">Remuneração:</span>
                    <div class="font-semibold text-blue-600">${remuneracaoFormatada}</div>
                </div>
            </div>
            
            <div class="cargo-info-item">
                <i class="fas fa-clock"></i>
                <div>
                    <span class="text-sm text-gray-500">Carga Horária:</span>
                    <div class="font-medium">${cargo.cargaHoraria}</div>
                </div>
            </div>
            
            <div class="cargo-info-item">
                <i class="fas fa-map-marker-alt"></i>
                <div>
                    <span class="text-sm text-gray-500">Modalidade:</span>
                    <div class="font-medium">${cargo.modalidade}</div>
                </div>
            </div>
        </div>
        
        <div class="mt-4 text-sm text-gray-600">
            <strong>Requisitos:</strong> ${cargo.requisitos}
        </div>
        
        <div class="mt-6">
            ${cargo.disponivel ?
            `<button onclick="selecionarCargo(${cargo.id})" class="btn-selecionar">
                    Selecionar Cargo
                </button>` :
            `<button class="btn-indisponivel" disabled>
                    <i class="fas fa-exclamation-triangle mr-2"></i>
                    Indisponível
                </button>`
        }
        </div>
    `;

    return div;
}

function selecionarCargo(cargoId) {
    const cargo = appState.dadosMock.cargos.find(c => c.id === cargoId);
    if (!cargo) return;

    appState.cargoSelecionado = cargo;

    // Mostrar seção de cargo selecionado
    mostrarCargoSelecionado();

    // Scroll suave para a seção
    setTimeout(() => {
        document.getElementById('cargo-selecionado').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }, 100);
}

function mostrarCargoSelecionado() {
    if (!appState.cargoSelecionado) return;

    const cargo = appState.cargoSelecionado;
    const section = document.getElementById('cargo-selecionado');

    // Atualizar conteúdo
    document.getElementById('cargo-nome').textContent = `• ${cargo.nome}`;
    document.getElementById('cargo-descricao').textContent = cargo.descricao;

    const remuneracaoFormatada = `R$ ${cargo.remuneracao.min.toLocaleString('pt-BR')} - R$ ${cargo.remuneracao.max.toLocaleString('pt-BR')}`;
    document.getElementById('cargo-remuneracao').textContent = remuneracaoFormatada;

    // Mostrar seção
    section.classList.remove('hidden');
}

function handleVoltar() {
    // Esconder página de cargos
    document.getElementById('cargos-page').classList.add('hidden');

    // Mostrar página principal
    document.getElementById('main-page').classList.remove('hidden');

    // Limpar estado
    appState.dadosLocalizacao = null;
    appState.dadosMock = null;
    appState.cargoSelecionado = null;

    // Esconder seção de cargo selecionado
    document.getElementById('cargo-selecionado').classList.add('hidden');

    // Scroll para o topo
    window.scrollTo(0, 0);
}

function handleIniciarInscricao() {
    if (!appState.cargoSelecionado) {
        // Adiciona um alerta caso nenhum cargo seja selecionado, por segurança.
        alert("Por favor, selecione um cargo antes de iniciar a inscrição.");
        return;
    }

    // Salva APENAS o cargo selecionado no localStorage.
    // Os dados do usuário serão adicionados na próxima página.
    localStorage.setItem('dadosCargo', JSON.stringify(appState.cargoSelecionado));

    // Redireciona para a página de formulário (home.html)
    window.location.href = 'home.html';
}

// Função global para ser chamada pelos botões
window.selecionarCargo = selecionarCargo;

