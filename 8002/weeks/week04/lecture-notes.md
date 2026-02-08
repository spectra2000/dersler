# Hafta 04 – HTML Temelleri

**Ders:** İnternet Teknolojileri ve Web Programlama  
**Programlama Dili:** HTML  
**Hafta:** 4  

---

## 1. Dersin Amacı

Bu haftanın amacı, web sayfalarının temel yapı taşı olan
HTML dilini öğretmek ve bir web sayfasının
nasıl yapılandırıldığını kavratmaktır.

HTML, web üzerinde görülen tüm içeriklerin
iskeletini oluşturur.
Bu nedenle web programlamanın
ilk ve en temel adımıdır.

---

## 2. HTML Nedir?

HTML (HyperText Markup Language),
web sayfalarının yapısını tanımlamak için
kullanılan bir işaretleme dilidir.

HTML:
- İçeriği tanımlar
- Sayfa yapısını oluşturur
- Tarayıcıya hangi içeriğin nerede olduğunu söyler

HTML bir programlama dili değil,
bir işaretleme dilidir.

---

## 3. Temel HTML Yapısı

Her HTML dosyası belirli bir yapıya sahiptir.

<!DOCTYPE html>
<html>
  <head>
    <title>İlk Web Sayfam</title>
  </head>
  <body>
    <h1>Merhaba Dünya</h1>
  </body>
</html>

Bu yapı:
- Tarayıcıya HTML5 standardını bildirir
- Sayfanın başlık ve içerik alanlarını ayırır

---

## 4. HTML Etiketleri (Tags)

HTML, etiketler (tags) kullanılarak yazılır.
Etiketler, tarayıcıya içeriğin türünü bildirir.

Bir HTML etiketi genellikle:
- Açılış etiketi
- İçerik
- Kapanış etiketi

şeklindedir.

<p>Bu bir paragraftır.</p>

---

## 5. Başlık Etiketleri

Başlık etiketleri, sayfanın hiyerarşik yapısını oluşturur.

<h1>Ana Başlık</h1>
<h2>Alt Başlık</h2>
<h3>Daha Küçük Başlık</h3>

- `h1` en büyük başlıktır
- `h6` en küçük başlıktır
- Sayfada genellikle tek bir `h1` kullanılır

---

## 6. Paragraf Etiketi

Metinleri yazmak için paragraf etiketi kullanılır.

<p>Bu bir paragraf metnidir.</p>

Paragraflar:
- Metni okunabilir hâle getirir
- Sayfa düzenini korur

---

## 7. Liste Etiketleri

HTML’de listeler iki şekilde oluşturulur.

### Sırasız Liste (Unordered List)

<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

### Sıralı Liste (Ordered List)

<ol>
  <li>HTML Öğren</li>
  <li>CSS Öğren</li>
  <li>JavaScript Öğren</li>
</ol>

Listeler, bilgileri düzenli sunmak için kullanılır.

---

## 8. Link (Bağlantı) Kullanımı

Web sayfalarını birbirine bağlamak için
`a` etiketi kullanılır.

<a href="https://www.example.com">Siteye Git</a>

- `href` gidilecek adresi belirtir
- Web’in temel çalışma mantığı linklere dayanır

---

## 9. Görsel (Image) Kullanımı

Web sayfalarına görsel eklemek için
`img` etiketi kullanılır.

<img src="resim.jpg" alt="Açıklama">

- `src` görsel dosyasının yolunu belirtir
- `alt` erişilebilirlik için önemlidir
- `img` etiketi kapanış etiketi içermez

---

## 10. Bölümleme Etiketleri (div)

`div` etiketi, sayfayı mantıksal bölümlere ayırmak için kullanılır.

<div>
  <h2>Bölüm Başlığı</h2>
  <p>Bölüm içeriği</p>
</div>

`div` etiketi:
- Sayfa düzeni kurmak
- CSS ile stil vermek

amacıyla sıkça kullanılır.

---

## 11. HTML Dosyası Oluşturma

HTML dosyaları `.html` uzantısı ile kaydedilir.

Örnek dosya adı:
index.html

Bu dosya:
- Tarayıcıda doğrudan açılabilir
- Bir web sitesinin ana sayfası olabilir

---

## 12. HTML’in Web Programlamadaki Rolü

HTML:
- Web sayfasının iskeletini oluşturur
- İçeriğin yapısını belirler
- CSS ve JavaScript için temel sağlar

HTML olmadan
web geliştirme mümkün değildir.

---

## 13. Haftanın Kazanımları

Bu haftanın sonunda öğrenci:
- HTML’in ne olduğunu bilir
- Temel HTML yapısını oluşturabilir
- Başlık, paragraf, liste, link ve görsel kullanabilir
- Basit bir web sayfası hazırlayabilir

---

## 14. Sonraki Haftaya Hazırlık

- CSS dilini araştırınız
- HTML ile CSS arasındaki farkları düşününüz
- Bir HTML sayfasının
  nasıl görselleştirildiğini inceleyiniz
