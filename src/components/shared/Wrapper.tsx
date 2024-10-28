const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="px-4 max-w-full sm:px-0 sm:max-w-[1180px] mx-auto my-8 sm:my-16 ">
      {children}
    </div>
  );
};

export default Wrapper;
