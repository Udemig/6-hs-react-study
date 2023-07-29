import { useEffect, useState, useRef } from 'react';

const FilterUser = () => {
  //! ana kullanıcılar > veriyi asla değiştirmiyoruz
  const [users, setUsers] = useState(null);
  //! düzenlediğimiz kullanıcılar > istediğimiz şekilde değiştirip ekran basıcamız dizi
  const [filtredUsers, setFiltredUsers] = useState(null);

  // inputun referansını alma
  const inputRef = useRef();

  // componentDidMount olayını izler
  useEffect(() => {
    // api'a istek atma
    fetch('https://jsonplaceholder.typicode.com/users')
      // gelen verileri işleme
      .then((res) => res.json())
      // verileri state'e aktarma
      .then((data) => {
        // ana veriyi güncellme
        setUsers(data);
        // yedek veiriyi güncelleme
        setFiltredUsers(data);
      })
      // eğer cevap olumsuzsa kullanıcıya bildirme
      .catch((err) => alert('Daha Sonra Tekrar Deneyiniz'));
  }, []);

  const handleClick = () => {
    // inputun değerine erişme
    const query = inputRef.current.value.toLowerCase();

    //aratılan isimle denk gelen kullanıcıları alma
    const filtred = users.filter((user) =>
      user.name.toLowerCase().includes(query)
    );

    setFiltredUsers(filtred);
  };

  return (
    <div>
      <h1 className="text-center my-4">Kullanıcılar</h1>
      {/* form alanı */}
      <div className="d-flex gap-3 my-4 p-4">
        <input
          className="form-control shadow"
          type="text"
          ref={inputRef}
        />
        <button className="btn btn-primary" onClick={handleClick}>
          Ara
        </button>
      </div>

      {/* kullanıcı listeleme */}
      {filtredUsers === null ? <h1>Yükleniyor...</h1> : ''}
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>isim</th>
            <th>email</th>
            <th>şirket</th>
            <th>adres</th>
          </tr>
        </thead>
        <tbody>
          {filtredUsers?.map((user, i) => (
            <tr key={user.id}>
              <td>{i + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.company.name}</td>
              <td>{user.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FilterUser;
