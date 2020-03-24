import React from 'react';

const List = ({items}) => (
  <div className="container" >
    {
     items && items.map((item, index) => 
     <div className="row has-text-centered" style={{flex: 1, justify: 'center', color: 'white'}}>
     <hr style={{backgroundColor: '#fc85ae'}}/>
      <input type="checkbox"/> {item}
     </div>)
    }
  </div>
  );

export default List;