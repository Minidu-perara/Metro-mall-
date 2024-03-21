import { useState } from "react";
import React  from 'react';
import axios from "axios";
import "./AddStores.css";


const AddStores = () => {
  
    const [storeName,setStoreName] = useState('');
    const [location,setLocation] = useState('');
    const [category,setCategory] = useState('');
    const [description,setDescription] = useState('');

    const submit = async (e) => {
      
        e.preventDefault();

        try{
            const newStore = {
                storeName: storeName,
                location: location,
                category: category,
                description: description
            }

            
            await axios.post("/api/store/create",newStore)
            .then(() => {
                alert("Store is created");
            }).catch((err) => {
                console.log("error occured", err);
            });


        }catch(e){
            console.log(e);
        }
    };

  return (
    
    <form className="addstoreform">
      <div>
        <label className="addstorelable">
          Store Name:
        </label>
        <input
          className="storeinput"
          type="text"
          name="storeName"
          onChange={(e) => {setStoreName(e.target.value)}}
          required
        />
      </div>
      <div>
        <label className="addstorelable">
          Location:
        </label>
        <input
          className="storeinput"
          type="text"
          name="location"
          onChange={(e) => {setLocation(e.target.value)}}
          required
        />
      </div>
      <div>
        <label className="addstorelable">
          Category:
        </label>
        <select
          className="storeinputselect"
          name="category"
          onChange={(e) => {setCategory(e.target.value)}}
          required>
          <option value="Select Category" disabled>Select Category</option>
          <option value="Food and Beverages">Food and Beverages</option>
          <option value="Fashion and Accessories">Fashion and Accessories</option>
          <option value="Beauty and Wellness">Beauty and Wellness</option>
        </select>
      </div>
      <div>
        <label className="addstorelable">
          Description:
        </label>
        <textarea
          className="storeinputtextarea"
          name="description"
          onChange={(e) => {setDescription(e.target.value)}}
          required></textarea>
      </div>
      <button onClick={submit} className="addstorebutton" type="submit">
        Create Store
      </button>
    </form>
  );
};

export default AddStores;
