"use client";

export const Heading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1
      className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text mb-12"
      style={{
        backgroundImage:
          "linear-gradient(135deg, var(--primary), var(--secondary))",
      }}
    >
      {children}
    </h1>
  );
};
