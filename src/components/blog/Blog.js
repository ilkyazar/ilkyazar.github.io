import React from "react";
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
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