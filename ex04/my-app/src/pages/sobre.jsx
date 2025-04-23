import Navbar from "@/components/navbar"

export default function Sobre() {
    return (
        <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="flex items-center justify-center p-6">
        <div className="bg-white p-8 rounded-4xl shadow-md">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Sobre</h1>
            <p className="text-xl text-gray-800 text-center">
            Me chamo Pedro Delmiro, tenho 18 anos e sou um desenvolvedor Back-end.
            Tenho me especializado em <span className="font-semibold">Spring Boot</span>, <span className="font-semibold">Postgres</span> e agora estou estudando <span className="font-semibold">NextJS</span>.
            </p>
        </div>
        </div>
        </div>
    );
}