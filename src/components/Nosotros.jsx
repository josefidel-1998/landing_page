import Celular from '../../public/imagenes/celular.jpg'
export default function Nosotros() {

  return (
    <>
        <article className={`w-full flex flex-row flex-wrap items-center justify-between`}>
              <div className="sm:w-1/3 w-1/2 mx-auto absolute z-10 sm:right-24 right-1/4 text-white ">
                  <h2 className='font-bold text-5xl mb-2'>Nosotros</h2>
                  <p className="sm:text-left text-center">Somos los creadores de Biufort, una app diseñada 
para las personas que disfruten de la buena pesca.
Nuestra app brinda información, datos y tips 
de los sitios más seguros y cómodos para que los usuarios
obtengan una mejor experiencia.</p>
              </div>
              <div className="max-w-full h-auto object-cover relative">
                  <img className="imagen__nosotros" src={Celular} alt="nosotros" />
              </div>
        </article>
    </>
  )
}
