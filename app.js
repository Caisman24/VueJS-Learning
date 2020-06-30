new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
  },
  methods: {
    startGame: function () {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },

    attack: function () {
      this.monsterHealth -= this.calculateDamage(3, 10); // Player Damage
      if (this.checkWin()) return; // don't deal damage if the game is over

      this.playerHealth -= this.calculateDamage(5, 12); // Monster Damage
      this.checkWin();
    },

    specialAttack: function () {},

    heal: function () {},

    giveUp: function () {},

    calculateDamage: function (min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
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
