import { Game } from "@tic-tac-toe-chicago-school/models";

describe("Game", () => {
  let newGame;

  beforeEach(() => {
    newGame = new Game();
    newGame.start();
  });

  it("Given a new Tic-Tac-Toe game When the game starts Then all coordinates on the board are null And each player has three tokens in their rack there is no winner", () => {
    for (let i = 1; i <= 9; i++) expect(newGame.tokenInPosition(1)).toBeNull();
    expect(newGame.hasWinner()).toBe(false);
  });

  it("Given a new Tic-Tac-Toe game When a player places a token on the board Then the token is placed on the board and rack player discon one", () => {
    newGame.placeTokenIn(1);
    expect(["X", "O"]).toContain(newGame.tokenInPosition(1));
  });

  it("Given a new Tic-Tac-Toe game When the second player places a token on the board Then the token is different and in a different position", () => {
    newGame.placeTokenIn(1);
    newGame.placeTokenIn(2);
    expect(newGame.tokenInPosition(1)).not.toBe(newGame.tokenInPosition(2));
  });

  it("Given a game When player 1 plays in positions 1, 2, 3 in different turns and player 2 plays in positions 4, 5 in different turns Then player 1 is the winner and the game ends", () => {
    newGame.placeTokenIn(1);
    newGame.placeTokenIn(4);
    newGame.placeTokenIn(2);
    newGame.placeTokenIn(5);
    newGame.placeTokenIn(3);
    expect(newGame.hasWinner()).toBe(true);
    expect(() => newGame.placeTokenIn(6)).toThrow("Game is over.");
  });

  it("Given a game When player 1 moves a token to form a winning line Then player 1 is the winner and the game ends", () => {
    newGame.placeTokenIn(1);
    newGame.placeTokenIn(4);
    newGame.placeTokenIn(2);
    newGame.placeTokenIn(5);
    newGame.placeTokenIn(6);
    newGame.placeTokenIn(9);
    newGame.moveTokenFromTo(6, 3);
    expect(newGame.hasWinner()).toBe(true);
    expect(() => newGame.placeTokenIn(6)).toThrow("Game is over.");
  });

  it("Given a game When player 1 and player 2 place tokens and player 1 moves a token to form a winning line Then player 1 is the winner and the game ends", () => {
    newGame.placeTokenIn(5);
    newGame.placeTokenIn(1);
    newGame.placeTokenIn(6);
    newGame.placeTokenIn(4);
    newGame.placeTokenIn(7);
    newGame.placeTokenIn(3);
    newGame.moveTokenFromTo(6, 9);
    newGame.moveTokenFromTo(1, 2);
    newGame.moveTokenFromTo(5, 8);
    expect(newGame.hasWinner()).toBe(true);
  });

  it("Given a new Tic-Tac-Toe game When a player places a token on the board Then the number of tokens in the player's rack decreases by one", () => {    
    newGame.placeTokenIn(1);
    newGame.placeTokenIn(2);
    expect(newGame.tokensInRack(player(1))).toBe(2);
    expect(newGame.tokensInRack(player(2))).toBe(2);
    newGame.placeTokenIn(3);
    newGame.placeTokenIn(4);
    expect(newGame.tokensInRack(player(1))).toBe(1);
    expect(newGame.tokensInRack(player(2))).toBe(1);
    newGame.placeTokenIn(5);
    newGame.placeTokenIn(6);
    expect(newGame.tokensInRack(player(1))).toBe(0);
    expect(newGame.tokensInRack(player(2))).toBe(0);
  });

  it("Given a new Tic-Tac-Toe game When a token is assigned to player 1 and another to player 2 Then both players have one token to play", () => {
    expect(["X","O"]).toContain(newGame.tokensAssigned(player(1)));
    expect(["X","O"]).toContain(newGame.tokensAssigned(player(2)));
  });

  const player = (playerNumber) => playerNumber;
});
