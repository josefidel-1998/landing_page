import Celular from '../../public/imagenes/celular.jpg'
export default function Nosotros() {

  return (
    <>
        <article className={`w-full flex flex-row flex-wrap items-center justify-between`}>
              <div className="sm:w-1/3 w-1/2 mx-auto absolute z-10 sm:right-24 right-1/4 text-white ">
                  <h2 className='font-bold text-5xl mb-2'>Nosotros</h2>
                  <p className="sm:text-left text-center">Somos los creadores de una app dedicada a dar información, tips, lugares para personas que tengan que ir a pescar. Brinda lugares de pesca segura y cómoda para todos los usuarios que ingresen a su perfil.</p>
              </div>
              <div className="max-w-full h-auto object-cover relative">
                  <img className="imagen__nosotros" src={Celular} alt="nosotros" />
              </div>
        </article>
    </>
  )
}
