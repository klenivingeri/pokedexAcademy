import Link from "next/link";
import { IconExport } from "../icons/IconExport";
import { IconImport } from "../icons/IconImport";
import { IconCreate } from "../icons/IconCreate";

export const SideBar = ({toggleSidebar}) => (
  <div className="fixed inset-0 flex items-center justify-start bg-opacity-50 backdrop-blur-sm z-50">
    <div className="bg-white rounded-lg shadow-lg w-[300px] max-w-md h-full flex  flex-col justify-between">
      <div className="flex justify-between items-center border-b px-4 py-2">
        <button
          className="text-gray-500 hover:text-gray-800"
          onClick={toggleSidebar}
        >
          ✖
        </button>
      </div>

      <div className="flex h-full justify-between flex-col">
        <div className="p-4">
          <div className="flex flex-col p-1 gap-5 ">
          <Link
              href="/"
              className="text-black hover:text-blue-500 w-full text-left flex gap-2"
            >
              <IconExport />
              Inicio
            </Link>
            <Link
              href="/outra-pagina"
              className="text-black hover:text-blue-500 w-full text-left flex gap-2"
            >
              <IconExport />
              Exportar
            </Link>
            <Link
              href="/outra-pagina"
              className="text-black hover:text-blue-500 w-full text-left flex gap-2 "
            >
              <IconImport />
              Importar
            </Link>
            <Link
              href="/create-exercise/create"
              className="text-black hover:text-blue-500 w-full text-left flex gap-2 "
            >
              <IconCreate />
              Criar exercicio
            </Link>
            <Link
              href="/create-training/create"
              className="text-black hover:text-blue-500 w-full text-left flex gap-2 "
            >
              <IconCreate />
              Criar treinamento
            </Link>
          </div>
        </div>
        <div className="text-black flex flex-col items-center border rounded-sm m-2 shadow-md">
          <div className="text-xl">
            <b>Codex Academy</b>
          </div>
          <div className="text-sm m-2">
            "O Codex Academy foi desenvolvido para ajudar as pessoas a gerenciar
            seus treinos de forma mais eficiente. Muitas vezes, esquecemos os
            exercícios e as máquinas que usamos, e o objetivo do app é facilitar
            a organização e o gerenciamento do seu treino. Com o Codex Academy,
            você pode criar seus próprios exercícios, adicionando imagens,
            textos, vídeos e muito mais. Além disso, é possível montar treinos
            personalizados, compartilhar com amigos e até importar treinos e
            exercícios criados por outras pessoas."
          </div>
          <div className="text-sm m-2 ">
            Faça uma doação e nos ajuda a continuar evoluindo e fazendo melhorias.
          </div>
        </div>
        <div
          className="text-neutral-50  w-full flex justify-center  pb-4 text-sm"
          style={{ color: "#aaa" }}
        >
          Desenvolvido com muito ❤️
        </div>
      </div>
    </div>
  </div>
);
