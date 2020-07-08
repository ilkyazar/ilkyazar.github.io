import React from "react";
import {
    useRouteMatch,
  } from "react-router-dom";
  
var Blog = function () {

    let match = useRouteMatch();

    return (
    <div>
        <h2>Blog</h2>
    </div>
    );
}


export default Blog;