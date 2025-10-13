"use client";

export const Footer = () => {
  return (
    <footer className="bg-[var(--background)] opacity-70 text-[var(--foreground)] py-3 fixed bottom-0 z-10 w-full">
      <div className="container mx-auto px-4">
        {/* Mobile - Simple centered text */}
        <div className="md:hidden text-center">
          <p className="text-sm">Made with ❤️ by Hitvardhan</p>
        </div>

        {/* Desktop - Centered text */}
        <div className="hidden md:block text-center">
          <p className="text-sm">Made with ❤️ by Hitvardhan</p>
        </div>
      </div>
    </footer>
  );
};
