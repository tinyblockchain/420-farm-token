import { newContextComponents } from "@drizzle/react-components"
const { AccountData, ContractData, ContractForm } = newContextComponents;
export default function Main({ drizzle, drizzleState }) {
    // destructure drizzle and drizzleState from props
    return (
      <div className="App">
        <div className="section">
          <h2>Active Account</h2>
          <AccountData
            drizzle={drizzle}
            drizzleState={drizzleState}
            accountIndex={0}
            units="ether"
            precision={3}
          />
        </div>
  
        <div className="section">
          <h2>420-Farm Token</h2>
          <p>
            <strong>Total Supply: </strong>
            <ContractData
              drizzle={drizzle}
              drizzleState={drizzleState}
              contract="TutorialToken"
              method="totalSupply"
              methodArgs={[{ from: drizzleState.accounts[0] }]}
            />{" "}
            <ContractData
              drizzle={drizzle}
              drizzleState={drizzleState}
              contract="TutorialToken"
              method="symbol"
              hideIndicator
            />
          </p>
          <p>
            <strong>My Balance: </strong>
            <ContractData
              drizzle={drizzle}
              drizzleState={drizzleState}
              contract="TutorialToken"
              method="balanceOf"
              methodArgs={[drizzleState.accounts[0]]}
            />
          </p>
          <h3>Send Tokens</h3>
          <ContractForm
            drizzle={drizzle}
            contract="TutorialToken"
            method="transfer"
            labels={["To Address", "Amount to Send"]}
          />
        </div>
      </div>
    );
  };
  