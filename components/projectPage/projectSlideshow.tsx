import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

export default function ProjectSlideShow({ images, slug }: any) {
  return (
    <div className="flex items-center justify-center w-full my-5">
      <Carousel className="w-[calc(90vw)] md:w-[calc(70vw)] lg:w-[calc(50vw)]">
        {images.map((image: any) => {
          console.log('IMAGE: ', image)
          return (
            <div key={image}>
              <img src={`/slideshows/${slug}/` + image} alt="image" />
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}
