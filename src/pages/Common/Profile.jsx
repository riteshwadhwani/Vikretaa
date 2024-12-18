import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState({});
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const location = useLocation();


  const saveChanges = async (e) => {
    e.preventDefault(); 

    const payload = {
      id: JSON.parse(localStorage.getItem("user_details")).id,
      firstName: firstName,
      email: email,
    };

    const url = "http://localhost:8080/users/update";
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json(); 

    if (!data.success) {
      alert("Unable to update, try again later!");
      return;
    }

    alert("User updated successfully");
    window.location.reload(); 
  };

  
  useEffect(() => {
    const fetchUser = async () => {
      const id = JSON.parse(localStorage.getItem("user_details")).id;
      const url = `http://localhost:8080/users/${id}`;
      const response = await fetch(url);
      const data = await response.json();
      
      setFirstName(data.firstName);
      setEmail(data.email);
      setUser(data);
    };
    
    fetchUser();
  }, []);

 
  const logoutHandler = () => {
    localStorage.clear();
    window.location.reload(); 
  };

  return (
    <div className="space-y-6 text-black">
      <h1 className="text-2xl font-bold text-white">Profile</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Personal Information
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full text-black rounded-md bg-green-200 p-1 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={firstName} // Controlled component
                onChange={(e) => setFirstName(e.target.value)} // Update state
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="text"
                className="mt-1 block w-full text-black rounded-md bg-green-200 p-1 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
              />
            </div>

            <button
              onClick={saveChanges}
              type="button" 
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
      <button
        onClick={logoutHandler}
        className="bg-red-700 rounded-md text-white p-4"
      >
        Logout
      </button>
    </div>
  );
}
