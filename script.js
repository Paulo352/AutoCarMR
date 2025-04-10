function agendar() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var data = document.getElementById("data").value;
    var horario = document.getElementById("horario").value;
    var marca = document.getElementById("marca").value;
    var modelo = document.getElementById("modelo").value;
    var mensagem = document.getElementById("mensagem").value;
  
    // Verificar se todos os campos estão preenchidos
    if (nome && email && telefone && data && horario && marca && modelo) {
      // Verificar horário de funcionamento (08:00-12:00 e 13:00-17:00)
      var horaAtual = new Date().getHours();
      if (
        (horaAtual >= 8 && horaAtual < 12) ||
        (horaAtual >= 13 && horaAtual < 17)
      ) {
        // Enviar email com os dados do agendamento
        var subject = "Agendamento de Serviço";
        var body =
          "Nome: " +
          nome +
          "\n" +
          "Email: " +
          email +
          "\n" +
          "Telefone: " +
          telefone +
          "\n" +
          "Data: " +
          data +
          "\n" +
          "Horário: " +
          horario +
          "\n" +
          "Marca do Veículo: " +
          marca +
          "\n" +
          "Modelo do Veículo: " +
          modelo +
          "\n" +
          "Mensagem: " +
          mensagem;
  
        window.open(
          "mailto:seuemail@example.com?subject=" +
            encodeURIComponent(subject) +
            "&body=" +
            encodeURIComponent(body)
        );
  
        // Limpar os campos após o agendamento
        document.getElementById("nome").value = "";
        document.getElementById("email").value = "";
        document.getElementById("telefone").value = "";
        document.getElementById("data").value = "";
        document.getElementById("horario").value = "";
        document.getElementById("marca").value = "";
        document.getElementById("modelo").value = "";
        document.getElementById("mensagem").value = "";
  
        alert("Agendamento realizado com sucesso!");
      } else {
        alert(
          "Desculpe, o agendamento só pode ser realizado durante o horário de funcionamento (08:00-12:00 e 13:00-17:00)."
        );
      }
    } else {
      alert("Por favor, preencha todos os campos obrigatórios.");
    }
  }
  
  function carregarModelos() {
    var marca = document.getElementById("marca").value;
    var modeloSelect = document.getElementById("modelo");
  
    // Limpar a lista de modelos
    modeloSelect.innerHTML = "";
  
    if (marca === "Ford") {
      var modelos = ["EcoSport", "Fiesta", "Focus", "Fusion", "Ka", "Ranger"];
    } else if (marca === "Tesla") {
      var modelos = ["Model 3", "Model S", "Model X", "Model Y"];
    } else if (marca === "Volkswagen") {
      var modelos = ["Gol", "Jetta", "Nivus", "Polo", "T-Cross", "Tiguan"];
    } else if (marca === "Hyundai") {
      var modelos = ["Creta", "HB20", "i20", "i30", "Santa Fe", "Tucson"];
    } else if (marca === "Honda") {
      var modelos = ["Civic", "CR-V", "Fit", "HR-V", "WR-V"];
    } else if (marca === "Mitsubishi") {
      var modelos = ["Lancer", "Outlander", "Pajero", "Pajero Sport", "ASX"];
    } else if (marca === "Porsche") {
      var modelos = ["911", "Cayenne", "Macan", "Panamera", "Taycan"];
    } else if (marca === "BMW") {
      var modelos = ["Série 3", "Série 5", "X1", "X3", "X5"];
    } else if (marca === "Toyota") {
      var modelos = ["Corolla", "Etios", "Hilux", "Rav4", "Yaris"];
    } else if (marca === "Mercedes-Benz") {
      var modelos = ["Classe A", "Classe C", "Classe E", "GLA", "GLC"];
    } else if (marca === "Peugeot") {
      var modelos = ["208", "2008", "308", "3008", "5008"];
    } else if (marca === "Renault") {
      var modelos = ["Captur", "Duster", "Kwid", "Logan", "Sandero"];
    } else if (marca === "Nissan") {
      var modelos = ["Frontier", "Kicks", "March", "Sentra", "Versa"];
    } else if (marca === "Citroen") {
      var modelos = ["C3", "C4 Cactus", "C4 Lounge", "Jumpy", "Aircross"];
    } else if (marca === "Fiat") {
      var modelos = ["Argo", "Cronos", "Mobi", "Palio", "Uno"];
    } else if (marca === "Audi") {
      var modelos = ["A3", "A4", "Q3", "Q5", "TT"];
    } else if (marca === "Kia") {
      var modelos = ["Cerato", "Picanto", "Seltos", "Soul", "Sportage"];
    } else if (marca === "Outro") {
      var modelos = ["Outro"];
    }
  
    // Preencher a lista de modelos com base na marca selecionada
    for (var i = 0; i < modelos.length; i++) {
      var option = document.createElement("option");
      option.text = modelos[i];
      modeloSelect.add(option);
    }
  }
  
  document.getElementById("marca").addEventListener("change", carregarModelos);
  