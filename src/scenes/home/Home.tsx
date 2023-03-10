import { Btn } from '../../components/btn/Btn'
import HomePageImage from '../../assets/HomePageText.png'
import HomePageBackImage from '../../assets/EvolveText.png'
import HomePageGraphic from '../../assets/HomePageGraphic.png'
import SponsorRedBull from '../../assets/SponsorRedBull.png'
import SponsorForbes from '../../assets/SponsorForbes.png'
import SponsorFortune from '../../assets/SponsorFortune.png'
import { motion } from 'framer-motion'
import { Sponsors } from '../../components/Sponsors/Sponsors'



function Home(){

  return(
    <article id="home" >
      
      <div className='flex flex-col sm:flex-row items-center w-full  justify-center h-full pb-12 px-12 '>
        
        <motion.section 
          className=' sm:w-2/4' 
          initial="hidden" 
          whileInView='visible' 
          viewport={{ once: true, amount:0.5 }} 
          transition={{ duration: 0.75 }} 
          variants={{ 
            hidden: { opacity: 0, x: -50 }, 
            visible: {opacity: 1, x: 0}}
            }
        >

          <header className='relative mb-8'>
            <img src={HomePageBackImage} alt='EvoGym backLogo'  className='absolute -z-10 -top-20 left-2 hidden md:block'/>
            <img src={HomePageImage} alt='EvoGym logo' className='z-50' />
          </header>

          <div className='px-1'>
            <p className='text-sm  pb-4'>
              Conquiste o corpo dos seus sonhos na Unrivaled Gym. Treinamento incomparável, aulas de fitness e estúdios de classe mundial. Comece agora!
            </p>

            <motion.section className=''
              initial="hidden" 
              whileInView='visible' 
              viewport={{ once: true, amount:0.5 }} 
              transition={{ duration: 1.25 }} 
              variants={{ 
                hidden: { opacity: 0, x: -50 }, 
                visible: {opacity: 1, x: 0}}
                }
            >
                <Btn
                  label='Faça parte'
                  onClick={()=> console.log('saiba mais btn')}
                  style={{
                    color:'bg-seccondary-500',
                    border:'rounded-md',
                    hoverEffect: 'hover:cursor-pointer',
                    px:'px-2',
                    py:'py-2',
                    textColor: 'text-white'
                  }}
                />

                <Btn
                  label='Saiba mais'
                  onClick={()=> console.log('saiba mais btn')}
                  style={{
                    color:'none',
                    border:'rounded-none',
                    hoverEffect: 'hover:cursor-pointer',
                    px:'px-2',
                    py:'py-2',
                    textColor: ''
                  }}
                />
            </motion.section>
          </div>

        </motion.section>

        <section className='flex justify-center'>

          <img src={HomePageGraphic} alt="mulher com roupa de academia e bem treinada."  className='w-5/6'/>
        </section>
      </div>
      
      {/* SECTION */}
      <Sponsors 
        imgDimensions={80} 
        sectionStyle="gap-8 py-6 px-12 hidden sm:flex bg-primary-100" 
        sponsors={
          [
            {imgSrc: SponsorRedBull, SponsorName: "RedBull"},
            {imgSrc: SponsorForbes, SponsorName: "Forbes"},
            {imgSrc: SponsorFortune, SponsorName: "Fortune"}
          ]
        }
      />
    </article>
  )
}

export { Home }