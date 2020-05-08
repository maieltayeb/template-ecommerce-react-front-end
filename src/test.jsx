export async function addProduct(product){
    const token = localStorage.getItem("token");
    console.log(token);
    const {data} = await axios.post(`${url}/addProduct`,product,
    {
    headers:{
    'authorization':token
    }
    });
    return data;
    }
    
    View Hala ’s profileHala Elsaka
    Hala Elsaka  5:50 PM
    
    export async function LoginUser(currentUser) {
    const loginEndPoint = `${userEndPoint}/login`;
    const response =await axios.post(loginEndPoint,currentUser).catch(err=>console.log(err));
    console.log(response.data);
    const {token ,user} = response.data;
    localStorage.setItem("token",token);
    localStorage.setItem("user",JSON.stringify(user));
    // axios.defaults.headers.common["Authorization"]=token;
    console.log(response.data);
    
    return response.data;
    }