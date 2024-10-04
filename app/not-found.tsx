import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen container mx-auto">
      <h1 className="text-4xl font-bold">Oops! looks like you are lost</h1>
      <p className="text-lg">
        Do you want to go back to the content or stay in the abyss of
        nothingness?
      </p>
      <div className="flex items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-block bg-foreground text-background px-4 py-2 rounded-md font-medium hover:bg-foreground/50 transition-all"
        >
          Go back Home!
        </Link>
      </div>
    </div>
  );
}
