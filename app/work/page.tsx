import { IoWarning } from "react-icons/io5";
export default function Work() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center gap-4">
          <div className="flex flex-col items-center justify-center">
            <IoWarning className="text-6xl text-[--foreground]" />
            <h2 className="text-2xl font-bold">Work In Progress</h2>
            <p className="text-lg">
              This page is currently under construction. Please check back
              later.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
