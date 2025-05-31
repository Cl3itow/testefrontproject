export default function CategoriasPage() {
  return (
    <main className="min-h-screen p-6 pt-24 bg-white">
      <h1 className="text-3xl font-bold mb-4">Categorias</h1>
      <p className="text-gray-600 mb-8">Explore as categorias de produtos mais buscadas.</p>

      {/* Seção Mais Buscados */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Mais buscados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="border rounded-lg p-4 shadow-md">
            <div className="w-full h-48 bg-gray-200 rounded-md flex items-center justify-center">
              {/* Espaço reservado para imagem */}
              <span className="text-gray-500">Imagem 1</span>
            </div>
            <h3 className="mt-4 font-semibold">Loren sksksksksk</h3>
            <p className="text-gray-600">R$: 250</p>
          </div>

          {/* Card 2 */}
          <div className="border rounded-lg p-4 shadow-md">
            <div className="w-full h-48 bg-gray-200 rounded-md flex items-center justify-center">
              <span className="text-gray-500">Imagem 2</span>
            </div>
            <h3 className="mt-4 font-semibold">Loren kskksksks</h3>
            <p className="text-gray-600">R$: 250</p>
          </div>

          {/* Card 3 */}
          <div className="border rounded-lg p-4 shadow-md">
            <div className="w-full h-48 bg-gray-200 rounded-md flex items-center justify-center">
              <span className="text-gray-500">Imagem 3</span>
            </div>
            <h3 className="mt-4 font-semibold">Loren ksksksksk</h3>
            <p className="text-gray-600">R$: 370</p>
          </div>

          {/* Card 4 */}
          <div className="border rounded-lg p-4 shadow-md">
            <div className="w-full h-48 bg-gray-200 rounded-md flex items-center justify-center">
              <span className="text-gray-500">Imagem 4</span>
            </div>
            <h3 className="mt-4 font-semibold">Loren kskksksk</h3>
            <p className="text-gray-600">R$: 370</p>
          </div>
        </div>
      </section>
    </main>
  );
}
