function Home() {
  return (
    <>
      <div className="container py-4 min-vh-100 d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-12 ">
            <div className="profile-img">
              <img src="/images/profile.png" className="profile"></img>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 col-sm-12">
            <h2 className="text-center-name pt-4">
              I'm &nbsp;
              <span className="text-color">V</span>ijayalakshmi
            </h2>
            <h1 className="home-title text-color">Frontend Developer</h1>
            <p>
              I'm a software engineer specializing in scalable web apps. Explore
              my projects and online resume.
            </p>
            <a href="/images/Resume.pdf" download="Resume.pdf">
              <button
                className="btn btn-outline-dark button mt-2 mb-2"
                type="button"
              >
                <span>Resume</span>
                <span>
                  <i className="fa-solid fa-download px-2"></i>
                </span>
              </button>
            </a>
          </div>

          <div className="col-md-6 d-md-none d-flex justify-content-center pt-3">
            <div className="profile-box">
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
                  Frontend Developer
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
        </div>
      </div>
    </>
  );
}
export default Home;
