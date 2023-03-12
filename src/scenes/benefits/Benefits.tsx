import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { Btn, BtnProps } from "../../components/btn/Btn"
import { IconCards } from "../../components/icon-cards/IconCards"
import { motion } from "framer-motion"
import BenefitsImg from '../../assets/BenefitsPageGraphic.png'


const iconSize = 52
const iconsClass = "bg-primary-100 p-3 rounded-full border-stone-300 border-solid border-2 mb-4"
       
const btnStyleProp = {
  color:'none',
  border:"rounded-none",
  hoverEffect:"hover:text-primary-300 hover:cursor-pointer",
  px:"px-0",
  py:"py-2",
  textColor:'text-primary-500',
  textDecoration: 'underline'
} as BtnProps["style"]

const cardsForIconCards =  [
  {
    icon: <HomeModernIcon width={iconSize}  height={iconSize} className={iconsClass}/>, 
    title: 'State of the Art Facilities', 
    body: 'Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.',
    actionBtn: 
      <Btn 
        label="Saiba mais"
        onClick={() => console.log('btn saiba mais icon benefits')}
        style={btnStyleProp}
      />
  },

  {
    icon: <UserGroupIcon width={iconSize}  height={iconSize} className={iconsClass} />, 
    title: "100's of Diverse Classes", 
    body: 'Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.',
    actionBtn: 
      <Btn 
        label="Saiba mais"
        onClick={() => console.log('btn saiba mais icon benefits')}
        style={btnStyleProp}
      />
  },

  {
    icon: <AcademicCapIcon width={iconSize}  height={iconSize} className={iconsClass} />, 
    title: 'Expert and Pro Trainers', 
    body: 'Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.',
    actionBtn: 
      <Btn 
        label="Saiba mais"
        onClick={() => console.log('btn saiba mais icon benefits')}
        style={btnStyleProp}
      />
  }
]

function Benefits(){



  return(
    <article id="benefits" className="px-12">

      <motion.header className="sm:w-3/4 md:w-2/4 mb-8" initial="hidden" whileInView="visible" variants={{ hidden: {x: -50, opacity:0}, visible: {x:0, opacity:1}}} transition={{duration: .75}} viewport={{once: true}}>
        <h3 className="font-bold text-3xl mb-4">MAIS QUE UMA ACADEMIA</h3>

        <p className="text-sm">Na Evogym, você encontra equipamentos, treinadores e cuidado de classe mundial para alcançar seus objetivos de fitness de forma fácil e eficaz. Junte-se a nós hoje!</p>
      </motion.header>

      <IconCards cards={cardsForIconCards} containerStyle="mb-16 bg-white"/>

      <section className="flex flex-col sm:flex-row">

        <div className="sm:w-2/4">
          <img src={BenefitsImg} alt="Mulher com corpo atlético"/>
        </div>

        <div className="relative sm:w-2/4 m-auto">
          <motion.h3 initial="hidden" whileInView="visible" variants={{hidden:{x:100, opacity:0}, visible:{x:0, opacity:1}}} transition={{duration:.75}} viewport={{once:true,amount:0.5}} className="font-bold text-3xl before:content-abstractwaves before:absolute before:-top-14 sm:before:-top-20 before:-left-10 before:-z-10 mb-4">Milhares de membros felizes e se tornando <span className="text-primary-500">FIT</span>.</motion.h3>

          <motion.div initial="hidden" whileInView="visible" variants={{hidden:{x:-100, opacity:0}, visible:{x:0, opacity:1}}} transition={{delay:0.3, duration:.75}} viewport={{once:true,amount:.5}}>
            <p className="mb-4">Bem-vindo à Evogym, sua academia de fitness de classe mundial. Oferecemos equipamentos de última geração, treinadores experientes e um ambiente acolhedor e motivador para ajudá-lo a alcançar seus objetivos de fitness.</p>

            <p className="mb-8 sm:mb-16">Na Evogym, nosso objetivo é ajudar cada um dos nossos membros a alcançar seus objetivos de forma eficaz e divertida. Junte-se a nós hoje e comece sua jornada para a melhor forma física da sua vida.</p>
          </motion.div>
          

          <div className="relative sm:before:content-sparkles before:absolute before:-top-5 before:left-2/4 before:-z-10 mb-8">
            <Btn 
              label="Faça parte"
              onClick={() => console.log('faça parte btn')} 
              style={{
                border:"rounded-md",
                color:"bg-seccondary-500",
                hoverEffect:"hover:bg-seccondary-400 hover:cursor-pointer",
                px:"px-8",
                py:"py-1",
                textColor:"",
              }}
            />
          </div>
          
        </div>

       
      </section>
       
    </article>
  )
}

export { Benefits }