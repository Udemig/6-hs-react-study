import { createContext, useState } from 'react';

/*
 * Context API:
 * Uygulamamızda bir den çok bileşenin ihtiyacı olab verileri
 * Tek bir merkezden yönetmeye yarar
 * verileri ve bunları değiştirimeye yararyacak fonksiyonları tutar
 * ve bu değişkenleri isteyen bileşenlere gönderirir
 * merkezi state yönetim aracı
 */

//! Context yapısının temelini oluşturma
export const BasketContext = createContext();

//! sağlayıcı ve onun tutuğu verileri tanımlama
export function BasketProvider({ children }) {
  const [items, setItems] = useState([]);

  // sepete yeni ürün ekler
  const addToCart = (product) => {
    // sepete bu üründen daha önce eklenmiş mi kontrol
    const found = items.find((i) => i.id === product.id);

    if (found) {
      // güncellenicek elemanın sırasını bulma
      const index = items.findIndex((i) => i.id === product.id);

      // kopya dizi tanımlama
      const clone = [...items];

      // elemanı güncelleme
      clone[index] = { ...found, amount: found.amount + 1 };

      // state'i güncelleme
      setItems(clone);
    } else {
      // miktar değerini 1 olarak tanımlayıp
      // ürünü sepete ekler
      setItems([...items, { ...product, amount: 1 }]);
    }
  };

  // sepetten ürün çıkarır
  const removeFromBasket = (product) => {
    const found = items.find((i) => i.id === product.id);

    if (found.amount > 1) {
      // miktarı 1 den fazlaysa miktarı azalt
      const updated = items.map((item) =>
        item.id === found.id
          ? { ...found, amount: found.amount - 1 }
          : item
      );
      setItems(updated);
    } else {
      // miktar 1 ise sepetten kaldır
      const filtred = items.filter((i) => i.id !== found.id);

      // state'i güncelle
      setItems(filtred);
    }
  };

  return (
    <BasketContext.Provider
      value={{ items, addToCart, removeFromBasket }}
    >
      {children}
    </BasketContext.Provider>
  );
}
