"use client";

import { useEffect, useState } from "react";
import { Loading } from "./components/Loading";
import { MenuHamburger } from "./components/icons/MenuHamburger";
import { IconList } from "./components/icons/IconList";
import { IconSquare } from "./components/icons/IconSquare";
import { ListSquare, ListLine } from "./components/List";
import { add, get } from "./utils/local-storage";
import { SideBar } from "./components/SideBar";

export default function Listing() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedValue, setSelectedValue] = useState("");
  const [isSquare, setIsSquare] = useState(false);
  const [recordsTraining, setRecordsTraining] = useState([]);
  const [recordsExercises, setRecordsExercises] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleSetisSquare = () => setIsSquare(!isSquare);
  const handleSelectedChange = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
    const dataTraining = get("training");
    const dataExercises = get("exercises");
    if (!!dataTraining && !!dataExercises) {
      setRecordsTraining(dataTraining);
      setRecordsExercises(dataExercises)
    }
    setIsLoading(false);
  }, []);

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
              <option value="" disabled>
                Selecione um Treino
              </option>
              {recordsTraining.map((record, i) => (
                <option key={i} value={record.uuid}>
                  {record.name}
                </option>
              ))}
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
                  {recordsTraining.map((record) => {
                    if (record.uuid == selectedValue) {
                      return record.exercises.map((uuid, i) => (
                        recordsExercises.map(exercise => {
                          if(exercise.uuid === uuid)
                          return <ListSquare key={uuid} {...exercise} />
                        }
                      )))
                    }
                  })}
                </div>
              </div>
            ) : recordsTraining.length ? (
              recordsTraining.map((record) => {
                if (record.uuid == selectedValue) {
                  return record.exercises.map((uuid, i) => (
                    recordsExercises.map(exercise => {
                      if(exercise.uuid === uuid)
                        return <ListLine key={uuid} {...exercise} />
                    }
                  )));
                }
              })
            ) : (<div className="h-[300px] flex items-end justify-center text-gray-400 text-4xl"> Selecione um Treino</div>) }
          </div>
        )}
      </div>
      {isOpen && <SideBar toggleSidebar={toggleSidebar} />}
    </div>
  );
}
