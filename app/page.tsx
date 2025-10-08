import Hero from "@/components/hero/hero";
import Technology from "@/components/technology/technology";
import "./page.scss";

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <Technology />
    </div>
  );
}
