import DetailsHero from "../DetailsComponent/Hero";
import SlideShow from "../DetailsComponent/SlideShow";
import TechStack from "../DetailsComponent/TechStack";
import ProjectFunctionality from "../DetailsComponent/Functionality";
import OtherProejcts from "../DetailsComponent/OtherProjects";
import { useParams } from "react-router-dom";

export default function Details() {
  let { id } = useParams();
  

  return (
    <>
      <DetailsHero id={id} />
      <SlideShow id={id} />
      <TechStack id={id} />
      <ProjectFunctionality id={id} />
      <OtherProejcts id={id}/>
    </>
  );
}
