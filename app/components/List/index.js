import { useState } from "react";
import { IconVideo } from "../icons/IconVideo";
import { Modal } from "../Modal";
import { Carrossel } from "../Carrossel";
import { BgImage } from "../BgImage";


const ContentModal = ({
  images,
  repeat,
  muscle,
  kg,
  description,
  video,
  showImage = true,
}) => {
  const [isImage, setIsImage] = useState(showImage);
  const handleSetImage = (props) => {
    setIsImage(props);
  };
  console.log(video)
  return (
    <div>
      {isImage ? (
        <Carrossel images={images} />
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${video}`}
          title="YouTube Video"
          className="w-full h-[200px]"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}

      <div className=" grid grid-cols-2 gap-2 py-1 px-2 my-1 border-b-neutral-100 bg-neutral-100 rounded-md">
        <div
          className={`col-span-1 rounded-md ${isImage && "bg-white shadow-md"}`}
          onClick={() => handleSetImage(true)}
        >
          <div className="flex justify-center">Imagems</div>
        </div>
        <div
          className={`col-span-1 rounded-md ${
            !isImage && "bg-white shadow-md"
          }`}
          onClick={() => handleSetImage(false)}
        >
          <div className="flex justify-center">Video</div>
        </div>
      </div>
      <div className="mt-2">
        <div className="flex justify-between">
          <div className="">
            <b>Repetições:</b> {repeat}
          </div>
          <div className="">
            <b>Carga:</b> {kg}kg
          </div>
        </div>
        <div className="my-2 h-48 overflow-y-auto p-2 border rounded-md bg-gray-100">
          {description}
        </div>
        <div className="text-sm flex justify-end">
          <div className=" border px-2 pt-1 rounded-md border-neutral-300 shadow-sm items-center">
            {muscle}
          </div>
        </div>
      </div>
    </div>
  );
};

export const ListLine = (props) => {
  const { name, images, repeat, muscle, kg } = props;
  const [showModal, setShowModal] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const handlerModal = (isImage = true) => {
    setShowImage(isImage);
    setShowModal(!showModal);
  };

  return (
    <div className="grid grid-cols-12 mb-2 bg-white rounded-md m-2 shadow-sm">
      <div
        className="col-span-3 h-[100px] pt-2 pb-2 pl-2"
        onClick={handlerModal}
      >
        <BgImage size="w-full h-full" image={images[0]} />
      </div>
      <div className="col-span-7 p-2" onClick={handlerModal}>
        <div
          className="block w-full overflow-hidden text-ellipsis whitespace-nowrap"
          style={{ textOverflow: "ellipsis" }}
        >
          <b>{name}</b>
        </div>
        <div className="text-sm">
          <b>Repetições:</b> {repeat}
        </div>
        <div className="text-sm">
          <b>Carga:</b> {kg}kg
        </div>
        <div className="text-sm"><b>Ativa:</b> {muscle}</div>
      </div>

      <div
        className="flex col-span-2 items-center justify-center"
        onClick={() => handlerModal(false)}
      >
        <IconVideo />
      </div>

      {showModal && (
        <Modal title={name} uuid={props.uuid} onClose={handlerModal}>
          <ContentModal {...props} showImage={showImage} />
        </Modal>
      )}
    </div>
  );
};

export const ListSquare = (props) => {
  console.log(props)
  const { name, images, repeat, muscle, kg } = props;
  const [showImage, setShowImage] = useState(false);
  const [showModal, setShowModal] = useState(false);
 
  const handlerModal = (isImage = true) => {
    setShowImage(isImage);
    setShowModal(!showModal);
  };

  return (
    <div className="flex m-2 p-[8px] flex-col h-[245px] w-[175px] bg-white rounded-md shadow-sm ">
      <div className="w-full flex justify-center" onClick={handlerModal}>
        <BgImage image={images[0]} size="w-[160px] h-[190px]" />
      </div>
      <div className="flex items-center justify-between ">
        <div
          className="block w-full overflow-hidden text-ellipsis line-clamp-2 text-sm pt-1"
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
          }}
        >
          <b>{name}</b>
        </div>
        <div onClick={() => handlerModal(false)}>
          <IconVideo />
        </div>
      </div>

      {showModal && (
        <Modal title={name} uuid={props.uuid} onClose={handlerModal}>
          <ContentModal {...props} showImage={showImage} />
        </Modal>
      )}
    </div>
  );
};

export const Listing = ({ exe, showSquare }) =>
  showSquare ? <ListSquare {...exe} /> : <ListLine {...exe} />;
