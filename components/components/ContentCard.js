import Image from 'next/image';

import CardStyles from '../styles/ContentCard.module.css';


export default function ContentCard(props) {

    return(
        <div className={ CardStyles.cardWrapper }>
            <div className={ CardStyles.imgWrapper }>
                <img src={props.image} className={ CardStyles.cardImg } />
            </div>
            <div className={ CardStyles.cardBody }>
                <h4>
                    {props.title}
                </h4>
                <p>
                    {props.body}
                </p>
            </div>
        </div>
    )
}