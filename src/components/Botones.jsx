export function Siguiente({ pagina, setPagina }) {
  if (pagina < 42) {
    return (
      <div className="shadow-md p-5 m-2 hover:bg-slate-300 font-bold">
        <button
          onClick={() => {
            setPagina(pagina + 1);
          }}
        >
          Siguiente
        </button>
      </div>
    );
  }
}
export function Atras({ pagina, setPagina }) {
  if (pagina > 1) {
    return (
      <div className="shadow-md p-5 m-2 hover:bg-slate-300 font-bold">
        <button
          onClick={() => {
            setPagina(pagina - 1);
          }}
        >
          Atras
        </button>
      </div>
    );
  }
}
