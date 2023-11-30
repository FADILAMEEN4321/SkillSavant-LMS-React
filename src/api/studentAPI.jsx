import { axiosInstance } from "../services/axios";

const addToFavourites = async (studentId, courseId) => {
  try {
    const response = await axiosInstance.post("add_favourite_course/", {
      student: studentId,
      course: courseId,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

const removeFavourites = async (studentId, courseId) => {
  try {
    const response = await axiosInstance.delete(
      `remove_favourite_course/${studentId}/${courseId}/`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

const fetchFavCourses = async (studentId) => {
  try {
    const response = await axiosInstance.get(
      `list-all-favourite-courses/${studentId}/`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

const fetchPreviousChats = async (courseId) => {
  try {
    const response = await axiosInstance.get(
      `previous-chats-listing/${courseId}/`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

const ModuleCompletionMarking = async (studentId, moduleId) => {
  try {
    const response = await axiosInstance.post("mark_module_completed/", {
      student_id: studentId,
      module_id: moduleId,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export {
  addToFavourites,
  removeFavourites,
  fetchFavCourses,
  fetchPreviousChats,
  ModuleCompletionMarking,
};
