import location from './location.gif';

export default function Card(props){

    return (
        <div className='card'>
                <img src={props.item.imageUrl}/>
                <div className='about'>
                    <div className='about__country'> 
                        <img src={location}/>
                        <p className='about__country__country-name'>{props.item.location}</p>
                        <a className='about__country__maps-link' href={props.item.googleMapsUrl}>View on google maps</a>
                    </div>

                    <h2>{props.item.title}</h2>

                    <p className='travel-date'> {props.item.startDate} - {props.item.endDate} </p>
                    <p className='description'> {props.item.description} </p>
                </div>
        </div>
    )
}