import Axios from "axios";

export let GetAllTypes = async function() {
  const { data } = await Axios.get("http://localhost:4402/category/getAllcategories");
  // console.log(data);
  return data;
};
// export function searchName(typeId) {
//   for (const type of types) {
//     if (typeId === type.id) {
//       return type.name;
//     }
//   }
// }
