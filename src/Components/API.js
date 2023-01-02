import axios from "axios";

// Authorizations Control
export async function apiMe() {
  const response = await axios.get("http://localhost:8080/api/me");
  return response;
}

// Login Control
export async function loginAPI(data) {
  const response = await axios.post("http://localhost:8080/login", {
    email: data.email,
    password: data.password,
  });
  return response;
}

// Gets Members of the Gym
export async function getMembers(gym_id) {
  console.log(gym_id);
  const response = await axios.get(
    `http://localhost:8080/api/users/members/${gym_id}`
  );
  return response;
}

// Adds member to the Gym
export async function addMember(user) {
  console.log("API: ", user);
  const response = await axios.post("http://localhost:8080/api/user", {
    name: user.name,
    email: user.email,
    password: user.password,
    phone_number: user.phone_number,
    address: user.address,
    role: "MEMBER",
    gym_id: user.gym_id,
    gender: user.gender,
  });
  return response;
}

//Removes member from the Gym
export async function deleteMember(memberID) {
  const response = await axios.delete(
    `http://localhost:8080/api/user/${memberID}`
  );
  return response;
}
