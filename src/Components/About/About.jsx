function About() {
    return (
        <>
        <div className="min-vh-100">
          {1 < 0 ? (
            <div className="container mt-5 text-white">
              <div className="row g-4 my-5">
                <div className="col-md-4 align-content-center text-start">
                  <h1 className="">
                    Trending <span className="txt-color">Movies</span> to watch
                    now
                  </h1>
                  <p className="fw-lighter opacity-50">
                    Best trending movies in the last day
                  </p>
                </div>
              </div>
  
              <div className="row g-4 my-5">
                <div className="col-md-4 align-content-center text-start">
                  <h1 className="">
                    Trending <span className="txt-color">TV Shows</span> to watch
                    now
                  </h1>
                  <p className=" fw-lighter opacity-50">
                    Best trending tv shows in the last day
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="txt-color min-vh-100 d-flex justify-content-center align-items-center">
              <div class="spinner-grow" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </div>
      </>
    )
}

export default About
