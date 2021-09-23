import React, {useState} from 'react';
import './App.css';

type PropsType = {
    name: string;
    car: string;
}

function Cards(props: PropsType) {
    const [classes, setClasses] = useState<boolean>(false)
    const handleChange = () => {
        setClasses(!classes)
    }
    return (
            <div onClick={handleChange} className={classes ? 'slide active' : 'slide'}
                 style={{backgroundImage: `url(${props.car})`}}>
                <h3>{props.name}</h3>
            </div>
    );
}

export default Cards;
