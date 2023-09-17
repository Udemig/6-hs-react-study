# State Yönetimi

- State: Uygulama içerisindeki bileşenlerin sahip olduğu özellik ve bilgiler

- Prop Drilling: Bileşenlerde yukarıdan aşşağıya prop yöntemi ile veri gönderimi

- Context API: Uygulamadki state'lerin yönetildiği merkezi state yönetim aracı

- Redux: Uygulmadaki bileşenlerin sahip olduğu gerekli state'lerin merkezi bir store'da tutulmasını sağlar

# Neden Redux?

- Kod tekrarını önler
- Performansı arttırır
- Bileşen içerisindeki karışıklığı azaltır
- State yönetemini daha kolay ve anlaşılr hale getirir

# Bilinmesi Gerekenler

1. Store: Uygulamanın bütün bileşenleri tarafından erişilebilen ve değiştirilebilen merkezi state

2. Action: Store'daki bir veriyi güncellemek için reducer'a gönderdiğimiz haber

- - 2 değere sahip objedir
- - type: Eylemin görevini tanımladığımız string `"ADD_USER" , "REMOVE_TODO"`
- - paylaod: reducer'a eylemi gönderirken eylemin gerçekleşmesi için ihtiyacı olan verileri burada gönderiyoruz `"Silenecek todonun id'si" , "Yeni eklenicek kullanıcın objesi"`

3. Dispatch: Eylemlerin gerçekleştiğini reducer'a haber vermemizi sağlayan method

4. Reducer: Gönderilen aksiyonları type' değerlerine göre analiz eder ve store'un nasıl güncelleniceğine karar verir

5. Subscribe: Store da tutlan verilere `useSelector` methodu ile erişmemize verilen addır.

- Not: Eğerki projede API'dan gelene verileri store'da saklıyorsak. Mutlaka API ve Store'u senkron tutmmız gerekir.

# Kurulum

- `redux` ve `react-redux` paketlerini indir.
- tutucağımız verilere göre reducer'lar oluşturulur
- store'u oluştur ve reducer'ları tanıt
- store'u projeye tanıt
