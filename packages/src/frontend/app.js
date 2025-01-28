import { Game } from "@tic-tac-toe-chicago-school/models";

const game = new Game();
game.start();

class GameView  extends HTMLElement{
    constructor(){
      super();
      this.attachShadow({mode: 'open'});
      this.shadowRoot.innerHTML = `
        <style>
          .game {
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 15px;
          }          
        </style>
        <div class="game">
          <player-rack-view player='1'></player-rack-view>
          <board-view></board-view>
          <player-rack-view player='2'></player-rack-view>
        <div/>`
    }
}

class CellView extends HTMLElement{
    constructor(){
      super();
      this.attachShadow({mode: 'open'});
      let i = 1;
      this.shadowRoot.innerHTML = `
        <style>
          .cell {
              width: 100px;
              height: 100px;
              display: flex;
              justify-content: center;
              align-items: center;
              border: 1px solid black;
              font-size: 24px;
          }
        </style>
        <div class="cell"></div>`
    }
}

class CellRackView extends CellView{
    constructor(){
      super();
      this.shadowRoot.querySelector(".cell").textContent = game.tokensAssigned(this.player);
    }

    get player(){
        return this.getAttribute('player');
    }

    set player(value){
        this.setAttribute('player', value);
    }
}

class PlayerRackView extends HTMLElement{
    constructor(){
      super();
      this.attachShadow({mode: 'open'});
      this.shadowRoot.innerHTML = `
        <style>
          .rack {
              display: flex;
              flex-direction: column;
              gap: 5px;
          }
        </style>
        <div class="rack"></div>`

      const rack = this.shadowRoot.querySelector(".rack");
      for (let i = 0; i < game.tokensInRack(this.player); i++) {
        const cell = document.createElement("cell-rack-view");
        cell.setAttribute("player", this.player);
        rack.appendChild(cell);
      }
    }

    get player(){
        return this.getAttribute('player');
    }

    set player(value){
        this.setAttribute('player', value);
    }
}

class BoardView extends HTMLElement{
    constructor(){
      super();
      this.attachShadow({mode: 'open'});
      this.shadowRoot.innerHTML = `
        <style>
          .board {
              display: flex;
              flex-direction: column;
              gap: 5px;
          }
          .row {
              display: flex;
              gap: 5px;
          }
        </style>
        <div class="board">
          <div class="row">
            <cell-view></cell-view>
            <cell-view></cell-view>
            <cell-view></cell-view>
          </div>
          <div class="row">
            <cell-view></cell-view>
            <cell-view></cell-view>
            <cell-view></cell-view>
          </div>
          <div class="row">
            <cell-view></cell-view>
            <cell-view></cell-view>
            <cell-view></cell-view>
          </div>
        </div>`
    }
  }

customElements.define('player-rack-view', PlayerRackView);
customElements.define('cell-view', CellView);
customElements.define('board-view', BoardView);
customElements.define('game-view', GameView);
customElements.define('cell-rack-view', CellRackView);