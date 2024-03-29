var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            // gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update,
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.setBaseURL('http://labs.phaser.io');

    this.load.image('sky', 'assets/skies/space3.png');
    this.load.image('logo', 'assets/sprites/phaser3-logo.png');
    this.load.image('red', 'assets/particles/red.png');
}

function create ()
{
    this.add.image(400, 300, 'sky');

    var particles = this.add.particles('red');

    var emitter = particles.createEmitter({
        speed: 100,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD'
    });

    this.logo = this.physics.add.image(400, 100, 'logo');
    this.cursorKeys = this.input.keyboard.createCursorKeys();

    this.logo.setCollideWorldBounds(true);

    emitter.startFollow(this.logo);
}

function update() {
    movePlayeranager(this);
}

function movePlayeranager(obj) {
    if(obj.cursorKeys.left.isDown) {
        obj.logo.setVelocityX(-200);
    } else if(obj.cursorKeys.right.isDown) {
        obj.logo.setVelocityX(+200);
    } else if(obj.cursorKeys.up.isDown) {
        obj.logo.setVelocityY(-200);
    } else if(obj.cursorKeys.down.isDown) {
        obj.logo.setVelocityY(200);
    }
}