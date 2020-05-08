import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import { GetAllTypes } from "./services/categories";
import { GetById ,Update,GetAll} from "./services/products";
import { Link } from "react-router-dom";
import axios from "axios";

class EditProduct extends Component {
 
  constructor(props) {
    super(props);
    
   this.state= {
      product: {
       
        productName: "",
        productPrice: "",
        productDescription: "",
    
        image:"url('img/products/product-grey-7.jpg')",
        productDiscount:"",
        // status:"",
        // tags:"",
        categoryId:"",
        userId:""
      },
      categories: [],
      errors: {}
      }

    
    this.handleEvent = this.handleEvent.bind(this);
    {
      /* check if can be removed */
    }
    //this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  

   async componentDidMount() {
     //console.log(this.props)
      const id = this.props.match.params.id;
      
      //console.log("productId",id)
      const product = await GetById(id);
      console.log(product);
      this.setState({ product});
   }

    /////////////////////////////////////////////////////////////////////
   // handleChange = e => {

      // handleChange = async e => {
      //   console.log(e.target.value);
      //       let product = { ...this.state.product };
      //       console.log(product);
      //        product[e.target.name] = e.target.value;
            //  if(e.target.name=="categoryId"){
            //   product[e.target.name] =Number(e.target.value);
            //  }
            // console.log(product);
             //product[e.target.description] = e.target.value;
            // product[e.target.price] = e.target.value;
            //product[e.target.id] = parseInt(e.target.key);
            //this.setState({ product });
        
            // this.validateProperty(e.target);
            //console.log(item);
         // };

    //  const {name, value} = e.target;
    //  const newProduct = { ...this.state.product, [name]: value }
    //   this.setState({
    //       product:newProduct
    //   })
  //}
  handleChange = e => {
    const {name, value} = e.target;
    const newProduct = {
      ...this.state.product,
      [name]: value
     }
     this.setState({
         product:newProduct
     })
 }
    handleEvent = e => {
      this.setState({[e.target.name]: e.target.value });
    };
  

   handleSave = async (e) => {
     e.preventDefault();
    console.log(this.state.product);
    const id = this.props.match.params.id;
   console.log("pro id",id)
    const data = await Update(this.state.product,id);
    console.log("enterd for edite:",data);
    //clone
    //debugger;
    const products = await GetAll();
   // [...this.props.products];
    //products.push(data);//product:data
    console.log("products sfter update",products)

    this.setState({products});

   // if(data){
      this.props.history.push("/productlist");
    //  }
  };
  
    



 
//////////////////////////////////////////////////////////////////

      // componentDidMount() 
      // {
      //   const {id} = this.state.id;
      //   console.log(id);
      // };


  // }

 render() {
 console.log(this.props.products);
  const { productName,productDescription,productPrice,productDiscount,categoryId } = this.state.product;
  return (

    <React.Fragment>
    <div className=" container">
      <form
        className="add-product"
        onSubmit={this.handleSave} action=""
      >
        <div className="add-product__images slider">
          <div className="add-product__image-actions">
            <div className="add-product__image-action">
              <a href="#">
                <i className="fas fa-plus-square"></i>
              </a>
              <a href="#">
                <i className="fas fa-edit"></i>
              </a>
              <a href="#">
                <i className="fas fa-trash-alt"></i>
              </a>
            </div>
          </div>
          <div className="slider__items">
            <div name="image"
              className="slider__item active"
              style={{
                backgroundImage: "url('img/products/product-grey-7.jpg')"
              }}
            ></div>
            <div
              className="slider__item"
              style={{
           
                backgroundImage: "url('img/products/product-grey-7.jpg')"
              }}
            ></div>
            <div
              className="slider__item"
              style={{
                backgroundImage: "url('img/products/product-grey-7.jpg')"
              }}
            ></div>
          </div>
          <div className="slider__indicators">
            <span className="slider__indicator active"></span>
            <span className="slider__indicator"></span>
            <span className="slider__indicator"></span>
          </div>
        </div>
        <div className="add-product__data">
          <div className="form-controls">
            <section className="tabs">
              <div className="tabs__headers">
                <div className="tabs__header active">English</div>
              
              </div>
              <div className="tabs__bodies">
                <div className="tabs__body active">
                  <div className="form-group ">
                    <Input
                      //type="text"
                      label="Name"
                      name="productName"
                      value={productName}
                      onChange={e => this.handleChange(e)}
                      // error={this.state.errors.name}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Description</label>
                    {/* <textarea
                      className="form-control"
                      name=""
                      id=""
                      cols="30"
                      rows="4"
                    ></textarea> */}
                     <textarea
                        className="form-control"
                        name="productDescription"
                        label="description"                       
                        value={productDescription}
                        onChange={e => this.handleChange(e)}
                        // value={this.state.product.description}
                        // onChange={e => this.handleChange(e)}
                        // error={this.state.errors.description}
                        cols="30"
                        rows="4"
                      ></textarea>
                  </div>
                </div>
                {/* <div className="tabs__body ">
                  <div className="form-group invalid">
                    <label htmlFor="">Name</label>
                    <input className="form-control" type="text" name="" id="" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Description</label>
                    <textarea
                      className="form-control"
                      name=""
                      id=""
                      cols="30"
                      rows="4"
                    ></textarea>
                  </div>
                </div> */}
              </div>
            </section>

            <div className="form-group">
              {/* <label htmlFor="">Price</label>
              <input className="form-control" type="text" name="" id="" /> */}
               <Input
                type="text"
                label="price"
                name="productPrice"
                value={productPrice}
                onChange={e => this.handleChange(e)}
                //error={this.state.errors.email}
              />
            </div>
            <div className="add-product__discount">
           
              <div className="form-group">
                {/* <label htmlFor="">Discount</label> */}
                {/* <input className="form-control" type="text" name="" id="" /> */}
                <Input
                type="text"
                label="Discount"
                name="productDiscount"
                value={productDiscount}
                onChange={e => this.handleChange(e)}
                //   error={this.state.errors.email}
                />
              </div>
            </div>
           
            <div className="form-group">
              <label htmlFor="">Category</label>
              <select className="form-control" name="categoryId">
                {this.props.types.map(item => (
                  <option key={item._id} value={item._id}>
                    {item.categoryName}
                  </option>
                ))}
              </select>
            </div>
       
        
            <div className="add-product__actions">
              <button href="#" className="btn btn--gray">
                {/* Cancel */}
                <Link className="btn btn--gray" to="/productlist">
                  Cancel
                  </Link>
              </button>
              <button type="submit"  className="btn btn--primary">Save</button>
            </div>
          </div>
        </div>
      </form>
    </div>
    </React.Fragment>
  );
  }
};

export default EditProduct;




// import React, { Component } from "react";
// import Joi from "joi-browser";
// import Input from "./input";
// import { Add } from "./services/products";
// import { GetAllTypes } from "./services/categories";
// import { Link } from "react-router-dom";
// class EditProduct extends Component {
//   constructor(props){
//     super(props);
//   this.state = {
    
//     product: {
//       productName: "",
//      productPrice: "",
//      productDiscount:"",
//       productDescription: "",
//       categoryId: "",
//      // userId: this.props.match.params.id
//     },
//     categories: [],
//     errors: {}
//   };
//   };
//   async componentDidMount(){
//     const categories = await GetAllTypes();
//     this.setState({ categories });
//   };
//   handleChange = async e => {
// //console.log(e.target.value);
//     let product = { ...this.state.product };
//      product[e.target.name] = e.target.value;
//     //  if(e.target.name=="categoryId"){
//     //   product[e.target.name] =Number(e.target.value);
//     //  }
//      console.log(product);
//      //product[e.target.description] = e.target.value;
//     // product[e.target.price] = e.target.value;
//     //product[e.target.id] = parseInt(e.target.key);
//     this.setState({ product });

//     // this.validateProperty(e.target);
//     //console.log(item);
//   };

//   handleSave = async (e) => {
//     e.preventDefault();
//     console.log("enter save function")
//     console.log(this.state.product);
//    const product={...this.state.product};
   
//     const data = await Add(product);
//     console.log(data);
//     //clone
  
//     const products = [...this.props.products];
//      products.push(data);
//      this.setState({ products });
//     this.props.history.push("/productlist");
//   };








//   schema = {
//     name: Joi.string()
//       .alphanum()
//       .min(3)
//       .max(30)
//       .required()
//       .label("Name")
//   };
//   // username = React.createRef();//ref
//   handleSubmit = e => {
//     // console.log(this.username.current.value);
//     e.preventDefault();
//     //validate
//     const errors = this.validate();
//     //error
//     if (errors) {
//       return;
//     } else {
//     }
//     //no error
//     //call backend server
//     console.log("register");
//   };


  
//   render() {
  
//     return (
//       <div className=" container">
//         <form
//           className="add-product"
//           // onSubmit={e => this.handleSave(e)}
//           action=""
//         >
//           <div className="add-product__images slider">
//             <div className="add-product__image-actions">
//               <div className="add-product__image-action">
//                 <a href="#">
//                   <i className="fas fa-plus-square"></i>
//                 </a>
//                 <a href="#">
//                   <i className="fas fa-edit"></i>
//                 </a>
//                 <a href="#">
//                   <i className="fas fa-trash-alt"></i>
//                 </a>
//               </div>
//             </div>
//             <div className="slider__items">
//               <div
//                 className="slider__item active"
//                 style={{
//                   backgroundImage: "url('img/products/product-grey-7.jpg')"
//                 }}
//               ></div>
//               <div
//                 className="slider__item"
//                 style={{
//                   backgroundImage: "url('img/products/product-grey-7.jpg')"
//                 }}
//               ></div>
//               <div
//                 className="slider__item"
//                 style={{
//                   backgroundImage: "url('img/products/product-grey-7.jpg')"
//                 }}
//               ></div>
//             </div>
//             <div className="slider__indicators">
//               <span className="slider__indicator active"></span>
//               <span className="slider__indicator"></span>
//               <span className="slider__indicator"></span>
//             </div>
//           </div>
//           <div className="add-product__data">
//             <div className="form-controls">
//               <section className="tabs">
//                 <div className="tabs__headers">
//                   <div className="tabs__header active">English</div>
//                   {/* <div className="tabs__header">Arabic</div> */}
//                 </div>
//                 <div className="tabs__bodies">
//                   <div className="tabs__body active">
//                     <div className="form-group ">
//                       <Input
//                         //type="text"
//                         label="Name"
//                         name="productName"
//                         value={this.state.product.productName}
//                         onChange={e => this.handleChange(e)}
//                         error={this.state.errors.productName}
//                       />
//                     </div>
//                     <div className="form-group">  
//                       <Input
//                       label="Description"
//                         name="productDescription"
//                         value={this.state.product.productDescription}
//                         onChange={e => this.handleChange(e)}
//                         error={this.state.errors.productDescription}
                      
//                       />
//                     </div>
//                   </div>
               
                  
//                 </div>
//               </section>

//               <div className="form-group">
//                 {/* <label htmlFor="">Price</label> */}
//                 <Input
//                   //type="text"
//                   label="Price"
//                   name="productPrice"
//                   value={this.state.product.productPrice}
//                   onChange={e => this.handleChange(e)}
//                   error={this.state.errors.productPrice}
//                 />
//               </div>
//               {/* <div className="add-product__discount"> */}
//               <div className="form-group">
//                 {/* <label htmlFor="">Price</label> */}
//                 <Input
//                   //type="text"
//                   label="Discount"
//                   name="productDiscount"
//                   value={this.state.product.productDiscount}
//                   onChange={e => this.handleChange(e)}
//                   error={this.state.errors.productDiscount}
//                 />
//               </div>
               
//               <div className="form-group">
//                 <label htmlFor="">Category</label>
            
//                 <select
//                   className="form-control"
//                   name="categoryId"
                  
//                   onChange={this.handleChange}
//                 >
//                   {this.state.categories.map(item => (
//                    <option key={item._id} value={item._id}>
//                       {item.categoryName}
//                     </option>
//                   ))}
//                 </select>
//               </div>

             
//               <div className="add-product__actions">
//                 <button href="#" className="btn btn--gray">
//                   Cancel
//                 </button>
//                 <button href="#" className="btn btn--primary">
//                   <Link onClick={this.handleSave} to="/productlist">
//                     Add
//                   </Link>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default EditProduct ;

////////////////////////////////////////////////////
// import React, { Component } from "react";
// import Joi from "joi-browser";
// import Input from "./input";
// const EditProduct = props => {
//   return (
//     <div className=" container">
//       <form
//         className="add-product"
//         onSubmit={e => this.handleSubmit(e)}
//         action=""
//       >
//         <div className="add-product__images slider">
//           <div className="add-product__image-actions">
//             <div className="add-product__image-action">
//               <a href="#">
//                 <i className="fas fa-plus-square"></i>
//               </a>
//               <a href="#">
//                 <i className="fas fa-edit"></i>
//               </a>
//               <a href="#">
//                 <i className="fas fa-trash-alt"></i>
//               </a>
//             </div>
//           </div>
//           <div className="slider__items">
//             <div
//               className="slider__item active"
//               style={{
//                 backgroundImage: "url('img/products/product-grey-7.jpg')"
//               }}
//             ></div>
//             <div
//               className="slider__item"
//               style={{
//                 backgroundImage: "url('img/products/product-grey-7.jpg')"
//               }}
//             ></div>
//             <div
//               className="slider__item"
//               style={{
//                 backgroundImage: "url('img/products/product-grey-7.jpg')"
//               }}
//             ></div>
//           </div>
//           <div className="slider__indicators">
//             <span className="slider__indicator active"></span>
//             <span className="slider__indicator"></span>
//             <span className="slider__indicator"></span>
//           </div>
//         </div>
//         <div className="add-product__data">
//           <div className="form-controls">
//             <section className="tabs">
//               <div className="tabs__headers">
//                 <div className="tabs__header active">English</div>
//                 <div className="tabs__header">Arabic</div>
//               </div>
//               <div className="tabs__bodies">
//                 <div className="tabs__body active">
//                   <div className="form-group ">
//                     <Input
//                       //type="text"
//                       label="Name"
//                       name="name"
//                       // value={this.state.product.name}
//                       onChange={e => this.handleChange(e)}
//                       // error={this.state.errors.name}
//                     />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="">Description</label>
//                     <textarea
//                       className="form-control"
//                       name=""
//                       id=""
//                       cols="30"
//                       rows="4"
//                     ></textarea>
//                   </div>
//                 </div>
//                 <div className="tabs__body ">
//                   <div className="form-group invalid">
//                     <label htmlFor="">Name</label>
//                     <input className="form-control" type="text" name="" id="" />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="">Description</label>
//                     <textarea
//                       className="form-control"
//                       name=""
//                       id=""
//                       cols="30"
//                       rows="4"
//                     ></textarea>
//                   </div>
//                 </div>
//               </div>
//             </section>

//             <div className="form-group">
//               <label htmlFor="">Price</label>
//               <input className="form-control" type="text" name="" id="" />
//             </div>
//             <div className="add-product__discount">
//               <div className="form-group">
//                 <label htmlFor="">Satus</label>
//                 <div className="form-group__radios">
//                   <div className="form-group__radio">
//                     <input type="radio" name="" id="" />
//                     <span>On Sale</span>
//                   </div>
//                   <div className="form-group__radio">
//                     <input type="radio" name="" id="" />
//                     <span>Not On Sale</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="form-group">
//                 <label htmlFor="">Discount</label>
//                 <input className="form-control" type="text" name="" id="" />
//               </div>
//             </div>
//             <div className="form-group">
//               <label htmlFor="">Payment Types</label>
//               <div className="form-group__checkboxs">
//                 <div className="form-group__checkbox">
//                   <input type="checkbox" name="" id="" />
//                   <span>Direct Bank Transfare</span>
//                 </div>
//                 <div className="form-group__checkbox">
//                   <input type="checkbox" name="" id="" />
//                   <span>Cheque Payment</span>
//                 </div>
//                 <div className="form-group__checkbox">
//                   <input type="checkbox" name="" id="" />
//                   <span>Paypal</span>
//                 </div>
//                 <div className="form-group__checkbox">
//                   <input type="checkbox" name="" id="" />
//                   <span>Visa</span>
//                 </div>
//                 <div className="form-group__checkbox">
//                   <input type="checkbox" name="" id="" />
//                   <span>Mastercard</span>
//                 </div>
//                 <div className="form-group__checkbox">
//                   <input type="checkbox" name="" id="" />
//                   <span>On Dilivery</span>
//                 </div>
//               </div>
//             </div>
//             <div className="form-group">
//               <label htmlFor="">Category</label>
//               {/* <select className="form-control" name="" id="">
//                       <option value="">Arts & Crafts</option>
//                       <option value="">Automotive</option>
//                       <option value="">Baby</option>
//                       <option value="">Books</option>
//                       <option value="">Eletronics</option>
//                       <option value="">Women's Fashion</option>
//                       <option value="">Men's Fashion</option>
//                       <option value="">Health & Household</option>
//                       <option value="">Home & Kitchen</option>
//                       <option value="">Military Accessories</option>
//                       <option value="">Movies & Television</option>
//                       <option value="">Sports & Outdoors</option>
//                       <option value="">Tools & Home Improvement</option>
//                       <option value="">Toys & Games</option>
//                     </select> */}
//               <select className="form-control" name="typeId">
//                 {props.types.map(item => (
//                   <option key={item.id} value={item.id}>
//                     {item.name}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div className="taged-textbox form-group">
//               <label className="taged-textbox__lable" htmlFor="">
//                 Tags
//               </label>
//               <div className="taged-textbox__data">
//                 <div className="taged-textbox__tags">
//                   <div className="taged-textbox__tag">
//                     <span>tag1</span>
//                     <a href="#" className="taged-textbox__remove">
//                       <i className="fas fa-times"></i>
//                     </a>
//                   </div>
//                   <div className="taged-textbox__tag">
//                     <span>tag2</span>
//                     <a href="#" className="taged-textbox__remove">
//                       <i className="fas fa-times"></i>
//                     </a>
//                   </div>
//                   <div className="taged-textbox__tag">
//                     <span>tag3</span>
//                     <a href="#" className="taged-textbox__remove">
//                       <i className="fas fa-times"></i>
//                     </a>
//                   </div>
//                   <div className="taged-textbox__tag">
//                     <span>tag4</span>
//                     <a href="#" className="taged-textbox__remove">
//                       <i className="fas fa-times"></i>
//                     </a>
//                   </div>
//                   <div className="taged-textbox__tag">
//                     <span>tag5</span>
//                     <a href="#" className="taged-textbox__remove">
//                       <i className="fas fa-times"></i>
//                     </a>
//                   </div>
//                   <div className="taged-textbox__tag">
//                     <span>tag6</span>
//                     <a href="#" className="taged-textbox__remove">
//                       <i className="fas fa-times"></i>
//                     </a>
//                   </div>
//                   <div className="taged-textbox__tag">
//                     <span>tag7</span>
//                     <a href="#" className="taged-textbox__remove">
//                       <i className="fas fa-times"></i>
//                     </a>
//                   </div>
//                   <div className="taged-textbox__tag">
//                     <span>tag8</span>
//                     <a href="#" className="taged-textbox__remove">
//                       <i className="fas fa-times"></i>
//                     </a>
//                   </div>
//                   <div className="taged-textbox__tag">
//                     <span>tag9</span>
//                     <a href="#" className="taged-textbox__remove">
//                       <i className="fas fa-times"></i>
//                     </a>
//                   </div>
//                   <div className="taged-textbox__tag">
//                     <span>tag10</span>
//                     <a className="taged-textbox__remove">
//                       <i className="fas fa-times"></i>
//                     </a>
//                   </div>
//                 </div>
//                 <div className="taged-textbox__clear">
//                   <a href="#">
//                     <i className="fas fa-times"></i>
//                   </a>
//                 </div>
//               </div>
//               <input
//                 className="taged-textbox__textbox form-control"
//                 type="text"
//                 name=""
//                 id=""
//               />
//             </div>
//             <div className="add-product__actions">
//               <button href="#" className="btn btn--gray">
//                 Cancel
//               </button>
//               <button className="btn btn--primary">Save</button>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default EditProduct;
