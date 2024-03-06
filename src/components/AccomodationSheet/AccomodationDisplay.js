import { useParams } from "react-router-dom";
import { useEffect, useState } from "react"
import Collapse from "../../components/Collapse/Collapse";
import NotFound from "../../pages/error/Error";
import Footer from "../Footer";
import Header from "../../components/Header/Header";
import Host from "../../components/Host/Host"
import Rating from "../Rating/Rating";
import Slider from "../../components/Slider/Slider";
import Tags from "../../components/Tags/Tags";
import ItemsData from "../../datas/accomodation.json"
import "./style.scss";

const Logement = () => {

  
  const { id } = useParams();

  const [sliderPicture, setSliderPicture] = useState([]);
  
  const housing = ItemsData.find((item) => item.id === id);

  useEffect(() => {
		if (housing) {
			setSliderPicture(housing.pictures);
		}

	}, [id, housing]);

	if (!housing) {
		return <NotFound />;
	}

  const {
    rating,
    tags,
    description,
    equipments,
    title,
    location,
    host: { name, picture },
  } = housing;

  const [firstName, lastName] = name.split(" ");
  

  return (
    <>
      <Header />
      <main className="housing-main">

        
        <Slider sliderPicture={sliderPicture} />
        

        <section className="housing-header">

          <div className="housing-info">
            <h1 className="housing-title">{title}</h1>
            <p className="housing-location">{location}</p>
            <Tags tags={tags} />
          </div>

          <div className="host">
          <Host  firstName={firstName} lastName={lastName} picture={picture}/>
          <Rating rating={rating} />
          </div>

        </section>

        <section className="housing-collapse">
          
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

export default Logement;