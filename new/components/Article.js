const Article = ({ article }) => {
    return (
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{article.tagline}</div>
          <div className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
            <a href={article.link} target="_blank" rel="noopener noreferrer">{article.title}</a>
          </div>
          <p className="mt-2 text-gray-500">{article.description}</p>
          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-wrap mt-4">
              {article.tags.map((tag, index) => (
                <span key={index} className="m-1 bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-800">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default Article;
  