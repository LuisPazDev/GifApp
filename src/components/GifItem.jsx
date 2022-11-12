export const GifItem = ({ url, title }) => {
  return(

    <div className="card">
      <p className="card-title">{ title }</p>
      <img className="card-img" src={ url } alt={ title } />
    </div>

  )
}