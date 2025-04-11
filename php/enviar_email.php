<?php
header('Content-Type: application/json');

// Configurações
$config = [
    'email_to' => 'lima.pereira.paulo@escola.pr.gov.br', // Email alterado aqui
    'working_hours' => [
        'morning' => ['start' => '08:00', 'end' => '12:00'],
        'afternoon' => ['start' => '13:00', 'end' => '17:00']
    ]
];

// Funções de validação
function sanitizeInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

function validateEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

function validatePhone($phone) {
    return preg_match('/^[0-9]{10,11}$/', $phone);
}

function isWithinWorkingHours($time) {
    global $config;
    
    $time = strtotime($time);
    $morningStart = strtotime($config['working_hours']['morning']['start']);
    $morningEnd = strtotime($config['working_hours']['morning']['end']);
    $afternoonStart = strtotime($config['working_hours']['afternoon']['start']);
    $afternoonEnd = strtotime($config['working_hours']['afternoon']['end']);
    
    return ($time >= $morningStart && $time <= $morningEnd) || 
           ($time >= $afternoonStart && $time <= $afternoonEnd);
}

// Processamento da requisição
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $response = ['success' => false, 'message' => ''];
    
    try {
        // Sanitizar e validar entradas
        $nome = sanitizeInput($_POST['nome'] ?? '');
        $email = sanitizeInput($_POST['email'] ?? '');
        $telefone = sanitizeInput($_POST['telefone'] ?? '');
        $marca = sanitizeInput($_POST['marca'] ?? '');
        $modelo = sanitizeInput($_POST['modelo'] ?? '');
        $data = sanitizeInput($_POST['data'] ?? '');
        $horario = sanitizeInput($_POST['horario'] ?? '');
        $mensagem = sanitizeInput($_POST['mensagem'] ?? '');
        
        // Validações
        if (empty($nome) || empty($email) || empty($telefone) || 
            empty($marca) || empty($modelo) || empty($data) || empty($horario)) {
            throw new Exception('Por favor, preencha todos os campos obrigatórios.');
        }
        
        if (!validateEmail($email)) {
            throw new Exception('Por favor, insira um e-mail válido.');
        }
        
        if (!validatePhone($telefone)) {
            throw new Exception('Por favor, insira um telefone válido (10 ou 11 dígitos).');
        }
        
        if (!isWithinWorkingHours($horario)) {
            throw new Exception('O horário selecionado está fora do horário de funcionamento (08:00-12:00 e 13:00-17:00).');
        }
        
        // Preparar e-mail
        $subject = "Agendamento - Auto-Car MR";
        $message = "Novo agendamento realizado:\n\n";
        $message .= "Nome: $nome\n";
        $message .= "E-mail: $email\n";
        $message .= "Telefone: $telefone\n";
        $message .= "Marca do Veículo: $marca\n";
        $message .= "Modelo do Veículo: $modelo\n";
        $message .= "Data do Agendamento: $data\n";
        $message .= "Horário do Agendamento: $horario\n";
        $message .= "Mensagem: $mensagem\n";
        
        $headers = [
            'From' => $email,
            'Reply-To' => $email,
            'X-Mailer' => 'PHP/' . phpversion(),
            'Content-Type' => 'text/plain; charset=utf-8'
        ];
        
        // Enviar e-mail (em produção, considere usar PHPMailer ou similar)
        $mailSent = mail(
            $config['email_to'],
            $subject,
            $message,
            $headers
        );
        
        if ($mailSent) {
            $response['success'] = true;
            $response['message'] = 'Agendamento realizado com sucesso!';
        } else {
            throw new Exception('Ocorreu um erro ao enviar o e-mail. Por favor, tente novamente mais tarde.');
        }
    } catch (Exception $e) {
        $response['message'] = $e->getMessage();
    }
    
    echo json_encode($response);
    exit;
}

// Se não for POST, retorna erro
http_response_code(405);
echo json_encode(['success' => false, 'message' => 'Método não permitido']);