import GameEnvBackground from './GameEngine/<path>.js'
import AnimatedPlayer from './GameEngine/<path>.js'
import InteractiveObject from './GameEngine/<path>.js'
import GameEngine from './GameEngine/<path>.js'
import SoundManager from './GameEngine/<path>.js'
import LevelManager from './GameEngine/<path>.js'

const mansionLevel5 = () => {
    const gameEnv = new GameEnvBackground({
        backgroundImage: 'assets/images/mansion/level5/background.png',
        width: 800,
        height: 600
    });

    const player = new AnimatedPlayer({
        spriteSheet: 'assets/images/characters/player.png',
        frameWidth: 64,
        frameHeight: 64,
        animations: {
            idle: [0, 1, 2, 3],
            walk: [4, 5, 6, 7]
        },
        initialPosition: { x: 100, y: 500 }
    });

    const interactiveObjects = [
        new InteractiveObject({
            image: 'assets/images/mansion/level5/object1.png',
            position: { x: 300, y: 450 },
            onInteract: () => {
                SoundManager.playSound('assets/sounds/mansion/level5/object1_interact.mp3');
                alert('You found a hidden clue!');
            }
        }),
        new InteractiveObject({
            image: 'assets/images/mansion/level5/object2.png',
            position: { x: 600, y: 400 },
            onInteract: () => {
                SoundManager.playSound('assets/sounds/mansion/level5/object2_interact.mp3');
                alert('You unlocked a secret passage!');
            }
        })
    ];

    const levelConfig = {
        gameEnv,
        player,
        interactiveObjects,
        levelNumber: 5,
        nextLevel: 'mansionLevel6'
    };

    LevelManager.registerLevel(levelConfig);

    return new GameEngine(levelConfig);
};

export default mansionLevel5;