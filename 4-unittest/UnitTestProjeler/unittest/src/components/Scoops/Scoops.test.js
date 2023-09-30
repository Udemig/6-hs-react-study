import { render, screen } from '@testing-library/react'
import Scoops from './../Scoops'
import userEvent from '@testing-library/user-event'
test('API den gelen her bir çeşit için ekrana bir kart bacılır ', async () => {

    //Test Etmek İstediğimiz Elemanı ekrana basma
    render(<Scoops />)

    /*
    
    Test Ortamında Seçiclerin Kullanılması

    komut [yapıkısmı] seçici
   -- getByRole

   Komutu Belirleme Kriteri

   *get => Elemenlter Eğer başlangıçta varsa get komutu kullanılır
   *find=> Eğer Elemntin ekrana ne zaman basılacağı belli değilse find Kullanılır (Eğer elemntler API gibi kaynkatan geliyorsa)
  *query=> Elementler domda yoksa ve koşula göre render edilecekse kullanılır

  Not: Find metodu async bir metod olduğu için kullanılırken async await yapısı iile kullanılmalı


    
    
    */

    //Resimler Basılıyormu Kontrol Etme
    const images = await screen.findAllByRole('img', { name: 'çeşit' })

    //Gelen Resimlerin Sayısı 4 mü 
    expect(images).toHaveLength(4)







})

test('Çeşit Ekleme İşleminin toplam fiyata yansıması', async () => {

    render(<Scoops />)

    const user = userEvent.setup()
//Toplam fiyata erişme
    const total = screen.getByRole('heading', { name: /Çeşitler Ücreti/i, })

    //Ekle butonuna erişem
    const buttons=await screen.findAllByRole('button',{name:'Ekle'})

    //Bir tane Çeşit ekle ve fiyatını kotrol et
    await user.click(buttons[0])
    expect(total).toHaveTextContent('20')

    //iki çeşit daha ekle ve fiyatı kontrol et

    await user.dblClick(buttons[1])
    expect(total).toHaveTextContent('60')



})

test('Çeşit sıfırlama işleminin toplama yansıması',async()=>{

render(<Scoops/>)

const user=userEvent.setup()
//Gerekli elemanlar

const total=screen.getByRole('heading',{
    name:/Çeşitler Ücreti/i
})

const delButtons=await screen.findAllByRole('button',{name:'Sıfırla'})
const addButtons=await screen.findAllByRole('button',{name:'Ekle'})

//2 Farklı Çeşit Ekletme
await user.click(addButtons[2])
await user.dblClick(addButtons[3])
expect(total).toHaveTextContent(60)

//Septe 1 tane olan çeşiti sil ve toplamı kontorl et

await user.click(delButtons[2])
expect(total).toHaveTextContent(40)

//Sepette iki tane olan çeşiti sıfırla ve fiyatı kontrol et

await user.click(delButtons[3])
expect(total).toHaveTextContent(0)


})