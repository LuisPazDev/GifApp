import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GiftGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category );

  return(
    <>
      <h3>{ category }</h3>
      {
        isLoading && ( <h2> Loading . . . . </h2>)
      }
      <div>
        {
          images.map(( img ) =>(
            <GifItem
                key={img.id}
                { ...img}
            /> 
          ))
        }
      </div>
    </>
  )
};