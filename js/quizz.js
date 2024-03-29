const question = document.getElementById('question');
const options = document.getElementById('options');
const result = document.getElementById('result');

const sectionExplication = document.getElementById('sectionExplication');
const nextQuestionButton = document.getElementById('nextQuestion');

const quizData = [
  {
    question: "Si vous voyez un message haineux ou menaçant en ligne, quelle est la meilleure réaction à avoir ?",
    options: ["Ignorer le message et ne rien faire", "Répondre avec une autre insulte ou menace", "Bloquer l'utilisateur et signaler le contenu aux modérateurs ou à la plateforme", "Partager le message avec vos amis pour les mettre en garde"],
    answer: "Bloquer l'utilisateur et signaler le contenu aux modérateurs ou à la plateforme",
    explication: "L’inaction des utilisateurs non concernés entretient malgré eux le harcèlement subi par les victimes."
  },
  {
    question: "Vous découvrez qu'un de vos amis participe à du cyberharcèlement. Comment réagissez-vous ?",
    options: ["Encourager son comportement et participer également", "Parler à votre ami en privé pour lui faire comprendre les conséquences de ses actions", "Ignorer la situation et ne rien dire", "Se moquer de la victime avec votre ami parce que c’est drôle"],
    answer: "Parler à votre ami en privé pour lui faire comprendre les conséquences de ses actions",
    explication:"Il est de votre devoir de sensibiliser vos amis à ce genre de comportements qui, même inconscients, peuvent avoir des conséquences non voulues et dramatiques."
  },
  {
    question: "Vous recevez une photo ou une vidéo intime de quelqu'un sans son consentement. Quelle est la bonne chose à faire ?",
    options: ["Partager la photo ou la vidéo avec d'autres personnes", "Supprimer immédiatement la photo ou la vidéo et en parler à la personne concernée pour l'encourager à prendre des mesures", "Utiliser la photo ou la vidéo pour faire chanter la personne", "Ignorer la situation et continuer sa vie en ligne comme d'habitude"],
    answer: "Supprimer immédiatement la photo ou la vidéo et en parler à la personne concernée pour l'encourager à prendre des mesures",
    explication:"Ce phénomène, appelé “Revenge Porn”, détruit la vie des personnes concernées. Des poursuites légales sont souvent engagées mais ne peuvent rien contre les préjudices moraux."
  },
  {
    question: "Vous remarquez qu'un utilisateur est constamment la cible de moqueries et d'insultes sur un forum en ligne. Quelle est la meilleure façon d'aider cette personne ?",
    options: ["Si ces gens font des blagues sur cette personne, il doit y avoir quelque chose de drôle !", "Envoyer un message privé à la personne pour lui offrir votre soutien et l'encourager à signaler ces comportements si ceux-ci l’atteignent personnellement", "Ignorer la situation et quitter passer au post suivant", "Se moquer de la victime pour se faire des amis sur ce réseau"],
    answer: "Envoyer un message privé à la personne pour lui offrir votre soutien et l'encourager à signaler ces comportements si ceux-ci l’atteignent personnellement",
    explication:"Derrière des sessions vannes et blagues à répétition peuvent se cacher des victimes de cyberharcèlement, acculées par les remarques des internautes et se sentant mises à l’écart, plus bas que terre. Il faut y penser !"
  },
  {
    question: "Quel influenceur français a été victime de harcèlement en ligne après avoir partagé les actualités internationales, provoquant une division parmi ses abonnés ?",
    options: ["Hugo Décrypte", "Michou", "Cyprien", "Tibo InShape"],
    answer: "Hugo Décrypte",
    explication:"Le cyberharcèlement n’est pas justifiable et n’a parfois aucune origine. Ce phénomène de méchanceté gratuite peut être destructeur pour aucun motif."
  },
  {
    question: "Vous êtes témoin d'une conversation en ligne où quelqu'un partage des informations fausses ou diffamatoires sur une personne. Quelle est la bonne façon de réagir ?",
    options: ["Participer à la conversation et partager vos propres opinions sur la personne concernée", "Informer les autres participants que les informations partagées sont fausses ou diffamatoires et les encourager à vérifier leurs sources", "Ignorer la conversation, s’ils veulent se renseigner ils le feront", "Partager la conversation sur d'autres plateformes pour que plus de personnes soient au courant"],
    answer: "Informer les autres participants que les informations partagées sont fausses ou diffamatoires et les encourager à vérifier leurs sources",
    explication:"Il faut se vérifier les informations que l’on peut lire sur les réseaux sociaux,  la désinformation peut y être forte. Parfois, des victimes de harcèlement le sont à cause de fausses informations ou photos"
  },
  {
    question: "Selon les statistiques, quel pourcentage de jeunes a été victime de cyberharcèlement au moins une fois dans leur vie ?",
    options: ["10%", "25%", "40%", "60%"],
    answer: "40%",
    explication:"beaucoup de jeunes sont victimes de cyberharcèlement mais n’en parlent pas. Ce sujet touche beaucoup plus de jeunes que ce qu’il n’y paraît est est omniprésent dans la vie de certains."
  },
  {
    question: "Quel est le pourcentage de victimes de cyberharcèlement qui ont déclaré avoir ressenti des pensées suicidaires à cause du harcèlement en ligne ?",
    options: ["5%", "15%", "30%", " 50%"],
    answer: "30%",
    explication:"10 à 15% des personnes ayant des pensées suicidaires passent à l’acte. En moyenne, 2% des 13-18 ans seront donc confrontés à ces complications."
  },
  {
    question: "Selon les données, quel pourcentage de cyberharceleurs sont également victimes de harcèlement ou d'abus en dehors de l'environnement numérique ?",
    options: ["10%", "20%", "30%", "40%"],
    answer: "20%",
    explication:"Les harceuleurs/euses peuvent elles-mêmes victimes de harcèlement, et leur comportement peut en découler. Le Cyberharcèlement est un cercle vicieux."
  },
  {
    question: "Parmi les victimes de cyberharcèlement, quel pourcentage a déclaré avoir rencontré des problèmes, tels que la dépression ou l'anxiété, à la suite du harcèlement en ligne ?",
    options: ["20%", "40%", "60%", "80%"],
    answer: "40%",
    explication:"Toutes les formes de harcèlement laissent des séquelles aux gens qui sont touchés. Il n’est pas rare que les victimes se sentent mal et/ou dans un état dépressif des suites de ce qu’ils subissent"
  },
  {
    question: "Léna Situations, une influenceuse française connue, a été victime de harcèlement de masse sur les réseaux sociaux. Quelle a été la principale raison de ce harcèlement ?",
    options: ["Elle a révélé des secrets sur d'autres influenceurs", "Elle a partagé des opinions politiques controversées", "Elle a été impliquée dans des scandales de triche ou de mensonge", "Aucune raison spécifique n'a été donnée"],
    answer: "Aucune raison spécifique n'a été donnée",
    explication:"Les comportements homophobes, sexistes etc. peuvent causer des effets de groupe prenant de l’ampleur et prônant des idéaux en mettant des gens impliqués ou non en portafaux"
  },
  {
    question: "Quel a été l'impact du harcèlement de masse sur Léna Situations ?",
    options: ["Elle a gagné en popularité et en followers", "Elle a ressenti des symptômes de stress, d'anxiété et de dépression", " Elle a été invitée à participer à des émissions de télévision pour partager son histoire", "Elle a décidé de changer complètement de carrière et de quitter les réseaux sociaux"],
    answer: "Elle a ressenti des symptômes de stress, d'anxiété et de dépression",
    explication:"Le harcèlement qu’elle a subi a fait surgir en elle des symptômes d’anxiété et de dépression alors qu’elle n’avait rien fait pour attirer les foudres des cybeharceleurs"
  },
  {
    question: "Quelle est la réaction la plus courante des followers et des fans lorsqu'une personnalité influente est victime de harcèlement de masse sur les réseaux sociaux ?",
    options: ["Ils soutiennent et défendent la personnalité en question", "Ils participent au harcèlement en partageant des commentaires négatifs et haineux", "Ils ignorent la situation et continuent à suivre la personnalité comme si de rien n'était", "Ils suppriment leur compte de réseaux sociaux pour éviter d'être impliqués"],
    answer: "Ils soutiennent et défendent la personnalité en question",
    explication:""
  },
  {
    question: "Comment les plateformes de réseaux sociaux peuvent-elles mieux protéger les personnalités influentes contre le harcèlement de masse en ligne ?",
    options: ["En limitant la visibilité des commentaires négatifs et haineux", "En permettant aux personnalités de bloquer facilement les utilisateurs malveillants", " En mettant en place des mesures strictes et des sanctions pour les harceleurs", "Toutes les réponses ci-dessus"],
    answer: "En mettant en place des mesures strictes et des sanctions pour les harceleurs",
    explication:""
  },
];
 
let currentQuestion = 0;
let timeLeft = 20;
let timerId;
 
function loadQuestion() {
  question.textContent = quizData[currentQuestion].question;
  options.innerHTML = '';
  for (let i = 0; i < quizData[currentQuestion].options.length; i++) {
    const option = document.createElement('div');
    option.textContent = quizData[currentQuestion].options[i];
    option.classList.add('option');
    option.addEventListener('click', () => selectOption(quizData[currentQuestion].options[i]));
    options.appendChild(option);
  }
  sectionExplication.classList.display = 'none';
}
 
function startTimer() {
    timerId = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateProgressBar();
      } else {
        clearInterval(timerId);
        timeLeft = 20;
        startTimer();
      }
    }, 1000);
  }
    function selectOption(selected) {
    selectedOptions = [selected];
    updateOptionColors();
  }
  
  function updateOptionColors() {
    const allOptions = document.querySelectorAll('.option');
    allOptions.forEach(option => {
      if (selectedOptions.includes(option.textContent)) {
        option.classList.add('selected');
      } else {
        option.classList.remove('selected');
      }
    });
  }
  
  function loadNextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
      startTimer();
    } else {
      document.querySelector('.content').innerHTML = "<h2>Fin du quizz!</h2>";
    }
    nextQuestionButton.style.display ='none';
    sectionExplication.style.display ='none';
    result.style.display ='none';
  }
 
  function showExplanation(explication) {
    sectionExplication.style.display = 'block';
    const explanationDiv = document.getElementById('explication');
    const explicationText = quizData[currentQuestion].explication;
    explanationDiv.textContent = explicationText;
    explanationDiv.style.display = 'block';
    nextQuestionButton.style.display ='block';
    result.style.display ='block';

    const correctAnswerDiv = document.getElementById('correctAnswer');
    const correctAnswer = quizData[currentQuestion].answer;
    correctAnswerDiv.textContent = correctAnswer;
  }
 
  function checkAnswer() {
    const correctAnswer = quizData[currentQuestion].answer;
    if (selectedOptions.length === 0) {
      result.textContent = "Veuillez sélectionner une réponse.";
      result.style.color = "red";
      return;
    }
    if (selectedOptions.length > 1) {
      result.textContent = "Veuillez sélectionner une seule réponse.";
      result.style.color = "red";
      return;
    }
    const selectedAnswer = selectedOptions[0];
  if (selectedAnswer === correctAnswer) {
    result.textContent = "Bonne réponse !";
    result.style.color = "green";
  } else {
    result.textContent = "Mauvaise réponse";
    result.style.color = "red";
 
  }
  showExplanation(explication);
  }
  loadQuestion();