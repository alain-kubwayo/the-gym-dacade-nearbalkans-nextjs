import Image from "next/image";
import { useEffect, useState } from "react";
const modalCards = [
  {
    flag: "/svgs/modal/croatia-flag.svg",
    name: "Croatia",
    alt: "Croatia",
    id: 1,
  },
  {
    flag: "/svgs/modal/bulgaria-flag.svg",
    name: "Bulgarian",
    alt: "Bulgaria",
    id: 2,
  },
  {
    flag: "/svgs/modal/uk-flag.svg",
    name: "English",
    alt: "English",
    id: 3,
  },
];

const Modal = ({ handleClose }) => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [show]);
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/[0.3]">
      <div className="mx-auto bg-white md:max-w-[37.5rem] lg:max-w-[30rem] my-200px rounded-2xl">
        <div className="flex items-center justify-between px-6 border-b border-gray-200 py-23px">
          <h2 className="text-xl leading-tight text-black font-semi">
            Choose language
          </h2>
          <button onClick={handleClose}>
            <Image
              src="/svgs/modal/CloseModal.svg"
              width={12}
              height={12}
              alt="Close"
            />
          </button>
        </div>
        <div className="py-10 space-y-4">
          {modalCards.map((card) => (
            <div className="px-6" key={card.id}>
              <div className="flex items-center justify-between w-full shadow-md border border-solid border-gray-200 px-2.5 py-5 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Image
                    width={21}
                    height={14}
                    src={card.flag}
                    alt={card.alt}
                  />
                  <p>{card.name}</p>
                </div>
                <div className="flex items-center justify-center p-4 bg-gray-100 rounded-full">
                  <Image
                    src="/svgs/modal/arrow.svg"
                    width={8}
                    height={8}
                    alt="Arrow"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
