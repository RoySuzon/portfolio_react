import HeroImg from "@/assets/images/hero.webp";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="text-4xl lg:text-5xl font-medium text-white max-w-xl">
          Developer, Problem Solver, Innovator
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          {/* Image */}
          <div className="relative mb-6 sm:mb-0">
            <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
              <img
                src={HeroImg}
                alt="Goutom Roy Developer Illustration"
                className="rounded-[15px] shadow block"
                width={1207}
                height={929}
              />
            </div>
          </div>

          {/* About Text */}
          <div className="relative space-y-4">
            <p className="text-white">
              Hello! I'm <span className="font-bold">Goutom Roy</span>, a dedicated Flutter mobile app developer
              with a focus on clean architecture, Riverpod state management, and
              building scalable, maintainable applications.
            </p>

            <p className="text-white">
              Over the last 3 years, I've crafted mobile and web solutions integrating
              Firebase, Node.js backends, PostgreSQL databases, and complex REST API systems.
              I enjoy solving challenging problems, writing clean code, and continuously
              learning new technologies to improve my skillset.
            </p>

            <p className="text-white">
              My approach is practical and results-oriented. I strive to deliver
              high-quality, maintainable applications while mentoring and supporting
              fellow developers whenever possible.
            </p>

            <div className="pt-6">
              <blockquote className="border-l-4 border-gray-300 pl-4">
                <p className="text-white italic">
                  "Clean code is not just about writing code that works—it's about
                  writing code that lasts, scales, and inspires others to build better software."
                </p>

                <div className="mt-6 space-y-3">
                  <cite className="block font-medium text-white">— Goutom Roy</cite>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}