import About from "../components/about-session";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Home from "../components/home-session";
import NavBar from "../components/Navbar";
import Skills from "../components/skills";
import ProjectsPage from "./Project";

function Contact_Page() {
  return (
    <>
      <div className="content pt-5" id="contact">
        <div className="row m-0">
          <div className="col-md-8">
            <div className="d-flex">
              <div className="title-line"></div>
              <h1 className="px-3">Contact Details</h1>
            </div>
            <p className="px-4">
              Interested in working together or just want to connect?Looking to
              stay in touch?
            </p>
          </div>
          <div className="col-md-4">
            <div className="contact-card mb-3">
              <h6 className="text-color">Follow Me on</h6>
              <ul className="navbar-nav flex-row justify-content-center">
                <li className="nav-item px-1">
                  <a
                    className="nav-link"
                    href="https://www.linkedin.com/in/vijayalakshmi-senthilnayagam/"
                  >
                    <i className="fa-brands fa-linkedin social-media"></i>
                  </a>
                </li>
                <li className="nav-item px-1">
                  <a
                    className="nav-link"
                    href="https://github.com/VijayalakshmiSenthil"
                  >
                    <i className="fa-brands fa-github social-media"></i>
                  </a>
                </li>
                <li className="nav-item px-1">
                  <a className="nav-link" href="tel:+1234567890">
                    <i className="fa-solid fa-phone social-media"></i>
                  </a>
                </li>
                <li className="nav-item px-1">
                  <a
                    className="nav-link"
                    href="mailto:vijayalakshmisenthil8133@gmail.com"
                  >
                    <i className="fa-brands fa-google social-media"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row m-0">
          <div className="col-lg-4 col-md-6">
            <div className="contact-box d-flex justify-content-center align-items-center">
              <i class="fa-solid fa-phone pb-3"></i>
              <h6>9360780598</h6>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 padding-done ">
            <div className="contact-box d-flex justify-content-center align-items-center">
              <i className="fa-solid fa-map-pin pb-3"></i>
              <h6>8, Ramar kovil street, Palaymakottai, Tirunelveli-627002</h6>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 padding">
            <div className="contact-box d-flex justify-content-center align-items-center">
              <i class="fa-brands fa-google pb-3"></i>
              <h6>vijayalakshmisenthil8133@gmail.com</h6>
            </div>
          </div>
        </div>

        {/* <div className="d-flex justify-content-center align-items-center mt-5">
          <div class="contact-card d-flex justify-content-center align-items-center">
            <a className="navbar-brand" href="#">
              <img src="./images/logo.png" height="80px" />
            </a>
            <h3>Vijayalakshmi</h3>
            <p>MERN Developer</p>
            <div className="d-flex flex-row">
              <i className="fa-solid fa-map-pin px-2"></i>
              <p>Tamilnadu</p>
            </div>
            <ul className="navbar-nav flex-row">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i class="fa-brands fa-linkedin px-2"></i>
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  <i class="fa-brands fa-github px-2"></i>
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  <i class="fa-brands fa-google px-2"></i>
                </a>
              </li>
              <li>
                <a className="nav-link" href="#">
                  <i class="fa-solid fa-phone px-2"></i>
                </a>
              </li>
            </ul>
          </div>
        </div> */}

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d380.50318408280407!2d77.7336715982779!3d8.72195756957085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b041202d2f44285%3A0xa97285d4770cb5fe!2sRamar%20Temple%20Pond!5e0!3m2!1sen!2sin!4v1729880532313!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="mt-5"
        ></iframe>
      </div>
    </>
  );
}
export default Contact_Page;
