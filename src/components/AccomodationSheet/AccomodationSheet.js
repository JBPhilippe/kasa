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

  const equipmentsList = <ul className="equipments-content">
    {equipments.map((equipment, index) => {
      return <li key={index}>{equipment}</li>;
    })}
  </ul>


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
            <div className><Rating rating={rating} /></div>
          </div>

        </section>

        <section className="accomodation-collapse">


          <Collapse title="Description" content={description} />

          <Collapse title="Équipements" content={equipmentsList} />


          


        </section>

      </main>

      <Footer />
    </>
  );
};

export default AccomodationSheet;