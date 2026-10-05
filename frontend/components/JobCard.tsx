import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ArrowRight, CircleDollarSign, MapPin } from "lucide-react";
import Link from "next/link";

interface JobCardProps {
    job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
    const { id, title, description, location, salary_min, salary_max, status } =
        job;

    return (
        <Card className="relative mx-auto w-full max-w-sm pt-0">
            <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
            <img
                src="https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1"
                alt="job posting cover"
                className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
            />
            <CardHeader>
                <CardAction>
                    <Badge variant="secondary">{status}</Badge>
                </CardAction>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description} </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex text-gray-500 font-medium flex-col gap-2">
                    <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <CircleDollarSign size={16} />
                        <span>
                            {salary_min} - {salary_max}
                        </span>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Link
                    href={`job-details/${id}`}
                    className="flex px-5 py-2 gap-2 bg-primary items-center text-white rounded-2xl"
                >
                    Read more <ArrowRight size={16} />
                </Link>
            </CardFooter>
        </Card>
    );
};

export default JobCard;
