import Booth from "@/pages/booth/ui/Booth";
import World from "@/pages/World/ui/World";

export default function Home() {
    return (
        <div className="grid place-items-center min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <World />
          {/* <Booth /> */}
        </div>
  );
}
