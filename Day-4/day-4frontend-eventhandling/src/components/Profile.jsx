import React from "react";
import { useState } from "react";
import { Pencil, Trash } from "lucide-react";

const Profile = () => {
  const [profiles, setProfiles] = useState(() => [
    { name: "John Doe", age: 30, occupation: "Engineer" },
    { name: "Jane Smith", age: 25, occupation: "Designer" },
    { name: "Sam Brown", age: 28, occupation: "Developer" },
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    occupation: "",
  });
  const deleteProfile = (index) => {
    const newProfiles = profiles.filter((_, i) => i !== index);
    setProfiles(newProfiles);
  };
  const editProfile = (index) => {
    setIsEditing(true);
    setEditingIndex(index);
    setFormData(profiles[index]);
  };
  const saveEdits = () => {
    const updatedProfiles = [...profiles];
    updatedProfiles[editingIndex] = formData;
    setProfiles(updatedProfiles);
    setIsEditing(false);
  };
  const [editingIndex, setEditingIndex] = useState(null);
  return (
    <>
      <div>Profile</div>
      <div>
        {profiles.map((profile, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <div
              key={index + Math.random() * 20}
              style={{
                marginBottom: "15px",
                padding: "10px",
                border: "1px solid black",
                width: "250px",
              }}
            >
              <div>
                <strong>Name:</strong> {profile.name}
              </div>
              <div>
                <strong>Age:</strong> {profile.age}
              </div>
              <div>
                <strong>Occupation:</strong> {profile.occupation}
              </div>
            </div>
            <div>
              <button
                style={{
                  width: "100px",
                  height: "20px",
                  padding: "5px",
                }}
                onClick={() => {
                  editProfile(index);
                }}
              >
                <Pencil style={{ width: "16px", height: "16px" }} />
              </button>
              <button
                style={{
                  width: "100px",
                  height: "20px",
                  padding: "5px",
                }}
                onClick={() => {
                  deleteProfile(index);
                }}
              >
                <Trash style={{ width: "16px", height: "16px" }} />
              </button>
            </div>
          </div>
        ))}
      </div>
      {isEditing && (
        <div>
          <h3>Edit Profile</h3>
          <input
            style={{
              marginRight: "10px",
              width: "200px",
              height: "20px",
              padding: "5px",
            }}
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            style={{
              marginRight: "10px",
              width: "200px",
              height: "20px",
              padding: "5px",
            }}
            type="number"
            placeholder="Age"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          />
          <input
            style={{
              marginRight: "10px",
              width: "200px",
              height: "20px",
              padding: "5px",
            }}
            type="text"
            placeholder="Occupation"
            value={formData.occupation}
            onChange={(e) =>
              setFormData({ ...formData, occupation: e.target.value })
            }
          />
          <button
            style={{
              width: "100px",
              height: "20px",
              padding: "5px",
            }}
            onClick={() => {
              saveEdits();
            }}
          >
            Save
          </button>
          <button
            style={{
              width: "100px",
              height: "20px",
              padding: "5px",
            }}
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </div>
      )}
    </>
  );
};

export default Profile;
