const BASE_URL = "https://tiffanyq.github.io/dating-worried-version";
const NUM_QUESTIONS = 22;

let tracking = {
  currentQuestion: 0,
  ra: 0,
  ri: 0,
  sn: 0,
  nohoneybear: false,
  ev: false, // q5
  amb: false, // q10
  date: ""
};

let music;
let musicOn = false;
let clickSound;
let buttonSoundsOn = false;

window.addEventListener("load", function(event) {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const musicButton = document.getElementById("music-button");
  const shareLinkButton = document.getElementById("share-button");

  startButton.addEventListener('click', startQuiz, false);
  musicButton.addEventListener('click', toggleMusic, false);
  shareLinkButton.addEventListener('click', copyToClipboard, false);
  restartButton.addEventListener('click', restartQuiz, false);

  // add button sounds
  startButton.addEventListener('click', makeClickSound, false);

  // music and click sounds
  music = document.getElementById("background-audio");
  clickSound = new Audio('audio/click.mp3');
});

async function copyToClipboard() {
  const str = "How will you meet the love of your life? Find out: " + BASE_URL;
    try {
      await navigator.clipboard.writeText(str);
      updateShareButton(true, "Copied link!")
    } catch (err) {
      updateShareButton(false, "Copying link failed, please try again");
    }
}

function updateShareButton(copiedSuccessfully, str) {
  const shareButton = document.getElementById("share-button");
  shareButton.innerText = str;
  if (copiedSuccessfully) {
    shareButton.classList.add("share-button-shared");
  } else {
    shareButton.classList.remove("share-button-shared");
  }
}

/* starts quiz when "next" is selected */
function startQuiz() {
    const startMenu = document.getElementById("quiz-start");
    const startButton = document.getElementById("start-button");
    const quizPlayArea = document.getElementById("quiz-play");
    startMenu.style.display = "none";
    startButton.style.display = "none";
    quizPlayArea.style.display = "block";
    // advance count
    tracking.currentQuestion++;
    const counter = document.getElementById("counter");
    const c = document.getElementById("count-number");
    counter.style.visibility = "visible";
    c.innerText = tracking.currentQuestion;
    changeQuestion();
}

/* changes question contents: img, descrip, choices */
function changeQuestion(responseId=false) { // false default, otherwise set to int!!!
    const img = document.getElementById("q-image");
    const counter = document.getElementById("count-number");
    const description = document.getElementById("q-description");
    const questionCount = tracking.currentQuestion;
    const questionNumber = "q" + questionCount;

    // special case for date conversation
    if (onDate()) {
      img.src = "img/questions/"+tracking.date+"/"+q_images[questionNumber]['img'];
      img.alt = q_images[questionNumber]['alt'];
    } else {
      img.src = "img/questions/"+q_images[questionNumber]['img'];
      img.alt = q_images[questionNumber]['alt'];
    }
    if (responseId) {
      description.innerHTML = q_descriptions[questionNumber][responseId];
    } else if (onDate()) {
      description.innerHTML = q_descriptions[questionNumber][tracking.date];
    } else if (questionCount === 13 && tracking.nohoneybear) { // honey bear...
      description.innerHTML = "Okay, maybe not. But why not enjoy the dream for just a moment? " + q_descriptions[questionNumber]; // innerHTML for <i><br> tags
    } else {
      description.innerHTML = q_descriptions[questionNumber]; // innerHTML for <i><br> tags
    }
    // replace the page's displayed content with next question's content
    // <button class = "select-row" data-ar="" data-ri="" data-sn="">
    const choiceContainer = document.getElementById("choice-container");
    choiceContainer.innerHTML = ""; // clear out old questions
    let currQuestionChoices = q_choices[questionNumber];

    // special case for date conversation
    if (onDate()) {
      currQuestionChoices = q_choices[questionNumber][tracking.date];
    } else {
      currQuestionChoices = q_choices[questionNumber];
    }
    for (const i in currQuestionChoices) {
      const ch = document.createElement("button");
      ch.classList.add("select-row");
      ch.classList.add("fade-one");
      // special case for date convos
      let j;
      if (onDate()) {
        j = q_choices[questionNumber][tracking.date][i];
      } else {
        j = q_choices[questionNumber][i];
      }
      ch.innerText = j["text"];
      ch.setAttribute("data-ra",j["ra"]);
      ch.setAttribute("data-ri",j["ri"]);
      ch.setAttribute("data-sn",j["sn"]);
      // for questions 4 and 9
      if (j["id"]) ch.setAttribute("data-id", j["id"]);
      // for 5
      if (j["ev"]) ch.setAttribute("data-ev", true);
      // for 10
      if (j["amb"]) ch.setAttribute("data-amb", true);
      // for 12
      if (j["nohoneybear"]) ch.setAttribute("data-nohoneybear", true);
      // special casing for date
      if (tracking.currentQuestion === 15) {
        if (j["text"] === "Ev" && !tracking.ev) {
          ch.innerText = "🔒 Ev (didn't meet)";
          ch.classList.add("didnt-meet-button");
          ch.disabled = true;
        }
        if (j["text"] === "Amb" && !tracking.amb) {
          ch.innerText = "🔒 Amb (didn't meet)";
          ch.classList.add("didnt-meet-button");
          ch.disabled = true;
        }
      }
      ch.addEventListener('click', advanceToNextQuestion, false);
      ch.addEventListener('click', makeClickSound, false);
      choiceContainer.appendChild(ch);
    }
    // animate the transitions for the content 
    hideQuestionContent(counter, img, description);
    setTimeout(function() {
      animateQuestionContent(counter, img, description)
    }, 1);
  }

function onDate() {
  return (tracking.currentQuestion === 18 ||
  tracking.currentQuestion === 19 ||
  tracking.currentQuestion === 20);
}

function hideQuestionContent(counter, img, description) {
  counter.classList.remove("fade-zero");
  img.classList.remove("fade-static-subtle-zero");
}

function animateQuestionContent(counter, img, description) {
  counter.classList.add("fade-zero");
  img.classList.add("fade-static-subtle-zero");
}

// called by the generated choice fields
function advanceToNextQuestion(e) {
  // keep track of answers
  const response = e.target;
  let responseId = false; // NOTE this will change from boolean to int
  // update scores
  tracking.ra += parseInt(response.dataset.ra);
  tracking.ri += parseInt(response.dataset.ri);
  tracking.sn += parseInt(response.dataset.sn);
  if (response.dataset.id) responseId = response.dataset.id;
  if (response.dataset.ev) tracking.ev = true;
  if (response.dataset.amb) tracking.amb = true;
  if (response.dataset.nohoneybear) tracking.nohoneybear = true;
  // special case: who to go on a date with
  if (tracking.currentQuestion === 15) {
    if (response.innerText === "Ev") {
      tracking.date = "ev";
    } else if (response.innerText === "Amb") {
      tracking.date = "amb";
    } else {
      tracking.date = "plonk";
    }
  }
  if (tracking.currentQuestion === NUM_QUESTIONS) {
    endQuiz();
  } else {
    // update the top counter
    tracking.currentQuestion++;
    const c = document.getElementById("count-number");
    c.innerText = tracking.currentQuestion;
    changeQuestion(responseId);
    changeMusic();
  }
  // scroll to top
  window.scrollTo(0,0);
}

function endQuiz() {
  // calculate results
  const profile = computeResult();
  const youllKnowWhen = document.getElementById("youll-know-when");
  const profileName = document.getElementById("profile-name");
  const profileImg = document.getElementById("profile-img");
  const attr1 = document.getElementById("profile-attribute-1");
  const attr2 = document.getElementById("profile-attribute-2");
  const attr3 = document.getElementById("profile-attribute-3");
  const profileHow = document.getElementById("profile-how");
  const profileMiss = document.getElementById("profile-miss");
  const opposite = document.getElementById("your-opposite");
  const oppositeImg = document.getElementById("opposite-img");

  youllKnowWhen.innerText = result_profiles[profile]["when"];
  profileName.innerText = result_profiles[profile]["name"];
  profileImg.src = "img/profiles/"+result_profiles[profile]["img"];
  profileImg.alt = result_profiles[profile]["alt"];
  attr1.innerText = result_profiles[profile]["attr1"];
  attr2.innerText = result_profiles[profile]["attr2"];
  attr3.innerText = result_profiles[profile]["attr3"];
  profileHow.innerText = result_profiles[profile]["how"];
  profileMiss.innerText = result_profiles[profile]["miss"];
  opposite.innerText = result_profiles[profile]["opposite"];
  oppositeImg.src = "img/profiles/"+result_profiles[profile]["oppositeimg"];

  // switch screens
  const c = document.getElementById("counter");
  c.style.visibility = "hidden";
  const quizScreen = document.getElementById("quiz-play")
  const resultsScreen = document.getElementById("quiz-end-results");
  const nextButton = document.getElementById("next-button");
  quizScreen.style.display = "none";
  resultsScreen.style.display = "block"; 
}

function computeResult() {
  console.log("if you see this hello :) good to see u here");
  let resultString = "";
  if (tracking.ra < 0) {
    resultString += "r";
  } else {
    resultString += "a";
  }
  if (tracking.ri < 0) {
    resultString += "r";
  } else {
    resultString += "i";
  }
  if (tracking.sn < 0) {
    resultString += "s";
  } else {
    resultString += "n";
  }
  return resultString;
}

function restartQuiz() {
  tracking.currentQuestion = 0;
  tracking.ra = 0;
  tracking.ri = 0;
  tracking.sn = 0;
  tracking.nohoneybear = false;
  tracking.ev = false;
  tracking.amb = false;
  tracking.date = "";
  const resultsScreen = document.getElementById("quiz-end-results");
  resultsScreen.style.display = "none";
  music.src = 'audio/day.mp3';
  if (musicOn) {
    music.play();
  } else {
    music.pause();
  }
  startQuiz();
}

function toggleMusic() {
  const mb = document.getElementById("music-button");
  const mn = mb.querySelectorAll("span")[0];
  const label = mb.querySelectorAll("span")[1];
  if (mn.innerText === "music_off") {
    mn.innerText = "music_note";
    mn.classList.add("music-on");
    mb.ariaLabel = "turn music off";
    label.classList.add("music-on");
    label.innerText = "turn music off";
    music.play();
    musicOn = true;
  } else {
    mn.innerText = "music_off";
    mn.classList.remove("music-on");
    mb.ariaLabel = "turn music on";
    label.innerText = "turn music on";
    label.classList.remove("music-on");
    music.pause();
    musicOn = false;
  }
  // also toggle button sounds
  buttonSoundsOn = !buttonSoundsOn;
}

// changes music out during scene changes
function changeMusic() {
  if (tracking.currentQuestion === 12) {
    music.src = 'audio/date.mp3';
    if (musicOn) {
      music.play();
    } else {
      music.pause();
    }
  }
  if (tracking.currentQuestion === 21) {
    music.src = 'audio/end.mp3';
    if (musicOn) {
      music.play();
    } else {
      music.pause();
    }
  }
}

function makeClickSound() {
  if (buttonSoundsOn) {
    clickSound.play();
    clickSound.currentTime = 0;
  }
}
