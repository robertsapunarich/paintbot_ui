const gridSize = 10;

function Grid() {
  
  const getClassName = (row: number, col: number) => {
    if (row === 0 && col === 0) {
      return 'grid-cell-start';
    }

    return 'grid-cell';
  };

  const renderGrid = () => {
    const grid = [];
  
    for (let row = 0; row < gridSize; row++) {
      const rowCells = [];
      for (let col = 0; col < gridSize; col++) {
        rowCells.push(
          <div key={`${row}-${col}`} className={getClassName(row, col)}>
            {row}-{col}
          </div>
        );
      }
      grid.push(<div key={row} className="grid-row">{rowCells}</div>);
    }
  
    return grid;
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="grid-container">{renderGrid()}</div>
      </header>
    </div>
  );
}

export default Grid;