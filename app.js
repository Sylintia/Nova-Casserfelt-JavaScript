let covers = ["R.png", "FeverEpilogue.jpg", "GoLive.png", "FeverPart2.jpg", "Butter.jpg", "HideAndSeek.webp", "YellowWood.png", "ItzMe.jpg", "FeverPart1.webp", "DimentionAnswer.jpg", "Minisode1.jpg", "TreasureEffect.webp", "noeasy.jpeg", "MOTS7.jpg", "DimentionDilemma.jpg", "DreamChapterStar.webp", "IamYou.jpeg", "Twicetagram.png", "Oddinary.jpg", "BorderDay1.webp", "GuessWho.webp", "ItzIcy.webp", "Freeze.jpg", "Levanter.jpeg", "FeelSpecial.png", "TheAlbum.png", "TasteOfLove.jpg", "Solo.jpg", "BorderCarnival.webp", "NotShy.webp", "FeverPart3.webp", "ItzDifferent.webp", "FightOrEscape.jpg", "InLife.jpg", "ChapterOne.jpg", "Signal.jpg", "Miroh.jpeg", "Be.png", "DreamChapterEternity.jpg", "SoBad.webp", "Staydom.jpg", "DreamChapterMagic.jpg", "CrazyInLove.jpg", "MoreAndMore.jpg", "KillThisLove.jpg", "Lalisa.png", "FormulaOfLove.webp"];

let picture = document.getElementById("picture");
let currentIndex = 0;
let timeoutId = 0;

function changePicture(direction) {
  if (direction == "+") {
    currentIndex++;
    if (currentIndex >= 47) {
      currentIndex = 0;
    }
  }
  if (direction == "-") {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = 46;
    }
  }
  picture.src = covers[currentIndex];

   timeoutId = setTimeout(() => {
     changePicture("+");
   }, 5000);
}

function changePictureClick(direction) {
  clearTimeout(timeoutId);
  changePicture(direction);
}

changePicture();
