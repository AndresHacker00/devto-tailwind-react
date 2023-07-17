export default function Sidebar() {
  return (
    <div className=" top-0 h-screen w-64 bg-gray-200">
      <div className="flex flex-col mt-4">
          <h5 className="text-black font-bold">Tags</h5>
          <a className="text-black hover:text-blue-600 mt-2" href="">
            Tag 1
          </a>
          <a className="text-black hover:text-blue-600 mt-2" href="">
            Tag 2
          </a>
          <a className="text-black hover:text-blue-600 mt-2" href="">
            Tag 3
          </a>
          {/* Add more tags here */}
        </div>

    </div>
  );
}
