import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { JobsData, Post } from "../../data";
import { DeepPartial } from "react-hook-form";

interface iJobProviderProps {
  children: React.ReactNode;
}
interface iJobContextProps {
  alreadyAplicated: (job: Post) => boolean;
  jobs: Post[];
  setJobs: React.Dispatch<React.SetStateAction<Post[]>>;
  apliJobs: Post[];
  setApliJobs: React.Dispatch<React.SetStateAction<Post[]>>;
  addJob: (job: Post) => void;
  removeJob: (job: Post) => void;
  addApliJob: (job: Post) => void;
  removeApliJob: (job: Post) => void;
  editJob: (job: Post, data: DeepPartial<Post>) => void;
}

export const JobContext = createContext<iJobContextProps>(
  {} as iJobContextProps
);

export const JobProvider = ({ children }: iJobProviderProps) => {
  const [jobs, setJobs] = useState<Post[]>(JobsData);
  const [apliJobs, setApliJobs] = useState<Post[]>([]);

  const alreadyAplicated = (job: Post) => {
    return apliJobs.includes(job);
  };

  const addJob = (newJob: Post) => {
    setJobs([newJob, ...jobs]);
    toast.success("Trabalho adiconado.");
  };

  const removeJob = (job: Post) => {
    const newJobs = [...jobs];
    const indexJob = jobs.findIndex((value) => value.id === job.id);
    newJobs.splice(indexJob, 1);
    setJobs(newJobs);
    toast.success("Trabalho removido.");
  };

  const editJob = (job: Post, data: DeepPartial<Post>) => {
    const newJobs = [...jobs];
    const jobIndex = jobs.findIndex((jobs) => jobs.id === job.id);
    newJobs[jobIndex] = { ...newJobs[jobIndex], ...data };
    setJobs(newJobs);
    toast.success("Trabalho editado.");
  };

  const addApliJob = (newJob: Post) => {
    setApliJobs([newJob, ...apliJobs]);
    toast.success("Aplicação feita.");
  };

  const removeApliJob = (job: Post) => {
    const newApliJobs = [...apliJobs];
    const indexApliJob = apliJobs.findIndex((value) => value.id === job.id);
    newApliJobs.splice(indexApliJob, 1);
    setApliJobs(newApliJobs);
    toast.success("Aplicação desfeita.");
  };

  return (
    <JobContext.Provider
      value={{
        addJob,
        editJob,
        jobs,
        setJobs,
        alreadyAplicated,
        removeJob,
        apliJobs,
        setApliJobs,
        addApliJob,
        removeApliJob,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};
