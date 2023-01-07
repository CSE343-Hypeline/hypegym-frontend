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

// Logout
export async function LogoutAPI() {
  const response = await axios.post("http://localhost:8080/api/logout");
  return response;
}

// Get User Informations
export async function getUser(user_id) {
  const response = await axios.get(`http://localhost:8080/api/user/${user_id}`);
  return response;
}

// Gets Members of the Gym
export async function getMembers(gym_id) {
  const response = await axios.get(
    `http://localhost:8080/api/users/members/${gym_id}`
  );
  return response;
}
// Gets PTs of the Gym
export async function getTrainers(gym_id) {
  const response = await axios.get(
    `http://localhost:8080/api/users/pts/${gym_id}`
  );
  return response;
}

// Adds member to the Gym
export async function createUser(user) {
  const response = await axios.post("http://localhost:8080/api/user", {
    name: user.name,
    email: user.email,
    password: user.password,
    role: user.role,
    phone_number: user.phone_number,
    address: user.address,
    gym_id: user.gym_id,
    gender: user.gender,
    trainer_id: user.trainer.ID,
    //membership: user.membership.code,
  });
  return response;
}

// Gets Members of the Gym
export async function assignPT(trainerID, memberID) {
  const response = await axios.post(
    `http://localhost:8080/api/pt/${trainerID}/assign-member`,
    {
      user_id: memberID,
    }
  );
  return response;
}

//Removes member from the Gym
export async function deleteMember(memberID) {
  const response = await axios.delete(
    `http://localhost:8080/api/user/${memberID}`
  );
  return response;
}

// Get Daily Attedance
export async function getDailyAttendance(gymId) {
  const response = await axios.get(
    `http://localhost:8080/api/gym/${gymId}/attendance/day`
  );
  return response;
}

// Get Daily Attedance
export async function getOnlines(gymId) {
  const response = await axios.get(
    `http://localhost:8080/api/gym/${gymId}/online`
  );
  return response;
}

// Get Daily Attedance
export async function contactUs(contact) {
  const response = await axios.post("http://localhost:8080/contact", contact);
  return response;
}
