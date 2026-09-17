import { useNotification } from "@/context/notificationContext";
import { NavLink } from "react-router";

const PreviewHeader = () => {
  const { setNotification } = useNotification();
  return (
    <header className="md:h-19.5">
      <nav className="md:bg-[#ffffff] w-full  flex gap-4 h-full rounded-md items-center justify-between md:pl-6 md:pr-4">
        <NavLink
          to="/profile"
          className="text-[#633cff] border border-[#633CFF] px-4 py-2 text-sm rounded-md font-medium w-full text-center md:w-39.75"
        >
          Back to Editor
        </NavLink>
        <button
          className="bg-[#633cff] w-full md:w-39.75 py-2 text-white rounded-md text-sm cursor-pointer"
          onClick={() => setNotification(true)}
        >
          Share Link
        </button>
      </nav>
    </header>
  );
};

export default PreviewHeader;
