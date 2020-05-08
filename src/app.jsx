import React, { Component } from "react";
import _ from "lodash";
import Header from "./header";
import DetailsProduct from "./detailsprodouct";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./login";
import AddProduct from "./addproduct";
import EditProduct from "./editproduct";
import Home from "./productslist";
import ContactUs from "./contactUs";
import About from "./about";
import NotFound from "./not-found";
import { GetAllTypes } from "./services/categories";
import { GetAll, Delete ,SearchByProductName} from "./services/products";
import Register from "./register";
class App extends Component {
  state = {
    products: [],
    users: [],
    pageSize: 6,
    currentPage: 1,
    filter: [],
    currentType: "0",
    query: "",

    contentPage: [2, 3]
    // product: {
    //   name: "",
    //   description: "",
    //   price: "",
    //   typeId: ""
    // }
  };
  async componentDidMount() {
    const data = await GetAll();
   // items[Math.floor(Math.random() * items.length)];
    const all = { _id: "0", categoryName: "All" };
    let filter = await GetAllTypes();
    const newFilter = [all, ...filter];
    console.log("categories");
    console.log(newFilter);
    this.setState({ products: data, filter: newFilter });

    //console.log(this.state.products);
  }
  handleChangePage = page => {
    console.log(page);
    this.setState({ currentPage: page });
  };
  handleFilter = id => {
    this.setState({ currentType: id, currentPage: 1 });
    //console.log(id);
  };
  handleChangeSearch=async(e)=>{
    console.log("search");
    console.log(e.target.value);
    const searchProductName=e.target.value;
    this.setState({query:searchProductName});
  }
  handleSearch = async(e)=> {
    //debugger;
    if(this.state.query!==""){
      const ProductName=this.state.query;
      const data = await SearchByProductName(ProductName);
      console.log(data);
     
       this.setState({ products:data });
    }
    else{
      const data = await GetAll();
      console.log(data);
     
       this.setState({ products:data });
    }
    // console.log(this.state.query);
    // const productsbefore = [...this.state.products];
   
   
  };

  handleDelete = item => {
    //back end
    console.log(item)
         Delete(item._id);
    //clone
    let products = [...this.state.products];
    //edit
    products = products.filter(i => i._id !== item._id);
    //setState
    this.setState({ products });
  };
  // handleUpdate = (item) => {
  //   //back end
  //   console.log("enter to update");
  //   console.log(item)
   // Update(item);
    //clone
    //let products = [...this.state.products];
    //edit
    // products = products.filter(i => i._id !== item._id);
    //setState
   // this.setState({ products });
  //};
  render() {
    let {
      products,
      pageSize,
      currentPage,
      filter,
      currentType,
      users
    } = this.state;
    console.log(products);
    let filteredProduct = products;
    if (currentType == "0") {
      filteredProduct = products
    } else {
     
      filteredProduct = products.filter(product => product.categoryId == currentType)
        //let mm=product.categoryId;
       // console.log("productcategoryId",product.categoryId );
       // console.log(currentType);
        //if(
        
         // )
       // return product;
      }
       
      
     
    
    
    let searchedProduct=filteredProduct ;
   // debugger;
    // if (this.state.query !== "") {
    //   searchedProduct =  filteredProduct.filter(e =>
    //     e.ProductName==this.state.query
    //   );
    // }
   
    //pagination
    console.log(searchedProduct);
    const startIndex = (currentPage - 1) * pageSize;
    let contentPage = _(searchedProduct)
      .slice(startIndex)
      .take(pageSize)
      .value();
 
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/about" render={props => <About {...props}></About>} />
          <Route path="/contactus" component={ContactUs} />
          <Route
            path="/addproduct"
            render={props => <AddProduct {...props} products={products} />}
          />
          <Route
            path="/editproduct/:id?"
            render={props => <EditProduct {...props} types={filter} products={products} />}
          />
          <Route path="/login" component={Login} />
          <Route
            path="/register"
            render={props => <Register {...props} users={users} />}
          />
          <Route
            path="/detailsproduct/:id?"
            render={props => <DetailsProduct {...props} />}
          />
          <Route
            path="/productlist"
            render={() => (
              <Home
                count={searchedProduct.length}
                pageSize={pageSize}
                currentPage={currentPage}
                onChange={this.handleChangePage}
                contentPage={contentPage}
                products={products}
                filter={filter}
                currentType={currentType}
                onFilter={this.handleFilter}
                onSearch={this.handleSearch}
                ONhandleChangeSearch={this.handleChangeSearch}
                onDelete={this.handleDelete}
                // onUpdate={this.handleUpdate} 
              />
            )}
          />
          <Route path="/notfound" component={NotFound}></Route>
          {/* <Route path="/home" exact component={Home} /> */}
          {/*exact or switch  */}
          <Redirect from="/home" to="/productlist"></Redirect>
          <Redirect from="/" to="/productlist"></Redirect>
          <Redirect to="/notfound" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
