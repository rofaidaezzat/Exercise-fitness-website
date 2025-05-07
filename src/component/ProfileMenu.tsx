import { useLocation } from "react-router-dom";

type IProfileMenuModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ProfileMenuModal = ({ isOpen, onClose }: IProfileMenuModalProps) => {
  const { pathname } = useLocation();
  const storageKey = "loggedInUser";
  const onlogout = () => {
    localStorage.removeItem(storageKey);
    setTimeout(() => {
      location.replace(pathname);
    }, 1500);
  };
  if (!isOpen) return null;

  return (
    <div className="relative inline-block text-left">
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
        aria-hidden="true"
      ></div>
      {/* Modal Dropdown */}
      <div className="absolute gap-2 flex flex-col mt-2 w-56 right-[-50px] rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 text-black p-2">
        <button
          className="w-full text-left flex items-center gap-2 p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          onClick={onlogout}
        >
          <span className="text-lg">↩️</span> Log Out
        </button>
        <div className="text-center text-xs text-gray-400 pt-2">
          © Fitness Exercise
        </div>
      </div>
    </div>
  );
};

export default ProfileMenuModal;