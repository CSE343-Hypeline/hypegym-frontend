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
export async function getMembers() {
  const response = await axios.get("http://localhost:8080/api/users/members/1"); //Gym idyi değiştir
  return response;
}

// Adds member to the Gym
export async function addMember(user) {
  const response = await axios.post("http://localhost:8080/api/user", {
    email: user.email,
    password: user.password,
    role: user.role,
    gym_id: user.gym_id,
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
