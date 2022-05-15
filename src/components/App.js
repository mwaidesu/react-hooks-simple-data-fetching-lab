// create your App component here
import React, { useState, useEffect } from 'react'

const App = () => {
  const [dogPic, setDogPic] = useState(null);

  useEffect(()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogPic(data.message);
      });
  }, []);

  if(!dogPic) return <p>Loading...</p>
  return (
    <div>
      <img src={dogPic} alt="A Random Dog" />;
    </div>
  )
}

export default App