# Vite

- `npx create-react-app` yerine `npm create vite`
- `npm start` yerine `npm run dev`

# Axios

Axios ve Fetch en popüler iki veri çekme kütüphanesi

# # Fayadaları

- Özelliştiribilir
- Axios otamatik olarak gelen veriyi JSON formatına çeviriyor.
- Hata ayıklama özellikleri
- HTTP isteklerini (get,post,put,delete) yapması daha kolay

# # Kullanım

- npm i axios
- import axios from "axios"

# # HTTP isteği yapma

- Get > Veri Alma
- - `axios.get("url")`

- Post > Veri gönderme
- - `axios.post("url",data)`

- Delete > Veri silme
- - `axios.delete("url/id_değeri")`

- Put > Veriyi Güncelleme
- - ` axios.put("url/id_değeri", güncel_eleman)`

- Fetch Örneği:
  `    fetch('http://localhost:3030/todos', {
  method: 'POST', // İSTEK TÜRÜ
  headers: {
    'Content-Type': 'application/json', // Veri tipi tanımlama
  },
  body: JSON.stringify(newTodo),
});`
- Axios Örneği:
  `  axios.post('http://localhost:3030/todos',newTodo);`

# Json Server

- Sahte bir API oluşturmaya yarar
- Bu kütüphane kendi bilgisayırımızda çalışan bir api oluşturur
- Oluştruğu API'in temeli bir json dosyasıdır
- API'ya yapılan istekler sonucunda `db.json` dosyası değişir

# # Faydaları

- Prototip Oluşturma: gerçek api kullanılamadığı zaman hızlıca basit bir versiyonu oluşturulabilir.
- Kendimizi geliştiriceğimiz uygulamlar yapmaya olanak sağlar.
- Kullanımı basit

# # Kullanım

- npm i json-server
- proje klasörü içerisinde bir `db.json` dosyası oluştur.
- json dosyası içerisine veri ekle
- package.json içerisne scriptler arasına scripti ekle
- - `"server": "json-server --watch db.json --port 3030"`
- tanamlanan scripti çalıştır
- - `npm run server`
