
export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="cta-card w-fit h-fit p-12">
        <h1 className="font-product text-5xl leading-tight font-bold w-[24ch] h-fit">
          advocating <span className="gradient-text">modern technologies</span> and learnings, among students
        </h1>
        <div className="my-8" />
        <div className="flex flex-row items-center justify-start gap-4">
          <button className="px-4 py-2 rounded-full text-sm font-product font-normal border-2
            bg-white text-black border-transparent
            hover:bg-black hover:text-white hover:border-white
          ">
            See past experiments
          </button>
          <button className="px-4 py-2 rounded-full text-sm font-product font-normal
            gradient text-white border-transparent">
              Want a session?
          </button>
        </div>
      </div>
    </section>
  )
}