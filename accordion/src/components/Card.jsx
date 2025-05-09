import "../App.css";
// eslint-disable-next-line react/prop-types
export const Card = ({ value }) => {
  // eslint-disable-next-line react/prop-types
  const { question, answer } = value;
  return (
    <section className="w-full flex justify-center mb-4 ">
      <div className="border box-shadow  border-l-teal-500 grid grid-cols-2     w-[50%] p-4  ">
        <div className="col-span-2 flex  justify-between">
          <p className=" text-white text-[1.5rem] items-baseline">{question}</p>
          <button className="bg-blue-800 rounded-md h-8 w-14  cursor-pointer hover:text-white ">
            Show
          </button>
        </div>
        <div className="mt-4">
          <p className="text-white">{answer}</p>
        </div>
      </div>
    </section>
  );
};
