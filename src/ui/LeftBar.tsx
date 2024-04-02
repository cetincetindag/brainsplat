const LeftBar = () => {
  return (
    <div className="w-1/4 pl-20">
      <div>
        <ul className="space-y-2 pb-1 text-lime-300 text-2xl font-mono">
          <li>g.o.a.t.</li>
          <li>trending</li>
          <li>new</li>
        </ul>
      </div>
      <div>
        <ul className="text-white space-y-2 text-xl font-mono">
          <li>programming</li>
          <li>software</li>
          <li>science</li>
          <li>engineering</li>
          <li>health</li>
          <li>fitness</li>
          <li>video games</li>
          <li>movies</li>
          <li>tv shows</li>
          <li>books</li>
        </ul>
      </div>
    </div>
  )
}

export default LeftBar;
