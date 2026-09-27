type Job = {
    id: number;
    title: string;
    description: string;
    location: string;
    job_type: string;
    salary_min: string;
    salary_max: string;
    status: string;
};

type JobData = {
    count: number;
    next: number;
    previous: number;
    results: Job[];
};
