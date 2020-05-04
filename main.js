// 获取dom元素
// 获取每一个选项
const choices = document.querySelectorAll('.choice');
const restart = document.getElementById('restart');
const result = document.getElementById('result');
const score = document.getElementById('score');
const modal = document.querySelector('.modal');
// 展示分数
const scoreboard = {
  player: 0,
  computer: 0
}
function play(e){
  // 显示重新开始按钮
  restart.style.display = 'inline-block';
  // 获取玩家的选择(id)
  const playerChoice = e.target.id;
  // 获取电脑的选择
  const computerChoice = getComputerChoice();
  // console.log(playerChoice,computerChoice);
  // 获取赢家
  const winner = getWinner(playerChoice,computerChoice);
  showWinner(winner, computerChoice)
}
function getComputerChoice () {
  const random = Math.random();
  if(random < 0.3){
    return 'rock';
  } else if (random <= 0.67){
    return 'paper'
  } else{
    return 'scissors';
  }
}
function getWinner (p, c) {
  if (p === c) {
    return 'draw'
  } else if (p === 'rock'){
    if (c === 'paper'){
      return 'computer'
    } else {
      return 'player'
    }
  } else if (p === 'paper'){
    if (c === 'scissors') {
      return 'computer'
    } else {
      return 'player'
    }
  } else if (p === 'scissors') {
    if (c=== 'rock') {
      return 'computer'
    } else {
      return 'player'
    }
  }
}
// 显示赢家
function showWinner (winner, computerChoice) {
  if (winner === 'player') {
    scoreboard.player++;
    result.innerHTML = `
    <h1 class="text-win">恭喜你,你赢了</h1>
    <p>电脑的选择为</p>
    <i class="fas fa-hand-${computerChoice} fa-10x"></i>
    `
  } else if (winner === 'computer') {
    scoreboard.computer++;
    result.innerHTML = `
    <h1 class="text-lose">抱歉,你输了</h1>
    <p>电脑的选择为</p>
    <i class="fas fa-hand-${computerChoice} fa-10x"></i>
    `
  } else {
    result.innerHTML = `
    <h1>双方平局</h1>
    <p>电脑的选择为</p>
    <i class="fas fa-hand-${computerChoice} fa-10x"></i>
    `
  }
  // 显示分数
  score.innerHTML = `
  <p>玩家:${scoreboard.player}</p>
  <p>电脑:${scoreboard.computer}</p>
  `
  // 显示modal
  modal.style.display = 'block'
}
function clearModal (e) {
  if (e.target === modal) {
    modal.style.display = 'none'
  }
}
function startGame () {
  scoreboard.player = 0;
  scoreboard.computer = 0;
  score.innerHTML = `
  <p>玩家:0</p>
  <p>电脑:0</p>
  `
}
// 给每一个选项绑定点击事件
choices.forEach(choice => choice.addEventListener('click', play))
window.addEventListener('click', clearModal);
restart.addEventListener('click', startGame);