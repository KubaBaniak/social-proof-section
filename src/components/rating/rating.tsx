import star from "../../assets/images/icon-star.svg";
import "./rating.scss";

function Rating({ service }: { service: string }) {
  return (
    <div className="rating">
      <div className="stars">
        <img src={star} />
        <img src={star} />
        <img src={star} />
        <img src={star} />
        <img src={star} />
      </div>
      <span>Rated 5 Stars in {service}</span>
    </div>
  );
}

export default Rating;
