import Axios from "axios";
export const register = async function(user) {
  const { data } = await Axios.post(
    "http://localhost:4402/user/register",
    user
  );
  console.log(data);
  return data;
};
// export const login = (user) => {
//   //   debugger;
//   return Axios.post("http://localhost:4402/user/login", user).then(res => res.data);
// };

export const login=async(currentUser) =>{
//  const loginEndPoint = `${userEndPoint}/login`;
  const response =await Axios.post("http://localhost:4402/user/login",currentUser).catch(err=>console.log(err));
  console.log(response.data);
  const {token ,user} = response.data;
  localStorage.setItem("token",token);
  localStorage.setItem("user",JSON.stringify(user));
  // axios.defaults.headers.common["Authorization"]=token;
  console.log(response.data);
  
  return response.data;
}