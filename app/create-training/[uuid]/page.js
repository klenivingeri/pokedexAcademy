"use client";

import { useState, useEffect, Suspense, use } from "react";
import { MenuHamburger } from "../../components/icons/MenuHamburger";
import { SideBar } from "../../components/SideBar";
import {
  Form,
  Input,
  SelectExercise
} from "../../components/Form";
import { get, set } from "../../utils/local-storage";

export default function CreateTraining({ params }) {
  const { uuid } = use(params);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [exercises, setExercises] = useState([]);
  const [dataExercise, setDataExercise] = useState([]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const createTraining = () => {
    const obj = {
      name,
      exercises,
    }

    set('training', obj, uuid)
  };

  useEffect(() => {
    const data = get("exercises") || [];
    setDataExercise(data)
    if (uuid.length > 10) {
      const training = get("training") || [];

      const trainingCurrent = training.find((train) => train.uuid === uuid);

      if (trainingCurrent) {
        setName(trainingCurrent.name);
        setExercises(trainingCurrent.exercises);
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
              <b>Cadastrar Treino</b>
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
          <Form method="POST" create={createTraining}>
            <div className="flex flex-col gap-4">
              <Input
                name="Nome do Treino"
                id="titulo"
                setText={setName}
                placeholder="Digite o nome do Treino"
                value={name}
              />
              <SelectExercise
                name="Selecione o Exercicios"
                id="select"
                exercises={exercises}
                setExercises={setExercises}
                options={dataExercise}
              />
            </div>
            <div className='flex flex-row justify-between'>

            </div>
          </Form>
        </div>
      </div>
      {isOpen && <SideBar toggleSidebar={toggleSidebar} />}
    </div>
    </Suspense>
  );
}
