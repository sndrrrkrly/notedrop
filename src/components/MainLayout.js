export const MainLayout = props => {
  const { children } = props;

  return (
    <div className="transition duration-200 ease-in-out bg-gray-900">
      <div className="flex-grow">
        {children}
      </div>
    </div>
  );
};
