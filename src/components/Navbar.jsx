export default function Navbar() {
    return (
      <>
        <span className="text-4xl text-dev-text "></span>
        <div className="bg-white h-14 grid grid-cols-7 gap-2 ">
          <div className="col-span-3 flex justify-center items-center">
            <span className="w-12 h-10 flex items-center">
              <img
                src="https://lh3.googleusercontent.com/mmiuKzIq5YPFyjrfFsiNqeGuJY-Rp6wVvE8kus6vuunOnqInN16GTCCUX1937vEbKw"
                alt="logo"
              />
            </span>
            <input
              className="w-64 p-2 pl-2 text-sm border border-gray-700 rounded bg-gray-50"
              type="text"
              placeholder="Search..."
            />
          </div>
          <div className="col-span-3 flex justify-end items-center">
            <button className="mr-2">
              {/* <ConnectIcon /> */}
            </button>
            <button className="mr-2">
              {/* <BellIcon /> */}
            </button>
            <button className="mr-2">
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Create Post
</button>
            </button>
            <img
              src="https://lh3.googleusercontent.com/a-/AOh14GiZ8uDLrYJ6qZ51x_LUT2j5LFmhYL-LP6Yn-1WTdao=s88-c-k-c0x00ffffff-no-rj-mo"
              alt="profile_image"
              className="h-8 w-8 rounded-full"
            />
          </div>
        </div>
      </>
    );
  }
  