import { ImageHero } from "../ui/ImageHero";

export const CustomBanner = () => {
  return (
    <div className="container p-5">
      <div
        className="row"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        <div className="col-7">
          <div style={{ fontSize: "60px", fontWeight: "bold" }}>
            HEY DEVELOPERS ..!
          </div>
          <div style={{ fontSize: "30px" }}>
            Conoce los nuevos curso RollingCode!
          </div>
          <button className="btn btn-primary btn-lg mt-4">VER MAS</button>
        </div>
        <ImageHero />
      </div>
    </div>
  );
};
