import ImageCarousel from "../ui/image-carousel";

export default function MemeCakesSection() {
    return (
        <section className="flex items-center justify-arround mb-44 w-max m-auto gap-8">
            <div className="w-96 h-96 flex flex-col justify-center items-center ">
                <p className="text-9xl font-black">Meme Cakes</p>
                <p className="text-4xl border-1 border border-red-400 text-red-400 w-max px-4 py-2 rounded-full">Personalizadas</p>
            </div>
            <div>
              <ImageCarousel/>
            </div>
            <div className="text-4xl border-1 border border-red-400 text-red-400 w-max px-4 py-2 rounded-full">
                Ver Mas
            </div>
            
        </section>
    )
}