import Card from "react-bootstrap/Card";
import profile from "./Media/profile.jpg";
import Carousel from "react-bootstrap/Carousel";
import vogue from "./Media/vogue.svg";
import elle from "./Media/elle.svg";
import cosmopolitan from "./Media/cosmopolitan.svg";

function Cards() {
  return (
    <div style={{ backgroundColor: "#f5f4ff" }}>
      <h5>Reviews from real users</h5>

      <div>
        <Carousel>
          <Carousel.Item>
            <div className="cards">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <img src={profile} alt="" />
                  <Card.Subtitle className="mb-2 text-muted">
                    Jane Doe
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <img src={profile} alt="" />
                  <Card.Subtitle className="mb-2 text-muted">
                    Jane Doe
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <img src={profile} alt="" />
                  <Card.Subtitle className="mb-2 text-muted">
                    Jane Doe
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="cards">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <img src={profile} alt="" />
                  <Card.Subtitle className="mb-2 text-muted">
                    Jane Doe
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <img src={profile} alt="" />
                  <Card.Subtitle className="mb-2 text-muted">
                    Jane Doe
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <img src={profile} alt="" />
                  <Card.Subtitle className="mb-2 text-muted">
                    Jane Doe
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="content">
        <h5>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non
          quis exercitationem culpa nesciunt nihil aut nostrum explicabo
          reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
          Voluptatum ducimus voluptates voluptas?
        </h5>
      </div>
      <div className="makeups">
        <img src={cosmopolitan} alt="..." />
        <img src={vogue} alt="..." />
        <img src={elle} alt="..." />
        <img src={cosmopolitan} alt="..." />
        <img src={vogue} alt="..." />
        <img src={elle} alt="..." />
      </div>
    </div>
  );
}

export default Cards;
