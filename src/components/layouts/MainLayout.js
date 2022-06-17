export const MainLayout = props => {
  const { children } = props;

  return (
    <div className="transition duration-200 ease-in-out bg-slate-900">
      <div className="justify-center items-center flex flex-col min-w-screen min-h-screen flex-grow">
        {children}
      </div>
    </div>
  );
};
