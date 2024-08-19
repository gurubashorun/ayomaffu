const Article = (props) => {
    return (
      <article
        {...props}
        css={{
          marginTop: 5,
          marginBottom: 5,
          '&:first-of-type': {
            marginTop: 0,
          },
          '&:last-child': {
            marginBottom: 0,
          },
        }}
      />
    );
  };
  
export default Article;
  