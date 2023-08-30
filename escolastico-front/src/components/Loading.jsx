import { Hourglass } from "react-loader-spinner";

export const Loading = () => {
  return (
    <div className="grid place-items-center h-screen w-full bg-gray-200">
      <Hourglass
        visible={true}
        height="100"
        width="100"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["#306cce", "#72a1ed"]}
      />
    </div>
  );
};
