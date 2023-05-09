import './CSS/Stars.css'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

const Stars = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    )
  })

  return (
    <div className="stars-container">
      <div className="stars">{tempStars}</div>
      <p className="reviews">({reviews} customer reviews)</p>
    </div>
    // Manual approach
    // <div className="stars-container">
    //   <div className="stars">
    //     {/* star */}
    //     <span>
    //       {stars >= 1 ? (
    //         <BsStarFill />
    //       ) : stars >= 0.5 ? (
    //         <BsStarHalf />
    //       ) : (
    //         <BsStar />
    //       )}
    //       {/* end of star */}
    //     </span>

    //     <span>
    //       {stars >= 2 ? (
    //         <BsStarFill />
    //       ) : stars >= 1.5 ? (
    //         <BsStarHalf />
    //       ) : (
    //         <BsStar />
    //       )}
    //       {/* end of star */}
    //     </span>

    //     <span>
    //       {stars >= 3 ? (
    //         <BsStarFill />
    //       ) : stars >= 2.5 ? (
    //         <BsStarHalf />
    //       ) : (
    //         <BsStar />
    //       )}
    //       {/* end of star */}
    //     </span>

    //     <span>
    //       {stars >= 4 ? (
    //         <BsStarFill />
    //       ) : stars >= 3.5 ? (
    //         <BsStarHalf />
    //       ) : (
    //         <BsStar />
    //       )}
    //       {/* end of star */}
    //     </span>

    //     <span>
    //       {stars >= 5 ? (
    //         <BsStarFill />
    //       ) : stars >= 4.5 ? (
    //         <BsStarHalf />
    //       ) : (
    //         <BsStar />
    //       )}
    //       {/* end of star */}
    //     </span>
    //   </div>
    //   <p className="reviews">({reviews} customer reviews)</p>
    // </div>
  )
}

export default Stars
