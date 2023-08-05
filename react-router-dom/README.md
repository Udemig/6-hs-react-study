# Örnek:

- 2 sayfa olucak
- - Anasayfa > kullanıcı projeye girdiği anda görülecek
- - Ürünler > url /ürünler olduğunda görüntülenecek

# React Touter Dom Kurulum:

- `app.js` içerisine BrowserRouter | Routes | Routeimport et
- - Route'ları tanımla

- Router DOM 'da kullanıcyı bir sayfadan bir sayfaya yönlendirmek için
- - a etiketi yerine Router Dom'dan gelen `<Link>` bileşni kullanılır
- - a gibi href almak yerine yönlendirmek istediğimzi sayfayı `to` propu ile alır

- Link bileşnin fonksiyon verisyonu bulunuyor.
- - `useNavigate` methodu sayesinde fonksiyonlar içerisinde örn :(veri çekme işelerimlerin başrılı olup olamam durumlarına göre yönlendirmede kullanıcı yetkilendirme işlemlerinde kullanılır)

- - öncelikle import edilmeli
- - kullanılacak bileşen içerisinde
- - const navigate = useNavigate()
