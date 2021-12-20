
let timeline;
class Tableau1 extends Phaser.Scene {
    preload() {


        //exemple

        this.load.image('fond', 'assets/unnamed.jpg');

        this.load.image('ville1', 'assets/ville1.png');
        this.load.image('ville2', 'assets/ville2.png');
        this.load.image('ville3', 'assets/ville3.png');
        this.load.image('ciel', 'assets/ciel-bleu-voile-nuageux-CC-Susanavana-Pixabay.jpg');
        this.load.image('ciel2', 'assets/istockphoto-1213363511-612x612.jpg');
        this.load.image('ciel3', 'assets/gradient-sky-1172968.jpg');


        for(let j=1;j<=3;j++) {
            this.load.image('avion'+j, 'assets/plain/avion'+j+'.png');
        }
        for(let j=1;j<=3;j++) {
            this.load.image('avion2'+j, 'assets/plain2/avion_'+j+'.png');
        }

        for(let j=1;j<=7;j++) {
            this.load.image('helico'+j, 'assets/helico/helico'+j+'.png');
        }

        for(let j=1;j<=4;j++) {
            this.load.image('nuage'+j, 'assets/nuage/nuage'+j+'.png');
        }
        for(let j=1;j<=3;j++) {
            this.load.image('pluit'+j, 'assets/pluit/pluit'+j+'.png');
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
        this.fond.visible=true;

        this.ciel=this.add.image(0,0,'ciel').setOrigin(0,0);
        this.ciel.setScale(1);
        this.ciel.setVisible(false);

        this.ciel2=this.add.image(0,0,'ciel2').setOrigin(0,0);
        this.ciel2.setScale(2);
        this.ciel2.setVisible(false);

        this.ciel3=this.add.image(0,-300,'ciel3').setOrigin(0,0);
        this.ciel3.setScale(1);
        this.ciel3.setVisible(false);

        //PLUIT

        this.pluit = this.add.sprite(330, 270, 'pluit1').setOrigin(0,0);
        this.anims.create({
            key: 'pluitn1',
            frames: this.getFrames('pluit',3),
            frameRate: 10,
            repeat: -1
        });
        this.pluit.setScale(0.25,1);
        this.pluit.play('pluitn1');
        this.pluit.setVisible(false);

        this.pluit2 = this.add.sprite(0, 150, 'pluit1').setOrigin(0,0);
        this.anims.create({
            key: 'pluitn2',
            frames: this.getFrames('pluit',3),
            frameRate: 10,
            repeat: -1
        });
        this.pluit2.setScale(0.155,1);
        this.pluit2.play('pluitn2');
        this.pluit2.setVisible(false);

        this.pluit3 = this.add.sprite(690, 70, 'pluit1').setOrigin(0,0);
        this.anims.create({
            key: 'pluitn3',
            frames: this.getFrames('pluit',3),
            frameRate: 10,
            repeat: -1
        });
        this.pluit3.setScale(0.155,1);
        this.pluit3.play('pluitn3');
        this.pluit3.setVisible(false);

        this.pluit4 = this.add.sprite(750, 380, 'pluit1').setOrigin(0,0);
        this.anims.create({
            key: 'pluitn4',
            frames: this.getFrames('pluit',3),
            frameRate: 10,
            repeat: -1
        });
        this.pluit4.setScale(0.17,1);
        this.pluit4.play('pluitn4');
        this.pluit4.setVisible(false);


        //NUAGE

        this.nuage1=this.add.image(800,0,'nuage1').setOrigin(0,0);
        this.nuage1.setScale(0.2);

        this.nuage2=this.add.image(800,-100,'nuage2').setOrigin(0,0);
        this.nuage2.setScale(0.2);

        this.nuage3=this.add.image(800,-200,'nuage3').setOrigin(0,0);
        this.nuage3.setScale(0.2);

        this.nuage4=this.add.image(800,100,'nuage4').setOrigin(0,0);
        this.nuage4.setScale(0.2);



        //--------------background 2 (tout au fond et flou)--------------------

        this.bg2Container=this.add.container(0,0);


        this.ville3=this.add.image(0,225,'ville3').setOrigin(0,0);
        this.ville3.setScale(0.457);

        //--------------background 1 (gris) --------------------
        this.bg1Container=this.add.container(0,0);

        this.ville2=this.add.image(0,400,'ville2').setOrigin(0,0);
        this.ville2.setScale(0.457);

        this.helico = this.add.sprite(850, 370, 'helico1').setOrigin(0,0);
        this.anims.create({
            key: 'helico',
            frames: this.getFrames('helico',7),
            frameRate: 16,
            repeat: -1
        });
        this.helico.setScale(0.03);
        this.helico.play('helico');

        //-------------ground (premier plan noir)---------------------------
        this.groundContainer=this.add.container(0,0);

        this.ville1=this.add.image(0,400,'ville1').setOrigin(0,0);
        this.ville1.setScale(0.457);

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

        this.avion2 = this.add.sprite(-210, 250, 'avion_1').setOrigin(0,0);
        this.anims.create({
            key: 'avion2',
            frames: this.getFrames('avion2',3),
            frameRate: 10,
            repeat: -1
        });
        this.avion2.setScale(0.1);
        this.avion2.play('avion2');





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
                        me.ciel2.setVisible(false);
                        me.ciel3.setVisible(false);
                        break;

                case Phaser.Input.Keyboard.KeyCodes.Z:

                        me.ciel.setVisible(true);
                        me.fond.setVisible(false);
                        me.ciel2.setVisible(false);
                        me.ciel3.setVisible(false);
                        break;

                case Phaser.Input.Keyboard.KeyCodes.E:

                    me.ciel2.setVisible(true);
                    me.fond.setVisible(false);
                    me.ciel.setVisible(false);
                    me.ciel3.setVisible(false);
                    break;

                case Phaser.Input.Keyboard.KeyCodes.R:

                    me.ciel3.setVisible(true);
                    me.fond.setVisible(false);
                    me.ciel.setVisible(false);
                    me.ciel2.setVisible(false);
                    break;

                    //NUAGE

                case Phaser.Input.Keyboard.KeyCodes.T:
                    if (me.nuage1.x==800) {
                        me.tweens.add({
                            targets: me.nuage1,
                            x: 100,
                            y: 0,
                            duration: 2000,
                            ease: 'power2',
                            repeat: 0,
                            delay: 0,

                        });
                    }
                    if (me.nuage1.x==100) {
                        me.tweens.add({
                            targets: me.nuage1,
                            x: 800,
                            y: 0,
                            duration: 2000,
                            ease: 'power2',
                            repeat: 0,
                            delay: 0,

                        });
                        me.pluit.setVisible(false);
                    }
                    break;

                case Phaser.Input.Keyboard.KeyCodes.O:
                    if(me.pluit.visible==true){
                        me.pluit.setVisible(false);
                        break;
                    }
                    if(me.nuage1.x==100 && me.pluit.visible==false) {
                        me.pluit.setVisible(true);
                    }
                    break;



                case Phaser.Input.Keyboard.KeyCodes.Y:
                    if (me.nuage2.x==800) {
                        me.tweens.add({
                            targets: me.nuage2,
                            x: -300,
                            y: -100,
                            duration: 2000,
                            ease: 'power2',
                            repeat: 0,
                            delay: 0,

                        });
                    }
                    if (me.nuage2.x==-300) {
                        me.tweens.add({
                            targets: me.nuage2,
                            x: 800,
                            y: -100,
                            duration: 2000,
                            ease: 'power2',
                            repeat: 0,
                            delay: 0,

                        });
                        me.pluit2.setVisible(false);
                    }
                    break;
                case Phaser.Input.Keyboard.KeyCodes.P:
                    if(me.pluit2.visible==true){
                        me.pluit2.setVisible(false);
                        break;
                    }
                    if(me.nuage2.x==-300 && me.pluit2.visible==false) {
                        me.pluit2.setVisible(true);
                    }
                    break;

                case Phaser.Input.Keyboard.KeyCodes.U:
                    if (me.nuage3.x==800) {
                        me.tweens.add({
                            targets: me.nuage3,
                            x: 400,
                            y: -200,
                            duration: 2000,
                            ease: 'power2',
                            repeat: 0,
                            delay: 0,

                        });
                    }
                    if (me.nuage3.x==400) {
                        me.tweens.add({
                            targets: me.nuage3,
                            x: 800,
                            y: -200,
                            duration: 2000,
                            ease: 'power2',
                            repeat: 0,
                            delay: 0,

                        });
                        me.pluit3.setVisible(false);
                    }
                    break;

                case Phaser.Input.Keyboard.KeyCodes.Q:
                    if(me.pluit3.visible==true){
                        me.pluit3.setVisible(false);
                        break;
                    }
                    if(me.nuage3.x==400 && me.pluit3.visible==false) {
                        me.pluit3.setVisible(true);
                    }
                    break;

                case Phaser.Input.Keyboard.KeyCodes.I:
                    if (me.nuage4.x==800) {
                        me.tweens.add({
                            targets: me.nuage4,
                            x: 500,
                            y: 100,
                            duration: 2000,
                            ease: 'power2',
                            repeat: 0,
                            delay: 0,

                        });
                    }
                    if (me.nuage4.x==500) {
                        me.tweens.add({
                            targets: me.nuage4,
                            x: 800,
                            y: 100,
                            duration: 2000,
                            ease: 'power2',
                            repeat: 0,
                            delay: 0,

                        });
                        me.pluit4.setVisible(false);
                    }
                    break;
                case Phaser.Input.Keyboard.KeyCodes.S:
                    if(me.pluit4.visible==true){
                        me.pluit4.setVisible(false);
                        break;
                    }
                    if(me.nuage4.x==500 && me.pluit4.visible==false) {
                        me.pluit4.setVisible(true);
                    }
                    break;


//avion
                case Phaser.Input.Keyboard.KeyCodes.D:
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
                    break;

                case Phaser.Input.Keyboard.KeyCodes.F:
                    me.tweens.add({
                        targets: me.avion2,
                        x: 850,
                        y: 100,
                        duration: 2000,
                        ease: 'Linear',
                        repeat: 0,
                        delay: 0,
                        onComplete: function () {
                            me.avion2.x = -250;
                            me.avion2.y = 250;
                        }
                    });
                    break;

                case Phaser.Input.Keyboard.KeyCodes.G:
                    me.tweens.add({
                        targets: me.helico,
                        x: -20,
                        y: 370,
                        duration: 5000,
                        ease: 'power2',
                        repeat: 0,
                        delay: 0,
                        yoyo:true,
                        flipX:true,
                        onComplete: function () {
                            me.helico.x=850
                            me.helico.y=370
                        }

                    });
                    //if (me.helico.x==-20){
                        //me.helico.flipX=true

                    //}
                    //break;

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
