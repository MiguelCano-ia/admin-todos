import {
  CiBellOn,
  CiChat1,
  CiMenuBurger,
  CiSearch,
  CiShoppingBasket,
} from "react-icons/ci";

export const TopMenu = () => {
  return (
    <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
      <div className="px-6 flex items-center justify-between space-x-4">
        <h5 hidden className="text-2xl text-gray-600 font-medium lg:block">
          Dashboard
        </h5>
        <button className="w-12 h-16 -mr-2 border-r lg:hidden" title="Menu">
          <CiMenuBurger size={30} />
        </button>
        <div className="flex space-x-2">
          <div hidden className="md:block">
            <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
              <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
                <CiSearch />
              </span>
              <input
                type="search"
                name="leadingIcon"
                id="leadingIcon"
                placeholder="Search here"
                className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition"
              />
            </div>
          </div>

          <button
            title="Search"
            className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden"
          >
            <CiSearch />
          </button>
          <button
            title="Chat"
            className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
          >
            <CiChat1 size={25} className="text-black" />
          </button>
          <button
            title="Bell"
            className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
          >
            <CiBellOn size={25} className="text-black" />
          </button>
          <button
            title="Bell"
            className="p-2 flex items-center justify-center h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
          >
            <span className="text-sm mr-2 text-blue font-bold text-black">
              10
            </span>
            <CiShoppingBasket size={25} className="text-black" />
          </button>
        </div>
      </div>
    </div>
  );
};
