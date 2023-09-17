import { render, screen } from '@testing-library/react';
import App from './App';

// test fonksiyonu bizden iki paramtre ister
// a- test ettiğimiz özelliğin açıklaması
// b- test koşullarını yazdığımız fonksiyon
test("react'ı öğren linki ekrana basılır", () => {
  // test etmek isteğimiz bileşeni sanal ortamda ekrana basılır
  render(<App />);

  // test ediceğimiz elementi çağırma
  const link = screen.getByText(/learn react/i);

  // elemandan beklentimizi belirtme
  expect(link).toBeInTheDocument();
});
