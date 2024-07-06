import React from "react";
import { useApiData } from "../../utils/Context";
import Loader from "../Loader/Loader";
import { User2, MessageSquare, ChevronsRight, Trash2 } from "lucide-react";

const News = () => {
  const { hits, isloading, removepost } = useApiData();
  // console.log(hits);
  return isloading ? (
    <div className="flex items-center justify-center h-[100vh] w-full">
      <Loader />
    </div>
  ) : (
    <>
      {hits.map((item) => {
        const { author, title, num_comments, url, objectID } = item;
        return (
          <div
            key={objectID}
            className="container bg-white rounded-xl   h-40 max-sm:h-48 my-5 w-[50%] max-md:w-[75%] py-5 px-3 "
          >
            <h1 className=" font-bold ml-2">{title??"Let's look inside "}</h1>
            <div className="info flex flex-col mt-3 ">
              <span className="font-mono flex items-center gap-2 mx-4">
                {" "}
                <User2 size={18} /> User : {author}
              </span>
              <span className="flex items-center gap-2 mx-4">
                <MessageSquare size={18} /> Comments : {num_comments}
              </span>
            </div>
            <div className="flex items-center justify-between mt-3 pb-5 px-4 ">
              <a href={url} target="_blank">
                <button className="flex items-center gap-1 text-blue-500 hover:font-bold">
                  Read More <ChevronsRight size={19} />{" "}
                </button>
              </a>
              <button
                onClick={() => removepost(objectID)}
                className="flex items-center gap-1 text-red-500 hover:font-bold"
              >
                Remove <Trash2 size={18} />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default News;
