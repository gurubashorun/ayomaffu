const CellContainer = (props) => {
    return (
      <div
        {...props}
        css={{
          width: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: 4,
        }}
      />
    );
  };
  
  export default CellContainer;
  