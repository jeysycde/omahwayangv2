const MainSelectInput = (props) => {
  return (
    <>
      <div className="relative my-2">
        <select
          value={props.value}
          type={props.type}
          onChange={props.onChange}
          id={props.id}
          className={`rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent`}
          name={props.name}
          autoComplete={"off"}
          placeholder={props.placeholder}
        >
          {props.children}
        </select>
      </div>
    </>
  );
};
export default MainSelectInput;
