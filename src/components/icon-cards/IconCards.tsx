


interface iconCardsProps {
  cards: {
    icon: any,
    title: string,
    body: string,
    actionBtn: JSX.Element
  }[],
  
}
function IconCards({cards}: iconCardsProps){

  return(
    <article className='grid sm:grid-cols-3 gap-4'>
      {
        cards.map(( card, index ) => {
          const { icon, title, body, actionBtn } = card

        
          return(
            <section className="justify-self-center text-center p-4 px-32 sm:px-2 sm:py-8 border-2 border-gray-300 border-solid w-full h-full sm:min-h-[20rem] flex flex-col justify-between" key={`card_${index}`}>
              
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

            </section>
          )
        })
      }
    </article>
  )
}

export { IconCards }