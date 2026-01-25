# 11. AI / LLM Entegrasyonu ile Paket Program Geliştirme

## 🎯 Dersin Amacı
Bu haftada öğrenciler, yapay zekâ ve büyük dil modellerini (LLM) paket programlara
entegre etmeyi öğreneceklerdir. Amaç, Streamlit tabanlı uygulamalarda AI servislerini
kullanarak daha akıllı ve etkileşimli programlar geliştirmektir.

---

## 📘 Ders İçeriği
- Yapay zekâ ve LLM kavramları
- AI tabanlı servislerin genel çalışma mantığı
- API üzerinden AI servislerine erişim
- Streamlit ile AI destekli uygulamalar geliştirme

---

## 🛠️ Kullanılan Araçlar
- Python
- Streamlit
- requests
- AI / LLM API servisleri
- JSON veri yapısı

---

## 🤖 AI Kullanım Senaryosu
Bu hafta geliştirilecek uygulama aşağıdaki özellikleri içermelidir:

- Kullanıcıdan metin girişi alma
- Bu metni AI / LLM servisine gönderme
- Gelen cevabı kullanıcı arayüzünde gösterme
- Basit hata yönetimi uygulama

---

## 🧪 Uygulamalar
- `st.text_area()` ile metin alma
- API anahtarı kullanımı (gizli bilgiler)
- AI servisinden cevap alma
- AI çıktısını arayüzde gösterme

---

## 🧑‍💻 Örnek Kod
```python
import streamlit as st
import requests

st.title("AI Destekli Paket Program")

user_input = st.text_area("Metin giriniz")

if user_input:
    payload = {
        "prompt": user_input,
        "max_tokens": 100
    }

    try:
        response = requests.post("https://api.example-ai.com/generate", json=payload)
        if response.status_code == 200:
            st.success("AI cevabı:")
            st.write(response.json()["output"])
        else:
            st.error("AI servisinden yanıt alınamadı")
    except Exception as e:
        st.error(f"Hata oluştu: {e}")
