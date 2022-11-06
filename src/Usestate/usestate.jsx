import React, { useState } from 'react';

function Usestate() {
  // Объявление переменной состояния, которую мы назовём "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Вы кликнули {count} раз</p>
      <button onClick={() => setCount(count + 1)}>
      Ko'paytirish
      </button>
      <button onClick={() => setCount(count - 1)}>Kamaytirish</button>
      <button onClick={() => setCount(count-count)}>Qayta boshlash</button>
    </div>
  );
}
export default Usestate;