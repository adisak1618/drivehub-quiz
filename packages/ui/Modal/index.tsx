import { Dialog, Transition } from "@headlessui/react";
import clsx from "clsx";
import { Fragment } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  children?: JSX.Element;
  footer?: JSX.Element;
  title?: string;
  compact?: boolean;
  swapLayout?: boolean;
  leftCta?: JSX.Element;
}

export const Modal = ({
  isOpen,
  onClose,
  children,
  footer,
  title,
  compact = false,
  swapLayout = false,
  leftCta,
}: ModalProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[1001]" onClose={() => {}}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-10 bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0">
          <div
            className={clsx(
              "flex h-screen text-center",
              compact ? "items-center" : "md:items-center"
            )}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="mt-[100%] scale-95"
              enterTo="mt-[0%] scale-100"
              leave="ease-in duration-200"
              leaveFrom="mt-[0%] scale-100"
              leaveTo="mt-[100%] scale-95"
            >
              <Dialog.Panel
                className={clsx(
                  "mx-auto flex h-screen max-h-screen w-full transform text-left align-middle transition-all md:h-auto md:max-w-md md:p-4",
                  compact ? "!h-auto" : ""
                )}
              >
                <div
                  className={clsx(
                    "relative flex w-full flex-col overflow-hidden bg-white shadow-xl md:rounded-2xl",
                    compact && "mx-4 rounded-2xl"
                  )}
                >
                  {title && (
                    <Dialog.Title
                      as="h3"
                      className="text-lg text-gray-900 flex items-center border-b border-gray-3 p-4 text-center font-medium leading-6"
                    >
                      <p className="flex-1 text-center text-body4 font-bold">
                        {title}
                      </p>
                    </Dialog.Title>
                  )}
                  {onClose && (
                    <div
                      onClick={onClose}
                      className={clsx(
                        "absolute top-5 cursor-pointer",
                        swapLayout ? "left-5" : "right-5"
                      )}
                    >
                      X
                    </div>
                  )}
                  {leftCta && (
                    <div
                      className={clsx(
                        "absolute top-5 cursor-pointer",
                        swapLayout ? "right-5" : "left-5"
                      )}
                    >
                      {leftCta}
                    </div>
                  )}

                  <div className="flex-1 overflow-y-auto overflow-x-hidden p-4">
                    {children}
                  </div>
                  <div className="bg-white">{footer}</div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
