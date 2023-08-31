import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { Post } from "../components/PostCard";

interface iJobProviderProps {
  children: React.ReactNode;
}
interface iJobContextProps {
  jobs: Post[];
  setJobs: React.Dispatch<React.SetStateAction<Post[]>>;
  addJob: (job: Post) => void;
  alreadyAplicated: (job: Post) => boolean;
  removeJob: (job: Post) => void;
}

export const JobContext = createContext<iJobContextProps>(
  {} as iJobContextProps
);

export const JobProvider = ({ children }: iJobProviderProps) => {
  const [jobs, setJobs] = useState<Post[]>([]);

  const alreadyAplicated = (job: Post) => {
    return jobs.includes(job);
  };

  const addJob = (newJob: Post) => {
    setJobs([...jobs, newJob]);
    toast.success("Aplicação feita.");
  };

  const removeJob = (job: Post) => {
    const newJobs = [...jobs];
    const indexJob = jobs.findIndex((value) => value.id === job.id);
    newJobs.splice(indexJob, 1);
    setJobs(newJobs);
    toast.success("Aplicação desfeita.");
  };

  return (
    <JobContext.Provider
      value={{ addJob, jobs, setJobs, alreadyAplicated, removeJob }}
    >
      {children}
    </JobContext.Provider>
  );
};
