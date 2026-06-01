import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AddServices = () => {
  const {
    data: specialties = [],
    isLoading,
  } = useQuery({
    queryKey: ["specialties"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/specialties");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <isLoading></isLoading>;
  }

  const handleAddSpecialist = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const special = form.select.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const image = form.image.files[0];

    if(!image){
      return  toast.error('Please select an image🤑!')
    }

    const formData = new FormData();
    formData.append('name',name);
    formData.append('specialist',special);
    formData.append('email',email);
    formData.append('phone',phone);
    formData.append('image',image);

    fetch('http://localhost:5000/add-specialist',{
      method:"POST",
      body:formData
    })
    .then(res=>res.json())
    .then(data=>{
       if (data.acknowledged){
        toast.success('Specialist Added Successfully Done!')
        form.reset()
       }
    })


    
    
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold">Add Specialist</h1>

      <div className="shadow-lg w-1/2 p-5 mt-5 rounded-lg">
        <form onSubmit={handleAddSpecialist} className="">
          <input
            type="text"
            name="name"
            className="input w-full"
            placeholder="Name"
          />
          <select name="select" className="select select-primary w-full mt-5">
            {specialties?.map((specialty, i) => (
              <option key={i} value={specialty.name}>
                {specialty.name}
              </option>
            ))}
          </select>
          <input
            type="email"
            name="email"
            className="input w-full mt-5"
            placeholder="Email"
          />
          <input
            type="number"
            name="phone"
            className="input w-full mt-5"
            placeholder="Phone Number"
          />
          <input
            type="file"
            name="image"
            className="input w-full mt-5"
            placeholder="attach file here"
          />

          <input
            value="Add Now"
            type="submit"
            className="btn btn-primary mt-4 w-full"
          />
        </form>
      </div>
    </div>
  );
};

export default AddServices;
