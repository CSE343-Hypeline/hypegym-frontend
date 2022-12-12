import axios from "axios";

export async function loginAPI(data) {
  const response = await axios.post("http://localhost:8080/login", {
    email: data.email,
    password: data.password,
  });
  return response;
}

export async function getMembers() {
  const response = await axios.get("http://localhost:8080/api/users/members/1");//Gym idyi değiştir
  return response;
}

export async function apiMe() {
  const response = await axios.get("http://localhost:8080/api/me");
  return response;
}

export async function addMember(user) {
  const response = await axios.post("http://localhost:8080/api/user", {
    email: user.email,
    password: user.password,
    role: user.role,
    gym_id: user.gym_id
  });
  return response;
}
