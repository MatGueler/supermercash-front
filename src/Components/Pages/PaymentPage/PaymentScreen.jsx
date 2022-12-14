import axios from "axios";

import Cards from "react-credit-cards-2";
import "react-credit-cards-2/es/styles-compiled.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";

import {
  CardBox,
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
import { DeployUrl } from "../../Services/MockServices";

export function PaymentScreen({
  quantifyProducts,
  totalValue,
  payment,
  setPayment,
}) {
  const [cardHolder, setCardHolder] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [CVC, setCVC] = useState("");
  const [expiry, setExpiry] = useState("");
  const [focused, setFocused] = useState("");
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
      .get(`${DeployUrl}/user/me`, config)
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
      expiry,
      password,
      quantifyProducts,
      purchaseValue: totalValue,
    };
    axios
      .post(`${DeployUrl}/payment`, body, config)
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
          <CardBox>
            <form onSubmit={FinalizePurchase}>
              <Input
                data-cy-id="CardHolder"
                placeholder="Titular do cartão"
                type="text"
                onChange={(e) => {
                  setCardHolder(e.target.value);
                }}
                onFocus={(e) => {
                  setFocused("name");
                }}
                value={cardHolder}
                maxLength={15}
                disabled={disable}
              />
              <Input
                data-cy-id="CardNumber"
                placeholder="Número do cartão"
                type="text"
                onChange={(e) => {
                  setCardNumber(e.target.value);
                }}
                onFocus={(e) => {
                  setFocused("number");
                }}
                value={cardNumber}
                maxLength={16}
                disabled={disable}
              />
              <Input
                data-cy-id="CVC"
                placeholder="CVC"
                type="text"
                onChange={(e) => {
                  setCVC(e.target.value);
                }}
                onFocus={(e) => {
                  setFocused("cvc");
                }}
                value={CVC}
                maxLength={3}
                disabled={disable}
              />
              <Input
                data-cy-id="expiry"
                placeholder="Expiry"
                type="text"
                onChange={(e) => {
                  setExpiry(e.target.value);
                }}
                onFocus={(e) => {
                  setFocused("expiry");
                }}
                value={expiry}
                maxLength={4}
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
            <div className="CardRenderBox">
              <Cards
                cvc={CVC}
                expiry={expiry}
                focused={focused}
                name={cardHolder}
                number={cardNumber}
              />
            </div>
          </CardBox>
        </PaymentBox>
      </PaymentContainer>
    </>
  );
}

export default PaymentScreen;
