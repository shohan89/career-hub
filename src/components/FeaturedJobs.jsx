import { useEffect, useState } from 'react';
import JobCard from './JobCard';
import SectionTittle from './SectionTittle';

const FeaturedJobs = () => {
    const [featuredJobs, setFeaturedJobs] = useState([]);
    useEffect(()=>{
        try {
            fetch('jobs.json')
                .then(res => res.json())
                .then(data => setFeaturedJobs(data))
        } catch (error) {
            console.error('Failed data fetching' + error)
        }
    },[])
    return (
        <div>
            <SectionTittle tittle={`Featured Jobs: ${featuredJobs.length}`} subTittle={'Explore thousands of job opportunities with all the information you need. Its your future'} />
            <div>
                {
                    featuredJobs.map(featuredJob => <JobCard 
                        key={featuredJob.id} 
                        featuredJob={featuredJob}
                         />)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;