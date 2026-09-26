import JobCard from "./JobCard";

interface JobCardSectionProps {
    data: JobData;
}

const JobCardsSection = ({ data }: JobCardSectionProps) => {
    const { count, results } = data;

    return (
        <section className="mx-auto max-w-6xl px-6 my-10">
            <div className="w-full mb-10">
                <p className="text-center font-medium text-2xl">
                    Found <span className="text-secondary">{count}</span> open
                    positions
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {results.map((job, idx) => {
                    return (
                        <div key={idx}>
                            <JobCard job={job} />
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default JobCardsSection;
