const SearchList = ({ contents }) => {
  if (!contents || contents.length === 0) {
    return <div>검색 결과가 .</div>;
  }

  return (
    <div>
      <h2>검색 결과</h2>
      {contents.map((content) => (
        <div key={content.contentsId}>
          <h3>{content.name}</h3>
          <p>{content.contentsCategory}</p>
          <p>{content.year}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchList;
