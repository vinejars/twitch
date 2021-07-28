import axios from "axios";
import { useHistory } from "react-router-dom";
import { AboutType } from "./posts";

export type UserType = {
  id?: string;
  email?: string;
  username?: string;
  firebaseID?: string;
};

//function to retrieve a single user from database
export const getSingleUser = async function (id: string) {
  try {
    const { data } = await axios.get(`/api/user/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

//function to retrieve a user's profile info
export const getInfo = async function (id: string) {
  try {
    const { data } = await axios.get(`/api/user/post/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

//function to create a user in the database
export async function createUser(
  username: string,
  email: string,
  firebase: string
) {
  try {
    await axios.post("/api/create", { username, email, firebase });
  } catch (error) {
    console.log(error);
  }
}

//function to create About Section in profile
export async function createAbout(
  id: string,
  about: string,
  ring: string,
  destination: string
) {
  try {
    const info = await axios.post("/api/createabout", {
      id,
      about,
      ring,
      destination,
    });
    return info;
  } catch (error) {
    console.log(error);
    return null;
  }
}

//function to edit AboutMe section

export async function editAbout(info: AboutType) {
  try {
    const { data } = await axios.put(`/api/editAbout`, info);
    return data;
  } catch (error) {
    console.log(error);
  }
}