import { render, screen, within } from '@testing-library/react'
import UserList from './UserList'


//Test edeceğimiz component için fake veri oluşturma
const users = [
    { name: 'Mehmet', email: 'mehmet123@gmail.com' },
    { name: 'Can', email: 'can123@gmail.com' },
    { name: 'Seyhan', email: 'seyhan123@gmail.com' },
    { name: 'Hasan', email: 'hasan123@gmail.com' }
]


test("Her Kullanıcı İçin Ekrana Bir Tablo Satırı Basar", () => {

    //Test Edilecek Component Arka Planda Ekrana Basılır
    //Prop olarajk userListe yukarda oluturaln fake veriyi verecez
    render(<UserList users={users} />)

    //Tablodaki satır elemanını çekme
    const rows = within(screen.getByTestId('users')).getAllByRole('row')

    //Dizideki elemean sayısı kadar tablo satırı oluşmu kontrolu
    expect(rows).toHaveLength(users.length)

})

test("Her bir kullanıcı için isim ver email değeri gözükür", () => {


    render(<UserList users={users} />)

    for (const user of users) {
        //kullanıcının adını içeren tablo hücresi
        const nameCell = screen.getByText(user.name)
        //isim için ekranda bir tablo hücresi varmı
        expect(nameCell).toBeInTheDocument()
        //kullanıcnın mail adresiniiçeren hücreyi çekme
        const emailCell = screen.getByText(user.email)
        //mail içi ekranda bir tablo hücresi varmı
        expect(emailCell).toBeInTheDocument()
    }
})