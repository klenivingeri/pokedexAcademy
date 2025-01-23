export const BgImage = ({ image, size = "w-12 h-12" }) => {
  return (
    <div
      className={`${size} bg-center bg-cover rounded-md flex justify-end items-end`}
      style={{ backgroundImage: `url(${image})` }}
    ></div>
  );
};