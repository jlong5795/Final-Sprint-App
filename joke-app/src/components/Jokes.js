import React from "react";

const Jokes = (props) => {



  return (
    <div>
      <h1>Dees Just Jokes!</h1>
        {props.jokes.map(each => {
            return<p key={each.id}>{each.joke}</p>
        })}
    
    
    </div>
  );
};

export default Jokes;


