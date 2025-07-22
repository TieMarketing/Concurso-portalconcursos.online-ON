// Estado da aplicação
const appState = {
    termsAccepted: false,
    locationData: null,
    regionData: null,
    selectedJob: null
};

// Dados dos concursos por região (mesmo do arquivo original)
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

// Elementos DOM
const elements = {
    // Formulário principal
    cepInput: null,
    termsCheckbox: null,
    termsIndicator: null,
    searchBtn: null,
    errorMessage: null,
    
    // Páginas
    mainPage: null,
    resultsPage: null,
    
    // Resultados
    backBtn: null,
    displayCep: null,
    displayCity: null,
    displayState: null,
    jobsList: null,
    selectedJob: null,
    
    // Vaga selecionada
    selectedJobTitle: null,
    selectedJobDescription: null,
    selectedJobSalary: null,
    selectedJobHours: null,
    selectedJobMode: null,
    selectedJobRequirements: null,
    applyBtn: null,
    
    // Modais
    searchModal: null,
    successModal: null,
    closeSuccessModal: null,
    successMessage: null
};

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Capturar elementos DOM
    captureElements();
    
    // Configurar event listeners
    setupEventListeners();
    
    // Atualizar indicador de termos
    updateTermsIndicator();
}

function captureElements() {
    // Formulário principal
    elements.cepInput = document.getElementById('cep');
    elements.termsCheckbox = document.getElementById('terms');
    elements.termsIndicator = document.getElementById('terms-indicator');
    elements.searchBtn = document.getElementById('search-btn');
    elements.errorMessage = document.getElementById('error-message');
    
    // Páginas
    elements.mainPage = document.getElementById('main-page');
    elements.resultsPage = document.getElementById('results-page');
    
    // Resultados
    elements.backBtn = document.getElementById('back-btn');
    elements.displayCep = document.getElementById('display-cep');
    elements.displayCity = document.getElementById('display-city');
    elements.displayState = document.getElementById('display-state');
    elements.jobsList = document.getElementById('jobs-list');
    elements.selectedJob = document.getElementById('selected-job');
    
    // Vaga selecionada
    elements.selectedJobTitle = document.getElementById('selected-job-title');
    elements.selectedJobDescription = document.getElementById('selected-job-description');
    elements.selectedJobSalary = document.getElementById('selected-job-salary');
    elements.selectedJobHours = document.getElementById('selected-job-hours');
    elements.selectedJobMode = document.getElementById('selected-job-mode');
    elements.selectedJobRequirements = document.getElementById('selected-job-requirements');
    elements.applyBtn = document.getElementById('apply-btn');
    
    // Modais
    elements.searchModal = document.getElementById('search-modal');
    elements.successModal = document.getElementById('success-modal');
    elements.closeSuccessModal = document.getElementById('close-success-modal');
    elements.successMessage = document.getElementById('success-message');
}

function setupEventListeners() {
    // Checkbox dos termos
    elements.termsCheckbox.addEventListener('change', handleTermsChange);
    
    // Campo CEP - formatação automática
    elements.cepInput.addEventListener('input', handleCepInput);
    elements.cepInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
    
    // Botão de busca
    elements.searchBtn.addEventListener('click', handleSearch);
    
    // Botão voltar
    elements.backBtn.addEventListener('click', handleBackToMain);
    
    // Fechar modal de sucesso
    elements.closeSuccessModal.addEventListener('click', hideSuccessModal);
    
    // Botão de inscrição
    elements.applyBtn.addEventListener('click', handleApply);
    
    // Fechar modal clicando no overlay
    elements.successModal.addEventListener('click', function(e) {
        if (e.target === elements.successModal) {
            hideSuccessModal();
        }
    });
}

function handleTermsChange(event) {
    appState.termsAccepted = event.target.checked;
    updateTermsIndicator();
    updateSearchButton();
}

function updateTermsIndicator() {
    if (appState.termsAccepted) {
        elements.termsIndicator.innerHTML = `
            <div class="terms-success">
                <i class="fas fa-check-circle"></i>
                <span>Termos aceitos! Agora você pode prosseguir.</span>
            </div>
        `;
    } else {
        elements.termsIndicator.innerHTML = `
            <div class="terms-warning">
                <i class="fas fa-exclamation-triangle"></i>
                <span>É necessário aceitar os termos para continuar</span>
            </div>
        `;
    }
}

function updateSearchButton() {
    const cep = elements.cepInput.value.replace(/\D/g, '');
    const isValid = appState.termsAccepted && cep.length === 8;
    
    elements.searchBtn.disabled = !isValid;
    
    if (isValid) {
        elements.searchBtn.style.opacity = '1';
        elements.searchBtn.style.cursor = 'pointer';
    } else {
        elements.searchBtn.style.opacity = '0.6';
        elements.searchBtn.style.cursor = 'not-allowed';
    }
}

function handleCepInput(event) {
    let value = event.target.value.replace(/\D/g, '');
    
    // Limitar a 8 dígitos
    if (value.length > 8) {
        value = value.substring(0, 8);
    }
    
    // Adicionar hífen após o 5º dígito
    if (value.length > 5) {
        value = value.substring(0, 5) + '-' + value.substring(5);
    }
    
    event.target.value = value;
    updateSearchButton();
}

async function handleSearch() {
    if (!appState.termsAccepted) {
        showError('É necessário aceitar os termos para continuar.');
        return;
    }

    const cep = elements.cepInput.value.replace(/\D/g, '');
    
    if (cep.length !== 8) {
        showError('Por favor, digite um CEP válido com 8 dígitos.');
        return;
    }

    try {
        // Mostrar modal de busca
        showSearchModal();
        
        // Buscar dados do CEP
        const locationData = await fetchCepData(cep);
        
        if (locationData.erro) {
            throw new Error('CEP não encontrado. Verifique o número digitado.');
        }

        // Determinar região baseada no estado
        const region = estadosParaRegioes[locationData.uf] || 'Sudeste';
        
        // Salvar dados no estado
        appState.locationData = locationData;
        appState.regionData = concursosPorRegiao[region];

        // Aguardar um pouco para mostrar o loading
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Esconder modal de busca
        hideSearchModal();

        // Mostrar página de resultados
        showResultsPage();

        // Mostrar modal de sucesso
        setTimeout(() => {
            showSuccessModal();
        }, 500);

    } catch (error) {
        hideSearchModal();
        showError(error.message || 'Erro ao buscar CEP. Tente novamente.');
    }
}

async function fetchCepData(cep) {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    
    if (!response.ok) {
        throw new Error('Erro na consulta do CEP');
    }
    
    return await response.json();
}

function showError(message) {
    elements.errorMessage.querySelector('span').textContent = message;
    elements.errorMessage.classList.remove('hidden');
    
    // Auto-hide após 5 segundos
    setTimeout(() => {
        elements.errorMessage.classList.add('hidden');
    }, 5000);
}

function showSearchModal() {
    elements.searchModal.classList.remove('hidden');
}

function hideSearchModal() {
    elements.searchModal.classList.add('hidden');
}

function showSuccessModal() {
    if (appState.locationData) {
        const message = `Encontramos ${appState.regionData.cargos.filter(c => c.disponivel).length} vagas disponíveis em ${appState.locationData.localidade}/${appState.locationData.uf}!`;
        elements.successMessage.textContent = message;
    }
    
    elements.successModal.classList.remove('hidden');
    
    // Auto-hide após 5 segundos
    setTimeout(() => {
        hideSuccessModal();
    }, 5000);
}

function hideSuccessModal() {
    elements.successModal.classList.add('hidden');
}

function showResultsPage() {
    // Esconder página principal
    elements.mainPage.classList.add('hidden');
    
    // Mostrar página de resultados
    elements.resultsPage.classList.remove('hidden');
    
    // Preencher dados da localização
    fillLocationData();
    
    // Renderizar lista de vagas
    renderJobsList();
    
    // Scroll para o topo
    window.scrollTo(0, 0);
}

function fillLocationData() {
    if (!appState.locationData) return;
    
    const data = appState.locationData;
    
    elements.displayCep.textContent = data.cep || '-';
    elements.displayCity.textContent = data.localidade || '-';
    elements.displayState.textContent = data.uf || '-';
}

function renderJobsList() {
    if (!appState.regionData) return;
    
    elements.jobsList.innerHTML = '';
    
    appState.regionData.cargos.forEach(job => {
        const jobElement = createJobCard(job);
        elements.jobsList.appendChild(jobElement);
    });
}

function createJobCard(job) {
    const card = document.createElement('div');
    card.className = `job-card ${job.disponivel ? 'available' : 'unavailable'}`;
    
    const salaryFormatted = `R$ ${job.remuneracao.min.toLocaleString('pt-BR')} - R$ ${job.remuneracao.max.toLocaleString('pt-BR')}`;
    
    card.innerHTML = `
        <div class="job-header">
            <h3 class="job-title">${job.nome}</h3>
            <span class="job-status ${job.disponivel ? 'available' : 'unavailable'}">
                ${job.disponivel ? 'Disponível' : 'Esgotado'}
            </span>
        </div>
        
        <p class="job-description">${job.descricao}</p>
        
        <div class="job-info-grid">
            <div class="job-info-item">
                <i class="fas fa-dollar-sign"></i>
                <div>
                    <span class="info-label">Salário</span>
                    <span class="info-value">${salaryFormatted}</span>
                </div>
            </div>
            
            <div class="job-info-item">
                <i class="fas fa-clock"></i>
                <div>
                    <span class="info-label">Carga Horária</span>
                    <span class="info-value">${job.cargaHoraria}</span>
                </div>
            </div>
            
            <div class="job-info-item">
                <i class="fas fa-map-marker-alt"></i>
                <div>
                    <span class="info-label">Modalidade</span>
                    <span class="info-value">${job.modalidade}</span>
                </div>
            </div>
            
            <div class="job-info-item">
                <i class="fas fa-graduation-cap"></i>
                <div>
                    <span class="info-label">Requisitos</span>
                    <span class="info-value">${job.requisitos}</span>
                </div>
            </div>
        </div>
        
        <div class="job-requirements">
            <strong>Requisitos:</strong> ${job.requisitos}
        </div>
        
        <button 
            class="select-btn" 
            ${!job.disponivel ? 'disabled' : ''}
            onclick="selectJob(${job.id})"
        >
            ${job.disponivel ? 
                '<i class="fas fa-check"></i> Selecionar Vaga' : 
                '<i class="fas fa-times"></i> Indisponível'
            }
        </button>
    `;
    
    return card;
}

function selectJob(jobId) {
    const job = appState.regionData.cargos.find(j => j.id === jobId);
    if (!job || !job.disponivel) return;
    
    appState.selectedJob = job;
    showSelectedJob();
    
    // Scroll suave para a seção
    setTimeout(() => {
        elements.selectedJob.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }, 100);
}

function showSelectedJob() {
    if (!appState.selectedJob) return;
    
    const job = appState.selectedJob;
    const salaryFormatted = `R$ ${job.remuneracao.min.toLocaleString('pt-BR')} - R$ ${job.remuneracao.max.toLocaleString('pt-BR')}`;
    
    elements.selectedJobTitle.textContent = job.nome;
    elements.selectedJobDescription.textContent = job.descricao;
    elements.selectedJobSalary.textContent = salaryFormatted;
    elements.selectedJobHours.textContent = job.cargaHoraria;
    elements.selectedJobMode.textContent = job.modalidade;
    elements.selectedJobRequirements.textContent = job.requisitos;
    
    elements.selectedJob.classList.remove('hidden');
}

function handleBackToMain() {
    // Esconder página de resultados
    elements.resultsPage.classList.add('hidden');
    
    // Mostrar página principal
    elements.mainPage.classList.remove('hidden');
    
    // Limpar estado
    appState.locationData = null;
    appState.regionData = null;
    appState.selectedJob = null;
    
    // Esconder seção de vaga selecionada
    elements.selectedJob.classList.add('hidden');
    
    // Scroll para o topo
    window.scrollTo(0, 0);
}

function handleApply() {
    if (!appState.selectedJob) return;
    
    // Simular processo de inscrição
    alert(`Redirecionando para o processo de inscrição da vaga: ${appState.selectedJob.nome}`);
}

// Tornar função global para ser chamada pelos botões
window.selectJob = selectJob;

