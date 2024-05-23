import { IconStar } from "../icon-star/icon-star";
import "./rating.scss";

function Rating({ service }: { service: string }) {
  return (
    <div className="rating">
      <div className="stars">
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
      </div>
      <span>Rated 5 Stars in {service}</span>
    </div>
  );
}

export default Rating;
