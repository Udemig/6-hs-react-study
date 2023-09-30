//====TEST BAŞLAMA AŞAMALARI====//
/**
 *  Testte Kullanılacak Gerekli Metodlar Import Edilir
 * Teste Tabi Tutulacak Component import edilir
 * Test yazmaya başlamak için test medotu çağrılır; name ve fonksiyon paramterleri girilir.
 * Fonksiyon parametresi içinde teste tabi tutulacak comonent render metodu ile arka planda ekrana basılır
 * Testte Kullanıcak elemanlar test tarafına çekilir
 * Test ortamın normal kullanıcı gibi işlemler simüle edilir
 * Sonrasında beklentilerin karşılanması kontrol edilir
 * 
 */

import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import App from './App'

test('Uygulama Doğru Şekilde Çalışıyormu?', async () => {
  //Teste Tabi Componentin arka planda oluşturulması
  render(<App />)
  //Gerekli elemanların test tarafına çekilmesi
  const nameInput = screen.getByLabelText('Kullanıcı İsmi Girin')
  const mailInput = screen.getByLabelText('Kullanıcı Mail Girin')
  const submitButton = screen.getByRole('button')
  //Kullanıcnın inputa tıklayıp veri girişi similasyonu
  //Kullanıcının name inputa tıklaması
  user.click(nameInput)
  //kullanıcnın inputa veri girmesi
  user.keyboard('React')
  user.type(mailInput, 'react@gmail.com')
  //Kullanınıcn kullanıcı ekle butonuna tıklama oalyı
  user.click(submitButton)
  //isim değerine karışılık gelen tablo hücresi vavr mı
  await screen.findByRole('cell', { name: 'React' })
  //ail değerine karışılık gelen tablo hücresi varmı
  await screen.findByRole('cell', { name: 'react@gmail.com' })
})
