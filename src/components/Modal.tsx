import { ReactNode, useEffect, useRef } from "react";
import { MdClose } from "react-icons/md";
import { createPortal } from "react-dom";

type ModalProps = {
  children: ReactNode;
  toggleModal: () => void;
  noClose?: boolean
};

export const Modal = ({ children, toggleModal, noClose }: ModalProps) => {
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
      <div ref={noClose ? null : ref} className="w-[90%] max-w-[450px] h-[450px] bg-white rounded-lg p-4 relative overflow-y-auto">
        <button onClick={noClose ? () => {return} : toggleModal} className="border-none outline-none cursor-pointer absolute top-8 right-8">
          <MdClose className="text-xl scale-100 text-black transition-colors duration-300 hover:scale-110 hover:text-red-600"/>
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};