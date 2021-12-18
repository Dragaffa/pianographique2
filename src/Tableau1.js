
let timeline;
class Tableau1 extends Phaser.Scene {
    preload() {


        //exemple

        this.load.image('fond', 'assets/unnamed.jpg');

        this.load.image('ville1', 'assets/ville1.png');
        this.load.image('ville2', 'assets/ville2.png');
        this.load.image('ville3', 'assets/ville3.png');
        this.load.image('ciel', 'assets/ciel-bleu-voile-nuageux-CC-Susanavana-Pixabay.jpg');


        for(let j=1;j<=3;j++) {
            this.load.image('avion'+j, 'assets/plain/avion'+j+'.png');
        }

    }


    getFrames(prefix, length) {
        let frames = [];
        for (let i = 1; i <= length; i++) {
            frames.push({key: prefix + i});
        }
        return frames;
    }

    create() {

        //FOND
        //this.arrierePlan=this.add.container(0,0);

        this.fond=this.add.image(0,0,'fond').setOrigin(0,0);
        this.fond.setScale(2);
        this.fond.visible=false;

        this.ciel=this.add.image(0,0,'ciel').setOrigin(0,0);
        this.ciel.setScale(1);
        this.ciel.setVisible(false);

        //--------------background 2 (tout au fond et flou)--------------------

        this.bg2Container=this.add.container(0,0);


        let ville3=this.add.image(0,225,'ville3').setOrigin(0,0);
        ville3.setScale(0.457);

        //--------------background 1 (gris) --------------------
        this.bg1Container=this.add.container(0,0);

        let ville2=this.add.image(0,400,'ville2').setOrigin(0,0);
        ville2.setScale(0.457);


        //-------------ground (premier plan noir)---------------------------
        this.groundContainer=this.add.container(0,0);

        let ville1=this.add.image(0,400,'ville1').setOrigin(0,0);
        ville1.setScale(0.457);

        //ANIMATION
        /**
         * Vitesse de déplacement du décor
         * @type {Phaser.GameObjects.Sprite}
         */
        this.avion = this.add.sprite(850, 0, 'avion1').setOrigin(0,0);
        this.anims.create({
            key: 'avion',
            frames: this.getFrames('avion',3),
            frameRate: 10,
            repeat: -1
            });
        this.avion.setScale(0.1);
        this.avion.play('avion');



        /**
         * Vitesse de déplacement du décor
         * @type {number}
         */
        this.speed = 0;
        //initialise ce qui se passe avec le clavier
        this.initKeyboard();
    }


    initKeyboard() {
        let me = this;
        this.input.keyboard.on('keydown', function (kevent) {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.A:

                        me.fond.setVisible(true);
                        me.ciel.setVisible(false);
                        break;

                case Phaser.Input.Keyboard.KeyCodes.Z:

                        me.ciel.setVisible(true);
                        me.fond.setVisible(false);
                        break;

                case Phaser.Input.Keyboard.KeyCodes.Q:
                    me.tweens.add({
                        targets: me.avion,
                        x: -250,
                        y: 100,
                        duration: 2000,
                        ease: 'Linear',
                        repeat: 0,
                        delay: 0,
                        onComplete: function () {
                            me.avion.x = 850;
                            me.avion.y = 0;
                        }
                    });
            }
        });
        this.input.keyboard.on('keyup', function (kevent) {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed = 0;
                    break;
            }
        });
    }


    /**
     * Cette fonction s'exécute en boucle (à peu près 60 fois par secondes)
     */
    update() {
        //déplacement de la caméra
        this.cameras.main.scrollX += this.speed; // on aurait pu écrire : this.cameras.main.scrollX= this.cameras.main.scrollX + this.speed;


    }

}
