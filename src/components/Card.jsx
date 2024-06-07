import PropTypes from 'prop-types'
const Card = ({title, poster, year}) => {
  return (
    <div className="mt-20 md:mt-30 flex flex-col gap-2 text-white max-w-[200px] justify-center items-center">
      
      <img src={poster !== "N/A" ? poster : "https://via.placeholder.com/400"} alt={title}/>
      <p className="text-center text-xl font-bold">{year}</p>  
      <p className="font-bold text-center text-zinc-300">{title}</p>    
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  poster: PropTypes.string,
  year: PropTypes.string
}

export default Card
