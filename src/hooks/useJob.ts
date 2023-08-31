import { useContext } from "react";
import { JobContext } from "../providers/JobProvider";

const useJob = () => {
  const jobContext = useContext(JobContext);

  return jobContext;
};

export default useJob;
