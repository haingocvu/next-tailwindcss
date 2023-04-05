const NavBar = () => {
  return (
    <ul className="gap-2 inline-flex relative ml-5  ">
      <li className="px-4 py-2 bg-slate-50 cursor-pointer nav-item">
        Menu 1
        <ul className="absolute top-full left-0 z-50 bg-inherit flex flex-wrap justify-center py-4 text-center cursor-default shadow-lg transition nav-item-sub">
          <li className="basis-1/3 px-2 py-4 cursor-pointer hover:bg-slate-200 rounded-md">
            Sub 1
          </li>
          <li className="basis-1/3 px-2 py-4 cursor-pointer hover:bg-slate-200 rounded-md">
            Sub 2
          </li>
          <li className="basis-1/3 px-2 py-4 cursor-pointer hover:bg-slate-200 rounded-md">
            Sub 3
          </li>
          <li className="basis-1/3 px-2 py-4 cursor-pointer hover:bg-slate-200 rounded-md">
            Sub 4
          </li>
          <li className="basis-1/3 px-2 py-4 cursor-pointer hover:bg-slate-200 rounded-md">
            Sub 5
          </li>
          <li className="basis-1/3 px-2 py-4 cursor-pointer hover:bg-slate-200 rounded-md">
            Sub 6
          </li>
          <li className="basis-1/3 px-2 py-4 cursor-pointer hover:bg-slate-200 rounded-md">
            Sub 7
          </li>
          <li className="basis-1/3 px-2 py-4 cursor-pointer hover:bg-slate-200 rounded-md">
            Sub 8
          </li>
          <li className="basis-1/3 px-2 py-4 cursor-pointer hover:bg-slate-200 rounded-md">
            Sub 9
          </li>
          <li className="basis-1/3 px-2 py-4 cursor-pointer hover:bg-slate-200 rounded-md">
            Sub 10
          </li>
          <li className="basis-1/3 px-2 py-4 cursor-pointer hover:bg-slate-200 rounded-md">
            Sub 11
          </li>
          <li className="basis-1/3 px-2 py-4 cursor-pointer hover:bg-slate-200 rounded-md">
            Sub 12
          </li>
        </ul>
      </li>
      <li className="px-4 py-2">Menu 2</li>
      <li className="px-4 py-2">Menu 3</li>
      <li className="px-4 py-2">Menu 4</li>
      <li className="px-4 py-2">Menu 5</li>
      <li className="px-4 py-2">Menu 6</li>
    </ul>
  );
};

export default NavBar;
