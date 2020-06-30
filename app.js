new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: [],
  },
  methods: {
    startGame: function () {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.turns = [];
    },

    attack: function () {
      damage = this.calculateDamage(3, 10);
      this.monsterHealth -= damage; // Player Damage

      if (this.checkWin()) return; // don't deal damage if the game is over
      this.turns.unshift({
        isPlayer: true,
        text: 'Player hits Monster for ' + damage,
      });

      this.monsterAttacks();

      this.checkWin();
    },

    specialAttack: function () {
      damage = this.calculateDamage(10, 20);
      this.monsterHealth -= damage;

      this.checkWin();
      this.turns.unshift({
        isPlayer: true,
        text: 'Player hits Monster hard for ' + damage,
      });
      this.monsterAttacks();
    },

    heal: function () {
      if (this.playerHealth <= 90) {
        this.playerHealth += 10;
      } else {
        this.playerHealth = 100;
      }

      this.turns.unshift({
        isPlayer: true,
        text: 'Player heals for 10',
      });
      this.monsterAttacks();
    },

    giveUp: function () {
      this.gameIsRunning = false;
    },

    calculateDamage: function (min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },

    monsterAttacks: function () {
      damage = this.calculateDamage(5, 12);
      this.playerHealth -= damage;

      this.turns.unshift({
        isPlayer: false,
        text: 'Monster hits Player for ' + damage,
      });
      this.checkWin();
    },

    checkWin: function () {
      if (this.monsterHealth <= 0) {
        alert('Congratulation, you won!');
        this.gameIsRunning = false;
        return true; // player won
      } else if (this.playerHealth <= 0) {
        alert('OOPSIE, YOU DIED!');
        this.gameIsRunning = false;
        return true; // player lost
      }
      return false; //game not ended
    },
  },
});
