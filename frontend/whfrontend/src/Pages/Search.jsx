import React, { useState, useEffect } from "react";
import axiosInstance from "../../axiosInstance";
import Navbar from "../assets/Navbar";
import "./Search.css";

const Search = () => {
  const [name, setName] = useState("");
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [organizations, setOrganizations] = useState([]);

  // usTo be excuted before anything else
  useEffect(() => {
    fetchOrganizations();
  }, []);

  const addItem = (newTag) => {
    setTags([...tags, newTag]);
  };

  const addNewOrg = async () => {
    try {
      const response = await axiosInstance.post("/add-organization", {
        name,
        tags,
        description,
        link,
      });
      setName("");
      setTag("");
      setDescription("");
      setLink("");
      fetchOrganizations(); // Refresh the list of organizations
    } catch (error) {
      console.error("Error adding organization:", error);
      alert("Failed to add organization.");
    }
  };

  // Function to fetch all organizations
  const fetchOrganizations = async () => {
    try {
      const response = await axiosInstance.get("/get-all");
      console.log("response", response);
      setOrganizations(response.data.organizations);
    } catch (error) {
      console.error("Error fetching organizations:", error);
    }
  };

  return (
    <>
    <Navbar />
    <br></br>
      <div className="search">
        <h1> ADD A NEW ORGANIZATION</h1>
        <div>
          <p> Enter name of organization: <input value={name} onChange={(e) => setName(e.target.value)} /> </p>
          <p> Enter associated tags: <input value={tag} onChange={(e) => setTag(e.target.value)} /> <button className="sbutton" onClick={() => addItem(tag)}>ADD ITEM</button> </p>

          <div>
            {tags.map((tag, index) => (
              <p key={index}>{tag}</p>
            ))}
          </div>

          <p> Enter description: <input value={description} onChange={(e) => setDescription(e.target.value)} /> </p>
          <p> Enter Link: <input value={link} onChange={(e) => setLink(e.target.value)} /> </p>
        </div>
        <button className="obutton" onClick={addNewOrg}>ADD ORGANIZATION</button>
        </div>
        <br></br>
        <div className="organizations">
        <h1>ALL ORGANIZATIONS IN DATA BASE</h1>
        <ul>
          {organizations.map((organization, index) => (
            <div>
              <h3>{organization.name}</h3>
              <p>{organization.description}</p>
              <p>Tags: {organization.tags.join(", ")}</p>
              <a
                href={organization.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Search;
