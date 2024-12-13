export default function ManoAlzadaSection() {
    return (
        <section className="flex items-center justify-arround mb-8 w-max m-auto gap-8">
            <div className="w-96 h-96 flex flex-col justify-center items-center ">
                <p className="text-7xl font-black text-center">Disenos a Mano Alzada</p>
                {/* <p className="text-4xl border-1 border border-red-400 text-red-400 w-max px-4 py-2 rounded-full">Personalizadas</p> */}
            </div>
            <div>
                <img
                    src={'/placeholder.svg'}
                    alt={'Pictures, placeHolder'}
                    className="object-center object-cover rounded-md w-full h-96 mb-1"
                />
            </div>
            <div className="text-4xl border-1 border border-red-400 text-red-400 w-max px-4 py-2 rounded-full">
                Ver Mas
            </div>

        </section>
    )
}