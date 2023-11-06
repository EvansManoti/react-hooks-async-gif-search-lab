import React from "react";

 function GifList({ data }) {
  if (!data) {
    alert('Error fetching data');
    return null; 
  }

  if (data.length === 0) {
    alert('No GIFs found');
    return null; 
  }

  return (
    <div>
      <ul>
        {data.map((gif, index) => (
          <li key={index}>
            <img src={gif.images.original.url} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default GifList