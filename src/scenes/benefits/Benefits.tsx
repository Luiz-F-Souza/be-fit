import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { Btn, BtnProps } from "../../components/btn/Btn"
import { IconCards } from "../../components/icon-cards/IconCards"
import { motion } from "framer-motion"


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

        <p className="text-sm">We provide world class fitness equipment, trainers and classes to get to get you to your ultimate fitness goals with ease. We provide true care into each and every member.</p>
      </motion.header>

      <IconCards cards={cardsForIconCards}/>

       
    </article>
  )
}

export { Benefits }