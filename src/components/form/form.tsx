interface propType {
  currentPercentage: React.MutableRefObject<number>;
  people: number | string;
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
    setBill,
    setPeople,
    setTipAmount,
    setTotalAmount,
  } = formProps;
  function reCalculate(bill: number) {
    if (currentPercentage.current !== 0) {
      console.log((bill * currentPercentage.current) / 100);
      setTipAmount((bill * currentPercentage.current) / 100);
      setTotalAmount(
        ((bill * currentPercentage.current) / 100) * Number(people)
      );
      // return;
    }
  }
  return (
    <>
      <div className="flex flex-col">
        {title}
        <input
          type="number"
          className="w-[80%] h-[50px] bg-[#c4e4e6]"
          onChange={(event) => {
            if (formProps.title === 'Bill') {
              setBill(event.target.value);
              reCalculate(Number(event.target.value));
            } else {
              setPeople(event.target.value);
              reCalculate(Number(event.target.value));
            }
          }}
          value={title === 'Bill' ? bill : people}
        />
      </div>
    </>
  );
}
