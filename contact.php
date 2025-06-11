<?php
// Enable CORS for local development
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Get JSON input
$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Validate input
if (!$data) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid JSON data']);
    exit;
}

// Required fields
$required_fields = ['name', 'email', 'subject', 'message'];
foreach ($required_fields as $field) {
    if (empty($data[$field])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => "Field '$field' is required"]);
        exit;
    }
}

// Sanitize input
$name = htmlspecialchars(trim($data['name']));
$email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
$subject = htmlspecialchars(trim($data['subject']));
$message = htmlspecialchars(trim($data['message']));

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit;
}

// Prepare email content
$to = 'mamrembiu@gmail.com';
$email_subject = 'Portfolio Contact: ' . $subject;
$email_body = "
New contact form submission from your portfolio website:

Name: $name
Email: $email
Subject: $subject

Message:
$message

---
Sent from Portfolio Contact Form
Date: " . date('Y-m-d H:i:s') . "
IP Address: " . $_SERVER['REMOTE_ADDR'] . "
";

$headers = [
    'From: noreply@teresiaportfolio.com',
    'Reply-To: ' . $email,
    'X-Mailer: PHP/' . phpversion(),
    'Content-Type: text/plain; charset=UTF-8'
];

// Try to send email
$mail_sent = mail($to, $email_subject, $email_body, implode("\r\n", $headers));

// Save to file as backup (optional)
$log_entry = [
    'timestamp' => date('Y-m-d H:i:s'),
    'name' => $name,
    'email' => $email,
    'subject' => $subject,
    'message' => $message,
    'ip' => $_SERVER['REMOTE_ADDR'],
    'mail_sent' => $mail_sent
];

// Create contacts directory if it doesn't exist
if (!is_dir('contacts')) {
    mkdir('contacts', 0755, true);
}

// Save to JSON file
$log_file = 'contacts/messages.json';
$existing_data = [];

if (file_exists($log_file)) {
    $existing_content = file_get_contents($log_file);
    $existing_data = json_decode($existing_content, true) ?: [];
}

$existing_data[] = $log_entry;
file_put_contents($log_file, json_encode($existing_data, JSON_PRETTY_PRINT));

// Return response
if ($mail_sent) {
    echo json_encode([
        'success' => true,
        'message' => 'Message sent successfully! Thank you for reaching out.'
    ]);
} else {
    // Still save the message even if email fails
    echo json_encode([
        'success' => true,
        'message' => 'Message received! I will get back to you soon.'
    ]);
}
?>