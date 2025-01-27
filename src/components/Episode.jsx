const Episode = ({ title, pubDate, link, mp3 }) => {
  return (
    <div className="pl-2 mt-2 mb-4 border w-3/4 max-w-lg py-2 px-5 rounded-lg">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:opacity-709"
      >
        <p>{title}</p>
      </a>
      <audio src={mp3} className="my-4 px-2 w-full" controls />
      <p>{pubDate}</p>
    </div>
  );
};

export default Episode;
