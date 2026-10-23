import { Check, User, List } from "lucide-react";

const ideas = [
  {
    icon: Check,
    title: "Facilita el trabajo",
    text: "Menos tareas manuales para los equipos técnicos e información clara para decidir.",
  },
  {
    icon: User,
    title: "IA con revisión experta",
    text: "La IA propone; el equipo experto valida.",
  },
  {
    icon: List,
    title: "Trazabilidad completa",
    text: "Cada decisión queda registrada y lista para auditoría.",
  },
];

export function ThreeIdeas() {
  return (
    <section className="border-y border-[rgba(157,176,164,0.15)] bg-[#050A07]">
      <div className="mx-auto flex max-w-[1240px] flex-wrap gap-10 px-6 py-14">
        {ideas.map((idea) => (
          <div
            key={idea.title}
            className="home-reveal flex min-w-[260px] flex-1 gap-4"
          >
            <idea.icon
              aria-hidden="true"
              size={32}
              strokeWidth={1.6}
              className="shrink-0 text-[#4ADE80]"
            />
            <div>
              <h3 className="text-xl font-semibold text-[#ECF3EE]">
                {idea.title}
              </h3>
              <p className="mt-1 text-[15px] text-[#9DB0A4]">{idea.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
