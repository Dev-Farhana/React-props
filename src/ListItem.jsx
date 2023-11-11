import React from 'react';

const ListItem = (props) => {
  return (
    <>
    
   <ul>
    {props.animals.map((animal =>{
        //   return animal.startsWith("L") ? <li key={animal}>{animal}</li> : null;
          return animal.startsWith("M") ? <li key={animal}>  {animal} </li> : undefined;
        }))};
   </ul>
   <ul>
    {props.animals.map((animal => {
        return animal.startsWith("C") && <li key={animal}> {animal} </li>
    }))}
   </ul>
   </>
  )
}

export default ListItem;