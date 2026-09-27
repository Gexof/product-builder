import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

import type { ReactNode } from "react";

interface IProps {
  isOpen: boolean;
  closeModal: () => void;
  title?: string;
  children: ReactNode;
}

const Modal = ({ isOpen, closeModal, title, children }: IProps) => {
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-50 focus:outline-none"
        onClose={closeModal}
      >
        {" "}
        {/* Backdrop */}{" "}
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          aria-hidden="true"
        />{" "}
        {/* Modal wrapper */}{" "}
        <div className="fixed inset-0 w-screen overflow-y-auto">
          {" "}
          <div className="flex min-h-full items-center justify-center p-4">
            {" "}
            <DialogPanel
              transition
              className=" w-full max-w-md rounded-2xl border border-gray-800 bg-gray-900 p-6 shadow-2xl duration-300 ease-out data-closed:translate-y-4 data-closed:scale-95 data-closed:opacity-0 "
            >
              {" "}
              <DialogTitle as="h3" className="text-xl font-semibold text-white">
                {" "}
                {title}{" "}
              </DialogTitle>{" "}
              <div className="mt-4 text-sm leading-6 text-gray-400">
                {" "}
                {children}{" "}
              </div>{" "}
            </DialogPanel>{" "}
          </div>{" "}
        </div>{" "}
      </Dialog>
    </>
  );
};

export default Modal;
