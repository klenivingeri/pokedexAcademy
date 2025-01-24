import { IconCircleClose } from "../icons/IconCircleClose";

export const BgImage = ({ image, size = "w-12 h-12", showIcon }) => {
  return (
    <div
      className={`${size} bg-center bg-cover rounded-md flex justify-end items-start`}
      style={{ backgroundImage: `url(${image})` }}
    >
      {console.log(showIcon)}
      {showIcon && (<div className="m-[-13px]"><IconCircleClose/></div>)}
    </div>
  );
};