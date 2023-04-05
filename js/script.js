document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("currentYear").textContent = new Date().getFullYear();
});

const quizData = [
{
    question:"Q1: What is one of the most important factors in successful dog training?"
    options: ["Consistency", "Feeding Treats Constantly", "Changing Commands Frequently", "Dog's Age"],
    correct: 0,
    image:"",
},
{
    question:"Q2: How often should you train your dog?"
    options: ["Once a Month", "Once a Week", "Daily", "Only when the dog misbehaves"],
    correct: 2,
    image:"",
},
{
    question:"Q3: What is the optimal lenght of a leash for comfortable walks in urban environment?"
    options: ["4 m", "0.5 m", "1 m", "2 m"],
    correct: 3,
    image:"",
},
{
    question:"Q4: You want to continue the walk but your dog insists on sniffing a spot, what should you do?"
    options: ["Pull on the lead and drag him away from that spot", "Give out to him and tug on the lead twice for attention", "Use the attention cue and reward when your dog responds", "Call your dog's name and show him some tasty treats to encourage him to move away from the spot"],
    correct: 3,
    image:"",
},
{
    question:"Q5: Your 16 weeks old puppy meets a group of off lead dogs at play, what should you do?"
    options: ["Immediately let my puppy off lead and let him play as much as he wants", "Don't let your puppy interact with unknown dogs and quickly walk away", "Let my puppy say hello to a few selected calm dogs in 1on1 setting and walk away"],
    correct: 2,
    image:"",
},
{
    question:"Q6: We use marker word 'Yes!' to:"
    options: ["Tell the dog he is a good boy", "Highlight the exact moment he guest the correct answer", "To condition him that training is fun"],
    correct: 1,
    image:"",
},
{
    question:"Q7: Your dog sits on command perfectly at home but he won't do it outside, why?"
    options: ["The dog is just stubborn and you need to insist on him obeying your command", "The command is too weak in comparison to distraction level", "He is more excited when outside and you need to repeat the work a few times until he hears you"],
    correct: 1,
    image:"",
},
{
    question:"Q8: What is more important?"
    options: ["Reward progression towards the final behaviour", "Punish bad behaviour", "Insist on your dog doing the exercise even if you need to put him in position a couple of times"],
    correct: 0,
    image:"",
},
{
    question:"Q9: Your dog barks and lunges towards dogs most dogs he meets on a walk, what should you do when it happens?"
    options: ["Shorten the lead immediately when you see a dog approaching and either wait until they pass or pull your dog away making sure he knows this behaviour is 'bold'", "Do nothing, dogs bark, that's normal", "Shorten the lead appropriately ensuring there is slack on it "],
    correct: 0,
    image:"",
}

]