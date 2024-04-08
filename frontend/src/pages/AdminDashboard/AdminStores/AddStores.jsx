import React, { useState } from "react";
import axios from "axios";
import "./AddStores.css";

const AddStores = () => {
  const [storeName, setStoreName] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [storeImage, setStoreImage] = useState("");

  const handleFileChange = (e) => {
    setStoreImage(e.target.files[0]);
  };

  const addStore = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("storeName", storeName);
      formData.append("location", location);
      formData.append("category", category);
      formData.append("description", description);
      formData.append("storeImage", storeImage);

      const response = await axios.post("/api/store/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setStoreName("");
      setLocation("");
      setCategory("");
      setDescription("");
      setStoreImage("");
      
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <form className="addstoreform" encType="multipart/form-data">
      <div>
        <label className="addstorelable">Store Name:</label>
        <input
          className="storeinput"
          type="text"
          value={storeName}
          onChange={(e) => setStoreName(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="addstorelable">Location:</label>
        <input
          className="storeinput"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="addstorelable">Category:</label>
        <select
          className="storeinputselect"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="Select Category" disabled>
            Select Category
          </option>
          <option value="Food and Beverages">Food and Beverages</option>
          <option value="Fashion and Accessories">
            Fashion and Accessories
          </option>
          <option value="Beauty and Wellness">Beauty and Wellness</option>
        </select>
      </div>
      <div>
        <label className="addstorelable">Description:</label>
        <textarea
          className="storeinputtextarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <div>
        <label className="addstorelable">Store Image:</label>
        <input
          className="storeinputfile"
          type="file"
          filename="storeImage"
          onChange={handleFileChange}
          required
        />
      </div>
      <button
        onClick={addStore}
        className="addstorebutton"
        type="submit"
      >
        Create Store
      </button>
    </form>
  );
};

export default AddStores;
