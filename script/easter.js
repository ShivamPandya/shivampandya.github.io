let eastereggs = [
    "Did you notice that 1000 digits of Pi? I am big fan of Pi, that's why they are there!",
    "Have I mentioned that I am a close-up magician? I love performing magic and was also internationally published while I was in college",
    "In the third semester of my graduation, I miserably failed! IN ALL THE SUBJECTS!",
    "Are you really enjoying these easter eggs? Come on, tell me something about yourself as well, drop me a mail!",
    "I love Chai! Not TEA! CHAI! Both are different for a dedicated Chai Lover",
]



particlesJS.load('particles-js',
    'particles.json', function(){
      console.log("Well, welcome to the site (as well as to the console :D )");
    });

let msg = eastereggs[Math.floor(Math.random() * eastereggs.length)]

console.log(msg)