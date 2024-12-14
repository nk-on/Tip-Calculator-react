import Form from "../form/form";
import PercentageButton from "../percentageButton/PercentageButton";
import DataContainer from "../dataContainer/dataContainer";
import { useState } from "react";
export default function Container() {
  const buttons = [
    {
      id: 1,
      percentage: 5,
    },
    {
      id: 2,
      percentage: 10,
    },
    {
      id: 3,
      percentage: 15,
    },
    {
      id: 4,
      percentage: 20,
    },
    {
      id: 5,
      percentage: 25,
    },
  ];
  const [bill, setBill] = useState<number>(0);
  const [people, setPeople] = useState<number>(0);
  const [percentage, setPercentage] = useState<number>(0);
  const [tipAmount, setTipAmount] = useState<number>(0);
  const [amountPerPerson, setamountPerPerson] = useState<number>(0);
  return (
    <div className="flex px-[15px] bg-[#fff] w-custom h-[481px] rounded-[15px]">
      <div className="content-center	border border-red w-[50%] h-full">
        <Form title={"Bill"} setBill={setBill} setPeople={setPeople} />
        <p>Select tip</p>
        <div className="grid grid-cols-3 gap-[5px]">
          {buttons.map((button) => {
            return (
              <PercentageButton
                key={button.id}
                percentage={button.percentage}
                setPercentage={setPercentage}
                bill = {bill}
                people = {people}
                setTipAmount = {setTipAmount}
              />
            );
          })}
        </div>
        <Form
          title={"Amount of People"}
          setBill={setBill}
          setPeople={setPeople}
        />
      </div>
      <div className="w-[50%] h-[70%] mt-[10%]">
        <div className="w-full h-full bg-[#01484d] rounded-[10px] content-center">
          <DataContainer title={"Tip amount"} amount={tipAmount} />
          <DataContainer title={"Total amount"} amount={amountPerPerson} />
        </div>
      </div>
    </div>
  );
}
