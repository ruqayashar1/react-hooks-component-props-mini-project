import React from "react";
import blogData from "../data/blog";
import Header1 from "./Header1";
import About from "./About";
import ArticleList from "./ArticleList";
console.log(blogData);


function App() {
  return (
    <div className="App">
      <About data={blogData}/>
      <h1>Overreacted </h1>
     
      <Header1 data = {blogData}/>
      <ArticleList dataList = {blogData}/>
    
    </div>
  );
}

export default App;
