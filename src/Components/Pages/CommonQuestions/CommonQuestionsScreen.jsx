// *Hooks
import axios from "axios";
import { useNavigate } from "react-router-dom";
import config from "../../Services/config";

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
    getAllQuestionsAnswers();
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

  function getAllQuestionsAnswers() {
    axios
      .get(`${DeployUrl}/questions`)
      .then((response) => {
        setLoading(true);
        setQuestions(response.data);
      })
      .catch((error) => {
        navigate("/");
        console.error(error);
      });
  }

  function CreateNewQuestion() {
    setDisable(!disable);
    const token = localStorage.getItem("token");
    const body = { question: newQuestion };
    axios
      .post(`${DeployUrl}/questions`, body, config(token))
      .then((response) => {
        setLoading(true);
        getAllQuestionsAnswers();
        setDisable(!disable);
      })
      .catch((error) => {
        alert("Não foi possível realizar a pergunta!");
        console.error(error);
        setDisable(!disable);
      });
  }

  function RenderQuestion({ question }) {
    return (
      <Question>
        <h1>{question.question}</h1>
        <h2>R: {question.answers}</h2>
        <ReactionsButtons>
          <button>
            <FontAwesomeIcon icon={faThumbsUp} />
            {question.likes}
          </button>
          <button>
            <FontAwesomeIcon icon={faThumbsDown} />
            {question.dislikes}
          </button>
        </ReactionsButtons>
      </Question>
    );
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
                  <form onSubmit={CreateNewQuestion}>
                    <Input
                      placeholder="Escreva sua pergunta"
                      onChange={(e) => {
                        setNewQuestion(e.target.value);
                      }}
                      value={newQuestion}
                      disabled={disable}
                    />
                    <Button color="#000000" disabled={disable}>
                      Perguntar
                    </Button>
                  </form>
                </NewQuestionBox>
              ) : (
                ""
              )}
              {questions.length !== 0 ? (
                questions.map((question, index) => {
                  return <RenderQuestion key={index} question={question} />;
                })
              ) : (
                <h2>Não existem perguntas ainda</h2>
              )}
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
