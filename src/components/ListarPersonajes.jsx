import { useEffect, useState } from "react";
import Articulos from "./Personaje";
import { Atras, Siguiente } from "./Botones";

function ListarArticulos() {
  const [datos, setDatos] = useState([]);
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    async function obtenerDatos() {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character?page=" + pagina
      );
      const data = await response.json();
      console.log(data);
      setDatos(data.results);
    }

    obtenerDatos();
  }, [pagina]);

  return (
    <div>
      <div className="flex justify-center pb-10">
        <Atras pagina={pagina} setPagina={setPagina} />
        <div className="shadow-md p-5 m-2 hover:bg-slate-300 font-bold">
          {pagina}
        </div>
        <Siguiente pagina={pagina} setPagina={setPagina} />
      </div>

      <div className="md:container md:mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {datos.map((valores) => {
          return <Articulos key={valores.id} valores={valores} />;
        })}
      </div>
    </div>
  );
}

export default ListarArticulos;
