import "./host.scss";

const Host = ({ firstName, lastName, picture }) => {
  return (
    <div className="accomodation-host">
        <div className="host-name">
          <p>{firstName}</p>
          <p>{lastName}</p>
        </div>
        <img className="host-img" src={picture} alt="host" />
    </div>
  );
};

export default Host;