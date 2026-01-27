function login() {
  const pw = document.getElementById("pw").value;

  if (pw === "2025spectra") {
    sessionStorage.setItem("auth", "ok");
    window.location.href = "/";
  } else {
    document.getElementById("err").innerText = "Hatalı şifre";
  }
}
