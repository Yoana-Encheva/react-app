import ArticleCard from "./ArticleCard";

function Article(props) {
  return (
    <ArticleCard
      key={props.id}
      id={props.id}
      image={props.image}
      title={props.title}
      description={props.description}
      showDetails={true}
    ></ArticleCard>
  );
}

export default Article;
