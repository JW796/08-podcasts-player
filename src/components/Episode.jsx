const Episode = ({ title, pubDate, link, mp3 }) => {
  return (
    <div className="max-w-3xl flex flex-row items-center border rounded-lg my-4">
      <div className="w-1/2 pl-2 mt-2 mb-4 py-2 px-5 mx-auto">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:opacity-70"
        >
          <p>{title}</p>
        </a>
        <audio src={mp3} className="my-4 px-2" controls />
        <p>{pubDate}</p>
      </div>
      <div className="flex flex-col gap-1 my-2 px-8">
        <label htmlFor="notes" className="text-gray-700 font-medium">
          Notes
        </label>
        <textarea
          id="notes"
          className="border rounded-lg p-2"
          placeholder="What did you think of the episode?"
          rows={5}
        />
      </div>
    </div>
  );
};

export default Episode;
