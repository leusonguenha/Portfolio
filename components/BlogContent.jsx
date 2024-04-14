import BlogInfo from "../components/BlogInfo";

function BlogContent() {
  return (
    <>
      <div className="main-blog">
        <h1>Mantenha-se Informado!</h1>
      </div>
      <BlogInfo
        titulo="BLOG 1"
        corpo="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et rem
        recusandae facilis fuga, iste, eaque pariatur eveniet magni maiores
        veritatis exercitationem ipsa repellat numquam, corporis quasi qui ex
        repellendus aperiam."
      />
    </>
  );
}
export default BlogContent;
