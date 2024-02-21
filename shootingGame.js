class Player {
  constructor(name, health = 100, power = 10) {
    this.name = name;
    this.health = health;
    this.power = power;
  }

  hit(power) {
    this.health -= power;
  }

  useItem(item) {
    this.health += item.health;
    this.power += item.power;
  }

  showStatus() {
    return `${this.name}(Health => ${this.health}, Power => ${this.power})`;
  }
}

class ShootingGame {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
  }

  getRandomItem() {
    return {
      health: Math.round(Math.random() * 10),
      power: Math.round(Math.random() * 10),
    };
  }

  start() {
    let display = "===Start a Game===\n\n";
    let counter = 1;
    while (true) {
      // show status before shooting
      display += `===ROUND ${counter}===\n[Stat Player Before Fighting]\n${this.player1.showStatus()}\n${this.player2.showStatus()}\n\n`;

      // get random item
      const itemPlayer1 = this.getRandomItem();
      const itemPlayer2 = this.getRandomItem();

      // player use item
      this.player1.useItem(itemPlayer1);
      this.player2.useItem(itemPlayer2);
      display += `[Both Player Get Item]\n${this.player1.showStatus()}\n${this.player2.showStatus()}\n\n`;

      // get random player for attack first
      const turn = Math.round(Math.random());
      if (!turn) {
        display += `[Player '${this.player1.name}' Attack First]\n`;
        this.player2.hit(this.player1.power);
        if (this.player2.health <= 0) {
          display += `===[Player '${
            this.player1.name
          }]' WIN===\n${this.player1.showStatus()}`;
          break;
        }

        this.player1.hit(this.player2.power);
        if (this.player1.health <= 0) {
          display += `===[Player '${
            this.player2.name
          }]' WIN===\n${this.player2.showStatus()}`;
          break;
        }
      } else {
        display += `[Player '${this.player2.name}' Attack First]\n`;
        this.player1.hit(this.player2.power);
        if (this.player1.health <= 0) {
          display += `===[Player '${
            this.player2.name
          }]' WIN===\n${this.player2.showStatus()}`;
          break;
        }

        this.player2.hit(this.player1.power);
        if (this.player2.health <= 0) {
          display += `===[Player '${
            this.player1.name
          }]' WIN===\n${this.player1.showStatus()}`;
          break;
        }
      }

      // show status after shooting
      display += `[Stat Player After Fighting]\n${this.player1.showStatus()}\n${this.player2.showStatus()}\n\n`;
      counter++;
    }
    return display;
  }
}

const player1 = new Player("thujuli");
const player2 = new Player("agus");
const shootingGame = new ShootingGame(player1, player2);
console.log(shootingGame.start());
