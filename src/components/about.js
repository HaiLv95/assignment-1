export default function About (){
    return (
      <div>
        
        {/* Modal */}
        <div
          className="modal fade bg-white"
          id="templatemo_search"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document">
            <div className="w-100 pt-1 mb-5 text-right">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>

          </div>
        </div>
        <section className="bg-success py-5">
          <div className="container">
            <div className="row align-items-center py-5">
              <div className="col-md-8 text-white">
                <h1>About Us</h1>
                <p>
                  Design by: Lê Văn Hai
                </p>
                <p>
                  Code language: Reactjs
                </p>
                <p>
                  Teampalte: Zay shop
                </p>
              </div>
              <div className="col-md-4">
                <img src="assets/img/avatar.jpg" alt="About Hero"  width={320} height={400}/>
              </div>
            </div>
          </div>
        </section>
        {/* Close Banner */}
      
       
      </div>
    );
}