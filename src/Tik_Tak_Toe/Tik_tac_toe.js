import React, { useState, useEffect } from "react";
import { Button, Header, Image, Input, Label, Modal } from "semantic-ui-react";
import "./Tik_tac_toe.css";

const Tik_tac_toe = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const [user1, setUser1] = useState("");
  const [user2, setUser2] = useState("");
  const [open, setOpen] = React.useState(false);
  const [btnShow, setBtnShow] = useState(true);

  const winner = calculateWinner(squares);
  let status;

  useEffect(() => {
    setTimeout(() => {
      if (winner !== null) {
        setBtnShow(true);
        setUser1("");
        setUser2("");
      }
    }, 3000);
  }, [winner]);

  function Square({ onClick, value }) {
    return (
      <button className="square" onClick={onClick}>
        {value}
      </button>
    );
  }
  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = isX ? "X" : "O";
    setSquares(squares);
    setIsX(!isX);
  };


  if (winner) {
    status = `Winner: ${winner ? user1 : user2}`;
  } else {
    status = (isX ? `${user1} : ` : `${user2} : `) + (isX ? "X" : "O");
  }

  // const handleRestart = () => {
  //   setIsX(true);
  //   setSquares(Array(9).fill(null));
  // };

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };
  const handleOkayClick = () => {
    setBtnShow(false);
    setOpen(false);
  };
  console.log({ winner });
  return (
    <div>
      <div>
        {btnShow && (
          <Button onClick={() => setOpen(true)}>Enter User Name</Button>
        )}
        <Modal
          style={{
            padding: 20,
            width: "50%",
            height: "50%",
          }}
          onOpen={() => setOpen(true)}
          open={open}
        >
          <Modal.Header>Enter User Name</Modal.Header>
          <Modal.Content style={{ display: "inline-grid" }}>
            <Label>User 1</Label>
            <Input
              type="text"
              onChange={(e) => setUser1(e.target.value)}
              style={{ width: "50%", marginBottom: 20 }}
            />
            <Label>User 2</Label>
            <Input
              type="text"
              onChange={(e) => setUser2(e.target.value)}
              style={{ width: "50%", marginBottom: 20 }}
            />
          </Modal.Content>
          <Modal.Actions>
            <Button
              disabled={!user1.length > 0 || !user2.length > 0 ? true : false}
              onClick={() => handleOkayClick()}
              positive
            >
              Okay
            </Button>
          </Modal.Actions>
        </Modal>
      </div>

      {(user1.length > 0 || user2.length > 0) && (
        <div className="board">
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
          <div className="status">{status}</div>
          {/* <button className="restart" onClick={handleRestart}>
            Restart Game!
          </button> */}
        </div>
      )}
    </div>
  );
};

export default Tik_tac_toe;

function calculateWinner(squares) {
  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningPatterns.length; i++) {
    const [a, b, c] = winningPatterns[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
