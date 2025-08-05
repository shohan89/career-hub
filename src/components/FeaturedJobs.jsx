import { useEffect, useState } from 'react';
import JobCard from './JobCard';
import SectionTittle from './SectionTittle';

const FeaturedJobs = () => {
    const [featuredJobs, setFeaturedJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4)
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
            <div className='grid grid-cols-2 gap-6 mt-8 my-6'>
                {
                    featuredJobs.slice(0, dataLength).map(featuredJob => <JobCard 
                        key={featuredJob.id} 
                        featuredJob={featuredJob}
                         />)
                }
            </div>
            <div className={ dataLength === featuredJobs.length && 'hidden' }>
                <button onClick={()=> setDataLength(featuredJobs.length)} className='btn btn-primary'>Show All</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;