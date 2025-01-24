const Episode = ({ title, pubDate, link, mp3 }) => {
  return (
  <div className="pl-3">
    <a href={link} target="_blank" rel="noopener noreferrer"
    className="underline hover:opacity-709"
    >
      <p>{title}</p>
    </a>
  </div>
  )
};


export default Episode

