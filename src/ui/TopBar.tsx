const TopBar = () => {
  return (
    <div className="flex flex-row items-center content-center max-w-screen overflow-hidden h-32 font-roboto-condensed text-white text-6xl">
      <img src="src/assets/images/brainsplat.png" alt="brainsplat" className="size-32" />
      <h1 className="typing-text">brainsplat</h1>
      <h1 className="typing-caret pl-1.5">I</h1>
      <div className="flex ml-auto">
        <button className="hover:text-lime-500 text-white text-2xl font-roboto-condensed p-2">profile</button>
        <button className="hover:text-lime-500 text-white text-2xl font-roboto-condensed p-2">messages</button>
        <button className="hover:text-lime-500 text-white text-2xl font-roboto-condensed p-2">settings</button>
      </div>
    </div>
  );
}

export default TopBar;
