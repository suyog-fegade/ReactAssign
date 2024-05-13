import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Register from "./Pages/Register"; 
import View from "./Pages/View";
import Users from "./Pages/Users";
import UserInfo from "./Pages/UserInfo"


const Routers = () => {  
  const [usersData, setUsersData] = useState([]);
  const [uuid, setuuid] = useState(null);
  const [userId, setUserId] = useState(null);
  
  const addUser = (user) => {
    const newUser = { ...user, id: generatedId() };
    setUsersData([...usersData, newUser]); 
    console.log(newUser);
  };

   const handleRegister = () =>{
    setId(null)
  }
  const updateUser = (userId, updatedUserData) => {
    const updatedUsers = usersData.map((user) =>
      user.id === userId ? { ...user, ...updatedUserData } : user
    );
    setUsersData(updatedUsers);
    console.log("updated user data :", updatedUsers.find((user) => user.id === userId));
  };

  const deleteUser = (userId) => {
    const updatedUsers = usersData.filter((user) => user.id !== userId);
    setUsersData(updatedUsers); 
    console.log(updatedUsers);
  };
  const setId = (uuid) => {
    setuuid(uuid);
  };
  const generatedId = () => {
    return Math.floor(Math.random() * 1000) + 1;
  };

  return (
    <>
   
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home handleRegister = {handleRegister} />} />
        <Route
          path="/register"
          element={<Register addUser={addUser}  users={usersData} updateUser={updateUser} uuid = {uuid}/>}
        />
        <Route path="/view" element={<View users={usersData} setId = {setId} deleteUser={deleteUser} />} />
        <Route path="/Users" element={<Users setUserId={setUserId} />} />
        <Route path="/UserInfo" element={<UserInfo userId={userId} />} />
       </Routes>
    </>
  );
};

export default Routers;
