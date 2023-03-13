
import { FormEvent } from "react"
import { useForm } from "react-hook-form"
import ContactUsGraphic from '../../assets/ContactUsPageGraphic.png'
import { Btn } from "../../components/btn/Btn"



const inputStyles = "w-full rounded-lg bg-primary-300 px-5 py-3 placeholder:text-white mb-4"

function ContactUs(){

  const { register, trigger, formState: { errors } } = useForm()

  const onSubmit = async (e: FormEvent) => {


    const isValid = await trigger()

    if(!isValid){
      e.preventDefault() 
    }

  }

  return(

    <article className="px-12">

      <h3 className="font-bold text-3xl mb-4"><span className="text-primary-500 ">VENHA AGORA!</span> E ENTRE EM FORMA!</h3>


      <p className="text-sm mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ducimus voluptates repellendus impedit. Ducimus officiis unde blanditiis exercitationem pariatur sequi atque saepe quia iste libero accusantium dolore, ab numquam quo!</p>


      <section className="flex flex-col sm:justify-between sm:flex-row align-middle self-stretch sm:gap-4">

        <form
          target="_blank"
          onSubmit={onSubmit}
          action="https://formsubmit.co/c6cab8cd89bd7380082b60068805bcc9"
          method="POST"
          className="mb-4"
        >

          <input className={inputStyles} type="text" placeholder="NOME"  {...register("name",{required:true, maxLength:75, minLength:15})}/> 
          {errors.name && 
            <p className="mb-4 text-primary-500">
              {errors.name.type === "required" && "Preencha o campo para prosseguir"} 
              {errors.name.type === "maxLength" && "Digite no máximo 75 caracteres"}
              {errors.name.type === "minLength" && "Digite no mínimo 15 caracteres"}
            </p>
          }

          <input className={inputStyles} type="email" placeholder="EMAIL"  {...register("email",{required:true, pattern: /([a-zA-Z0-9_]){3,}@([a-zA-Z0-9]){3,}\.([a-zA-Z]){2,}/})}/> 
          {errors.email && 
            <p className="mb-4 text-primary-500">
              {errors.email.type === "required" && "Preencha o campo para prosseguir"} 
              {errors.email.type === "pattern" && "Digite um email válido"}
            </p>
          }

          <textarea className={`${inputStyles}`} rows={10} cols={50}  placeholder="Descrição da mensagem"  {...register("description",{required:true, maxLength:2000, minLength:10})}/> 
          {errors.description && 
            <p className="mb-4 text-primary-500">
              {errors.description.type === "required" && "Preencha o campo para prosseguir"} 
              {errors.description.type === "minLength" && "Digite no mínimo 10 caracteres"}
              {errors.description.type === "maxLength" && "Digite no máximo 2000 caracteres"}
            </p>
          }
          
          <Btn
            label="ENVIAR"
            onClick={() => console.log()}
            style={
              {
                border:"rounded-md",
                color:"bg-seccondary-500",
                hoverEffect:"hover:bg-seccondary-400 hover:cursor-pointer",
                px:"px-4",
                py:"py-2",
                textColor:"",
              }
            }
           />
        </form>

        <img src={ContactUsGraphic}  className="self-start w-full sm:w-auto" />
      </section>

    </article>
  )
}

export { ContactUs }