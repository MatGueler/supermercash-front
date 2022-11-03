import {
  BootBox,
  ChatBox,
  CloseButton,
  HeaderQuestion,
  QuestionBox,
} from "./BootStyle";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";

import avatar from "../../Assets/Image/avatar.png";
import { useState } from "react";

function BootComponent() {
  const [BootChat, setBootChat] = useState(false);
  return (
    <>
      {BootChat ? (
        <ChatBox>
          <CloseButton
            onClick={() => {
              setBootChat(!BootChat);
            }}
          >
            <FontAwesomeIcon icon={faRectangleXmark} size="1x" />
          </CloseButton>
          <div className="Questions">
            <QuestionBox>
              <HeaderQuestion>
                <img src={avatar} alt="" />
                <p>Selecione o assunto da sua dúvida?</p>
              </HeaderQuestion>
              <div className="ButtonAnswerBox">
                <button>Pagamentos</button>
                <button>Compras</button>
                <button>Atendente</button>
                <button>Boleto</button>
                <button>Sobre a conta</button>
              </div>
            </QuestionBox>
          </div>
        </ChatBox>
      ) : (
        <BootBox
          onClick={() => {
            setBootChat(true);
          }}
        >
          <img src={avatar} alt="" />
          <h1>Olá, posso te ajudar?</h1>
        </BootBox>
      )}
    </>
  );
}

export default BootComponent;
