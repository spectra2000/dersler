# 09. Harici Kütüphaneler ve API Tabanlı Uygulamalar

## 🎯 Dersin Amacı
Bu haftada öğrenciler, Python ve Streamlit uygulamalarında harici kütüphaneleri
kullanmayı ve dış veri kaynaklarıyla (API’ler) etkileşim kurmayı öğreneceklerdir.
Amaç, paket programların gerçek dünya verileriyle nasıl beslendiğini kavramaktır.

---

## 📘 Ders İçeriği
- Harici kütüphane kavramı
- Python paket yönetimi (pip)
- API nedir, nasıl çalışır?
- Streamlit uygulamalarında API kullanımı

---

## 🛠️ Kullanılan Araçlar
- Python
- Streamlit
- requests
- Pandas
- Açık API servisleri

---

## 🌐 Harici Kaynaklar
- REST API kavramı
- JSON veri yapısı
- Açık veri servisleri (hava durumu, döviz, kripto vb.)

---

## 🧪 Uygulamalar
- `requests` kütüphanesi ile API çağrısı yapma
- API’den gelen JSON verisini işleme
- Veriyi Streamlit arayüzünde gösterme
- Kullanıcı girdisine göre API isteği oluşturma

---

## 🧑‍💻 Örnek Kod
```python
import streamlit as st
import requests

st.title("API Tabanlı Uygulama")

url = "https://api.exchangerate-api.com/v4/latest/USD"
response = requests.get(url)

if response.status_code == 200:
    data = response.json()
    st.write("USD → EUR:", data["rates"]["EUR"])
