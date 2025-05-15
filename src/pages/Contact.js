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
          <div className="col-md-4 d-flex justify-content-center">
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
                  <a
                    className="nav-link"
                    href="mailto:vijayalakshmi.senthilnayagam@gmail.com"
                  >
                    <i className="fa-brands fa-google social-media"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row m-0 ">
          <div className="col-lg-4 col-md-6 d-flex justify-content-center">
            <div className="contact-box d-flex justify-content-center align-items-center">
              <i class="fa-brands fa-linkedin pb-3"></i>
              <h6>Vijayalakshmi</h6>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 padding-done d-flex justify-content-center">
            <div className="contact-box d-flex justify-content-center align-items-center">
              <i className="fa-solid fa-map-pin pb-3"></i>
              <h6>Tirunelveli</h6>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 padding d-flex justify-content-center">
            <div className="contact-box d-flex justify-content-center align-items-center">
              <i class="fa-brands fa-google pb-3"></i>
              <h6>vijayalakshmi.senthilnayagam@gmail.com</h6>
            </div>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126197.82184375996!2d77.65977483157381!3d8.721722256381213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0411625053c519%3A0xad791b361b359a4d!2sTirunelveli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1730635825405!5m2!1sen!2sin"
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
