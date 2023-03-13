import Image1 from '../../assets/image1.png'
import Image2 from '../../assets/image2.png'
import Image3 from '../../assets/image3.png'
import Image4 from '../../assets/image4.png'
import Image5 from '../../assets/image5.png'
import Image6 from '../../assets/image6.png'
import { ScrollXImages } from '../../components/scroll-x-images/ScrollXImages'

function OurClasses(){

  return(
    <article className="bg-primary-100 py-24 w-full mb-8">

      <section className='px-12 mb-4'>
        <h3 className="font-bold text-3xl mb-4">NOSSAS TURMAS</h3>

        <p className="text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, accusamus possimus porro animi ut eveniet asperiores earum soluta consequuntur maxime velit qui culpa cum quasi natus doloremque accusantium tenetur nemo!</p>
      </section>


      <ScrollXImages 
        images={[
          {
           image: Image1,
           alt: "alt aleatório",
          },
          {
            image: Image2,
            alt: "alt aleatório",
           },
           {
            image: Image3,
            alt: "alt aleatório",
           },
           {
            image: Image4,
            alt: "alt aleatório",
           },
           {
            image: Image5,
            alt: "alt aleatório",
           },
           {
            image: Image6,
            alt: "alt aleatório",
           }
         ]} 
        />

    </article>  
  )
}

export { OurClasses }