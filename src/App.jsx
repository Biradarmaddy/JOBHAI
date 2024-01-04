import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import JobCard from "./components/JobCard";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import jobData from "./JobDummyData";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { db } from "./firebase.config";

// Other imports...

function App() {
  const [jobs, setJobs] = useState([]);



  const fetchJobs = async () => {
    const tempJobs = []
    const jobsRef = query(collection(db,"jobs"));
    const q = query(jobsRef, orderBy("postedOn", "desc"))
    const querySnapshot = await getDocs(q);


    querySnapshot.forEach((job) => {
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate()
      });
    });

    setJobs(tempJobs);
  };


  const fetchJobsCustom = async (JobCriteria) => {
    const tempJobs = []
    const jobsRef = query(collection(db,"jobs"));
    const q = query(jobsRef, where("state", "==", JobCriteria.type) , where("title", "==", JobCriteria.title), where("experience", "==", JobCriteria.experience), where("location", "==", JobCriteria.location), orderBy("postedOn", "desc"))
    const querySnapshot = await getDocs(q);


    querySnapshot.forEach((job) => {
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate()
      });
    });

    setJobs(tempJobs);

  
   };
  

  

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="">
      <Navbar />
      <Header />
      <SearchBar  fetchJobsCustom={fetchJobsCustom}/>

      {jobs.map((job) => {
        // Explicitly return the JSX element
        return <JobCard key={job.id} {...job} />;
      })}
    </div>
  );
}

export default App;