

interface BtnProps {
  label: string,
  style: {
    color: 'bg-seccondary-400' | 'bg-seccondary-500',
    py: 'py-0' | 'py-1' | 'py-2' | 'py-4',
    px: 'px-0' | 'px-1' | 'px-2' | 'px-4'| 'px-8' | 'px-12',
    border: 'rounded-none' | 'rounded-md'| 'rounded-full',
    hoverEffect: "hover:bg-seccondary-400" | "hover:bg-seccondary-500"
  },
  onClick: Function | undefined
}

function Btn({label, onClick, style}: BtnProps){

  const styleProps = Object.values({...style}).join(' ')

  return(
    <button className={`${styleProps} transition-colors duration-300`}>{label}</button>
  )
}

export { Btn }