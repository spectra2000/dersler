<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <title>speCtraEdu | Ders Yönetim Paneli</title>

  <style>
    body {
      margin: 0;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
      font-family: Arial, Helvetica, sans-serif;
    }

    .card {
      background: #ffffff;
      padding: 45px;
      width: 400px;
      border-radius: 14px;
      box-shadow: 0 18px 45px rgba(0,0,0,0.35);
      text-align: center;
    }

    .title {
      font-size: 26px;
      font-weight: bold;
      color: #000;
      margin-bottom: 6px;
    }

    .subtitle {
      font-size: 14px;
      font-weight: 600;
      color: #0b3c5d;
      margin-bottom: 35px;
      letter-spacing: 0.5px;
    }

    input {
      width: 100%;
      padding: 13px;
      font-size: 15px;
      margin-bottom: 18px;
      border-radius: 6px;
      border: 1px solid #ccc;
    }

    button {
      width: 100%;
      padding: 13px;
      font-size: 16px;
      font-weight: bold;
      background-color: #0b3c5d;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }

    button:hover {
      background-color: #092f48;
    }

    .error {
      color: #c0392b;
      margin-top: 14px;
      font-size: 14px;
    }

    .footer {
      margin-top: 28px;
      font-size: 11px;
      color: #777;
    }
  </style>
</head>

<body>

  <div class="card">
    <div class="title">speCtraEdu</div>
    <div class="subtitle">DERS YÖNETİM GİRİŞ PANELİ</div>

    <form onsubmit="checkPassword(); return false;">
      <input type="password" id="pw" placeholder="Erişim Şifresi" autofocus>
      <button type="submit">GİRİŞ</button>
    </form>

    <div class="error" id="error"></div>

    <div class="footer">© 2026 speCtraEdu</div>
  </div>

  <script src="auth.js"></script>
</body>
</html>
