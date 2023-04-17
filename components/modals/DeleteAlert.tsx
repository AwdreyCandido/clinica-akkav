const DeleteAlert: React.FC<{
    onClose: () => void;
    onConfirm: () => void;
  }> = ({ onClose, onConfirm }) => {
    return (
      <div className="p-8 text-qh text-center rounded-3xl bg-white border border-blue-light">
        <h2>Tem certeza que deseja excluir esse médico?</h2>
        <p className="text-base">Essa ação não poderá ser desfeita...</p>
        <div className="mt-8 flex gap-8 justify-end">
          <button
            onClick={onClose}
            className="text-base bg-red-primary text-white py-5 px-8 rounded-3xl"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className=" flex-grow-[2] text-base w-full bg-blue-primary text-white py-5 px-8 rounded-3xl"
          >
            Confirmar
          </button>
        </div>
      </div>
    );
  };
  
  export default DeleteAlert;