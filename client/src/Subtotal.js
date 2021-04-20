import React,
{
  useState,
  useEffect,
} from 'react';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css';
import {
  useStateValue,
} from './StateProvider';

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let tot = 0;
    let i = 0;
    if (basket.length > 0) {
      for (i; i < basket.length; i++) {
        tot += basket[i].price
      }
      setTotal(tot);
    }
  }, [basket])

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items):
              <strong>
                {value}
              </strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={total}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal;