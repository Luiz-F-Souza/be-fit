

interface ScrollXImagesProps {

 images: { 
  image: string,
  alt: string,
  hover?: {
    title: string,
    description: string
    }
  }[]
}

function ScrollXImages({images}: ScrollXImagesProps){

  

  return(
    <section className="overflow-x-auto flex gap-5 px-12">

      {
        images.map((image, index) => {

          const {alt, image: imageSrc} = image

          return(
            <div key={`image_our_classes_${index}`} className="">
              
              <img src={imageSrc} alt={alt} className="max-w-none w-[300px] sm:w-[650px] rounded-md" />

            </div>
          )
        })
      }
    </section>
  )
}

export { ScrollXImages }