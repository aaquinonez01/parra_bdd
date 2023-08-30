import Sidebar from "../components/Sidebar";

export const EscolasticoLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="flex-1 overflow-y-auto bg-gray-100">
        <div className="mx-4 my-8">{children}</div>
      </div>
    </div>
  );
};
