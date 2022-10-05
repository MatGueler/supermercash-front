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

  function FinalizePurchase(event) {
    event.preventDefault();
    const body = { cardHolder, cardNumber, CVC, password };
    console.log(body);
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
              placeholder="Titular do cartão"
              type="text"
              onChange={(e) => {
                setCardHolder(e.target.value);
              }}
              value={cardHolder}
              disabled={disable}
            />
            <Input
              placeholder="Número do cartão"
              type="text"
              onChange={(e) => {
                setCardNumber(e.target.value);
              }}
              value={cardNumber}
              disabled={disable}
            />
            <Input
              placeholder="CVC"
              type="text"
              onChange={(e) => {
                setCVC(e.target.value);
              }}
              value={CVC}
              disabled={disable}
            />
            <Input
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
