import { useState } from 'react';

interface propType {
  currentPercentage: React.MutableRefObject<number>;
  people: number | string;
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  bill: number | string;
  title: string;
  setBill: React.Dispatch<React.SetStateAction<string>>;
  setPeople: React.Dispatch<React.SetStateAction<string>>;
  setTipAmount: React.Dispatch<React.SetStateAction<number>>;
  setTotalAmount: React.Dispatch<React.SetStateAction<number>>;
}
export default function Form({ ...formProps }: propType) {
  const {
    currentPercentage,
    title,
    bill,
    people,
    error,
    setError,
    setBill,
    setPeople,
    setTipAmount,
    setTotalAmount,
  } = formProps;
  function reCalculate(bill: number):void {
    if (currentPercentage.current !== 0) {
      setTipAmount((bill * currentPercentage.current) / 100);
      setTotalAmount(
        ((bill * currentPercentage.current) / 100) * Number(people)
      );
      // return;
    }
  }
  function setErrorMessage(value:string):boolean {
    if (Number(value) <= 0) {
      setError(true);
      return true;
    } else {
      setError(false);
    }
    return false;
  }
  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-between w-[80%]">
          {title}
          <div className="text-[#FF0000]">{error && 'Error'}</div>
        </div>
        <input
          type="number"
          className={`w-[80%] h-[50px] bg-[#c4e4e6]`}
          onChange={(event) => {
            if (formProps.title === 'Bill') {
              setBill(event.target.value);
              if(setErrorMessage(event.target.value)){
                return;
              }
              reCalculate(Number(event.target.value));
            } else {
              setPeople(event.target.value);
              if(setErrorMessage(event.target.value)){
                return;
              }
              reCalculate(Number(event.target.value));
            }
          }}
          value={title === 'Bill' ? bill : people}
        />
      </div>
    </>
  );
}
