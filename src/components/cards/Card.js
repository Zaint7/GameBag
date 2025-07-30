import favicon from "../../images/favicon.png";

function Card() {
  return (
    <div className="card-custom">
      <img src={favicon} className="card-img" alt="favicon" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <a href="#" className="card-btn">Go somewhere</a>
      </div>
    </div>
  );
}

export default Card;
