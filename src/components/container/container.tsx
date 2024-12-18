
import DataContainer from "../dataContainer/dataContainer";
import {  useState } from "react";
import ResetButton from "../resetButton/resetButton";
import FormSection from "../FormSection/FormSection";
export default function Container() {
  const [bill, setBill] = useState<string>("");
  const [people, setPeople] = useState< string>("");
  const [tipAmount, setTipAmount] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  return (
    <div className="flex px-[15px] bg-[#fff] w-custom h-[481px] rounded-[15px]">
      <FormSection bill = {bill} people={people} setBill={setBill} setPeople={setPeople} setTipAmount={setTipAmount} setTotalAmount={setTotalAmount} />
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
