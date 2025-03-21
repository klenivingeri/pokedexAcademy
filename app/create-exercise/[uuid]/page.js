"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect, Suspense, use } from "react";
import { MenuHamburger } from "../../components/icons/MenuHamburger";
import { SideBar } from "../../components/SideBar";
import {
  Form,
  Input,
  Textarea,
  InputImagem,
  Select,
  InputVideo,
} from "../../components/Form";
import { get, set } from "../../utils/local-storage";

export default function CreateExercise({ params, searchParams }) {
  const router = useRouter();
  const { uuid } = use(params);
  const { select } = use(searchParams);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [images, setImages] = useState([]);
  const [video, setVideo] = useState("");
  const [description, setDescription] = useState("");
  const [muscles, setMuscles] = useState([]);
  const [kg, setKg] = useState("");
  const [repeat, setRepeat] = useState("");
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const createExercise = () => {
    const obj = {
      name,
      images,
      video,
      description,
      muscles,
      kg,
      repeat,
    };

    set("exercises", obj, uuid);
    alert("Exercício Salvo");
    router.push(`/?select=${select}`);
    // setName("")
    // setImages([])
    // setVideo("")
    // setDescription("")
    // setMuscles([])
    // setKg('')
    // setRepeat('')
  };

  useEffect(() => {
    if (uuid.length > 10) {
      const exercises = get("exercises") || [];
      const exerciceCurrent = exercises.find(
        (exercise) => exercise.uuid === uuid
      );

      if (exerciceCurrent) {
        setName(exerciceCurrent.name);
        setImages(exerciceCurrent.images);
        setVideo(exerciceCurrent.video);
        setDescription(exerciceCurrent.description);
        setMuscles(exerciceCurrent.muscles);
        setKg(exerciceCurrent.kg);
        setRepeat(exerciceCurrent.repeat);
      }
    }
  }, [uuid]);

  return (
    <Suspense>
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
            <Form method="POST" create={createExercise}>
              <div className="flex flex-col gap-4">
                <Input
                  name="Nome do Exercicio"
                  id="titulo"
                  setText={setName}
                  placeholder="Digite o nome do Exercicio"
                  value={name}
                />
                <InputImagem
                  name="Link da imagem"
                  id="image"
                  images={images}
                  setImage={setImages}
                  placeholder="Cole o link da imagem"
                />
                {!!video.length ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${video}`}
                    title="YouTube Video"
                    className="w-full h-[200px]"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  ""
                )}
                <InputVideo
                  name="Link do Video"
                  id="video"
                  setUrl={setVideo}
                  placeholder="Cole o link de video"
                  value={video}
                />
                <Textarea
                  name="Descrição do exercicio"
                  id="description"
                  setText={setDescription}
                  placeholder="Digite uma descrição para o exercicio"
                  value={description}
                />
                <Select
                  name="Seleciones os musculo(s)"
                  id="select"
                  muscles={muscles}
                  setMuscles={setMuscles}
                />
              </div>
              <div className="flex flex-row justify-between">
                <Input
                  name="Repetição"
                  id="titulo"
                  setText={setRepeat}
                  placeholder="Digite Repetição"
                  value={repeat}
                />
                <Input
                  name="Carga"
                  id="titulo"
                  setText={setKg}
                  placeholder="Digite a Carga"
                  value={kg}
                />
              </div>
            </Form>
          </div>
        </div>
        {isOpen && <SideBar toggleSidebar={toggleSidebar} />}
      </div>
    </Suspense>
  );
}
