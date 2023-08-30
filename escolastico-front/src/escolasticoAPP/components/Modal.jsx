const Modal = ({ isOpen, onClose, children }) => {
  console.log(isOpen);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-40"></div>
      <div className="relative bg-white w-2/4 p-4 rounded-lg shadow-lg">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
