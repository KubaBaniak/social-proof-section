import "./App.scss";
import Rating from "./components/rating/rating";
import Recommendation from "./components/recommendation/recommendation";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac elementum quam, sit amet rhoncus erat. Etiam nec efficitur elit, id rutrum libero. Donec sed condimentum ipsum.";

function App() {
  return (
    <div className="main">
      <div className="main-content">
        <div className="text-section">
          <h1>10,000+ of our uses love our products.</h1>
          <span>
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services
          </span>
        </div>
        <div className="ratings">
          <Rating service="Reviews" />
          <Rating service="Report Guru" />
          <Rating service="BestTech" />
        </div>
      </div>
      <div className="recommendation-section">
        <Recommendation name="Colton Smith" text={lorem} />
        <Recommendation name="Irene Roberts" text={lorem} />
        <Recommendation name="Anne Wallace" text={lorem} />
      </div>
    </div>
  );
}

export default App;
