import "./redommendation.scss";
import authorImage from "../../assets/images/image-anne.jpg";

function Recommendation({ name, text }: { name: string; text: string }) {
  return (
    <div className="recommendation-card">
      <div className="author">
        <img src={authorImage} />
        <div className="author-data">
          <span>{name}</span>
          <span>Verified Buyer</span>
        </div>
      </div>
      <span className="text">{text}</span>
    </div>
  );
}

export default Recommendation;
