import { useWeb3React } from "@web3-react/core";
import React, { useEffect, useState } from "react";

import { Wrapper } from "./HomePageStyles";

import { getCounter } from "../../utils/getCounter";
import { incrementCounter } from "../../utils/incrementCounter";
import ConnectWalletPage from "../ConnectWalletPage/ConnectWalletPage";

function HomePage() {
  const { connector } = useWeb3React();

  const [counter, setCounter] = useState<number>();

  async function fetchCounter() {
    const counter = await getCounter();

    setCounter(counter.toNumber());
  }

  useEffect(() => {
    fetchCounter();
  });

  return (
    <Wrapper>
      <p>Current count: {counter}</p>
      <button onClick={() => incrementCounter(connector!)}>
        Increment counter
      </button>
      <ConnectWalletPage />
    </Wrapper>
  );
}

export default HomePage;
