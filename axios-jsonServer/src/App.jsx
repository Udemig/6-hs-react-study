import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import EditModal from './components/EditModal';

// Axios ayarı tanımlama
// yapıcağım isteklerin başına bu url'i ekle
axios.defaults.baseURL = 'http://localhost:3030';

//! Önce API'ı güncelle
//! Güncelleme başarılı olursa state'i güncelle

function App() {
  const [todos, setTodos] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [page, setPage] = useState(1);

  const options = {
    _limit: 5,
    _page: page,
  };

  // bileşenin ilk gelme anıanı izleme
  useEffect(() => {
    // axios kütüphanesi ile get isteği atma
    axios
      .get(`/todos`, { params: options, timeout: 5000 }) // 5 saniylik bir zaman aşımı ekledik
      .then((res) => {
        console.log(res);
        setTodos(res.data);
      })
      .catch((err) => {
        if (err.code === 'ECONNABORTED') {
          alert('Bağlantınız zaman aşımına uğradı');
        } else {
          console.log(err);
        }
      });
  }, [page]);

  // formun gönderilme olayında çalışır
  const handleSubmit = (e) => {
    e.preventDefault();
    // api'a göndermek için obje hazırla
    const newTodo = {
      id: new Date().getTime(),
      title: e.target[0].value,
      date: new Date(),
      isDone: false,
    };

    //! API'yi güncelle
    axios
      .post('/todos', newTodo)
      //! state'i güncelle (bu sayede arayüz güncellenicek)
      .then(() => setTodos([...todos, newTodo]))
      .catch(() =>
        alert(
          'Üzgünüz sunucularımızdaki sorun nedeniyle ekleme yapamıyorsunuz'
        )
      );

    // formu sıfırla
    e.target[0].value = '';
  };

  // silme butonuan basıldığında çalışır
  const handleDelete = (delete_id) => {
    //! API'daki ilgiil todoyu silme
    axios
      .delete(`/todos/${delete_id}`)
      //!istek başarılı olrsa state'den kaldırma
      .then(() => {
        const filtred = todos.filter((todo) => todo.id !== delete_id);
        setTodos(filtred);
      })
      .catch(() => alert('Silme işlemini yaparken bir hata oluştu'));
  };

  // checkboxa tıklanınca çalışır
  const handleStatusChange = (todo) => {
    // isDone değerini tersine çevir
    const updatedTodo = { ...todo, isDone: !todo.isDone };

    //! API'ı güncelle
    axios
      .put(`/todos/${todo.id}`, updatedTodo)
      //! arayüzü güncelle
      .then(() => {
        // dizideki id'sini bildiğimiz  elemanı güncelleme
        const filtred = todos.map((item) =>
          item.id === updatedTodo.id ? updatedTodo : item
        );
        // state'i güncelle
        setTodos(filtred);
      });
  };

  // düzenle butonuan tıklanınca çalışır
  const handleModal = (todo) => {
    // modal'ı açar
    setShowModal(true);
    // düzenlecek elemanı state'e aktar
    setEditingItem(todo);
  };

  // dzüenelem işlemi onaylandığında çalışır
  const handleEditConfirm = () => {
    //! API'yi güncelle
    axios.put(`/todos/${editingItem.id}`, editingItem).then(() => {
      //! State'i güncelle
      const clone = [...todos];

      const index = clone.findIndex((i) => i.id === editingItem.id);

      // eğer ki dizide elemanı bulamazsak diğer işlemler devam etme
      if (index === -1) return;

      clone[index] = editingItem;

      setTodos(clone);

      setShowModal(false);
    });
  };

  return (
    <div className="container my-5">
      <h2 className="text-center">Yapılacaklar</h2>

      <form onSubmit={handleSubmit} className="d-flex gap-3 my-4">
        <input className="form-control" type="text" />
        <button className="btn btn-primary">Gönder</button>
      </form>

      {/* ekrana loading  basma */}
      {!todos && <h3>Yükleniyor....</h3>}

      <ul className="list-group my-5">
        {todos?.map((todo) => (
          <li
            key={todo.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div className="d-flex gap-3">
              <input
                checked={todo.isDone}
                onClick={() => handleStatusChange(todo)}
                type="checkbox"
                className="form-check-input"
              />
              <span>
                {todo.isDone ? 'Tamamlandı' : 'Devam Ediyor'}
              </span>
            </div>
            <span>{todo.title}</span>
            <div className="btn-group">
              <button
                className="btn btn-info"
                onClick={() => handleModal(todo)}
              >
                Düzenle
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(todo.id)}
              >
                Sil
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="d-flex justify-content-center align-items-center gap-4">
        <button
          disabled={page === 1}
          onClick={() => {
            setPage(page - 1);
          }}
          className="btn btn-secondary"
        >
          Geri
        </button>
        <p className="lead fw-bold">{page}</p>
        <button
          onClick={() => setPage(page + 1)}
          className="btn btn-success"
        >
          İleri
        </button>
      </div>

      {showModal && (
        <EditModal
          editingItem={editingItem}
          setEditingItem={setEditingItem}
          setShowModal={setShowModal}
          handleEditConfirm={handleEditConfirm}
        />
      )}
    </div>
  );
}

export default App;
