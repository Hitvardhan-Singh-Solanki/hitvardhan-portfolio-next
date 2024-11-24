"use client";

export const Heading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1
      className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text mb-10"
      style={{
        backgroundImage:
          "linear-gradient(to right, var(--secondary), var(--tertiary))",
      }}
    >
      {children}
    </h1>
  );
};
