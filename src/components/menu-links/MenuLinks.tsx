
export type LinkEl = {
  label: string, 
  path: string,
}

export interface menuLinkProps {
  links: LinkEl[],
  isVertical: boolean,
  gapNumber: 6 | 12 | 24 | 36 | 48
}

function MenuLinks({links, isVertical, gapNumber}:menuLinkProps){
  
  const orientation = isVertical ? 'flex-col' : 'flex-row'

 
  return(
    <ul className={`flex gap-${gapNumber} ${orientation}`}>
      {
        links.map((link, index) => {

          const { label, path } = link

          return(
            <li key={`link_${index}`}>
              <a href={path}>
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