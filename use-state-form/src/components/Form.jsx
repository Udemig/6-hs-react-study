import { v4 } from 'uuid';
import { useState } from 'react';
import UserList from './userTable';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    birthDay: '',
    password: '',
  });

  const [passwordError, setPasswordError] = useState(null);
  const [nameError, setNameError] = useState(null);
  const [users, setUsers] = useState([]);

  // form gönderildiğinde çalışacak fonksiyon
  const handleSubmit = (e) => {
    e.preventDefault();

    // formda boş veri var mı kontrol et
    if (
      !formData.name ||
      !formData.surname ||
      !formData.birthDay ||
      !formData.password
    ) {
      alert('Lütfen formu doldurun..');
      return;
    }

    // kullanıcıya id ekle
    const newUser = { ...formData, id: v4() };
    // ve diğer kullanıcıların arasına gönder
    setUsers([...users, newUser]);
  };

  // şifrenin değişimini izler
  const handlePasswordChange = (e) => {
    // gelen şifre değeri
    const value = e.target.value;

    // state'i güncelleme
    setFormData({ ...formData, password: value });

    //  şifre en az 8 karakter içermeli
    if (value.length <= 8) {
      // 8 karakterden az ise hatayı state'e gönder
      setPasswordError('Şifre en az 8 karakter içermeli');
    } else {
      // fazla ise state'i temizle
      setPasswordError(null);
    }
  };

  //   ismin değişimini izler
  const handleNameChange = (e) => {
    const value = e.target.value;
    const regex = /^[A-Za-z]+$/;

    setFormData({ ...formData, name: value });

    // eğer inputtaki yazı kuraldan geçmezse
    if (!value.match(regex)) {
      setNameError('Kullanıcı ismi sadece harf içermeli');
    } else {
      setNameError(null);
    }
  };

  return (
    <div className="p-4">
      <h1>Form Alanı</h1>

      <form onSubmit={handleSubmit} className="my-4">
        <label>İsim: </label>

        <input
          className="form-control"
          type="text"
          onChange={handleNameChange}
        />
        {nameError && (
          <div className="alert alert-danger mt-2">{nameError}</div>
        )}
        <br />
        <br />
        <label>Soyisim: </label>
        <input
          className="form-control"
          type="text"
          onChange={(e) =>
            setFormData({ ...formData, surname: e.target.value })
          }
        />
        <br />
        <br />
        <label>Doğum Tarihi</label>
        <input
          className="form-control"
          type="date"
          onChange={(e) =>
            setFormData({ ...formData, birthDay: e.target.value })
          }
        />
        <br />
        <br />
        <label>Şifre</label>
        <input
          className="form-control"
          type="password"
          onChange={(e) => handlePasswordChange(e)}
        />

        {/* eğerki şifrede hata varsa uyarı şeklinde göster */}
        {passwordError && (
          <div className="alert alert-danger mt-2">
            {passwordError}
          </div>
        )}

        <button className="btn btn-info my-4">Gönder</button>
      </form>

      {/* KULLANICI LİSTESİ */}
      <UserList users={users} setUsers={setUsers} />
    </div>
  );
};

export default Form;

// Kısa Yol:
// const handleChange = (event) => {
//   const { name, value } = event.target;
//   setFormData({ ...formData, [name]: value });
// };
