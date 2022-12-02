import DetailsHero from "../DetailsComponent/Hero";
import SlideShow from "../DetailsComponent/SlideShow";
import TechStack from "../DetailsComponent/TechStack";
import { useParams } from "react-router-dom";

export default function Details() {
  let { id } = useParams();
  

  return (
    <>
      <DetailsHero id={id} />
      <SlideShow id={id} />
      <TechStack id={id} />
    </>
  );
}
