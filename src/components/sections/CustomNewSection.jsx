import { CallToAction } from "../../data/CallToAction";
import { CallToActionCards } from "./CallToActionCards";
import { NewsCards } from "./NewsCards";
import { Novedades } from "../../data/Novedades";

export const CustomNewSection = () => {
  return (
    <div
      className="px-4 py-5 "
      id="featured-3"
      style={{ backgroundColor: "#f7f8f9" }}
    >
      <div className="container">
        <h2 className="pb-2 border-bottom text-center">NOVEDADES</h2>
        <CallToActionCards news={CallToAction} />

        <h2 className="pb-2 border-bottom pt-5 ">CURSOS</h2>
        <NewsCards news={Novedades} />
      </div>
    </div>
  );
};
