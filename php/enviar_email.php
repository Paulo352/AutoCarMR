<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Recupere os dados do formulário
  $nome = $_POST["nome"];
  $email = $_POST["email"];
  $telefone = $_POST["telefone"];
  $marca = $_POST["marca"];
  $modelo = $_POST["modelo"];
  $data = $_POST["data"];
  $horario = $_POST["horario"];

  // Verifique se o horário está dentro do horário de funcionamento
  $horarioFuncionamentoInicio = strtotime('08:00');
  $horarioFuncionamentoFim = strtotime('17:00');
  $horarioSelecionado = strtotime($horario);

  if ($horarioSelecionado < $horarioFuncionamentoInicio || $horarioSelecionado > $horarioFuncionamentoFim) {
    echo "O horário selecionado está fora do horário de funcionamento.";
    exit;
  }

  // Configurações do e-mail
  $to = "autocarmr6@gmail.com";
  $subject = "Agendamento - Auto-Car MR";
  $message = "Novo agendamento realizado:\n\n";
  $message .= "Nome: " . $nome . "\n";
  $message .= "E-mail: " . $email . "\n";
  $message .= "Telefone: " . $telefone . "\n";
  $message .= "Marca do Veículo: " . $marca . "\n";
  $message .= "Modelo do Veículo: " . $modelo . "\n";
  $message .= "Data do Agendamento: " . $data . "\n";
  $message .= "Horário do Agendamento: " . $horario . "\n";

  // Envia o e-mail
  $headers = "From: " . $email;

  if (mail($to, $subject, $message, $headers)) {
    echo "E-mail enviado com sucesso!";
  } else {
    echo "Ocorreu um erro ao enviar o e-mail.";
  }
}
?>