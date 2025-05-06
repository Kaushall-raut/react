export const Input = () => {
  return (
    <div className="w-[100%] flex justify-center items-start gap-9  md:gap-[1] sm:w-50% p-2 mb-12">
      <input
        type="text"
        placeholder="....write title"
        className="input input-primary placeholder:text-[1.2rem]"
      />
      <input
        type="text"
        placeholder="....write post"
        className="input input-primary  placeholder:text-[1.2rem]"
      />
      <button className="btn btn-soft btn-primary inline w-[6rem]">Add</button>
      {/* <Button variant="contained" size="large">
      Primary
    </Button>     it is component from material ui*/}
    </div>
  );
};
