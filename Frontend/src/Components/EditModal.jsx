const EditModal = ({ isOpen, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="bg-white rounded-lg p-6 w-[70%] sm:w-full  max-w-md relative shadow-xl">
        {children}
      </div>
    </div>
  );
};

export default EditModal;
