"use client";

import { useEffect, useState } from "react";
import { Loading } from "./components/Loading";
import { MenuHamburger } from "./components/icons/MenuHamburger";
import { IconList } from "./components/icons/IconList";
import { IconSquare } from "./components/icons/IconSquare";
import { ListSquare, ListLine } from "./components/List";
import { add, get } from "./utils/local-storage";
import { SideBar } from "./components/SideBar";

const _records = [
  {
    name: "Agachamento (Barra)",
    images: [
      "https://www.blog.nadarte.com/wp-content/uploads/2020/04/original-a5e663c386ee5dd5dd89601488a2b9f5.jpeg",
      "https://th.bing.com/th/id/OIP.CzWMagHlTeJeAmzknb7KvgHaE8?rs=1&pid=ImgDetMain",
      "https://academiafitboxx.com.br/wp-content/uploads/2021/08/Treino-funcional-13-exercicios-fundamentais-3.png",
    ],
    video: ["lfDuKPC6rzg"],
    description:
      "o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker. o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
    repeat: 12,
    muscle: ["Quadríceps"],
    kg: 11,
  },
  {
    name: "Cadeira Extensora (Máquina)",
    images: [
      "https://www.blog.nadarte.com/wp-content/uploads/2020/04/original-a5e663c386ee5dd5dd89601488a2b9f5.jpeg",
    ],
    video: ["zottydOvmMw"],
    description:
      "o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
    repeat: 13,
    muscle: ["Quadríceps"],
    kg: 12,
  },
  {
    name: "Cadeira Flexora (Máquina)",
    images: [
      "https://th.bing.com/th/id/OIP.CzWMagHlTeJeAmzknb7KvgHaE8?rs=1&pid=ImgDetMain",
      "https://www.blog.nadarte.com/wp-content/uploads/2020/04/original-a5e663c386ee5dd5dd89601488a2b9f5.jpeg",
      "https://academiafitboxx.com.br/wp-content/uploads/2021/08/Treino-funcional-13-exercicios-fundamentais-3.png",
    ],
    video: ["zottydOvmMw"],
    description:
      "o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
    repeat: 14,
    muscle: ["Isquiossurais"],
    kg: 13,
  },
  {
    name: "Seated Cable Row - V Grip (Cable)",
    images: [
      "https://academiafitboxx.com.br/wp-content/uploads/2021/08/Treino-funcional-13-exercicios-fundamentais-3.png",
      "https://www.blog.nadarte.com/wp-content/uploads/2020/04/original-a5e663c386ee5dd5dd89601488a2b9f5.jpeg",
      "https://th.bing.com/th/id/OIP.CzWMagHlTeJeAmzknb7KvgHaE8?rs=1&pid=ImgDetMain",
      ,
    ],
    video: ["zottydOvmMw"],
    description:
      "o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
    repeat: 15,
    muscle: ["Peito"],
    kg: 14,
  },
  {
    name: "Agachamento (Barra)",
    images: [
      "https://www.blog.nadarte.com/wp-content/uploads/2020/04/original-a5e663c386ee5dd5dd89601488a2b9f5.jpeg",
      "https://th.bing.com/th/id/OIP.CzWMagHlTeJeAmzknb7KvgHaE8?rs=1&pid=ImgDetMain",
      "https://academiafitboxx.com.br/wp-content/uploads/2021/08/Treino-funcional-13-exercicios-fundamentais-3.png",
    ],
    video: ["zottydOvmMw"],
    description:
      "o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker. o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
    repeat: 12,
    muscle: ["Quadríceps"],
    kg: 11,
  },
  {
    name: "Cadeira Extensora (Máquina)",
    images: [
      "https://www.blog.nadarte.com/wp-content/uploads/2020/04/original-a5e663c386ee5dd5dd89601488a2b9f5.jpeg",
      "https://th.bing.com/th/id/OIP.CzWMagHlTeJeAmzknb7KvgHaE8?rs=1&pid=ImgDetMain",
      "https://academiafitboxx.com.br/wp-content/uploads/2021/08/Treino-funcional-13-exercicios-fundamentais-3.png",
    ],
    video: ["zottydOvmMw"],
    description:
      "o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
    repeat: 13,
    muscle: ["Quadríceps"],
    kg: 12,
  },
  {
    name: "Cadeira Flexora (Máquina)",
    images: [
      "https://th.bing.com/th/id/OIP.CzWMagHlTeJeAmzknb7KvgHaE8?rs=1&pid=ImgDetMain",
      "https://www.blog.nadarte.com/wp-content/uploads/2020/04/original-a5e663c386ee5dd5dd89601488a2b9f5.jpeg",
      "https://academiafitboxx.com.br/wp-content/uploads/2021/08/Treino-funcional-13-exercicios-fundamentais-3.png",
    ],
    video: ["zottydOvmMw"],
    description:
      "o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
    repeat: 14,
    muscle: ["Isquiossurais"],
    kg: 13,
  },
  {
    name: "Seated Cable Row - V Grip (Cable)",
    images: [
      "https://academiafitboxx.com.br/wp-content/uploads/2021/08/Treino-funcional-13-exercicios-fundamentais-3.png",
      "https://www.blog.nadarte.com/wp-content/uploads/2020/04/original-a5e663c386ee5dd5dd89601488a2b9f5.jpeg",
      "https://th.bing.com/th/id/OIP.CzWMagHlTeJeAmzknb7KvgHaE8?rs=1&pid=ImgDetMain",
      ,
    ],
    video: ["zottydOvmMw"],
    description:
      "o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
    repeat: 15,
    muscle: ["Peito"],
    kg: 14,
  },
];

export default function Listing() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedValue, setSelectedValue] = useState("");
  const [isSquare, setIsSquare] = useState(false);
  const [records, setRecords] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleSetisSquare = () => setIsSquare(!isSquare);
  const handleSelectedChange = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    const data = get('training')
    if(!!data) {
      setRecords(data)
    }
    setIsLoading(false)
  },[])


  return (
    <div className="flex flex-col h-screen">
      <div
        id="Top-Flutuante"
        className="fixed inset-x-0 top-0 h-[60px] w-full z-50 bg-opacity-50 backdrop-blur-sm"
      >
        <div className="flex flex-row w-full  items-center p-1 ">
          <div className="p-1 text-black" onClick={toggleSidebar}>
            <MenuHamburger />
          </div>
          <div className="w-full m-1">
            <select
              value={selectedValue}
              onChange={handleSelectedChange}
              className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
            >
              <option value="option1">Treino de braço</option>
              <option value="option2">Treino de perna</option>
              <option value="option3">Treino de treino</option>
            </select>
          </div>
          <div className="p-1 text-black" onClick={handleSetisSquare}>
            {!isSquare ? <IconSquare /> : <IconList />}
          </div>
        </div>
      </div>

      <div
        id="Bot-Flutuante"
        className="fixed inset-x-0 bottom-0 w-full h-[60px] bg-gray-400 z-50"
      >
        Bot-Flutuante
      </div>
    
      <div className="flex-grow bg-gray-100 py-[60px] text-neutral-800">
        {isLoading ? (
          <div className="flex-grow  h-full flex justify-center items-center ">
            <Loading color="black" />
          </div>
        ) : (
          <div>
            {isSquare ? (
              <div className="w-full">
                <div className="flex flex-wrap justify-center">
                  {records?.map((record, i) => (
                    <ListSquare key={i} {...record} />
                  ))}
                </div>
              </div>
            ) : (
              <div>
                {records?.map((record, i) => (
                  <ListLine key={i} {...record} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      {isOpen && <SideBar toggleSidebar={toggleSidebar} />}
    </div>
  );
}
