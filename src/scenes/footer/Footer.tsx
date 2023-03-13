import Logo from '../../assets/Logo.png'

function Footer(){

  return(
    <footer className='flex flex-col sm:flex-row bg-primary-100 p-12 justify-between'>
      
      <section className='sm:w-2/4'>
        <img src={Logo} className="mb-4" />

        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio numquam maxime nam officiis, quo eaque cumque! Sed veniam fugiat, cumque autem atque, officia tenetur, amet nostrum ducimus quae consectetur quas!
        </p>

        <p className="mb-4">&#169; Evogym  - Todos os direitos reservados.</p>
      </section>

      <section>
        <h4 className='font-bold mb-4'>Links</h4>

        <ul>
          <li className='mb-4'>
            Lorem ipsum dolor
          </li>

          <li className='mb-4'>
            Lorem ipsum dolor
          </li>

          <li className='mb-4'>
            Lorem ipsum dolor
          </li>
        </ul>
      </section>

      <section>
        <h4 className='font-bold mb-4'>Contato</h4>

        <ul>
          <li className='mb-4'>
            Lorem ipsum dolor
          </li>

          <li className='mb-4'>
            Lorem ipsum dolor
          </li>

          <li className='mb-4'>
            Lorem ipsum dolor
          </li>
        </ul>
      </section>

      <section>

      </section>
    </footer>
  )
}

export { Footer }