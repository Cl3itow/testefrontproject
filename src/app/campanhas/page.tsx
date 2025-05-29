"use client";
import Image from "next/image";

export default function CampanhasPage() {
  return (
    <main className="min-h-screen pt-24">
      {/* Imagem no topo */}
      <div className="w-full h-72 relative">
        <Image
          src="/images/óculos.jpeg"
          alt="Imagem de campanha"
          fill
          className="object-cover"
        />
      </div>

      {/* Título e descrição */}
      <section className="p-6">
        <h1 className="text-3xl font-bold">Campanhas</h1>
        <p className="mt-2 text-gray-600">Veja nossas campanhas promocionais.</p>
      </section>
    </main>
  );
}
