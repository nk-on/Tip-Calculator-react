import Form from "../form/form";
import PercentageButton from "../percentageButton/PercentageButton";
import DataContainer from "../dataContainer/dataContainer";
import { useRef, useState } from "react";
import ResetButton from "../resetButton/resetButton";
import CustomForm from "../customForm/customForm";
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
  const [bill, setBill] = useState<string>("");
  const [people, setPeople] = useState< string>("");
  const percentage = useRef<number>(0);
  const [tipAmount, setTipAmount] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  return (
    <div className="flex px-[15px] bg-[#fff] w-custom h-[481px] rounded-[15px]">
      <div className="content-center	border border-red w-[50%] h-full">
        <Form
          title={"Bill"}
          bill={bill}
          people={people}
          setBill={setBill}
          setPeople={setPeople}
        />
        <p>Select tip</p>
        <div className="grid grid-cols-3 gap-[5px]">
          {buttons.map((button) => {
            percentage.current = button.percentage;
            return (
              <PercentageButton
                key={button.id}
                percentage={percentage.current}
                bill={bill}
                people={people}
                setTipAmount={setTipAmount}
                setTotalAmount={setTotalAmount}
              />
            );
          })}
          <CustomForm
            bill={bill}
            people={people}
            setTipAmount={setTipAmount}
            setTotalAmount={setTotalAmount}
          />
        </div>
        <Form
          title={"Amount of People"}
          bill={bill}
          people={people}
          setBill={setBill}
          setPeople={setPeople}
        />
      </div>
      <div className="w-[50%] h-[70%] mt-[10%]	">
        <div className="w-full h-full bg-[#01484d] rounded-[10px]   flex flex-col justify-around items-center">
          <DataContainer title={"Tip amount"} amount={tipAmount} />
          <DataContainer title={"Total amount"} amount={totalAmount} />
          <ResetButton
            setTipAmount={setTipAmount}
            setTotalAmount={setTotalAmount}
            setBill={setBill}
            setPeople={setPeople}
          />
        </div>
      </div>
    </div>
  );
}
