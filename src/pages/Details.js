import DetailsHero from "../DetailsComponent/Hero";
import SlideShow from "../DetailsComponent/SlideShow";
import { useParams } from "react-router-dom";


export default function Details() {
    let {id} = useParams()
    return (
      <>
        <DetailsHero id={id} />
        <SlideShow/>
      </>
    );
}
