import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '../redux/crudSlice';

const FormModal = ({ showModal, handleHide, editItem }) => {
  const dispatch = useDispatch();

  // formun gönderilme olayı
  const handleSubmit = (e) => {
    e.preventDefault();
    // form verisi oluşturma
    const form = new FormData(e.target);

    // veriyi objeye çevirme
    const newTask = Object.fromEntries(form.entries());

    // eğerki dzüenleme modundaysa
    if (editItem) {
      // newTask'de id değeri olamdığı için
      // prop olarak gelen id'yi de ekleyip
      // slice'a haber veriyoruz
      dispatch(editTask({ ...newTask, id: editItem.id }));
    } else {
      // slice'a yeni eklenicek elemanı gönderme
      dispatch(addTask(newTask));
    }

    // modal'ı kapat
    handleHide();
  };

  return (
    <Modal
      show={showModal}
      onHide={handleHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {editItem ? 'Düzenleme Modu' : 'Yeni Görev Ekle'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Görev Başlığı</Form.Label>
            <Form.Control
              required
              defaultValue={editItem?.title}
              name="title"
              type="text"
              placeholder="Görev giriniz"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Yazar</Form.Label>
            <Form.Control
              required
              defaultValue={editItem?.author}
              name="author"
              type="text"
              placeholder="Yazar'ı giriniz"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Atanan Kişi</Form.Label>
            <Form.Control
              required
              defaultValue={editItem?.assigned_to}
              name="assigned_to"
              type="text"
              placeholder="Atanın kişiyi'i giriniz"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Son Teslim Tarihi</Form.Label>
            <Form.Control
              required
              defaultValue={editItem?.end_date}
              name="end_date"
              type="date"
            />
            <Form.Text>Son teslim tarihini belirleyiniz</Form.Text>
          </Form.Group>
          {/* butonlar alanı */}
          <Modal.Footer>
            <Button onClick={handleHide}>Close</Button>
            <Button type="submit" variant="success">
              Kaydet
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
