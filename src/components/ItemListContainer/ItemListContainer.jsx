import React, {useState, useEffect} from 'react'; //desestructuro
import Item from '../Item/Item';


function ItemListContainer() {
    const [users, setUsers] = useState([]) // array vacio

    useEffect(()=>{

        fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=8')
            .then(response => response.json())
            //.then(json => console.log(json))
            .then(json => setUsers(json))
    },[])

  return <div className='portaCard'>
      {users.map((user, idx) => {
          return(
              <div key={idx + 1}>
                <Item data={user} />
            </div>
          )
        }
      )}
  </div>;
}

export default ItemListContainer;
