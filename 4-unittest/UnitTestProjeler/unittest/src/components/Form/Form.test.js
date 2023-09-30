import { fireEvent, render, screen } from "@testing-library/react"
import Form from '.'
import userEvent from "@testing-library/user-event"

test('Koşulların onaylanmasına göre buton aktfiliği', async () => {

    //Arka planda test için Form compoenntini ekrana basma
    render(<Form />)

    //Tıklama olayları için user kurulumu

    const user = userEvent.setup()

    //Gerekli Elemanları Alma

    const orderBtn = screen.getByRole('button')
    const checkBox = screen.getByRole('checkbox')

    //Button başlangıçta inaktif olacak kontrolü
    expect(orderBtn).toBeDisabled();

    //Checkbox başlangıçta tiksiz olacak kontrolü 
    expect(checkBox).not.toBeChecked()

    //checkbox ı tikle ve butonun aktfilğini kontrol et

    await user.click(checkBox)
    expect(orderBtn).toBeEnabled()

    //checboxun tikini kaldır ve butonun inaktif olmasını kontrol et

    await user.click(checkBox)
    expect(orderBtn).toBeDisabled()
})

test('Onay butonu hover olduğun zaman bildirim çıkarma', async () => {

    //Arka Planda Formu Render Etme
    render(<Form />)
    //Tıklama olayları için user krulumu
    const user = userEvent.setup()

    //Gerekli elemanlar

    const checkBox = screen.getByRole('checkbox')
    const button = screen.getByRole('button')

    //Checkboxı tıkla
    await user.click(checkBox)

    //Buttonun üstüne mouseyi götürme
    fireEvent.mouseEnter(button)

    //Açılan yazıyı test tarafına çekme
    const popup = screen.getByText('Size Gerçekten ', { exact: false })
    //yazının açıldığını kontrol etme
    expect(popup).toBeVisible()

    //Mouseu butondan çekme

    fireEvent.mouseLeave(button)

    //popup gözükmeyecek

    expect(popup).not.toBeVisible()
})

