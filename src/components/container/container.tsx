import DataContainer from "../dataContainer/dataContainer";
import { useState,useRef} from "react";
import ResetButton from "../resetButton/resetButton";
import FormSection from "../FormSection/FormSection";
export default function Container() {
  const [bill, setBill] = useState<string>("");
  const [people, setPeople] = useState<string>("");
  const [tipAmount, setTipAmount] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const currentPercentage = useRef(0);
  const [error,setError] = useState(false);
  const formSectionObj = {
    title:{billTitle:"Bill",peopleTitle:"Amount of people"},
    bill: bill,
    error,
    setError,
    people: people,
    currentPercentage:currentPercentage,
    setBill: setBill,
    setPeople: setPeople,
    setTipAmount: setTipAmount,
    setTotalAmount: setTotalAmount,
  };
  const resetButtonProps = {
    currentPercentage:currentPercentage,
    setTipAmount:setTipAmount,
    setError:setError,
    setTotalAmount:setTotalAmount,
    setBill:setBill,
    setPeople:setPeople
  }
  return (
    <div className="flex flex-col  items-center px-[15px] bg-[#fff] py-2.5 w-custom min-h-[481px] rounded-[15px] gap-[30px] md:flex-row md:h-[481px]">
      <FormSection {...formSectionObj}/>
      <div className="w-[90%] h-[80%] mt-[10%] md:w-[50%]">
        <div className="h-full bg-[#01484d] rounded-[10px]   flex flex-col justify-around items-center">
          <DataContainer title={"Tip amount"} amount={tipAmount} />
          <DataContainer title={"Total amount"} amount={totalAmount} />
          <ResetButton
           {...resetButtonProps}
          />
        </div>
      </div>
    </div>
  );
}
