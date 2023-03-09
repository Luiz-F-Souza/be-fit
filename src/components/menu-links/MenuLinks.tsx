

export type LinkEl = {
  label: string, 
  path: string,
}

export interface menuLinkProps {
  links: LinkEl[],
  isVertical: boolean,
  gapNumber: 6 | 12 | 24 | 36 | 48,
  active: number,
  setActive: (active: number) => void
}

function MenuLinks({links, isVertical, gapNumber, active, setActive}:menuLinkProps){
  
  const orientation = isVertical ? 'flex-col' : 'flex-row'

  
  return(
    <ul className={`flex gap-${gapNumber} ${orientation} items-center`}>
      {
        links.map((link, index) => {

          const { label, path } = link

          return(
            <li key={`link_${index}`} onClick={() => setActive(index) }>
              <a href={path} className={`${active === index ? "text-primary-500" : ""} hover:text-primary-500 transition-colors duration-200`}>
                {label}
              </a>
            </li>
          )
        })
      }
    </ul>
  )
}

export { MenuLinks }