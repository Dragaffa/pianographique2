
let timeline;
class Tableau1 extends Phaser.Scene {
    /**
     * Précharge les assets
     */
    preload() {


        //exemple

        this.load.image('fond', 'assets/unnamed.jpg');

        this.load.image('ville1', 'assets/ville1.png');
        this.load.image('ville2', 'assets/ville2.png');
        this.load.image('ville3', 'assets/ville3.png');

        this.load.image('avion', 'assets/plain/avion_.png');
        for(let j=1;j<=3;j++) {
            this.load.image('avion' + j, 'assets/plain/avion_' + j + '.png');
        }

        //au lieu d'écrire 5 lignes quasi identiques, on charge l'herbe avec une boucle
        // ALGO : ceci est une boucle
        //for (let i = 1; i <= 5; i++) {
        //this.load.image('g-grass-' + i, 'assets/level/ground/g-grass-' + i + '.png');
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
            this.avion = this.add.sprite(580, 0, 'avion').setOrigin(0,0);
            this.anims.create({
                key: 'avion',
                frames: this.getFrames('avion',3),
                frameRate: 16,
                repeat: -1
        });
        avion.setScale(0.5)

        //filtres

        //gestion du parallaxe
        /**
         * Vitesse de déplacement du décor
         * @type {number}
         */
        this.speed = 0;
        //initialise ce qui se passe avec le clavier
        this.initKeyboard();
        // Définit l'espace de déplacement de la caméra
        this.cameras.main.setBounds(0, 0, 1073, 540);
        //définit à quelles vitesse se déplacent nos différents plans
        bgAnimationA.scrollFactorX = 0;
        this.bg2Container.scrollFactorX = 10;
        this.bg1Container.scrollFactorX = 10;
        this.groundContainer.scrollFactorX = 10;
    }

    /**
     * Définit ce qui se passe quand on appuie ou relache une touche du clavier
     * ALGO : ceci est une fonction ou méthode
     */
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

        //petit effet de vibrance sur le filtre film au tout premier plan
        this.filterFilm.setAlpha(Phaser.Math.Between(95, 100) / 100)
    }

}

