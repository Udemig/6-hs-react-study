import { useState } from 'react';
import { Button, ButtonGroup, Table } from 'react-bootstrap';
import FormModal from '../components/FormModal';
import { useDispatch, useSelector } from 'react-redux';
import { removeTask } from '../redux/crudSlice';

const CrudPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [editItem, setEditItem] = useState(null);
  //store işlemleri
  const state = useSelector((store) => store.crudState);
  const dispatch = useDispatch();

  // düzenle butonuna tıklanma
  const handleEdit = (item) => {
    // dizenlenicek elmanı state'e aktarma
    setEditItem(item);
    // modal'ı açma
    setShowModal(true);
  };

  return (
    <div className="px-3">
      {/* yeni eleman ekleme modal'ı */}
      <FormModal
        editItem={editItem}
        showModal={showModal}
        handleHide={() => {
          // modal'I kapat
          setShowModal(false);
          // düzenlenicek varsa kaldır
          setEditItem(null);
        }}
      />

      <Button
        onClick={() => setShowModal(true)}
        variant="success my-3"
      >
        Yeni Görev Ekle
      </Button>

      <Table striped variant="dark">
        <thead>
          <tr>
            <th>id</th>
            <th>Görev</th>
            <th>Yazar</th>
            <th>Atanan</th>
            <th>Tarih</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {state.tasks.map((task, i) => (
            <tr key={task.id}>
              <td>{i + 1} </td>
              <td>{task.title}</td>
              <td>{task.author}</td>
              <td>{task.assigned_to}</td>
              <td>{task.end_date}</td>
              <td>
                <ButtonGroup>
                  <Button
                    onClick={() => dispatch(removeTask(task.id))}
                    variant="danger"
                  >
                    Sil
                  </Button>
                  <Button onClick={() => handleEdit(task)}>
                    Düzenle
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CrudPage;
