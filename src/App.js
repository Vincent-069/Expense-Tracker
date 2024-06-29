import styled from "styled-components";
import bg from './img/bg.png'
import { MainLayout } from "./styles/Layout";
import Navigation from "./components/Navigation/Navigation";
import { useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Incomes from "./components/Incomes/Incomes";
import Expenses from "./components/Expenses/Expenses";

function App() {

  const [active,setActive] = useState(1);

  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard/>
      case 2:
        return <Dashboard/>
      case 3:
        return <Incomes/>
      case 4:
        return <Expenses/>
      default:
        return <Dashboard/>
    }
  }

  return (
    <AppStyled bg={bg} className="App">
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background:black;
  position: relative;
  main{
    flex: 1;
    background: #66FCF1;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar{
      width: 0;
    }
  }
`;


export default App;
