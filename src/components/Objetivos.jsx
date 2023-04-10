
import ilustracion from "../../public/imagenes/fondo_burbujas.png"

export default function Objetivos() {

  //const divObjetivos = useRef("objetivos")

  return (
    <>
      <div className="w-full relative flex flex-wrap flex-row md:justify-around justify-center items-center md:mt-0 mt-20">
        <h2 
        className="text-blue-900 sm:text-5xl text-4xl font-bold lg:absolute lg:left-20 lg:top-[25%] lg:mt-0 md:mt-10 lg:mb-0 mb-24 static">
          Nuestros objetivos
          </h2>
        <img 
        className="w-full max-w-full mx-auto lg:block hidden h-auto text-center" 
        src={ilustracion} 
        alt="ilustracion" />
      </div>
      <div className="w-full grid lg:grid-cols-3 grid-cols-1 gap-y-32 place-items-center items-center xl:-mt-[36rem] lg:-mt-[24rem] md:-mb-[0] z-100">

          <article className="w-3/5 h-full bg-gray-100 relative rounded-3xl shadow-2xl	">
            <h3 className="text-white bg-blue-600 p-6 rounded-full absolute -top-12 lg:left-2 md:left-[43%] left-[38%]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
            </svg></h3>
            <p className="w-full py-14 sm:px-8 px-10">Un problema común en los pescadores recurrentes es la falta de pique, sentir que va a un ligar donde solo se aburren a esperar que pase algo que nunca pasa. Ellos deben investigar diferentes foros y escuchar de otras personas experiencias o consejos que no funcionan o les hacen perder el tiempo</p>
          </article>

          <article className="w-3/5 h-full bg-gray-100 relative rounded-3xl shadow-2xl	">
            <h3 className="text-white bg-blue-600 p-6 rounded-full absolute -top-12 lg:left-2 md:left-[43%] left-[38%]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
            </svg></h3>
            <p className="w-full py-14 sm:px-8 px-10">La falta de información es altisima en el sector y por eso con nuestra app apuntamos a las familias o grupos de amigos que buscan juntarse a comer un asado y pescar en un camping una tarde o un fin de semana entero</p>
          </article>

          <article className="w-3/5 h-full bg-gray-100 relative rounded-3xl shadow-2xl	">
            <h3 className="text-white bg-blue-600 p-6 rounded-full absolute -top-12 lg:left-2 md:left-[43%] left-[38%]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
            </svg></h3>
            <p className="w-full py-14 sm:px-8 px-10">Proponemos una app en la que el usuario cargue su perfil y pueda intercambiar información validada de sitios a donde pescar, los peces que pueden sacar alli y con qué carnadas sacarlas. <br /> <span className="text-blue-500">Tener la experiencia de un profesional sin ser profesional.</span></p>
          </article>
      </div>
    </>
  )
}
