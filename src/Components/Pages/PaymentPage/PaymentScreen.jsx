import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";

import {
  CloseButton,
  ItensBox,
  PaymentBox,
  PaymentContainer,
  TotalValueBox,
} from "./PaymentStyle";

import { Input } from "../../Input/InputSyle";
import { Button } from "../../Button/ButtonSyle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function PaymentScreen({
  quantifyProducts,
  totalValue,
  payment,
  setPayment,
}) {
  const [cardHolder, setCardHolder] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [CVC, setCVC] = useState("");
  const [password, setPassword] = useState("");

  const [disable, setDisable] = useState(false);

  let navigate = useNavigate();

  function getUserInfo() {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get(`http://localhost:5000/user/me`, config)
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("token", response.data.accessToken);
        }
      })
      .catch((error) => {
        navigate("/");
        console.error(error);
      });
  }

  function FinalizePurchase(event) {
    event.preventDefault();
    setDisable(true);
    getUserInfo();
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const body = {
      cardHolder,
      cardNumber,
      CVC,
      password,
      quantifyProducts,
      purchaseValue: totalValue,
    };
    axios
      .post(`http://localhost:5000/payment`, body, config)
      .then((response) => {
        setPayment(!payment);
      })
      .catch((error) => {
        alert(error.response.data);
        setDisable(false);
        console.error(error);
      });
  }

  return (
    <>
      <PaymentContainer>
        <PaymentBox>
          <h3>Preecha os dados</h3>
          <CloseButton
            onClick={() => {
              setPayment(!payment);
            }}
          >
            <FontAwesomeIcon icon={faRectangleXmark} size="2x" />
          </CloseButton>
          <form onSubmit={FinalizePurchase}>
            <Input
              data-cy-id="CardHolder"
              placeholder="Titular do cartão"
              type="text"
              onChange={(e) => {
                setCardHolder(e.target.value);
              }}
              value={cardHolder}
              disabled={disable}
            />
            <Input
              data-cy-id="CardNumber"
              placeholder="Número do cartão"
              type="text"
              onChange={(e) => {
                setCardNumber(e.target.value);
              }}
              value={cardNumber}
              disabled={disable}
            />
            <Input
              data-cy-id="CVC"
              placeholder="CVC"
              type="text"
              onChange={(e) => {
                setCVC(e.target.value);
              }}
              value={CVC}
              disabled={disable}
            />
            <Input
              data-cy-id="Password"
              placeholder="Senha da conta"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              disabled={disable}
            />
            <ItensBox>
              <h4>{quantifyProducts} itens</h4>
              <TotalValueBox>
                <p>Total:</p>
                <p>R$ {totalValue}</p>
              </TotalValueBox>
            </ItensBox>
            <Button color="#e92020">Finalizar compra</Button>
          </form>
        </PaymentBox>
      </PaymentContainer>
    </>
  );
}

export default PaymentScreen;
