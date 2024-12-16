import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function WelcomeSection () {
    return (
        <div className="border-2 border-purple pb-4 pt-4 px-4 mb-16 rounded-lg shadow-md">
            <div className="flex flex-col">
                <div className="flex gap-1 mb-4 ">
                    <img
                        src={'/placeholder.svg'}
                        alt={'Pictures, placeHolder'}
                        className="object-center object-cover rounded-md w-full h-80 mb-1"
                    />
                    <img
                        src={'/placeholder.svg'}
                        alt={'Pictures, placeHolder'}
                        className="object-center object-cover rounded-md w-full h-80 mb-1"
                    />
                </div>
                
                <h1 className="text-8xl font-black text-center text-black mb-2">
                    Bienvenido a Kinoko
                </h1>
            </div>

            <p className="text-center m-auto text-accent-foreground mb-4">
                Una pasteleria 100% venezolana ubicada en valencia
            </p>

            <div className="flex justify-center items-center mb-4 gap-2">
                <p className="text-xl text-background text-center translate-x-8 bg-buttonColor px-2 py-1 rounded-full z-10">Pedidos Express</p>
                <div className="text-sm  flex px-2 pl-7 py-1 border border-buttonColor rounded-full ">
                    {`Desde 9:00 am hasta
						2:00 pm`}
                </div>
                {/* <p className="text-center text-red-400 border border-1 border-red-400 rounded-full px-2 py-1">Para el mismo dia</p> */}
            </div>

            <div className="text-center">
                <Link href="/cakes">
                    <Button className="bg-purple text-gray-800 hover:bg-gray-100">
                        Comprar torticas
                    </Button>
                </Link>
            </div>
        </div>
    )
}