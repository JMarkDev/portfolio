import bird_hunt from "../assets/game_app_videos/bird_hunt.mp4";
import flapp_bird from "../assets/game_app_videos/flappy_bird_game.mp4";
import running_dino from "../assets/game_app_videos/running_dino.mp4";
import shoot_your_shot from "../assets/game_app_videos/shoot_your_shot.mp4";
import save_the_earth from "../assets/game_app_videos/save_the_earth.mp4";

export const gameApps = [
  {
    name: "Flappy Bird Game",
    description:
      "Flappy Bird is a fun and addictive arcade game where players must navigate a small bird through a series of pipes without crashing. Built using Java and Android Studio, this game challenges players with precise tap-based controls and increasing difficulty.",
    features: [
      "Smooth and responsive touch controls",
      "Colorful pixel-art graphics for a retro feel",
      "Challenging gameplay with increasing difficulty",
      "High-score tracking for competitive play",
      "Lightweight and optimized for mobile devices",
    ],
    game_mechanics: [
      "Tap the screen to make the bird flap its wings",
      "Avoid hitting the pipes or the ground",
      "Each pipe successfully passed = Earn 1 point",
      "The game ends if the bird crashes into a pipe",
      "Challenge yourself to beat your high score!",
    ],
    video: flapp_bird,
    tech_stack: "Java, Android Studio",
    github: "https://github.com",
  },
  {
    name: "Running Dino Game",
    description:
      "Running Dino is an endless runner game inspired by the classic Chrome Dino Game. Developed in Java and Android Studio, this game features simple yet addictive gameplay where players must jump over obstacles and survive as long as possible.",
    features: [
      "Inspired by the classic Chrome Dino game",
      "Simple yet engaging pixel-style graphics",
      "Smooth and responsive tap controls",
      "Speed increases for added challenge!",
      "High-score system to keep players engaged",
    ],
    game_mechanics: [
      "Tap the screen to make the dino jump",
      "If there are no obstacles, the dino keeps running automatically",
      "Small cacti = 30 points, Big cacti = 80 points",
      "At 1100 points, the game speed increases!",
      "Colliding with a cactus = Game Over",
      "Score as high as possible before hitting an obstacle!",
      "When the game ends, the score resets to zero",
    ],
    video: running_dino,
    tech_stack: "Java, Android Studio",
    github: "https://github.com",
  },
  {
    name: "Shoot Your Shot Game",
    description:
      "Shoot Your Shot is a fun and interactive color-matching game perfect for gatherings! Built using Java and Android Studio, this game tests players’ decision-making and accuracy by matching colored balls to hidden cup colors.",
    features: [
      "Simple yet exciting color-matching mechanics",
      "Randomized cup colors for a fresh challenge every time",
      "Easy tap controls for smooth gameplay",
      "Great for testing instincts and accuracy",
      "Fun and engaging for all ages!",
    ],
    game_mechanics: [
      "Tap to select a colored ball (Red, Green, or Blue)",
      "Click on a random cup to reveal its hidden color",
      "Match the ball and cup color to remove cups",
      "Keep playing until all cups are gone!",
      "Restart option for endless fun",
    ],
    video: shoot_your_shot,
    tech_stack: "Java, Android Studio",
    github: "https://github.com",
  },
  {
    name: "Bird Hunt Game",
    description:
      "Bird Hunt is a classic shooting game where players test their precision by tapping on flying birds to score points. Built using Java and Android Studio, this game offers a fun and challenging experience with limited bullets and increasing difficulty.",
    features: [
      "Tap-based shooting mechanics",
      "Limited bullets for added challenge",
      "Score tracking system",
      "Engaging visuals & smooth animations",
      "Classic arcade-style gameplay",
    ],
    game_mechanics: [
      "Tap the flying bird to catch it",
      "Each successful tap increases your score",
      "Missed shots cost a bullet",
      "You start with 20 bullets – use them wisely!",
      "Score 150+ points to win the game",
      "Less than 150 points = Game Over",
      "Restart the game anytime from the Game Over screen",
    ],
    video: bird_hunt,
    tech_stack: "Java, Android Studio",
    github: "https://github.com",
  },
  {
    name: "Save the Earth Game",
    description:
      "Save the Earth is an engaging and educational game designed to promote environmental awareness. Developed using Java and Android Studio, this game challenges players to make eco-friendly choices while having fun!",
    features: [
      "Raise awareness about sustainability",
      "Fun and interactive trash-sorting mechanics",
      "Engaging visuals and animations",
      "Simple tap-based gameplay",
      "Score tracking system for competitive play",
    ],
    game_mechanics: [
      "The player starts with 3 lives",
      "Tap the moving hand carrying trash to drop it into the moving trash bin",
      "If the hand crosses the screen without dropping the trash → Lose a life",
      "If the trash misses the bin → Lose a life",
      "Each successful trash drop earns 10 points",
      "Reach 100 points to win the game!",
      "If all 3 lives are lost, the game is over",
    ],
    video: save_the_earth,
    tech_stack: "Java, Android Studio",
    github: "https://github.com",
  },
];
