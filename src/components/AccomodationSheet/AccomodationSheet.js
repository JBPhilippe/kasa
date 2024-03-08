import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import Collapse from "../Collapse/Collapse";
import ErrorPage from "../../pages/error/ErrorPage";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Host from "../Host/Host"
import Rating from "../Rating/Rating";
import Slider from "../Slider/Slider";
import Tags from "../Tags/Tags";
import ItemsData from "../../datas/accomodation.json"

const AccomodationSheet = () => {


  const { id } = useParams();

  const [sliderPicture, setSliderPicture] = useState([]);

  const accomodation = ItemsData.find((item) => item.id === id);
  document.title = accomodation.title

  useEffect(() => {
    if (accomodation) {
      setSliderPicture(accomodation.pictures);
    }

  }, [id, accomodation]);

  if (!accomodation) {
    return <ErrorPage />;
  }

  const {
    rating,
    tags,
    description,
    equipments,
    title,
    location,
    host: { name, picture },
  } = accomodation;

  const [firstName, lastName] = name.split(" ");


  return (
    <>
      <Header />
      <main className="housing-main">


        <Slider sliderPicture={sliderPicture} />


        <section className="accomodation-header">

          <div className="accomodation-info">
            <h1 className="accomodation-title">{title}</h1>
            <p className="accomodation-location">{location}</p>
            <Tags tags={tags} />
          </div>

          <div className="host">
            <Host firstName={firstName} lastName={lastName} picture={picture} />
            <Rating rating={rating} />
          </div>

        </section>

        <section className="accomodation-collapse">

          <Collapse title="Description">
            <p>{description}</p>
          </Collapse>

          <Collapse title="Équipements">
            <ul className="equipments-content">
              {equipments.map((equipment, index) => {
                return <li key={index}>{equipment}</li>;
              })}
            </ul>
          </Collapse>

        </section>

      </main>

      <Footer />
    </>
  );
};

export default AccomodationSheet;