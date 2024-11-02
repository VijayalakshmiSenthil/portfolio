function About() {
  return (
    <>
      <div className="container h-100" id="about">
        <div className="d-flex">
          <div className="title-line"></div>
          <h1 className="px-3">What I do?</h1>
        </div>
        <p className="about-text">
          Experienced MERN Stack Developer with a solid foundation in web
          development, specializing in delivering cutting-edge solutions that
          enhance user experience and drive project success. Proven ability to
          optimize performance, collaborate effectively with teams, and
          implement best practices to ensure continuous improvement in software
          development.
        </p>
        <a href="/project">
          <button className="btn btn-custom text-white" type="button">
            View Projects
          </button>
        </a>
        <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-4">
            <div className="about-box">
              <h6>Building Dynamic Web Applications</h6>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-lg-4">
            <div className="about-box">
              <h6>Responsive Website Design</h6>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-lg-4">
            <div className="about-box">
              <h6>API Development & Integration</h6>
            </div>
          </div>
        </div>
        <div className="about-card justify-content-center align-items-center d-flex">
          <div className="d-flex align-items-center">
            <h1 className="number">1</h1>
            <div className="about-line mx-1"></div>
            <h6 className="justify-content-center">Year Of Experience</h6>
            <div className="d-flex align-items-center">
              <h1 className="number">4</h1>
              <div className="about-line mx-1"></div>
              <h6 className="justify-content-center">Projects Worked</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
