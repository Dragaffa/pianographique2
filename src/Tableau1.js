
let timeline;
class Tableau1 extends Phaser.Scene {
    preload() {


        //exemple

        this.load.image('fond', 'assets/unnamed.jpg');

        this.load.image('ville1', 'assets/ville1.png');
        this.load.image('ville2', 'assets/ville2.png');
        this.load.image('ville3', 'assets/ville3.png');


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

        let background=this.add.image(0,0,'fond').setOrigin(0,0);
        background.setScale(2)

        //--------------background 2 (tout au fond et flou)--------------------

        this.bg2Container=this.add.container(0,0);


        let ville3=this.add.image(0,225,'ville3').setOrigin(0,0);
        ville3.setScale(0.457)

        //--------------background 1 (gris) --------------------
        this.bg1Container=this.add.container(0,0);

        let ville2=this.add.image(0,400,'ville2').setOrigin(0,0);
        ville2.setScale(0.457)


        //-------------ground (premier plan noir)---------------------------
        this.groundContainer=this.add.container(0,0);

        let ville1=this.add.image(0,400,'ville1').setOrigin(0,0);
        ville1.setScale(0.457)

        //ANIMATION

            this.avion = this.add.image(0, 0, 'avion').setOrigin(0,0);
            this.anims.create({
                key: 'avion',
                frames: this.getFrames('avion1',3),
                frameRate: 16,
                repeat: 0
            });
        //this.avion.setScale(0.5)

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
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    me.speed = 1;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed = -1;
                    break;
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

