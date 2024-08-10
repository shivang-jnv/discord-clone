const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex bg-red-100 h-full items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;
