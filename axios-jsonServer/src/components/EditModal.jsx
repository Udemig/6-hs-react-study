const EditModal = ({
  editingItem,
  setEditingItem,
  setShowModal,
  handleEditConfirm,
}) => {
  return (
    <div className="modal-wrapper">
      <div className="modal-inner">
        <h5>Yapılacak işi güncelle</h5>

        <input
          value={editingItem.title}
          onChange={(e) =>
            // app'js de tutulan güncellincek elemanın title ve date'ini güncelleme
            setEditingItem({
              ...editingItem,
              title: e.target.value,
              date: new Date(),
            })
          }
          type="text"
          className="form-control shadow"
        />

        <div className="d-flex justify-content-between mt-4">
          <button
            className="btn btn-warning"
            onClick={() => setShowModal(false)}
          >
            Vazgeç
          </button>
          <button
            className="btn btn-success"
            onClick={handleEditConfirm}
          >
            Kaydet
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
