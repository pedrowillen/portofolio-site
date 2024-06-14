import { SkillsSectionContainer } from "./styles";

const Card = ({ cardTitle, cardDescription, imageCard, altText, children }) => {
    return (
        <li className="card">
            <div className="card-img">
                <img src={ imageCard } alt={ altText } />
            </div>
            <h3 className="card-title">
                { cardTitle }
            </h3>
            <p className="card-p">
                { cardDescription }
            </p>
            <div className="card-img-icon">
                {/* Example:
                <img src="images/typescript-icon.svg" alt="Typescript icon" />
                <img src="images/js-icon.svg" alt="Javascript icon" /> 
                */}
                { children }
            </div>
        </li>
    );
}

export default Card;