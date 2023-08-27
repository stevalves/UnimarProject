import { ReactNode, useEffect, useRef } from "react";
import { MdClose } from "react-icons/md";
import { createPortal } from "react-dom";

type ModalProps = {
  title?: string;
  children: ReactNode;
  toggleModal: () => void;
  noClose?: boolean;
};

export const Modal = ({
  children,
  toggleModal,
  noClose,
  title,
}: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!ref.current) {
        return;
      }

      if (!event.target) {
        return;
      }

      if (!ref.current.contains(event.target as HTMLElement)) {
        toggleModal();
      }
    };

    window.addEventListener("mousedown", handleClick);

    return () => {
      window.removeEventListener("mousedown", handleClick);
    };
  }, [toggleModal]);

  return createPortal(
    <div className="z-50 animate-modalDown fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-black/25">
      <div
        ref={noClose ? null : ref}
        className="w-[90%] max-w-[600px] h-max rounded-lg relative overflow-y-auto shadow-2xl"
      >
        <header className="flex justify-between relative items-center p-4 bg-forest-500 text-forest-50 h-[10%]">
          <h4 className="text-xl">{title}</h4>
          <button
            onClick={
              noClose
                ? () => {
                    return;
                  }
                : toggleModal
            }
            className="border-none outline-none cursor-pointer"
          >
            <MdClose className="text-xl scale-100 transition-colors duration-300 hover:scale-110 hover:text-red-600" />
          </button>
        </header>
        <div className="h-[90%] w-full bg-white">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
};
