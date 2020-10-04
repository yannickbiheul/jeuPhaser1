var game = new Phaser.Game(300, 500);

var dodger = {
    preload: function() {
        // Chargement images
    },
    create: function() {
        // setup + affichage
    },
    update: function() {
        // logique du jeu
    }
};

game.state.add('dodger', dodger);
game.state.start('dodger');