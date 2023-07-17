import { useState, useEffect } from "react";
import { RiHeart3Line } from "react-icons/ri";
import { BiComment } from "react-icons/bi";
// import { format } from 'date-fns';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Person from "../components/Person";
// import Buttons from "./Buttons";

export default function FetchArticles() {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [tag, setTag] = useState("discuss");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const fetchArticles = async () => {
      const res = await fetch(`https://dev.to/api/articles?per_page=10`);
      const data = await res.json();
      setArticles(data);
      setIsLoading(false);
    };

    fetchArticles();
    window.scrollTo(0, 0);
  }, [page, tag]);

  const handlePrevious = () => {
    if (page === 1) {
      toast("Estás en la página 1");
    } else {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page > 1000) {
      toast("Llegaste al final");
    } else {
      setPage(page + 1);
    }
  };

  return (
    <>
      <section className="max-width">
        {isLoading ? (
          <div className="spinner">
            <article></article>
          </div>
        ) : (
          <>
            {/* <Buttons handlePrevious={handlePrevious} handleNext={handleNext} /> */}

            <ToastContainer position="top-right" />

            <section className="grid grid-cols-1 gap-5">
              {articles.map((
                {
                  id,
                  title,
                  description,
                  url,
                  comments_count,
                  published_reactions_count,
                  cover_image,
                  reading_time_minutes,
                  tag_list,
                  user,
                }
              ) => (
                <article key={id} className="border border-slate-200 rounded-lg">
                  {cover_image && (
                    <a href={url} target="_blank" rel="noreferrer">
                      <img
                        src={cover_image}
                        alt={title}
                        className="rounded-t"
                        loading="lazy"
                      />
                    </a>
                  )}

                  <div className="p-5 relative">
                    <article className="flex items-center justify-start mb-5">
                      {user.profile_image_90 && (
                        <img
                          src={user.profile_image_90}
                          alt={user.name}
                          className="mr-3 w-14 rounded-2xl"
                          loading="lazy"
                        />
                      )}

                      <ul className="name">
                        <li className="font-bold text-slate-700">
                          {user.name}
                        </li>
                        {/* <li>
                          {format(
                            new Date(user.published_timestamp),
                            "dd MMMM yyyy"
                          )}
                        </li> */}
                        <article className="person">
                          <Person user={user} />
                        </article>
                      </ul>
                    </article>

                    <article className="mb-5">
                      <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className="font-bold text-3xl hover:text-indigo-700"
                      >
                        {title}
                      </a>
                      <p className="mt-5">{description}</p>
                    </article>

                    <article className="mb-5">
                      <ul className="flex items-center justify-start flex-wrap">
                        {tag_list.map((tag, index) => (
                          <li
                            key={index}
                            onClick={() => setTag(tag)}
                            className="bg-slate-200 px-1 rounded-lg hover:bg-slate-300 cursor-pointer mr-2 mb-2"
                          >
                            #{tag}
                          </li>
                        ))}
                      </ul>
                    </article>

                    <article className="flex flex-wrap items-center justify-between">
                      <ul className="flex">
                        <li className="text-sm flex items-center justify-start mr-3">
                          <RiHeart3Line className="mr-1" />
                          {published_reactions_count} Reactions
                        </li>
                        <li className="text-sm flex items-center justify-start">
                          <BiComment className="mr-1" />
                          {comments_count} Comments
                        </li>
                      </ul>
                      <p className="text-sm">{reading_time_minutes} min read</p>
                    </article>
                  </div>
                </article>
              ))}
            </section>
          </>
        )}
      </section>
    </>
  );
}
