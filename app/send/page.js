"use client";

import { useEffect } from "react";
import { add, get } from "../utils/local-storage";

const exercicio = [
  {
    uuid: "f5afe487-9a08-4fc5-994c-416d0970eb49",
    name: "Supino reto com barra",
    images: [
      "https://treinadorhigor.wordpress.com/wp-content/uploads/2016/09/exercc3adcios-para-peito-supino-reto-6.jpg",
    ],
    video: ["zottydOvmMw"],
    description: "",
    repeat: 12,
    sets: 4,
    muscles: ["Peito"],
    kg: 14,
  },
  {
    uuid: "9d8b720d-6331-49bd-a21f-6326d75b304a",
    name: "Supino inclinado com halteres",
    images: [
      "https://grandeatleta.com.br/blog/wp-content/uploads/2022/07/supino-inclinado-com-halteres-.jpg",
    ],
    video: ["zottydOvmMw"],
    description: "1. Deitar em um banco inclinado e segurar os dois halteres com os braços estendidos   2. Flexionar os braços e descer de forma controlada até os cotovelos estarem um pouco mais abaixo que a linha dos ombros. 3. Estender os braços novamente até a posição inicial.",
    repeat: 12,
    sets: 3,
    muscles: ["Peito"],
    kg: 14,
  },
  {
    uuid: "f672ef2d-6aa2-40e0-8755-c9b26d819df1",
    name: "Crucifixo na máquina ou com halteres",
    images: [
      "https://static1.minhavida.com.br/articles/5b/21/98/c7/makatserchykshutterstock-orig-1.jpg",
      "https://www.hipertrofia.org/blog/wp-content/uploads/2018/09/crucifixo-reto-execu%C3%A7%C3%A3o.jpg"
    ],
    video: ["zottydOvmMw"],
    description: "",
    repeat: 15,
    sets: 3,
    muscles: ["Peito"],
    kg: 14,
  },
  {
    uuid: "e142216e-1880-4465-9bf0-0b62fafd5317",
    name: "Tríceps corda no pulley",
    images: [
      "https://cdn.awsli.com.br/1686/1686615/produto/70990671/989f250f65.jpg",
    ],
    video: ["zottydOvmMw"],
    description: "",
    repeat: 15,
    sets: 3,
    muscles: ["Tríceps"],
    kg: 14,
  },
  {
    uuid: "bcd0d936-dfd1-4bd5-b47a-aaebcadbaae3",
    name: "Tríceps francês (skull crusher)",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSSC3MI81s_Lv_tte6J4K7uymub85mDcYt6g&ss",
    ],
    video: ["zottydOvmMw"],
    description: "",
    repeat: 12,
    sets: 3,
    muscles: ["Tríceps"],
    kg: 14,
  },
  {
    uuid: "6e196b68-1734-4567-835c-e464a90ac947",
    name: "Fundos entre bancos (mergulho)",
    images: [
      "https://static.vecteezy.com/ti/vetor-gratis/p1/15708509-homem-fazendo-cadeira-exercicio-de-mergulho-de-triceps-de-banco-ilustracaoial-plana-isolada-no-fundo-branco-vetor.jpg",
    ],
    video: ["zottydOvmMw"],
    description: "Até a falha",
    repeat: 15,
    sets: 4,
    muscles: ["Tríceps"],
    kg: 14,
  },
  {
    uuid: "38053eb7-6d8f-461a-8d9c-537a12b373bd",
    name: "Barra fixa ou puxada alta ",
    images: [
      "https://www.treinoemalta.com.br/wp-content/uploads/2023/07/Puxada-Alta-Aberta.gif",
    ],
    video: ["zottydOvmMw"],
    description: "Até a falha",
    repeat: 12,
    sets: 4,
    muscles: ["Costas"],
    kg: 14,
  },
  {
    uuid: "f9d03744-35ec-4a03-9002-6f6d11cae639",
    name: "Remada curvada com barra",
    images: [
      "https://static1.minhavida.com.br/articles/a5/fc/48/f6/makatserchykshutterstock-orig-1.jpg",
      "https://www.hipertrofia.org/blog/wp-content/uploads/2024/05/t-bar-row-remada-cavalinho.gif"
    ],
    video: ["zottydOvmMw"],
    description: "Até a falha",
    repeat: 12,
    sets: 4,
    muscles: ["Costas"],
    kg: 14,
  },
  {
    uuid: "7c4eb281-c1b0-4316-858f-d7d96da78011",
    name: "Remada cavalinho (máquina)",
    images: [
      "https://totalhealth.com.br/uploads/pagina/elemento/campo/2023/09/vl497GUJ7X3zkdnJ/318rxs-treino-1.jpg",
    ],
    video: ["zottydOvmMw"],
    description: "Até a falha",
    repeat: 12,
    sets: 3,
    muscles: ["Costas"],
    kg: 14,
  },
  {
    uuid: "84750c18-9054-4854-be46-3e480143667f",
    name: "Rosca direta com barra",
    images: [
      "https://grandeatleta.com.br/blog/wp-content/uploads/2018/07/rosca-direta-barra-reta-ou-w.jpg",
    ],
    video: ["zottydOvmMw"],
    description: "Até a falha",
    repeat: 12,
    sets: 3,
    muscles: ["Costas"],
    kg: 14,
  },
  {
    uuid: "6c9b2c55-6bbb-49d9-9eba-ed8e29bd433b",
    name: "Rosca martelo com halteres",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAZcENUtfhuNoLzq2X5ulG527PgRxQaPmvOQ&s",
      "https://www.hipertrofia.org/blog/wp-content/uploads/2024/08/dumbbell-alternate-seated-hammer-curl.gif"
    ],
    video: ["zottydOvmMw"],
    description: "Até a falha",
    repeat: 15,
    sets: 3,
    muscles: ["Costas"],
    kg: 14,
  },
  {
    uuid: "b356c344-6c92-40c1-8e03-ffd1bfdaa29b",
    name: "Rosca concentrada",
    images: [
      "https://treinomestre.com.br/wp-content/uploads/2018/09/rosca-concentrada-.jpg",
    ],
    video: ["zottydOvmMw"],
    description: "Até a falha",
    repeat: 15,
    sets: 3,
    muscles: ["Costas"],
    kg: 14,
  },
  {
    uuid: "b356c344-6c92-40c1-8e03-ffd1bfdaa29a",
    name: "Agachamento livre com barra",
    images: [
      "https://i.ytimg.com/vi/4L5nBs8Eq7g/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAgHAMVu5fd8XvmED429oMkNQwBjQ",
    ],
    video: ["zottydOvmMw"],
    description: "Até a falha",
    repeat: 14,
    sets: 4,
    muscles: ["Pernas"],
    kg: 14,
  },
  {
    uuid: "b356c344-6c92-40c1-8e03-ffd1bddaa29a",
    name: "Leg press 45°",
    images: [
      "https://s3assets.skimble.com/assets/2761477/image_full.jpg",
    ],
    video: ["zottydOvmMw"],
    description: "Até a falha",
    repeat: 12,
    sets: 4,
    muscles: ["Pernas"],
    kg: 14,
  },
  {
    uuid: "b356c314-6c92-40c1-8e03-ffd1bfdaa29a",
    name: "Cadeira extensora",
    images: [
      "https://treinomestre.com.br/wp-content/uploads/2016/08/cadeira-extensora-cp.jpg",
    ],
    video: ["zottydOvmMw"],
    description: "Até a falha",
    repeat: 15,
    sets: 3,
    muscles: ["Pernas"],
    kg: 14,
  },
  {
    uuid: "b376c344-6c92-40c1-8e03-ffd1bfdaa29a",
    name: "Cadeira ou Mesa flexora",
    images: [
      "https://i.pinimg.com/736x/7a/4f/d4/7a4fd472d6beeaea6a0e3a14b67f5bb6.jpg",
      "https://grandeatleta.com.br/blog/wp-content/uploads/2020/02/cadeira-flexora.jpg"
    ],
    video: ["zottydOvmMw"],
    description: "Até a falha",
    repeat: 15,
    sets: 3,
    muscles: ["Pernas"],
    kg: 14,
  },
  {
    uuid: "b356c344-6c92-40c1-8e03-f6d1bfdaa29a",
    name: "Elevação de gêmeos (panturrilha) em pé",
    images: [
      "https://www.hipertrofia.org/blog/wp-content/uploads/2023/03/lever-standing-calf-raise.gif",
      "https://ginasiovirtual.com/wp-content/uploads/2021/06/Extensao-de-gemeos-em-pe-com-halteres.jpg"
    ],
    video: ["zottydOvmMw"],
    description: "Até a falha",
    repeat: 20,
    sets: 4,
    muscles: ["Pernas"],
    kg: 14,
  },
  {
    uuid: "b356c044-6c92-40c1-8e03-ffd1bfdaa29a",
    name: "Stiff com barra (para posteriores de coxa)",
    images: [
      "https://www.hipertrofia.org/blog/wp-content/uploads/2023/04/barbell-straight-leg-deadlift.gif",
      "https://i.ytimg.com/vi/_6ElJLyBXcE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDCku5Ve-JcrpXLMD7adSNIu9_31A"
    ],
    video: ["zottydOvmMw"],
    description: "Até a falha",
    repeat: 12,
    sets: 3,
    muscles: ["Pernas"],
    kg: 14,
  },
  {
    uuid: "c56c044-6c92-40c1-8e03-ffd1bfdaa29a",
    name: "Desenvolvimento com halteres ou barra",
    images: [
      "https://www.hipertrofia.org/blog/wp-content/uploads/2020/10/desenvolvimento-halteres.jpg",
    ],
    video: ["zottydOvmMw"],
    description: "Até a falha",
    repeat: 12,
    sets: 4,
    muscles: ["Ombros"],
    kg: 14,
  },
  {
    uuid: "c256c044-6c92-40c1-8e03-ffd1bfdaa29a",
    name: "Elevação lateral com halteres",
    images: [
      "https://i.pinimg.com/736x/2e/c9/e7/2ec9e7fcac8df4dcdba82bcefdf38e62.jpg",
    ],
    video: ["zottydOvmMw"],
    description: "Até a falha",
    repeat: 15,
    sets: 3,
    muscles: ["Ombros"],
    kg: 14,
  },
  {
    uuid: "c346c044-6c92-40c1-8e03-ffd1bfdaa29a",
    name: "Elevação frontal com halteres",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK4SVvAij_ewi6J_TD2MCI8M7OVJlzRimmssr38PQMMKbW-NPf5kU1MJOY0C_LE2zDvp4&usqp=CAU",
    ],
    video: ["zottydOvmMw"],
    description: "Até a falha",
    repeat: 15,
    sets: 3,
    muscles: ["Ombros"],
    kg: 14,
  },
  {
    uuid: "c351c044-6c92-40c1-8e03-ffd1bfdaa29a",
    name: "Remada alta (desenvolvimento para trapézio)",
    images: [
      "https://treinototal.com.br/wp-content/uploads/2023/04/trapezio-1.jpg",
      "https://static.wixstatic.com/media/2edbed_cac8d7bcc6934a16ad3731ae0fc2c09b~mv2.webp/v1/fill/w_560,h_585,al_c,q_80,enc_auto/2edbed_cac8d7bcc6934a16ad3731ae0fc2c09b~mv2.webp"
    ],
    video: ["zottydOvmMw"],
    description: "Até a falha",
    repeat: 12,
    sets: 3,
    muscles: ["Ombros"],
    kg: 14,
  },
  {
    uuid: "c356c094-6c92-40c1-8e03-ffd1bfdaa29a",
    name: "Encolhimento com halteres (shrug)",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPdbbCM_sO5X4WlpZBvTMDIeRg9pQqjgbwmw&s",
    ],
    video: ["zottydOvmMw"],
    description: "Até a falha",
    repeat: 15,
    sets: 4,
    muscles: ["Ombros"],
    kg: 14,
  },
  {
    uuid: "t356c044-6c22-40c1-8e03-ffd1bfdaa21a",
    name: "Abdominal supra na máquina ou solo",
    images: [
      "https://lh3.googleusercontent.com/proxy/SXfetKLUrNcw8pRIEEEeJ6wLiKKSMERspir1RGVP-iaVckEKw1oeP9cCJFM3aAvldN4HIt9TWi9BAsqKO5eX7Fyo9enNPdUKR1nB4iA4NyxBpdLUu7N5e42HXdd97oRt7pG2pnEDXJiSrg",
      "https://grandeatleta.com.br/blog/wp-content/uploads/2023/12/abdominal-na-maquina.gif",
    ],
    video: ["zottydOvmMw"],
    description: "Até a falha",
    repeat: 12,
    sets: 3,
    muscles: ["Abdômen"],
    kg: 14,
  },
  {
    uuid: "t356c044-6c22-40c1-8e03-ffd1bfdaa22a",
    name: "Prancha abdominal",
    images: [
      "https://treinomestre.com.br/wp-content/uploads/2017/01/prancha-isometrica-abdominal.jpg",
    ],
    video: ["zottydOvmMw"],
    description: "Até a falha",
    repeat: 12,
    sets: 3,
    muscles: ["Abdômen"],
    kg: 14,
  },
  {
    uuid: "t356c044-6c22-40c1-8e03-ffd1bfdaa23a",
    name: "Elevação de pernas suspenso",
    images: [
      "https://www.lyfta.app/_next/image?url=https%3A%2F%2Flyfta.app%2Fimages%2Fexercises%2F08261101.png&w=640&q=10",
    ],
    video: ["zottydOvmMw"],
    description: "Até a falha",
    repeat: 12,
    sets: 3,
    muscles: ["Abdômen"],
    kg: 14,
  },
  {
    uuid: "t356c044-6c22-40c1-8e03-ffd1bfdaa25a",
    name: "Abdominal oblíquo (Russian twist)",
    images: [
      "https://treinomestre.com.br/wp-content/uploads/2020/02/exercicio-Russian-twist.gif",
    ],
    video: ["zottydOvmMw"],
    description: "Até a falha",
    repeat: 12,
    sets: 3,
    muscles: ["Abdômen"],
    kg: 14,
  },
  {
    uuid: "t356c044-6c22-40c1-8e03-ffd1bfdaa26a",
    name: "Cardio (esteira, bike ou elíptico)",
    images: [
      "https://treinomestre.com.br/wp-content/uploads/2023/10/melhores-aerobicos-para-perder-calorias.jpg",
    ],
    video: ["zottydOvmMw"],
    description: "Até a falha",
    repeat: 12,
    sets: 3,
    muscles: ["Abdômen"],
    kg: 14,
  },
];

const training = [
  {
    name: "Peito e Tríceps",
    uuid: "f5afe487-9a08-4fc5-994c-416d0970eb49",
    exercises: [
      "f5afe487-9a08-4fc5-994c-416d0970eb49",
      "9d8b720d-6331-49bd-a21f-6326d75b304a",
      "f672ef2d-6aa2-40e0-8755-c9b26d819df1",
      "e142216e-1880-4465-9bf0-0b62fafd5317",
      "bcd0d936-dfd1-4bd5-b47a-aaebcadbaae3",
      "6e196b68-1734-4567-835c-e464a90ac947",
    ],
  },
  {
    name: "Costas e Bíceps",
    uuid: "6e196b68-1734-4567-835c-e464a90ac947",
    exercises: [
      "38053eb7-6d8f-461a-8d9c-537a12b373bd",
      "f9d03744-35ec-4a03-9002-6f6d11cae639",
      "7c4eb281-c1b0-4316-858f-d7d96da78011",
      "84750c18-9054-4854-be46-3e480143667f",
      "6c9b2c55-6bbb-49d9-9eba-ed8e29bd433b",
      "b356c344-6c92-40c1-8e03-ffd1bfdaa29b",
    ],
  },

  {
    name: "Pernas",
    uuid: "b356c344-6c92-40c1-8e03-ffd1bfdaa29a",
    exercises: [
      "b356c344-6c92-40c1-8e03-ffd1bfdaa29a",
      "b356c344-6c92-40c1-8e03-ffd1bddaa29a",
      "b356c044-6c92-40c1-8e03-ffd1bfdaa29a",
      "b356c314-6c92-40c1-8e03-ffd1bfdaa29a",
      "b376c344-6c92-40c1-8e03-ffd1bfdaa29a",
      "b356c344-6c92-40c1-8e03-f6d1bfdaa29a",   
    ],
  },

  {
    name: "Ombros e Trapézio",
    uuid: "c56c044-6c92-40c1-8e03-ffd1bfdaa29a",
    exercises: [
        "c56c044-6c92-40c1-8e03-ffd1bfdaa29a",
        "c256c044-6c92-40c1-8e03-ffd1bfdaa29a",
        "c346c044-6c92-40c1-8e03-ffd1bfdaa29a",
        "c351c044-6c92-40c1-8e03-ffd1bfdaa29a",
        "c356c094-6c92-40c1-8e03-ffd1bfdaa29a",
    ],
  },
  {
    name: "Abdômen e Cardio",
    uuid: "t356c044-6c22-40c1-8e03-ffd1bfdaa21a",
    exercises: [
      "t356c044-6c22-40c1-8e03-ffd1bfdaa21a",
      "t356c044-6c22-40c1-8e03-ffd1bfdaa22a",
      "t356c044-6c22-40c1-8e03-ffd1bfdaa23a",
      "t356c044-6c22-40c1-8e03-ffd1bfdaa25a",
      "t356c044-6c22-40c1-8e03-ffd1bfdaa26a",
    ],
  },
];

export default function Send() {
  useEffect(() => {
    add("exercises", exercicio);
    add("training", training);
  });
  return <div>Adicionado</div>;
}
