const Meme = () => {
  return (
    <div>
      <div className="col-12 col-md-5 mb-4 mb-md-0">
        <div className="card shadow">
          <div className="card-body m-3">
            <form>
              <input className="form-control mb-3" placeholder="First Word" />

              <input className="form-control mb-5" placeholder="Last Word" />

              <button className="btn btn-primary w-100">
                Get a new meme image
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meme;
