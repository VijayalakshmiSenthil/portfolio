function Contact() {
  return (
    <>
      <div className="container-fluid bg-black p-5 mt-3">
        <div className="row">
          <div className="col-md-8">
            <h1 className="text-white">
              Let’s Work together on your next Project
            </h1>
            <h6 className="text-grey">Hire me and get your project done.</h6>
          </div>
          <div className="col-md-4 justify-content-center d-flex align-items-center">
            <a href="/contact">
              <button className="btn btn-custom text-white mx-4" type="button">
                &rarr; Let’s get in touch
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
