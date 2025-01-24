"use client";
import { useState } from "react";
import { MenuHamburger } from "../components/icons/MenuHamburger";
import { SideBar } from "../components/SideBar";
import { Form, Input, Textarea, InputImagem, Select } from "../components/Form";

const _records = [
  {
    title: "Seated Cable Row - V Grip (Cable)",
    image: [
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



export default function CreateExercise() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName]=useState('')
  const [images, setImages]= useState([])
  const [video, setVideo]=useState('')
  const [description, setDescription]=useState('')
  const [muscles, setMuscles]=useState([])

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      <div
        id="Top-Flutuante"
        className="fixed inset-x-0 top-0 h-[50px] w-full z-50 bg-opacity-50 backdrop-blur-sm"
      >
        <div className="flex flex-row w-full  items-center p-1 ">
          <div className="p-1 text-black" onClick={toggleSidebar}>
            <MenuHamburger />
          </div>
          <div className="w-full m-1">
            <div className="text-xl text-black">
              <b>Cadastrar exercício</b>
            </div>
          </div>
        </div>
      </div>

      <div
        id="Bot-Flutuante"
        className="fixed inset-x-0 bottom-0 w-full h-[50px] bg-gray-400 z-50"
      >
        Bot-Flutuante
      </div>

      <div className="flex-grow bg-gray-100 py-[50px] text-neutral-800">
        <div className="bg-white m-2">
          <Form>
            <div className="flex flex-col gap-4">
              <Input name="Nome do Exercicio" id="titulo" setText={setName} placeholder="Digite o nome do Exercicio"/>
              <InputImagem name="Link da imagem" id="image" images={images} setImage={setImages} placeholder="Cole o link da imagem"/>
              {!!video.length ? <iframe
          src={`https://www.youtube.com/embed/${video}`}
          title="YouTube Video"
          className="w-full h-[200px]"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      : ''}
              <Input name="Link do Video" id="video" setText={setVideo} placeholder="Cole o link de video"/>
              <Textarea name="Descrição do exercicio" id="description" setText={setDescription} placeholder="Digite uma descrição para o exercicio" />
              <Select name="Seleciones os musculo(s)" id="select" muscles={muscles} setMuscles={setMuscles} />
            </div>
          </Form>
        </div>
      </div>
      {isOpen && <SideBar toggleSidebar={toggleSidebar} />}
    </div>
  );
}
