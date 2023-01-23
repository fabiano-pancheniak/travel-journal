import path from './path.png';
import data from './data.js'
import Card from './Card';


export default function Journal(){
    const cards = data.map(item => {
        return (
            <Card 
                key={item.imageUrl}
                item={item}
            />
        )
    })


    return (
        <div className='container'>
        <header>
          <img src={path} alt=""/>        
          <p>my travel journal.</p>
        </header>
        {cards}
      </div>
    )



}