import { Btn } from '../../components/btn/Btn'
import HomePageImage from '../../assets/HomePageText.png'
import HomePageBackImage from '../../assets/EvolveText.png'
import HomePageGraphic from '../../assets/HomePageGraphic.png'
import SponsorRedBull from '../../assets/SponsorRedBull.png'
import SponsorForbes from '../../assets/SponsorForbes.png'
import SponsorFortune from '../../assets/SponsorFortune.png'



function Home(){

  return(
    <article id="home" >
      
      <div className='flex flex-col sm:flex-row items-center w-full  justify-center h-full pb-12 px-12 '>
        <section>

          <header className='relative mb-8'>
            <img src={HomePageBackImage} alt='EvoGym backLogo'  className='absolute -z-10 -top-20 left-2 hidden md:block'/>
            <img src={HomePageImage} alt='EvoGym logo' className='z-50' />
          </header>

          <div className='px-1'>
            <p className='text-sm  pb-4'>
              Unrivaled Gym. Unparalleled Training Fitness Classes.
              World Class Studios to get the Body Shapes That you Dream of..
              Get Your Dream Body Now.
            </p>

            <section className=''>
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
            </section>
          </div>

        </section>

        <section className=''>

          <img src={HomePageGraphic} alt="mulher com roupa de academia e bem treinada."  className='w-5/6'/>
        </section>
      </div>

      <section className='gap-6 py-6 px-12 hidden sm:flex bg-primary-100'>
        <img src={SponsorRedBull} alt='logo patrocinador: RedBull'/>
        <img src={SponsorForbes} alt='logo patrocinador: Forbes'/>
        <img src={SponsorFortune} alt='logo patrocinador: Fortune'/>
      </section>
    </article>
  )
}

export { Home }