
// lecture 1
// console.log('Massage Before Alert');
// alert('blocking JS');
// console.log('Massage After Alert');





// Event 
// const buttonElement=document.querySelector('.button');
// const textElement=document.querySelector('#text');
// buttonElement.addEventListener('click',() =>{
//         textElement.textContent='Button is Clicked';
//         setTimeout(()=>{textElement.textContent=''},2000);
// });


// lecture 2

// Setinterval
// const textElement=document.querySelector('#text');
// let seconds=0;
// textElement.textContent=`${seconds}`;
// const timer=setInterval(()=>{
//         seconds++;
//         textElement.textContent=`${seconds}`;
//         if(seconds>5){
//                 clearInterval(timer);
//         }
// },1000);


// lecture 3


const emojiDetails = [
        { description: "Smiling face with sunglasses", emoji: "😎" },
        { description: "Thumbs up", emoji: "👍" },
        { description: "Heart eyes", emoji: "😍" },
        { description: "Crying face", emoji: "😢" },
        { description: "Party popper", emoji: "🎉" },
        // Add more emoji descriptions here
      ];
      
        let currentEmojiIndex = 0;
        let score = 0;
        let second=10;
        let timer;
      

        const guessInput = document.getElementById("guess-input");
        const resultElement = document.getElementById("result");
        const scoreElement = document.getElementById("score");
        const timerElement=document.getElementById('timer');

      
        function displayEmoji() {
          const descriptionElement = document.getElementById("description");
          descriptionElement.textContent = emojiDetails[currentEmojiIndex].emoji;
          timerElement.textContent=`second:${second}s`;
        }
      
        function checkGuess() {
          const guess = guessInput.value.trim().toLowerCase();
          const correctEmoji = emojiDetails[currentEmojiIndex].description.trim().toLowerCase();
          if (guess === correctEmoji) {
            resultElement.textContent = "Correct!";
            score++;
          } else {
            resultElement.textContent = "Wrong!";
          }
          scoreElement.textContent = `Score: ${score}`;
          guessInput.value = "";
          guessInput.focus();
          nextEmoji();
        }
      
        function nextEmoji() {
          currentEmojiIndex++;
          setTimeout(()=>{
            resultElement.textContent = " ";
          },1000);
          if (currentEmojiIndex === emojiDetails.length) {
            currentEmojiIndex = 0;
            score=0;
          }
      
          displayEmoji();
        }
      
        document
          .getElementById("guess-input")
          .addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
              checkGuess();
            }
          });
      
        document.addEventListener("DOMContentLoaded", () => {
          displayEmoji();
          startTimer();
        });
        function startTimer(){
          time=setInterval(()=>{
            second--;
            timerElement.textContent=`second:${second}s`;
            if(second<=0){
              endGame();
            }
          },1000);
        }
        function endGame(){
          clearInterval(time);
          guessInput.disable=true;
          resultElement.textContent="Game Over!";
        }


        // document.getElementById("inputFieldId").value = "New Value";
        // document.getElementById("inputFieldId").setAttribute("value", "New Value");
        // document.getElementById("inputFieldId").defaultValue = "New Default Value";

        
