export const Footer = () => {
  return (
    <footer className="bg-[var(--background)] opacity-70 text-[var(--foreground)] py-3 fixed bottom-0 z-10 w-full">
      <div className="container mx-auto px-4">
        {/* Mobile - Simple centered text */}
        <div className="md:hidden text-center">
          <p className="text-sm">Made with ❤️ by Hitvardhan</p>
        </div>

        {/* Desktop - Flex layout with credit */}
        <div className="hidden md:flex items-center justify-between">
          {/* Left spacer */}
          <div className="flex-1"></div>

          {/* Center content */}
          <p className="text-center flex-1">Made with ❤️ by Hitvardhan</p>

          {/* Right - Photo credit */}
          <div className="flex-1 flex justify-end">
            <p className="text-xs opacity-60">
              Background photo by{" "}
              <a
                href="https://unsplash.com/@gargiulo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--primary)] hover:underline"
              >
                Peter Gargiulo
              </a>{" "}
              on{" "}
              <a
                href="https://unsplash.com/photos/a-black-and-white-photo-of-a-dark-background-cGNCepznaV8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--primary)] hover:underline"
              >
                Unsplash
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
