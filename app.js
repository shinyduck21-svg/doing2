// Irregular Verbs Dataset
const verbsDataset = [
  { base: 'be', past: 'was', pastParticiple: 'been', meaning: '~이다, 있다' },
  { base: 'become', past: 'became', pastParticiple: 'become', meaning: '~이 되다' },
  { base: 'begin', past: 'began', pastParticiple: 'begun', meaning: '시작하다' },
  { base: 'break', past: 'broke', pastParticiple: 'broken', meaning: '부수다' },
  { base: 'bring', past: 'brought', pastParticiple: 'brought', meaning: '가져오다' },
  { base: 'build', past: 'built', pastParticiple: 'built', meaning: '세우다, 짓다' },
  { base: 'buy', past: 'bought', pastParticiple: 'bought', meaning: '사다' },
  { base: 'catch', past: 'caught', pastParticiple: 'caught', meaning: '잡다' },
  { base: 'choose', past: 'chose', pastParticiple: 'chosen', meaning: '선택하다' },
  { base: 'come', past: 'came', pastParticiple: 'come', meaning: '오다' },
  { base: 'cut', past: 'cut', pastParticiple: 'cut', meaning: '자르다' },
  { base: 'do', past: 'did', pastParticiple: 'done', meaning: '하다' },
  { base: 'draw', past: 'drew', pastParticiple: 'drawn', meaning: '그리다' },
  { base: 'drink', past: 'drank', pastParticiple: 'drunk', meaning: '마시다' },
  { base: 'drive', past: 'drove', pastParticiple: 'driven', meaning: '운전하다' },
  { base: 'eat', past: 'ate', pastParticiple: 'eaten', meaning: '먹다' },
  { base: 'fall', past: 'fell', pastParticiple: 'fallen', meaning: '떨어지다' },
  { base: 'feel', past: 'felt', pastParticiple: 'felt', meaning: '느끼다' },
  { base: 'find', past: 'found', pastParticiple: 'found', meaning: '찾다' },
  { base: 'fly', past: 'flew', pastParticiple: 'flown', meaning: '날다' },
  { base: 'forget', past: 'forgot', pastParticiple: 'forgotten', meaning: '잊다' },
  { base: 'get', past: 'got', pastParticiple: 'got', meaning: '얻다' },
  { base: 'give', past: 'gave', pastParticiple: 'given', meaning: '주다' },
  { base: 'go', past: 'went', pastParticiple: 'gone', meaning: '가다' },
  { base: 'grow', past: 'grew', pastParticiple: 'grown', meaning: '자라다' },
  { base: 'have', past: 'had', pastParticiple: 'had', meaning: '가지다' },
  { base: 'hear', past: 'heard', pastParticiple: 'heard', meaning: '듣다' },
  { base: 'hide', past: 'hid', pastParticiple: 'hidden', meaning: '숨기다' },
  { base: 'keep', past: 'kept', pastParticiple: 'kept', meaning: '유지하다' },
  { base: 'know', past: 'knew', pastParticiple: 'known', meaning: '알다' },
  { base: 'leave', past: 'left', pastParticiple: 'left', meaning: '떠나다' },
  { base: 'let', past: 'let', pastParticiple: 'let', meaning: '허락하다' },
  { base: 'lose', past: 'lost', pastParticiple: 'lost', meaning: '잃다' },
  { base: 'make', past: 'made', pastParticiple: 'made', meaning: '만들다' },
  { base: 'meet', past: 'met', pastParticiple: 'met', meaning: '만나다' },
  { base: 'pay', past: 'paid', pastParticiple: 'paid', meaning: '지불하다' },
  { base: 'put', past: 'put', pastParticiple: 'put', meaning: '놓다' },
  { base: 'read', past: 'read', pastParticiple: 'read', meaning: '읽다' },
  { base: 'ride', past: 'rode', pastParticiple: 'ridden', meaning: '타다' },
  { base: 'ring', past: 'rang', pastParticiple: 'rung', meaning: '울리다' },
  { base: 'run', past: 'ran', pastParticiple: 'run', meaning: '달리기하다' },
  { base: 'say', past: 'said', pastParticiple: 'said', meaning: '말하다' },
  { base: 'see', past: 'saw', pastParticiple: 'seen', meaning: '보다' },
  { base: 'sell', past: 'sold', pastParticiple: 'sold', meaning: '팔다' },
  { base: 'send', past: 'sent', pastParticiple: 'sent', meaning: '보내다' },
  { base: 'sing', past: 'sang', pastParticiple: 'sung', meaning: '노래하다' },
  { base: 'sleep', past: 'slept', pastParticiple: 'slept', meaning: '자다' },
  { base: 'speak', past: 'spoke', pastParticiple: 'spoken', meaning: '말하다' },
  { base: 'spend', past: 'spent', pastParticiple: 'spent', meaning: '소비하다' },
  { base: 'stand', past: 'stood', pastParticiple: 'stood', meaning: '서다' },
  { base: 'swim', past: 'swam', pastParticiple: 'swum', meaning: '수영하다' },
  { base: 'take', past: 'took', pastParticiple: 'taken', meaning: '취하다, 가져가다' },
  { base: 'teach', past: 'taught', pastParticiple: 'taught', meaning: '가르치다' },
  { base: 'tell', past: 'told', pastParticiple: 'told', meaning: '말하다' },
  { base: 'think', past: 'thought', pastParticiple: 'thought', meaning: '생각하다' },
  { base: 'understand', past: 'understood', pastParticiple: 'understood', meaning: '이해하다' },
  { base: 'wear', past: 'wore', pastParticiple: 'worn', meaning: '입다' },
  { base: 'write', past: 'wrote', pastParticiple: 'written', meaning: '쓰다' }
];

// App State
let memorizedVerbs = JSON.parse(localStorage.getItem('memorizedVerbs')) || [];
let activeTab = 'list';

// Flashcard State
let currentFlashcardIndex = 0;
let flashcardList = [];

// Quiz State
let quizList = [];
let currentQuizIndex = 0;
let quizScore = 0;
let quizQuestionsCount = 10;
let currentQuestionAnswers = {};

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  setupEventListeners();
  updateProgressBar();
  renderVerbList();
  switchTab('list');
}

// Navigation / Tabs
function setupEventListeners() {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      const targetTab = e.currentTarget.dataset.tab;
      switchTab(targetTab);
    });
  });

  // Search input
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', renderVerbList);
  }

  // Filter buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      renderVerbList();
    });
  });

  // Flashcard controls
  const flashcard = document.getElementById('flashcard');
  if (flashcard) {
    flashcard.addEventListener('click', () => {
      flashcard.classList.toggle('flipped');
    });
  }

  document.getElementById('card-prev-btn').addEventListener('click', prevFlashcard);
  document.getElementById('card-next-btn').addEventListener('click', nextFlashcard);
  document.getElementById('card-know-btn').addEventListener('click', () => markFlashcard(true));
  document.getElementById('card-dont-know-btn').addEventListener('click', () => markFlashcard(false));

  // Quiz controls
  document.getElementById('quiz-submit-btn').addEventListener('click', checkQuizAnswer);
  document.getElementById('quiz-next-btn').addEventListener('click', nextQuizQuestion);
  document.getElementById('quiz-restart-btn').addEventListener('click', startNewQuiz);
}

function switchTab(tabName) {
  activeTab = tabName;
  
  // Update Tab Button Styles
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(tab => {
    if (tab.dataset.tab === tabName) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  // Show/Hide Sections
  const sections = document.querySelectorAll('.app-section');
  sections.forEach(sec => {
    if (sec.id === `${tabName}-section`) {
      sec.classList.add('active');
    } else {
      sec.classList.remove('active');
    }
  });

  // Tab specific initializations
  if (tabName === 'list') {
    renderVerbList();
  } else if (tabName === 'flashcard') {
    startFlashcards();
  } else if (tabName === 'quiz') {
    startNewQuiz();
  }
}

// Progress and Storage
function toggleMemorized(base) {
  const index = memorizedVerbs.indexOf(base);
  if (index > -1) {
    memorizedVerbs.splice(index, 1);
  } else {
    memorizedVerbs.push(base);
  }
  localStorage.setItem('memorizedVerbs', JSON.stringify(memorizedVerbs));
  updateProgressBar();
  
  // If we are in the list view, just update the row styling and check status without re-rendering everything
  const checkbox = document.querySelector(`.memo-check[data-base="${base}"]`);
  if (checkbox) {
    checkbox.checked = memorizedVerbs.includes(base);
    const row = checkbox.closest('tr');
    if (row) {
      if (checkbox.checked) {
        row.classList.add('memorized');
      } else {
        row.classList.remove('memorized');
      }
    }
  }
}

function updateProgressBar() {
  const progressPercent = Math.round((memorizedVerbs.length / verbsDataset.length) * 100);
  const progressBar = document.getElementById('progress-bar');
  const progressText = document.getElementById('progress-text');
  
  if (progressBar) progressBar.style.width = `${progressPercent}%`;
  if (progressText) progressText.textContent = `${memorizedVerbs.length} / ${verbsDataset.length} (${progressPercent}%)`;
}

// Tab 1: Verb List
function renderVerbList() {
  const searchVal = document.getElementById('search-input').value.toLowerCase();
  const filterVal = document.querySelector('.filter-btn.active').dataset.filter;
  const tbody = document.getElementById('verbs-tbody');
  tbody.innerHTML = '';

  const filtered = verbsDataset.filter(v => {
    const matchesSearch = v.base.toLowerCase().includes(searchVal) || 
                          v.past.toLowerCase().includes(searchVal) || 
                          v.pastParticiple.toLowerCase().includes(searchVal) || 
                          v.meaning.includes(searchVal);
    
    const isMemo = memorizedVerbs.includes(v.base);
    const matchesFilter = filterVal === 'all' || 
                          (filterVal === 'memorized' && isMemo) || 
                          (filterVal === 'learning' && !isMemo);
                          
    return matchesSearch && matchesFilter;
  });

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" class="empty-row">검색 결과가 없습니다.</td></tr>`;
    return;
  }

  filtered.forEach(v => {
    const tr = document.createElement('tr');
    const isMemo = memorizedVerbs.includes(v.base);
    if (isMemo) tr.classList.add('memorized');

    tr.innerHTML = `
      <td>
        <label class="checkbox-container">
          <input type="checkbox" class="memo-check" data-base="${v.base}" ${isMemo ? 'checked' : ''}>
          <span class="checkmark"></span>
        </label>
      </td>
      <td class="font-bold">${v.base}</td>
      <td>${v.past}</td>
      <td>${v.pastParticiple}</td>
      <td class="text-dimmed">${v.meaning}</td>
    `;

    tr.querySelector('.memo-check').addEventListener('change', () => {
      toggleMemorized(v.base);
    });

    tbody.appendChild(tr);
  });
}

// Tab 2: Flashcards
function startFlashcards() {
  // Shuffle cards
  flashcardList = [...verbsDataset].sort(() => Math.random() - 0.5);
  currentFlashcardIndex = 0;
  showFlashcard();
}

function showFlashcard() {
  if (flashcardList.length === 0) return;
  const card = flashcardList[currentFlashcardIndex];
  const cardElement = document.getElementById('flashcard');
  
  // Reset card state (unflipped)
  cardElement.classList.remove('flipped');
  
  // Update card counts
  document.getElementById('card-counter').textContent = `${currentFlashcardIndex + 1} / ${flashcardList.length}`;
  
  // Set Front content
  document.getElementById('card-front-title').textContent = card.base;
  
  // Set Back content
  document.getElementById('card-back-base').textContent = card.base;
  document.getElementById('card-back-past').textContent = card.past;
  document.getElementById('card-back-pp').textContent = card.pastParticiple;
  document.getElementById('card-back-meaning').textContent = card.meaning;
  
  // Update status badge
  const badge = document.getElementById('card-status-badge');
  if (memorizedVerbs.includes(card.base)) {
    badge.textContent = '외운 단어';
    badge.className = 'status-badge memorized';
  } else {
    badge.textContent = '외우는 중';
    badge.className = 'status-badge learning';
  }
}

function nextFlashcard() {
  if (currentFlashcardIndex < flashcardList.length - 1) {
    currentFlashcardIndex++;
    showFlashcard();
  } else {
    alert('마지막 카드입니다. 첫 카드로 돌아갑니다.');
    currentFlashcardIndex = 0;
    showFlashcard();
  }
}

function prevFlashcard() {
  if (currentFlashcardIndex > 0) {
    currentFlashcardIndex--;
    showFlashcard();
  }
}

function markFlashcard(knows) {
  const card = flashcardList[currentFlashcardIndex];
  const currentlyMemorized = memorizedVerbs.includes(card.base);
  
  if (knows && !currentlyMemorized) {
    toggleMemorized(card.base);
  } else if (!knows && currentlyMemorized) {
    toggleMemorized(card.base);
  }
  
  // Update badge and next card
  showFlashcard();
  setTimeout(() => {
    nextFlashcard();
  }, 400);
}

// Tab 3: Quiz
function startNewQuiz() {
  // Hide results, show quiz active container
  document.getElementById('quiz-result-container').classList.add('hidden');
  document.getElementById('quiz-active-container').classList.remove('hidden');
  
  // Generate random 10 questions
  quizList = [...verbsDataset].sort(() => Math.random() - 0.5).slice(0, quizQuestionsCount);
  currentQuizIndex = 0;
  quizScore = 0;
  
  showQuizQuestion();
}

function showQuizQuestion() {
  const quiz = quizList[currentQuizIndex];
  
  // Progress & Score labels
  document.getElementById('quiz-q-counter').textContent = `문제 ${currentQuizIndex + 1} / ${quizQuestionsCount}`;
  
  // Decide which fields to test (1 = test past, 2 = test pastParticiple, 3 = test base)
  const testType = Math.floor(Math.random() * 3) + 1;
  const questionContainer = document.getElementById('quiz-question-fields');
  questionContainer.innerHTML = '';
  
  document.getElementById('quiz-meaning-prompt').textContent = quiz.meaning;
  
  let baseHtml = `<span class="quiz-verb-form font-bold">${quiz.base}</span>`;
  let pastHtml = `<span class="quiz-verb-form">${quiz.past}</span>`;
  let ppHtml = `<span class="quiz-verb-form">${quiz.pastParticiple}</span>`;
  
  currentQuestionAnswers = {
    base: quiz.base,
    past: quiz.past,
    pastParticiple: quiz.pastParticiple,
    testField: ''
  };

  if (testType === 1) { // past
    pastHtml = `<input type="text" id="quiz-input-past" class="quiz-input" placeholder="과거형 입력" autocomplete="off" autofocus>`;
    currentQuestionAnswers.testField = 'past';
  } else if (testType === 2) { // pastParticiple
    ppHtml = `<input type="text" id="quiz-input-pp" class="quiz-input" placeholder="과거분사형 입력" autocomplete="off" autofocus>`;
    currentQuestionAnswers.testField = 'pastParticiple';
  } else { // base
    baseHtml = `<input type="text" id="quiz-input-base" class="quiz-input" placeholder="동사원형 입력" autocomplete="off" autofocus>`;
    currentQuestionAnswers.testField = 'base';
  }

  questionContainer.innerHTML = `
    <div class="quiz-field-group">
      <span class="field-label">원형 (Infinitive)</span>
      ${baseHtml}
    </div>
    <div class="quiz-field-group">
      <span class="field-label">과거형 (Past)</span>
      ${pastHtml}
    </div>
    <div class="quiz-field-group">
      <span class="field-label">과거분사형 (Past Participle)</span>
      ${ppHtml}
    </div>
  `;

  // Focus the input field
  setTimeout(() => {
    const input = questionContainer.querySelector('input');
    if (input) {
      input.focus();
      input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          checkQuizAnswer();
        }
      });
    }
  }, 50);

  // Toggle button visibility
  document.getElementById('quiz-submit-btn').classList.remove('hidden');
  document.getElementById('quiz-next-btn').classList.add('hidden');
  
  // Clear feedback
  const feedback = document.getElementById('quiz-feedback');
  feedback.className = 'quiz-feedback-box hidden';
  feedback.innerHTML = '';
}

function checkQuizAnswer() {
  const testField = currentQuestionAnswers.testField;
  let inputEl;
  let correctAnswer = currentQuestionAnswers[testField].trim().toLowerCase();
  
  if (testField === 'base') inputEl = document.getElementById('quiz-input-base');
  else if (testField === 'past') inputEl = document.getElementById('quiz-input-past');
  else if (testField === 'pastParticiple') inputEl = document.getElementById('quiz-input-pp');
  
  if (!inputEl) return;
  
  const userAnswer = inputEl.value.trim().toLowerCase();
  if (userAnswer === '') {
    alert('답변을 입력해 주세요.');
    return;
  }
  
  const feedback = document.getElementById('quiz-feedback');
  feedback.classList.remove('hidden');
  
  const isCorrect = userAnswer === correctAnswer;
  
  if (isCorrect) {
    quizScore++;
    feedback.className = 'quiz-feedback-box correct';
    feedback.innerHTML = `<span class="icon">✓</span> <strong>정답입니다!</strong>`;
    inputEl.classList.add('correct-input');
  } else {
    feedback.className = 'quiz-feedback-box incorrect';
    feedback.innerHTML = `<span class="icon">✗</span> <strong>오답입니다.</strong><br>올바른 답: <span class="highlight">${correctAnswer}</span>`;
    inputEl.classList.add('incorrect-input');
  }
  
  // Make inputs readonly
  inputEl.disabled = true;
  
  document.getElementById('quiz-submit-btn').classList.add('hidden');
  document.getElementById('quiz-next-btn').classList.remove('hidden');
  
  // Auto-focus next button
  document.getElementById('quiz-next-btn').focus();
}

function nextQuizQuestion() {
  if (currentQuizIndex < quizQuestionsCount - 1) {
    currentQuizIndex++;
    showQuizQuestion();
  } else {
    showQuizResults();
  }
}

function showQuizResults() {
  document.getElementById('quiz-active-container').classList.add('hidden');
  
  const resultContainer = document.getElementById('quiz-result-container');
  resultContainer.classList.remove('hidden');
  
  document.getElementById('quiz-result-score').textContent = `${quizScore} / ${quizQuestionsCount}`;
  
  const pct = Math.round((quizScore / quizQuestionsCount) * 100);
  document.getElementById('quiz-result-pct').textContent = `정답률: ${pct}%`;
  
  const messageEl = document.getElementById('quiz-result-message');
  if (pct === 100) {
    messageEl.textContent = '🏆 완벽합니다! 모든 문제를 맞추셨어요!';
  } else if (pct >= 80) {
    messageEl.textContent = '✨ 훌륭한 실력이에요! 조금만 더 하면 완벽해집니다.';
  } else if (pct >= 50) {
    messageEl.textContent = '👍 좋은 시도였습니다! 플래시카드로 조금 더 복습해 보세요.';
  } else {
    messageEl.textContent = '📚 다시 한 번 차근차근 외워볼까요? 화이팅!';
  }
}
