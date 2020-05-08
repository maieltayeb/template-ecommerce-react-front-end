import React, { Component } from "react";
import { Link } from "react-router-dom";

import Card from "./card";
import Pagination from "./pagination";
import Filter from "./filter";
import Search from "./search";
import {GetAll} from "./services/products";

class Home extends Component {
  constructor(props){
    super(props)
  this.state = {
      data: [],
  }
};

  // async  componentDidMount(){
  //   const data = await GetAll();
  //   this.setState({data});
  //   console.log(data)
  // }
  render() {
   // console.log(this.props.data)
    return (
      <div className="container">
        {/* <!-- filters --> */}
        <section className="filters">
          {/* <!-- search box --> */}
          <Search onSearch={this.props.onSearch} onChange={this.props.ONhandleChangeSearch}/>
       
          {/* <!-- filter list --> */}
          <div>
            {/* <!-- filter header --> */}
            <h5>Categories</h5>
            {/* <!-- filter list --> */}
            
            <Filter
              filter={this.props.filter}
              currentType={this.props.currentType}
              onFilter={this.props.onFilter}
            />
         </div>
        </section>
        {/* <!-- Items --> */}
        <section className="item-listing">
          {/* <!-- tools (sorting , change view , exporting) --> */}
          <div className="item-listing__tools">
            <select className="form-control" name="" id="">
              <option value="1">Featured</option>
              <option value="2">Price low to high</option>
              <option value="3">Price high to low</option>
              <option value="4">Name</option>
            </select>
            <Link className="action-btn" to="/addproduct" onClick={this.handlClickAdd}>
              <i className="fas fa-plus"></i>
            </Link>
          </div>


          {/* <!-- items --> */}
          <div className="item-listing__items item-listing--3items">
            {/* <!-- medium item --> */}
            {this.props.contentPage.map(product => (
              <Card
                key={product.id}
                onDelete={this.props.onDelete}
              
                product={product}
              />
            ))}
            
          </div>


          {/* <!-- paging --> */}
          {/* <div className="paging"> */}
          {this.props.pageSize < this.props.count && (
            <Pagination
              count={this.props.count}
              pageSize={this.props.pageSize}
              currentPage={this.props.currentPage}
              onChange={this.props.onChange}
            ></Pagination>
          )}
         
        </section>
      </div>
    );
  }
}

export default Home;
