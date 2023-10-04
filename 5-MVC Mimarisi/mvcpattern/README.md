# Kütüphaneler
- react-router-dom
- json-server
- axios
- sass
- uuid

# MVC (Model View Controller)

- Model: Uygulamanın veri veya veri yapısını temsil
- - Örnek: Projede tutuların statelerin bir obje veya form şeklinde olmasını sağlar

- View: Kullanıcı arayüzünü temsil eder
- - JSX kodları bu dosyada yazılır (div ,form ....)

- Constroller: Model ile View arasındaki iletişim kurar
- - Kullnıcı etkileişiminde çalışacak fonskiyon api istekler vs burda yazılır

# Yapılacaklar

 - API üzerinden blog verilerini al ('Controller')
 - - Her bir blog elemanı için ekrana kart bas ('View')

 - Bir Form Arayüzü oluştur `View`
 - - Formdaki inputlar her değiştiğinde stateleriini tut `Controller`
 - - State üstünde tutulacakk değerleri belirle ``Model``
 - - Gönder Butonuna basıldığında postu apiye gönder ve kullnaıcıyı yöndeldir `Controller`