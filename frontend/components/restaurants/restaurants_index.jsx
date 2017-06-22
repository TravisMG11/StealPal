import React from "react";
import PostIndexItem from "./PostIndexItem";
import {PostForm} from "../PostForm";

class PostIndex extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const restaurants = this.props.restaurants.map(restaurant => {
      return <PostIndexItem key={restaurant.id} restaurant={ restaurant } deletePost={this.props.deletePost}/>;
    });
    return (
      <div className="indexDiv">
        <h1 className="indexTitle">Restaurants</h1>
        <div className="indexPage">
          <div className="restaurants">
            <ul>{restaurants}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default PostIndex;
