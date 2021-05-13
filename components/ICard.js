import ICardStyles from "../styles/ICardStyles.module.css";

export default function ICard(props) {

    return (
        <div className={ICardStyles.card}>
            <div className={ICardStyles.imgWrapper}>
                <img src={props.image} />
            </div>
            <h5>{props.title}</h5>
        </div>
    )

}