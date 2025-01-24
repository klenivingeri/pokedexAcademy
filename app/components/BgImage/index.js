import { IconCircleClose } from "../icons/IconCircleClose";

export const BgImage = ({ image, size = "w-12 h-12" }, Icon = null, func= ()=>{}, showIcon) => {
  return (
    <div
      className={`${size} bg-center bg-cover rounded-md flex justify-end items-start`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="m-[-13px]" onClick={func(image)}><IconCircleClose/></div>
    </div>
  );
};