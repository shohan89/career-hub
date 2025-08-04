import CategoryList from "../components/CategoryList";
import FeaturedJobs from "../components/FeaturedJobs";
import Hero from "../components/Hero";

const Home = () => {
    return (
        <div>
            <Hero />
            <CategoryList />
            <FeaturedJobs />
        </div>
    );
};

export default Home;