import emptyStar from '../../assets/emptyStar.png';
import fullStar from '../../assets/fullStar.png';

const Rating = ({ rating }) => {

    return (
        <div className = "rating">
            {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                
                    <img key={index} src={ratingValue <= rating ? fullStar : emptyStar} alt="star" />
                )
            })}
        </div>
    )
}

export default Rating;