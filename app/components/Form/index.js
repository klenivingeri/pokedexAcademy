import { useState } from "react";
const musculos = [
  "Adutor curto",
  "Adutor longo",
  "Adutor magno",
  "Ancôneo",
  "Bíceps braquial",
  "Bíceps femoral (cabeça longa)",
  "Bíceps femoral (cabeça curta)",
  "Braquial",
  "Braquiorradial",
  "Deltoide anterior",
  "Deltoide lateral",
  "Deltoide posterior",
  "Diafragma",
  "Dorsal (ou grande dorsal)",
  "Eretor da espinha",
  "Extensor radial curto do carpo",
  "Extensor radial longo do carpo",
  "Extensor ulnar do carpo",
  "Fibular curto",
  "Fibular longo",
  "Flexor radial do carpo",
  "Flexor ulnar do carpo",
  "Gastrocnêmio (cabeça lateral)",
  "Gastrocnêmio (cabeça medial)",
  "Glúteo máximo",
  "Glúteo médio",
  "Glúteo mínimo",
  "Grácil",
  "Ilíaco",
  "Infraespinhal",
  "Manguito rotador (infraespinhal)",
  "Manguito rotador (redondo menor)",
  "Manguito rotador (subescapular)",
  "Manguito rotador (supraespinhal)",
  "Oblíquo externo",
  "Oblíquo interno",
  "Palmar longo",
  "Peitoral maior",
  "Peitoral menor",
  "Piriforme",
  "Psoas maior",
  "Psoas menor",
  "Quadrado lombar",
  "Quadríceps (reto femoral)",
  "Quadríceps (vasto intermédio)",
  "Quadríceps (vasto lateral)",
  "Quadríceps (vasto medial)",
  "Reto abdominal",
  "Romboide maior",
  "Romboide menor",
  "Serrátil anterior",
  "Semimembranoso",
  "Semitendíneo",
  "Sóleo",
  "Subescapular",
  "Supinador",
  "Supraespinhal",
  "Tensor da fáscia lata",
  "Tibial anterior",
  "Tibial posterior",
  "Trapézio (inferior)",
  "Trapézio (médio)",
  "Trapézio (superior)",
  "Transverso do abdômen"
];

export const Input = ({name, id, setText, placeholder}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {name}
      </label>
      <input
        onChange={(e) => setText(e.target.value)}
        type="text"
        id={id}
        name={id}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        placeholder={placeholder}
      />
    </div>
  );
};

export const InputImagem = ({name, id ,images, setImage, placeholder}) => {
  const [img, setImg] = useState('')
  
  const handleSaveImagem = () => {
    if (img.trim() === "") return; // Não adiciona valores vazios
    const updatedImages = [...images, img]; // Adiciona a nova imagem ao array existente
    setImage(updatedImages); // Atualiza o estado com o array atualizado
    setImg(""); // Limpa o input após salvar
  };

  return (
    <div>
      <div className="flex flex-row gap-2">
      {images?.reverse()
      .map((url, i) => <div key={i} className="shadow-sm ">
        <img
          src={url}
          alt={`Slide ${i}`}
          className="w-[100] h-[100px] object-cover transition-transform duration-300 ease-in-out rounded-md"
        />
      </div>)}
      </div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {name}
      </label>
      <div className="flex flex-row">
      <input
        onChange={(e) => setImg(e.target.value)}
        value={img || ""}
        type="text"
        id={id}
        name={id}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        placeholder={placeholder}
      />
       {images.length <= 2 && <a onClick={handleSaveImagem} className=" bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">save</a>}
      </div>
    </div>
  );
};

export const Textarea = ({name, id, setText, placeholder}) => {
  return (
    <div>
      <label
        htmlFor="message"
        className="block text-sm font-medium text-gray-700"
      >
        {name}
      </label>
      <textarea
        onChange={(e) => setText(e.target.value)}
        id={id}
        name={id}
        rows="4"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};


export const Select = ({name, selectedValue, handleSelectedChange , options}) => {
  return (<div className="">
          <label
        htmlFor="message"
        className="block text-sm font-medium text-gray-700"
      >
    {name}
    <select
    value={selectedValue}
    onChange={handleSelectedChange}
    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
  >
    {musculos.map((musculo,i) => <option key={i} value={musculo}>{musculo}</option>)}
  </select>
  </label>
  </div>
  )
}
export const Form = ({ children }) => {
  return (
    <form className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg space-y-4">
      {children}
      <div className="flex items-center">
        <input
          id="terms"
          name="terms"
          type="checkbox"
          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
          Aceito os termos e condições
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Cadastrar
      </button>
    </form>
  );
};
