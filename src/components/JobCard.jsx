import JobTypeButton from "./JobTypeButton";

const JobCard = ({ featuredJob }) => {
    const { logo, job_title, 
        company_name, remote_or_onsite, 
        location,job_type, salary } = featuredJob;
    return (
        <div className="card bg-base-100 shadow-sm items-start">
            <figure className="p-6">
                <img
                src={logo}
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className="flex gap-4">
                    <JobTypeButton buttonText={remote_or_onsite} />
                    <JobTypeButton buttonText={job_type} />
                </div>
                <div className="flex">
                    <p>{location}</p>
                    <p>{salary}</p>
                </div>
                <div className="card-actions">
                <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default JobCard;