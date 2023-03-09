import { useEffect, useState } from "react"
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

  
  const [ activeLink, setActiveLink] = useState(0)

  const [ showMobileMenu, setShowMobileMenu ] = useState(false)

  const [ isMobile, setIsMobile ] = useState(false)

  const mediaQuery = '(max-width: 830px)'
  const mobileClass = `absolute flex-col w-8/12 bg-primary-100 top-0 ${showMobileMenu ? "right-0" : "-right-full"} h-screen transition-all duration-300 `
  const iconsClass = `z-50 hover:cursor-pointer bg-seccondary-500 rounded-full p-1 text-white hover:bg-primary-500 transition-color duration-300`

  useEffect(() => {

    const windowSizeEvent = () => {
      const mediaQueryResult = window.matchMedia(mediaQuery).matches
      mediaQueryResult ? setIsMobile(true) : setIsMobile(false)
    }
    windowSizeEvent()
    window.addEventListener('resize', windowSizeEvent)

    return () => window.removeEventListener('resize', windowSizeEvent)

  },[])

  
    

  return(
    <nav className={`fixed top-0 z-30 w-full py-6 `}>

      <ul className={`flex items-center justify-between px-12 gap-6`}>

        <li className={`flex items-center justify-between gap-6`}>
          <img src={Logo} alt="logo" />
        </li>

        {
          (isMobile && !showMobileMenu) &&
          <Bars3Icon width={36} height={36} className={`${iconsClass}`} onClick={() => setShowMobileMenu(true)}/>
        }
        {
          (isMobile && showMobileMenu) &&
          <XMarkIcon width={36} height={36} className={iconsClass} onClick={() => setShowMobileMenu(false)}/>
        }
        
        <li className={`flex items-center  ${ !isMobile ? "justify-between" : 'justify-center'} gap-6 w-full ${isMobile ? mobileClass : ''} `}>
          {/* <ul><li></li></ul> */}
          <MenuLinks 
            links={myLinks} 
            isVertical={isMobile} 
            gapNumber={6}
            active={activeLink}
            setActive={setActiveLink}
          />

          <ul className={`flex gap-6 items-center ${isMobile ? "flex-col" : "flex-row"}`}>
            <li>
              Login
            </li> 
            
            <Btn 
              label="Inscreva-se" 
              style={{border:'rounded-md', color:'bg-seccondary-500', hoverEffect:'hover:bg-seccondary-400', py: 'py-1', px:"px-12"}} 
              onClick={() => console.log('btn inscreva-se')} 
            />
          </ul>
        </li>
        
      </ul>

    </nav>
  )
}

export { Navbar }