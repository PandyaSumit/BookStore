import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function singleBook() {
  const [data, setData] = useState([]);
  const urlSlug = useParams();
  const baseUrl = `http://localhost:8001/api/books/${urlSlug.slug}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseUrl);

        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  function StarRating({ numberOfStars} ) {
    const stars = [];

    for(let i = 0; i < numberOfStars; i++ ) {
      stars.push(<span key={i}>⭐</span>)
    }

    return <div>Rating: {stars}</div>
  }

  return (
    <div>
     
     <Link 
  to="/books" 
  style={{ 
    display: "inline-flex", 
    alignItems: "center", 
    padding: "10px 20px", 
    fontSize: "14px", 
    backgroundColor: "#2d3748", // White background
    color: "#ffffff", // Gray text (text-gray-900)
    textDecoration: "none", 
    borderRadius: "8px", // Rounded corners (rounded-lg)
    border: "1px solid #d1d5db", // Gray border (border-gray-300)
    fontWeight: "500", 
    transition: "background-color 0.3s, transform 0.3s ease-in-out, box-shadow 0.3s", 
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", 
    letterSpacing: "0.5px", 
    cursor: "pointer", 
    margin: "0 5px 10px 0", // Adjusting margin for spacing
  }}
 
>
   Back
</Link>



    <div className="bookdetails">
      <div className="col-1">
        <img src={`http://localhost:8001/uploads/${data?.thumbnail}`}
        alt={data?.title} />
        <Link to={`/editbook/${data.slug}`}>Edit</Link>
      </div>

      <div className="col-2">
        <h1>{data?.title}</h1>
        <p>{data?.description}</p>
        <StarRating numberOfStars={data?.stars} />

        <p>Category</p>
        <ul>
          {data?.category?.map((item, index)=> (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

    </div>
    </div>
  );
}

export default singleBook;