function About() {
  return (
    <>
      {/* About us */}
      
      <section id="about" className="about">

        <div class="container" data-aos="fade-up">
            <div class="section-title">
            <h1>About Us</h1>
            </div>
        </div>
        
        <br></br>
        <br></br>
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div
              className="col-lg-6 order-1 order-lg-2"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <img src="assets/img/about.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
              <h3>
                A mentor is someone who sees more talent and ability within you, than you see in yourself, and helps bring it out of you.
              </h3>
              <p className="fst-italic">
              A mentor is someone who sees more talent and ability within you, than you see in yourself, and helps bring it out of youA mentor is someone who sees more talent and ability within you, than you see in yourself, and helps bring it out of you.
              </p>
              <ul>
                <li>
                  <i className="bi bi-check-circle"></i> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </li>
                <li>
                  <i className="bi bi-check-circle"></i> Duis aute irure dolor
                  in reprehenderit in voluptate velit.
                </li>
                <li>
                  <i className="bi bi-check-circle"></i> Ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate trideta storacalaperda mastiro
                  dolore eu fugiat nulla pariatur.
                </li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
