import { useEffect, useState } from "react";
import { data_privilegios } from "../../../../utils/data_privilegios";

const inittialPrivilegios = data_privilegios.map(() => {
  return "0";
});
export const PrivilegiosModal = ({
  handlePrivilegiosData,
  privilegiosData,
  closeModal,
}) => {
  const [privilegios, setPrivilegios] = useState(inittialPrivilegios);
  console.log(privilegios);
  const onInputChange = ({ target }) => {
    if (target.checked) {
      setPrivilegios((prevState) => {
        console.log(prevState.length);
        return prevState.map((privilegio, index) => {
          const valor = parseInt(target.value) - 1;
          if (index === valor) {
            return "1";
          } else {
            return privilegio;
          }
        });
      });
    } else {
      setPrivilegios((prevState) => {
        return prevState.map((privilegio, index) => {
          const valor = parseInt(target.value) - 1;
          if (index === valor) {
            return "0";
          } else {
            return privilegio;
          }
        });
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const privilegiosString = privilegios.join("");
    handlePrivilegiosData(privilegiosString);
    closeModal();
  };

  useEffect(() => {
    if (privilegiosData) {
      const privilegiosArray = privilegiosData.split("");
      setPrivilegios(privilegiosArray);
      console.log(privilegiosArray);
    }
  }, [privilegiosData]);

  return (
    <div>
      <div className="flex items-center justify-between flex-col py-5 gap-7">
        <h2 className="text-3xl font-bold">Privilegios</h2>
        <form
          className="grid grid-cols-2 items-center gap-2 overflow-y-auto h-1/3"
          onSubmit={handleSubmit}
        >
          {
            /*Mostrar privilegios en checkbox , mostrar el nombre y la descripcion */
            data_privilegios.map((privilegio, index) => {
              return (
                <div
                  className="flex gap-2"
                  key={index}
                >
                  <input
                    className="border-2 border-gray-300 rounded-md p-2"
                    type="checkbox"
                    placeholder="Nombre"
                    name="nombre"
                    value={privilegio.id}
                    onChange={onInputChange}
                    checked={privilegios[index] === "1"}
                  />
                  <label className="text-sm font-bold">
                    {privilegio.nombre} - {privilegio.descripcion}
                  </label>
                </div>
              );
            })
          }
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded col-span-2">
            Agregar Privilegios
          </button>
        </form>
      </div>
    </div>
  );
};
