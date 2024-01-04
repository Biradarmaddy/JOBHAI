import { useState } from "react"

function SearchBar(props) {

  const [JobCriteria , setJobCriteria] = useState({
    title:"",
    location:"",
    experience:"",
    type:""
  })

  const handleChange =(e)=>{
     
    setJobCriteria((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  console.log(JobCriteria);

  const search = async () => {
    console.log("Before search: ", JobCriteria);
    await props.fetchJobsCustom(JobCriteria);
    console.log("After search");
  };
  


  return (
    <div className="flex gap-4 my-10 justify-center px-10 ">
         
         <select onChange={handleChange} name="title" value={JobCriteria.title} className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md" defaultValue="" >
            <option value="" disabled hidden selected>Job Role</option>
            <option value="iOS Developer">iOS Developer</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Anroid Developer">Anroid Developer</option>
            <option value="Developer Advocate">Anroid Developer</option>
         </select>

         <select onChange={handleChange} name="type" value={JobCriteria.type} className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md">
            <option value="" disabled hidden selected>Job Type</option>
            <option value="Part Time">Part Time</option>
            <option value="Full Time">Full Time</option>
            <option value="Contract">Contract</option>
         </select>

         <select onChange={handleChange} name="location" value={JobCriteria.location} className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md">
               <option value="" disabled hidden selected>Location</option>
               <option value="Remote">Remote</option>
               <option value="On Office">On Office</option>
               <option value="Hybrid">Hybrid</option>
         </select>

         <select onChange={handleChange} name="experience" value={JobCriteria.experience} className="w-64 py-3 pl-4 bg-zinc-200 font-semibold rounded-md">
               <option value="" disabled hidden selected>Experience</option>
               <option value="Fresher">Fresher</option>
               <option value="Junior Level">Junior Level</option>
               <option value="Senior ">Senior </option>
         </select>

         <button onClick={search} className="w-64 bg-blue-600 font-bold py-3 rounded-md">Search</button>



    </div>
  )
}

export default SearchBar
