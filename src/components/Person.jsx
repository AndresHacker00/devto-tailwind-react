import { FaDev, FaTwitter, FaGlobe, FaGithub } from "react-icons/fa";

export default function Person({ user }) {
  return (
    <>
    
      <div className=" bg-slate-200 p-5 rounded shadow left-0 top-0">
        <article className="flex items-center justify-center flex-col">
          <img
            src={user.profile_image_90}
            alt={user.name}
            className="w-20 rounded-2xl shadow"
          />

          <h3 className="text-center font-bold text-slate-700 text-xl my-5">
            {user.name}
          </h3>
        </article>

        <button className="bg-indigo-700 hover:bg-indigo-800 font-bold text-white rounded-lg cursor-pointer py-2 px-4 w-full">
          Follow
        </button>

        <article className="mt-1">
          <ul className="lg:grid grid-cols-2 gap-3">
            <li className="text-sm flex items-center justify-start hover:text-black cursor-pointer mb-2">
              <a
                href={`https://dev.to/${user.username}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-start"
              >
                <FaDev className="mr-1" /> @{user.username}
              </a>
            </li>
            <li className="text-sm flex items-center justify-start hover:text-black cursor-pointer mb-2">
              <a
                href={`https://twitter.com/${user.twitter_username}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-start"
              >
                <FaTwitter className="mr-1" /> @{user.twitter_username}
              </a>
            </li>
            <li className="cursor-pointer mb-2">
              <a
                href={user.website_url}
                target="_blank"
                rel="noreferrer"
                className="text-sm flex items-center justify-start hover:text-black"
              >
                <FaGlobe className="mr-1" /> Website
              </a>
            </li>
            <li className="text-sm flex items-center justify-start hover:text-black cursor-pointer mb-2">
              <a
                href={`https://github.com/${user.github_username}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-start"
              >
                <FaGithub className="mr-1" /> @{user.github_username}
              </a>
            </li>
          </ul>
        </article>
      </div>
    </>
  );
}
