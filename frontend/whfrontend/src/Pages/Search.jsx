import React, { useState, useEffect } from "react";
import axiosInstance from "../../axiosInstance";

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
    <div>
      <h1> Add a new organization</h1>
      <div>
        <p> Enter name of organization: </p>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <p> Enter asspciated tags: </p>
        <input value={tag} onChange={(e) => setTag(e.target.value)} />
        <button onClick={() => addItem(tag)}>Add Item</button>

        <ul>
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>

        <p> Enter description: </p>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <p> Enter Link </p>
        <input value={link} onChange={(e) => setLink(e.target.value)} />
      </div>
      <button onClick={addNewOrg}>Add Organization</button>

      <h1>All organizations in data base</h1>
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
  );
};

export default Search;
