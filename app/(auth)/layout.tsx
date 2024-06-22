export default function ({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="bodrer-b p-1 text-center">
        20 % off fot the next three days
      </div>
      {children}
    </>
  );
}
