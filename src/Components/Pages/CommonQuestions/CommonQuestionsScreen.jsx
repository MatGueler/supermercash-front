// *Hooks
import axios from "axios";
import { useNavigate } from "react-router-dom";

// *Components
import {
  Main,
  LoadingBox,
  QuestionsBox,
  Question,
  ReactionsButtons,
  NewQuestionBox,
  TitleQuestion,
} from "./CommonQuestionsStyle";
import { Container } from "../../Container/ContainerStyle";
import { Button } from "../../Button/ButtonSyle";
import { Input } from "../../Input/InputSyle";

//  * Icons

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faThumbsDown,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

// *Image
import { useState } from "react";
import Header from "../../Header/Header";
import { useEffect } from "react";
import Loading from "../../Loading/Loading";
import { DeployUrl } from "../../Services/MockServices";

function CommonQuestions() {
  const navigate = useNavigate();

  const [newQuestion, setNewQuestion] = useState("");

  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);
  const [userInfo, setUserInfo] = useState("");
  const [updatePage, setUpdatePage] = useState(true);
  const [makeQuestion, setMakeQuestion] = useState(false);

  useEffect(() => {
    getUserInfo();
  }, [updatePage]);

  function getUserInfo() {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`${DeployUrl}/user/me`, config)
      .then((response) => {
        setLoading(true);
        if (response.data.accessToken) {
          localStorage.setItem("token", response.data.accessToken);
        }
        setUserInfo(response.data.userInfo);
      })
      .catch((error) => {
        navigate("/");
        console.error(error);
      });
  }

  return (
    <>
      {loading ? (
        <Container>
          <Header userInfo={userInfo} />
          <Main>
            <QuestionsBox>
              <TitleQuestion>
                <h3>Perguntas frequentes</h3>
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  onClick={() => {
                    setMakeQuestion(!makeQuestion);
                  }}
                />
              </TitleQuestion>
              {makeQuestion ? (
                <NewQuestionBox>
                  <form onSubmit="{}">
                    <Input
                      placeholder="Escreva sua pergunta"
                      onChange={(e) => {
                        setNewQuestion(e.target.value);
                      }}
                      value={newQuestion}
                      disabled={disable}
                    />
                    <Button
                      color="#000000"
                      disabled={disable}
                      onClick={() => setDisable(!disable)}
                    >
                      Perguntar
                    </Button>
                  </form>
                </NewQuestionBox>
              ) : (
                ""
              )}
              <Question>
                <h1>Pergunta</h1>
                <h2>R: Resposta</h2>
                <ReactionsButtons>
                  <button>
                    <FontAwesomeIcon icon={faThumbsUp} />
                    10
                  </button>
                  <button>
                    <FontAwesomeIcon icon={faThumbsDown} />1
                  </button>
                </ReactionsButtons>
              </Question>
            </QuestionsBox>
          </Main>
        </Container>
      ) : (
        <LoadingBox>
          <Loading
            width="100"
            height="100"
            color="#000000"
            secondColor="#000000"
          />
        </LoadingBox>
      )}
    </>
  );
}

export default CommonQuestions;
