import React from "react";
const List = ({ id, title, rating, description, props }) => {
  return (
    <div>
        <h1 className="font-bold">Review</h1>
      <h1>Title: {title}</h1>
      <p>Description: {description}</p>
      <p>Rating: {rating}</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded my-1" onClick={() => {props.onSelect(props.id) }}>Delete</button>
    </div>
  );
};
export default List;
