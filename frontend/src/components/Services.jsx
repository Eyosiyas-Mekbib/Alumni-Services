import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div id="services">
      <h2>Our Services</h2>
      <p>Lorem ipsum dolor, sit amet </p>
      <div style={{ justifyContent: "space-around" }}>
        <Link to="/OfficalTranscriptRequest">
          <div className="service">
            <h4>
              Offical transcript
              <br />
              request
            </h4>
          </div>
        </Link>
        <div className="service">
          <h4>
            Offical transcript
            <br />
            request
          </h4>
        </div>
        <div className="service">
          <h4>
            Offical transcript
            <br />
            request
          </h4>
        </div>
        <div className="service">
          <h4>
            Offical transcript
            <br />
            request
          </h4>
        </div>
        <div className="service">
          <h4>
            Offical transcript
            <br />
            request
          </h4>
        </div>
        <div className="service">
          <h4>
            Offical transcript
            <br />
            request
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Services;
