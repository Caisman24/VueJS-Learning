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
      var max = 10; // values for player
      var min = 3;
      var damage = Math.max(Math.floor(Math.random() * max) + 1, min); // we want the damage to be between 3 and 10
      this.monsterHealth -= damage;

      if (this.monsterHealth <= 0) {
        alert('Congratulation, you won!');
        this.gameIsRunning = false;
      }

      max = 12;
      min = 5;
      damage = Math.max(Math.floor(Math.random() * max) + 1, min);
      this.playerHealth -= damage;

      if (this.playerHealth <= 0) {
        alert('OOPSIE, YOU DIED!');
        this.gameIsRunning = false;
      }
    },
    specialAttack: function () {},
    heal: function () {},
    giveUp: function () {},
  },
});
