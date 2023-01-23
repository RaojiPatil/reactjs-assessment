import { React, useState } from "react";
import { v4 as uuid } from "uuid";
import List from "./ReviewList";
import "./Review.css"

const Input = () => {
  let obj = {};
  const [data, setData] = useState(obj);
  const [array, setArray] = useState([]);
  const handleChange = (e) => {
    //console.log(e.target)

    const { name, value } = e.target;
    let payload = {
      ...data,
      [name]: value
    };
    setData(payload);
  };

  const handletoggle = (id) => {
    const updated = array.map((el) =>
      el.id === id ? { ...el, status: !el.status } : el
    );
    setArray(updated);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let payload = [
      ...array,
      {
        id: uuid(),
        title: data.title,
        rating: data.rating,
        description: data.description,
      }
    ];
    setArray(payload);
  };

  const handleReset = (e) => {
    e.preventDefault();
    let payload = [
      ...array,
      {
        id: uuid(),
        title:'',
        rating: '',
        description: ''
      }
    ];
    setArray(payload);
  };

  const deletitems =(id) => {
    setData((olditems) => {
   return olditems.filter((arrElement, index) => {
       return index !== id;
   })
    })
  }

  return (
    <div>
      <form>
      <div className="main-div">
            <div className="max-w-lg">
            <h1 className="text-center text-xl font-bold text-black">Review-App</h1>
            <br />
                <div>
                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add a Title</label>
                    <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="title" placeholder="Add a Title" value={data.title}  onChange={handleChange} required/>
                </div>
                <div>
                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rating</label>
                    <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="rating" placeholder="Rating" value={data.rating} onChange={handleChange} required />
                </div>
                <div>
                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                    <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="description" placeholder="Description" value={data.description} onChange={handleChange} />
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2" onClick={handleSubmit}>Submit</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2 mx-2" onSubmit={handleReset}>Reset</button>
            </div>
        </div>
      </form>

      {array.map((el, index) => (
            <div  className="output-div my-3">
        <List {...el}
            key = {index} 
            id= {index}
            itemss = {el}
            handletoggle={handletoggle}  
            onSelect = {deletitems} 
            />
        </div>
      ))}

    </div>
  );
};
export default Input;