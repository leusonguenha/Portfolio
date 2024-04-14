function BlogInfo({ titulo, corpo }) {
  return (
    <>
      <div id="info-blog">
        <div className="infoBlog">
          <h2>{titulo}</h2>
          <p>{corpo}</p>
        </div>
      </div>
    </>
  );
}
export default BlogInfo;
