import { PaymentBox, PaymentContainer, TotalValueBox } from "./PaymentStyle";

import { Input } from "../../Input/InputSyle";
import { Button } from "../../Button/ButtonSyle";

export function PaymentScreen({ totalValue, payment, setPayment }) {
  return (
    <>
      <PaymentContainer
        onClick={() => {
          setPayment(!payment);
        }}
      >
        <PaymentBox>
          <h3>Preecha os dados</h3>
          <form>
            <Input placeholder="Titular do cartão" />
            <Input placeholder="Número do cartão" />
            <Input placeholder="CVC" />
            <Input placeholder="Senha da conta" />
            <TotalValueBox>
              <p>Total:</p>
              <p>R$ {totalValue}</p>
            </TotalValueBox>
            <Button
              color="#e92020"
              onClick={() => {
                setPayment(!payment);
              }}
            >
              Finalizar compra
            </Button>
          </form>
        </PaymentBox>
      </PaymentContainer>
    </>
  );
}

export default PaymentScreen;
