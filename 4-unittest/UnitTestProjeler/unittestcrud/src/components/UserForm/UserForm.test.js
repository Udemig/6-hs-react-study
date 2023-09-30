import { render, screen, waitFor } from '@testing-library/react'
import UserForm from './UserForm'
import user from '@testing-library/user-event'
//userForm bileşenini kendi içinde diğer bileşenlerden izole tes edecez
//form göndereilince tabloya eleman eklyormu kontrolü yapamaycaz
//formun mantığı doğru şekilde çalışıyormu 
//name ve email inputlrını doldurduktan sonra 
//addUser fonksiyonu çalışıyor
//addUser fonksiyonuna doğru paramatere gönderiliyor mu

test("Form Gönderilince Kullanıcı fonksiyonu doğru paramterleri alarak çalışıyor ", async () => {
    //mock > addUser fonksinunu taklit edece
    //ne zamn ve hangi parmetrlerle çağrıldı
    const mock = jest.fn()
    render(<UserForm addUser={mock} />)
    //gerekli elemanları alma
    const nameInput = screen.getByLabelText('Kullanıcı İsmi Girin')
    const emailInput = screen.getByLabelText('Kullanıcı Mail Girin')
    const submitBtn = screen.getByRole('button')
    //İnput veri girişi için 1.yol
    //inputa veri girişi için tıklama yaptıryoruz
    user.click(nameInput)
    //veri girşi yapımı
    user.keyboard('Bilal')
    //Input veri girişi 2.yol
    user.type(emailInput, 'bilal@gmail.com')
    //Form gönderimi için tıklanma olayı
    user.click(submitBtn)
    //butona tıklanınca addUser fonskiyonun çalışıp çalışmama durumu
    expect(mock).toBeCalled()
    //butona tıklanınca addUser Fonksiyonun doğru paramtere ile çağrılma durumu
    expect(mock).toBeCalledWith({ name: 'Bilal', email: 'bilal@gmail.com' })
    //name ve mail inputlarınn boşluk durumu
    //Butona tıklandıktan sonra name inputu temizmi
    await waitFor(() => expect(nameInput).toHaveValue(''))
    //Butona tıklandıktan sonra email inputu temizmi
    await waitFor(() => expect(emailInput).toHaveValue(''))
}
)