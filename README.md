#  Game Tracker

Kullanıcıların oynadıkları, tamamladıkları veya oynamayı planladıkları video oyunlarını takip edebilecekleri, durumlarını güncelleyebilecekleri modern bir **React + Vite** uygulamasıdır.

🔗 **Canlı Demo:**(https://app.netlify.com/projects/warm-cheesecake-b3a9ad/deploys/6a85bcc3865e9aeadf3c87cc)

---

### Özellikler

* **CRUD Desteği:** Yeni oyun ekleme, oyun silme ve tamamlandı olarak işaretleme.
* **Filtreleme:** Oyunları *Tümü, Oynanıyor, Tamamlandı, Ertelendi* sekmelerine göre anlık listeleme.
* **LocalStorage:** Eklenen oyunların tarayıcı hafızasında saklanması (sayfa yenilendiğinde veriler kaybolmaz).
* **Responsive Tasarım:** Tailwind CSS ile mobil ve masaüstü uyumlu karanlık mod arayüzü.

---

### Teknolojiler

* **Frontend:** React, Vite
* **Stil:** Tailwind CSS
* **İkonlar:** Lucide React
* **Deployment:** Netlify

---
  ### Dosya Yapısı
  game-tracker/
├── public/              # Statik dosyalar
├── src/
│   ├── components/      # React bileşenleri (GameCard, GameForm)
│   ├── App.jsx          # Ana state ve filtreleme yönetimi
│   ├── main.jsx         # React başlangıç noktası
│   └── index.css        # Tailwind direktifleri
├── package.json         # Proje bağımlılıkları ve scriptler
├── tailwind.config.js   # Tailwind konfigürasyonu
└── vite.config.js       # Vite konfigürasyonu
