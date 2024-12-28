import axios from "axios";


export const GetAllCourses = async () => {
  
    try {
      const res = await axios.get("/api/courses/allcourses");
      //  console.log(res.data.offers)
      return res.data.courses;
    } catch (error) {
      console.log(error);
    }
  };

  export  const hundelUpdate = async (id,cours) => {
    const config = { headers: { "Content-Type": "application/json" } };
    try {
      const res = await axios.put(
        `/api/courses/edite/${id}`,
        cours,
        config
      );
    } catch (error) {
      console.log(error);
    }
  };


  export const RemoveCourse = async (id) => {
  
    try {
      const config = { headers: { "Content-Type": "application/json" } };
    const res = await axios.delete(`/api/courses/delcourse/${id}` ,config);

    } catch (error) {
      console.log(error);
    }
  };


  export const Getone = async (id) => {
  
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const result = await axios.get(`/api/courses/getone/${id}`,config);
      //  console.log(res.data.offers)
      // console.log(result.data.ofer)
      return result.data.ofer;
      
    } catch (error) {
      console.log(error);
    }
  };