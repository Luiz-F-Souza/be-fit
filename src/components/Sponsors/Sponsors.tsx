

interface sponsorsProps {
  imgDimensions: number
  sponsors:{
    imgSrc: string,
    SponsorName: string,
  }[],
  sectionStyle: string
}

function Sponsors({imgDimensions, sponsors, sectionStyle}: sponsorsProps){

  return(
    <section className={sectionStyle}>
      {
        sponsors.map(sponsor => {
          const { imgSrc, SponsorName } = sponsor
          return(
            <img src={imgSrc} alt={`Logo patrocinador: ${SponsorName}`} width={imgDimensions} height={imgDimensions} key={`logo_sponsor_${SponsorName}`}/>
          )
        })
      } 
    </section>
  )
}

export { Sponsors }