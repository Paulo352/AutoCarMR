// Configurações globais
const config = {
    emailService: 'autocarmr6@gmail.com',
    workingHours: {
      morning: { start: 8, end: 12 },
      afternoon: { start: 13, end: 17 }
    }
  };
  
  // Banco de dados de modelos
  const modelosPorMarca = {
    // ... (mesmo conteúdo anterior)
  };
  
  // Funções utilitárias
  const utils = {
    getCurrentYear: () => new Date().getFullYear(),
    validateEmail: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    validatePhone: (phone) => /^[0-9]{10,11}$/.test(phone),
    formatPrice: (price) => `R$ ${parseFloat(price).toFixed(2).replace('.', ',')}`
  };
  
  // Manipulação do DOM
  const DOM = {
    init: () => {
      // Atualiza o ano no footer
      document.getElementById('current-year').textContent = utils.getCurrentYear();
      
      // Inicializa eventos
      if (document.getElementById('agendamentoForm')) {
        DOM.setupAgendamentoForm();
      }
      
      if (document.getElementById('marca')) {
        DOM.setupModelosDropdown();
      }
    },
    
    setupAgendamentoForm: () => {
      const form = document.getElementById('agendamentoForm');
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        await Agendamento.submitForm();
      });
    },
    
    setupModelosDropdown: () => {
      const marcaSelect = document.getElementById('marca');
      marcaSelect.addEventListener('change', () => {
        Agendamento.carregarModelos();
      });
    }
  };
  
  // Lógica de agendamento
  const Agendamento = {
    carregarModelos: () => {
      const marcaSelecionada = document.getElementById('marca').value;
      const modeloSelect = document.getElementById('modelo');
      
      modeloSelect.innerHTML = '';
      modeloSelect.disabled = !marcaSelecionada;
      
      if (marcaSelecionada && modelosPorMarca[marcaSelecionada]) {
        const defaultOption = new Option('Selecione o modelo', '', true, true);
        defaultOption.disabled = true;
        modeloSelect.add(defaultOption);
        
        modelosPorMarca[marcaSelecionada].forEach(modelo => {
          modeloSelect.add(new Option(modelo, modelo.toLowerCase().replace(/\s+/g, '-')));
        });
      }
    },
    
    validateForm: () => {
      // Validação dos campos
      const requiredFields = ['nome', 'email', 'telefone', 'data', 'horario', 'marca', 'modelo'];
      let isValid = true;
      
      requiredFields.forEach(field => {
        const element = document.getElementById(field);
        if (!element.value) {
          element.classList.add('error');
          isValid = false;
        } else {
          element.classList.remove('error');
        }
      });
      
      // Validação específica de email e telefone
      if (!utils.validateEmail(document.getElementById('email').value)) {
        document.getElementById('email').classList.add('error');
        isValid = false;
      }
      
      if (!utils.validatePhone(document.getElementById('telefone').value)) {
        document.getElementById('telefone').classList.add('error');
        isValid = false;
      }
      
      return isValid;
    },
    
    submitForm: async () => {
      if (!Agendamento.validateForm()) {
        DOM.showFeedback('Por favor, preencha todos os campos corretamente.', 'error');
        return;
      }
      
      const formData = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        data: document.getElementById('data').value,
        horario: document.getElementById('horario').value,
        marca: document.getElementById('marca').value,
        modelo: document.getElementById('modelo').value,
        mensagem: document.getElementById('mensagem').value
      };
      
      try {
        const response = await fetch('api/agendamento.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        
        const result = await response.json();
        
        if (result.success) {
          DOM.showFeedback('Agendamento realizado com sucesso!', 'success');
          document.getElementById('agendamentoForm').reset();
        } else {
          DOM.showFeedback(result.message || 'Ocorreu um erro ao agendar.', 'error');
        }
      } catch (error) {
        DOM.showFeedback('Erro ao conectar com o servidor.', 'error');
        console.error('Error:', error);
      }
    }
  };
  
  // Lógica de auto peças
  const AutoPecas = {
    init: () => {
      if (document.getElementById('pecasContainer')) {
        AutoPecas.loadProducts();
        AutoPecas.setupFilters();
      }
    },
    
    loadProducts: async (filters = {}) => {
      try {
        const response = await fetch('api/produtos.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(filters)
        });
        
        const products = await response.json();
        AutoPecas.renderProducts(products);
      } catch (error) {
        console.error('Error loading products:', error);
      }
    },
    
    renderProducts: (products) => {
      const container = document.getElementById('pecasContainer');
      container.innerHTML = '';
      
      products.forEach(product => {
        const productHTML = `
          <div class="peca-card" data-category="${product.category}" data-brand="${product.brand}">
            <div class="peca-img-container">
              <img src="assets/images/products/${product.image}" alt="${product.name}" class="peca-img">
            </div>
            <div class="peca-body">
              <span class="peca-category">${product.category}</span>
              <h3 class="peca-title">${product.name}</h3>
              <p class="peca-desc">${product.description}</p>
              <div>
                ${product.oldPrice ? `<span class="peca-old-price">${utils.formatPrice(product.oldPrice)}</span>` : ''}
                <span class="peca-price">${utils.formatPrice(product.price)}</span>
              </div>
              <span class="peca-stock ${product.stock ? 'in-stock' : 'out-of-stock'}">
                ${product.stock ? 'Disponível' : 'Esgotado'}
              </span>
              <div class="peca-actions">
                <button class="btn-peca" ${!product.stock ? 'disabled' : ''}>
                  ${product.stock ? 'Adicionar ao Carrinho' : 'Indisponível'}
                </button>
              </div>
            </div>
          </div>
        `;
        
        container.insertAdjacentHTML('beforeend', productHTML);
      });
    },
    
    setupFilters: () => {
      document.querySelectorAll('.filter-option').forEach(option => {
        option.addEventListener('click', function() {
          this.parentNode.querySelectorAll('.filter-option').forEach(opt => {
            opt.classList.remove('active');
          });
          this.classList.add('active');
          
          const filters = {
            category: document.querySelector('.filter-options[data-filter="category"] .active')?.textContent,
            brand: document.querySelector('.filter-options[data-filter="brand"] .active')?.textContent
          };
          
          AutoPecas.loadProducts(filters);
        });
      });
    }
  };
  
  // Inicialização quando o DOM estiver pronto
  document.addEventListener('DOMContentLoaded', () => {
    DOM.init();
    AutoPecas.init();
  });