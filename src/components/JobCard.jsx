
const JobCard = ({ featuredJob }) => {
    const { logo, job_tittle, 
        company_name, remote_or_onsite, 
        location,job_type, salary } = featuredJob;
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                src={logo}
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobCard;