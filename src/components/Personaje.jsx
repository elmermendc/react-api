import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Articulos({ valores }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:bg-slate-100">
      <img className="w-full " src={valores.image} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{valores.name}</div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span
          className={
            "inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" +
            (valores.status == "Alive"
              ? " bg-cyan-700 text-white "
              : " bg-gray-900 text-white")
          }
        >
          {valores.status}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {valores.species}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {valores.gender}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          <FontAwesomeIcon icon={faLocationDot} />
          <span className="ml-1">{valores.location.name}</span>
        </span>
      </div>
    </div>
  );
}

export default Articulos;
