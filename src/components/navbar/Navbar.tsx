import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import { MenuLinks } from "../menu-links/MenuLinks"
import Logo from "../../assets/Logo.png"
import { LinkEl } from "../menu-links/MenuLinks"
import { Btn } from "../btn/Btn"

const myLinks: LinkEl[] = [
  {
    label:'Início',
    path: '#'
  },
  {
    label:'Benefícios',
    path:'#'
  },
  {
    label:'Aulas',
    path:'#'
  },
  {
    label:'Contato',
    path:'#'
  }
]
function Navbar(){

  const flexBetween = "flex items-center justify-between"
  const [ activeLink, setActiveLink] = useState(0)

  return(
    <nav className={`fixed top-0 z-30 w-full py-6 bg-slate-500`}>

      <ul className={`${flexBetween} px-12`}>

        <li className={`${flexBetween} gap-6`}>
          <ul>
            <li><img src={Logo} alt="logo" /></li>
          </ul>

          {/* <ul><li></li></ul> */}
          <MenuLinks 
            links={myLinks} 
            isVertical={false} 
            gapNumber={6}
            active={activeLink}
            setActive={setActiveLink}
          />
        </li>

        <li className={`${flexBetween} gap-6`}>
          <ul className="">
            <li>
              Login
            </li>
          </ul>
            <Btn 
              label="Inscreva-se" 
              style={{border:'rounded-md', color:'bg-seccondary-500', hoverEffect:'hover:bg-seccondary-400', py: 'py-1', px:"px-12"}} 
              onClick={undefined} 
            />
        </li>

      </ul>

    </nav>
  )
}

export { Navbar }