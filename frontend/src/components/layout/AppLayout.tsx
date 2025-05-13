export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <main className="flex-1">{children}</main>
    </div>
  );
};