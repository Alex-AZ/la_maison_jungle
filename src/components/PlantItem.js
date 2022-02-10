import CareScale from "./CareScale";
import '../styles/PlantItem.css';

function PlantItem({ id, cover, name, water, light }) {
    return(
        <li key={id} className='img-palnt-item'>
            <img className="lmj-palnt-item-cover" src={cover} alt={`${name} cover`} />
            {name}
            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
        </li>
    )
    
}

export default PlantItem