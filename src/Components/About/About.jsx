import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="about-container">
        <div className="about-content">
          <h1 className="about-title">
            Welcome to <span>Etfarag</span>
          </h1>
          <p className="about-description">
            <strong>Etfarag</strong> is your go-to platform for discovering the
            latest trending movies! We help you stay updated with what's hot in
            the movie world and provide you with direct links to watch them on
            their official streaming platforms.
          </p>
          <p className="about-highlight">
            All links are verified to ensure a safe and enjoyable experience for
            our users.
          </p>
          <p className="about-mission">
            Join us to explore the latest cinema trends and enjoy a premium
            movie experience at your fingertips!
          </p>
          <Link
            to="../home"
            className="btn btn-outline-primary txt-color fw-bolder ms-3"
          >
            Explore Now
          </Link>
        </div>
      </div>
    </>
  );
}

export default About;
