import { useState } from 'react';

const Home = () => {
   const [name,setName] = useState('mario');
    const [age,setAge] = useState(43);
        const handleClick = () =>{
            setName('girumance');
            setAge(465);
        }
        
    
    return ( 
         <div className="home">
             <h2>Homepage</h2>
             <p>{name} is {age} years old</p>
             <button onClick={handleClick}>click me</button>
            
         </div>   

     );
}
 
export default Home;