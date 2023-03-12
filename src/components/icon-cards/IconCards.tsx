import { motion } from "framer-motion"


interface iconCardsProps {
  cards: {
    icon: any,
    title: string,
    body: string,
    actionBtn: JSX.Element
  }[],
  containerStyle?: string
}
function IconCards({cards, containerStyle}: iconCardsProps){

  return(
    <motion.article className={`grid sm:grid-cols-3 gap-4 ${containerStyle}`}
    initial="lower" 
    whileInView='normal' 
    viewport={{ once: true, amount:0.5 }} 
    transition={{ duration: .75 }} 
    variants={{ 
      lower: {}, 
      normal: {transition: {staggerChildren: .75}}
      }}
    >
      {
        cards.map(( card, index ) => {
          const { icon, title, body, actionBtn } = card

        
          return(
            <motion.section variants={{ lower: { opacity:0, scale:0.85}, normal: { opacity:1, scale:1}}} className="justify-self-center text-center p-4 px-4 sm:px-8 sm:py-8 border-2 border-gray-300 border-solid w-full h-full sm:min-h-[20rem] flex flex-col justify-between rounded-md" key={`card_${index}`}>
              
              <section className="grid align-middle">
                <div className="flex justify-center">
                  {icon}
                </div>

                <h4 className="font-semibold mb-4">{title}</h4>

                <p>{body}</p>
              </section>
      

              <section className="" >
                {actionBtn}
              </section>

            </motion.section>
          )
        })
      }
    </motion.article>
  )
}

export { IconCards }