import { useState } from 'react';

const UserList = (props) => {
  // açılırı pencerenin gösterip gösterilmeyeceği durumunu tutma
  const [showPopup, setShowPopup] = useState(false);

  //silincek elemanın id değeri
  const [deletingId, setDeletingId] = useState(null);

  // sil butonuna tıklanınca çalışır
  const handleDelete = (id) => {
    // id'si gelen elemanı kaldır
    const filtred = props.users.filter((user) => user.id !== id);

    // Form.jsx'deki state'i güncelle
    props.setUsers(filtred);

    // popup'ı kapat
    setShowPopup(false);
  };

  // popup'ı ekrana basar
  const handlePopup = (id) => {
    // id değerini modal'ın erişebilmesi için state'e aktar
    setDeletingId(id);

    // popup'I göster
    setShowPopup(true);
  };

  // gerbir kullanıcı için tablo satırı oluşturma
  const tableRows = props.users.map((user, i) => (
    <tr>
      <td>{i}</td>
      <td>{user.name}</td>
      <td>{user.surname}</td>
      <td>{user.birthDay}</td>
      <td>
        <button
          className="btn btn-primary"
          onClick={() => handlePopup(user.id)}
        >
          Sil
        </button>
      </td>
    </tr>
  ));

  //   herhangi bir eleman yoksa kullanıcı yok yazısı ekrana bas
  if (props.users.length === 0) return 'Lütfen kullanıcı ekleyiniz..';

  return (
    <table className="table bordered striped">
      <thead>
        <tr>
          <th>#</th>
          <th>İsim</th>
          <th>Soyisim</th>
          <th>Doğum Tarihi</th>
          <th>İşlemler</th>
        </tr>
      </thead>
      <tbody>{tableRows}</tbody>

      {/* bu pencereyi bir state'e göre ekrana basıcaz */}

      {showPopup && (
        <div className="popup">
          <div className="info">
            <h2>Silme İşlemini Onaylıyor musunuz?</h2>
            <div className="buttons">
              <button
                className="btn btn-secondary"
                onClick={() => setShowPopup(false)}
              >
                Hayır
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(deletingId)}
              >
                Evet
              </button>
            </div>
          </div>
        </div>
      )}
    </table>
  );
};

export default UserList;
