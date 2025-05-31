"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow fixed w-full top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-blue-600">Óculos Geek</div>

          {/* Botão Mobile */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Links Desktop */}
          <div className="hidden md:flex space-x-6">
            <Link href="/inicio" className="hover:text-blue-500">Início</Link>
            <Link href="/categorias" className="hover:text-blue-500">Categorias</Link>
            <Link href="/marcas" className="hover:text-blue-500">Marcas</Link>
            <Link href="/campanhas" className="hover:text-blue-500">Campanhas</Link>
            <Link href="/acessorios" className="hover:text-blue-500">Acessórios</Link>
            <Link href="/sobre-nos" className="hover:text-blue-500">Sobre nós</Link>
          </div>
        </div>

        {/* Links Mobile */}
        {menuOpen && (
          <div className="md:hidden flex flex-col space-y-4 py-4">
            <Link href="/inicio" onClick={() => setMenuOpen(false)}>Início</Link>
            <Link href="/categorias" onClick={() => setMenuOpen(false)}>Categorias</Link>
            <Link href="/marcas" onClick={() => setMenuOpen(false)}>Marcas</Link>
            <Link href="/campanhas" onClick={() => setMenuOpen(false)}>Campanhas</Link>
            <Link href="/acessorios" onClick={() => setMenuOpen(false)}>Acessórios</Link>
            <Link href="/sobre-nos" onClick={() => setMenuOpen(false)}>Sobre nós</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
