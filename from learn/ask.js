var  question =[
  "what's your name ?",
  "what is  your fav hobbY ?",
  "what is your preferred programming ?"
];
var answers=[];
function ask(i){
  process.stdout.write(`\n\n\n\n ${question[i]}`);
  process.stdout.write(" > ")
};
process.stdin.on('data',function(data){
  answers.push(data.toString().trim());
  if(answers.length<question.length){
    ask(answers.length);
  }
  else{
    process.exit();
  }
});

process.on("exit",function(){
  process.stdout.write("\n\n\n\n\n\n\n");
  process.stdout.write(`Go ${answers[1]} ${answers[0]} you can finish writing  ${answers[2]}  later`);

  process.stdout.write("\n\n\n\n\n\n\n\n\n\n");
})
ask(0);
