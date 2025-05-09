
import "../App.css";
// eslint-disable-next-line react/prop-types
export const Card = ({ value,handleButton,active }) => {
  // eslint-disable-next-line react/prop-types
  const { question, answer } = value;





  return (
    <section className="w-full  flex justify-center mb-4 ">
      <div className="border box-shadow  border-l-teal-500     w-[50%] p-4  ">
        <div className="col-span-2 flex  justify-between ">
          <p className=" text-white text-[1.5rem] items-baseline">{question}</p>
          <button
            className={!active? "bg-blue-800 rounded-md h-8 w-14  cursor-pointer hover:text-white":"bg-red-800 rounded-md h-8 w-14  cursor-pointer hover:text-white"   }
            onClick={handleButton}
          >
            {active ? "close" : "Show"}
          </button>
        </div>
        <div className="mt-4">
          {active && <p className="text-white">{answer}</p>}
        </div>
      </div>
    </section>
  );
};
