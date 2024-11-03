function Home() {
  return (
    <>
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-12 center ">
            <img src="/images/profile.png" className="profile"></img>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-12 center">
            <h2>I'm Vijayalakshmi</h2>
            <h1 className="home-title text-color">MERN FullStack Developer</h1>
            <p>
              I'm a software engineer specializing in scalable web apps. Explore
              my projects and online resume.
            </p>
            <a href="/images/Resume.pdf" download="Resume.pdf">
              <button
                className="btn btn-outline-dark button mt-5 mb-5"
                type="button"
              >
                <span>Resume</span>
                <span>
                  <i className="fa-solid fa-download px-2"></i>
                </span>
              </button>
            </a>
          </div>

          <div className="col-md-6 d-md-none">
            <div className="profile-box ">
              <div>
                <a
                  className="navbar-brand d-flex align-items-center justify-content-center"
                  href="#"
                >
                  <img src="./images/logo.png" height="100" alt="Logo" />
                </a>
                <h3 className="d-flex align-items-center justify-content-center ">
                  Vijayalakshmi
                </h3>
                <p className="d-flex align-items-center justify-content-center ">
                  MERN Developer
                </p>

                <ul className="navbar-nav d-flex flex-row align-items-center justify-content-center ">
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
        </div>
      </div>
    </>
  );
}
export default Home;
