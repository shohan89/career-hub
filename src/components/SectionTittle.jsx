
const SectionTittle = ({ tittle, subTittle }) => {
    return (
        <div className="text-center">
            <h2 className='text-2xl font-bold'>{tittle}</h2>
            <p>{subTittle}</p>
        </div>
    );
};

export default SectionTittle;