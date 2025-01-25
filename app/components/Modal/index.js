import Link from "next/link";
import { IconEdit } from "../icons/IconEdit";
import { IconClose } from "../icons/IconsClose";

export const Modal = ({ title, onClose, children, uuid }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className="bg-white rounded-lg shadow-lg w-11/12 max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center px-4 py-2">
          <Link href={`/create-exercise/${uuid}`}><IconEdit /></Link>
          <div className="flex w-full justify-between items-center border-b ml-2">
            <h3 className="text-xl font-semibold">{title}</h3>
            <button
              className="text-gray-500 hover:text-gray-800"
              onClick={onClose}
            >
              <IconClose />
            </button>
          </div>
        </div>

        {/* Corpo do Modal */}
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const Modal2 = ({ title, onClose, children }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className="bg-white rounded-lg shadow-lg w-11/12 max-w-md"
        onClick={(e) => e.stopPropagation()} // Impede propagação de clique no modal
      >
        {/* Cabeçalho do Modal */}
        <div className="flex justify-between items-center border-b p-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            className="text-gray-500 hover:text-gray-800"
            onClick={onClose} // Fecha apenas ao clicar no botão "X"
          >
            ✖
          </button>
        </div>

        {/* Corpo do Modal */}
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
