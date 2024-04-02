const LandingPage = () => {
  return (
    <div className="w-screen h-auto text-center">
      <div className="p-8 col-start-1 col-span-full font-roboto-condensed typing-container">
        <span className="typing-text">brainsplat.</span>
        <span className="typing-caret p-0 mt-0">I</span>
      </div>
      <div>
        <div className="relative inline-flex group">
          <div
            className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
          </div>
          <button
            className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          > start sharing
          </button>
        </div>
        <h1 className="text-white text-3xl font-roboto-condensed pt-8 pb-4">free your mind.</h1>
        <p className="text-white text-lg font-roboto-condensed pt-2 m-8">A place to share your thoughts, ideas, and knowledge with the world.</p>
        <h2 className="text-white text-lg font-roboto-condensed pt-2">already have an account?</h2>
      </div>
    </div>
  );
}

export default LandingPage;
