import Axios from "axios";
export const GetAll = async function() {
  const { data } = await Axios.get(`http://localhost:4402/product/GetAll`);
  // console.log(data);
  return data;
};
export const GetById = async function(id) {
  const { data } = await Axios.get(`http://localhost:4402/product/${id}`);
  console.log(data);
  return data;
};

export async function Add(product){


 const token = localStorage.getItem("token");
 console.log(token);
  const {data} = await Axios.post("http://localhost:4402/product/Add",product, {
    headers:{
    'authorization':token
    }
    });
 // { headers: { authorization: `Bearer ${localStorage.getItem("token")}` } }
 // );
  return data;
}
export  async function SearchByProductName(productName){
  // const token = localStorage.getItem("token");
  // console.log(token);
  console.log(productName)
  const {data} = await Axios.get(`http://localhost:4402/product/search/${productName}`);
  // ,{headers:{
  //   'authorization':token
  //   }});
  console.log(data);
  return data;
  //console.log(students)
};

export const Update = async function(item, id) {
  const { data } = await Axios.patch(`http://localhost:4402/product/Edit/${id}`, item);
  return data;
  //console.log(students);
};

export const Delete = async function(id) {
  const { data } = await Axios.delete(`http://localhost:4402/product/${id}`);
  return data ;
};
