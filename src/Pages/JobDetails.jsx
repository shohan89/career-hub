import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
    const jobs = useLoaderData();
    const{id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find( job => job.id === idInt )
    return (
        <div>
            <h2>Job Details of: {job.job_tittle}</h2>
        </div>
    );
};

export default JobDetails;