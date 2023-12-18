import hero from "../../assets/hero-img.png";

export const ImageHero = () => {
  return (
    <div className="col-5">
      <img src={hero} alt="header image" width={500} />
    </div>
  );
};
