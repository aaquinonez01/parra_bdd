import fondo from '../../assets/fondo.svg'

export const AuthLayout = ({children}) => {
  return (
    <div className="w-screen h-screen grid place-items-center"style={{background: `url(${fondo})`, backgroundSize: 'cover', backgroundPosition: 'center'
    }}>
        {children}
    </div>
  )
}