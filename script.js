// --- Truths & Dares by Category ---
const prompts = {
    general: {
        truths: [
            "What's the most embarrassing thing you've ever Googled about crypto?",
            "Have you ever FOMO'd into a coin right before a crash?",
            "What's the weirdest thing you've bought with crypto?",
            "Admit your biggest crypto investment mistake.",
            "Have you ever pretended to understand 'blockchain' when you didn't?",
            "What's your most unpopular crypto opinion?",
            "Have you ever accidentally sent crypto to the wrong address?",
            "What's the longest you've gone without checking your portfolio?",
            "Have you ever sold a coin only for it to moon right after?",
            "What's one altcoin you secretly believe will 100x, even if others laugh?",
        ],
        dares: [
            "Change your profile picture to a Doge meme for 24 hours.",
            "Send a text to a friend saying 'wen lambo?' with no context.",
            "Post 'To the moon!' on a random social media post unrelated to crypto.",
            "Tweet a cryptic message using only crypto emojis (e.g., 🚀💎🙌🌕).",
            "Try to explain 'decentralized finance' to someone who knows nothing about crypto.",
            "Sing a short song about Bitcoin to yourself, record it, but don't show anyone.",
            "Spend the next 10 minutes speaking only in crypto slang (HODL, FUD, GM, etc.).",
            "Draw a picture of your favorite memecoin mascot and share it (privately, unless brave!).",
            "Make a 'laser eyes' meme of yourself and keep it as your wallpaper for an hour.",
            "Find a random fact about Vitalik Buterin and share it with someone.",
        ]
    },
    meme: {
        truths: [
            "What's the funniest memecoin name you've heard?",
            "Have you ever bought a memecoin purely because of its mascot?",
            "What's your stance on sh*tcoins: embrace or avoid?",
            "Confess your deepest hope for the future of memecoins.",
            "Have you ever tried to create your own memecoin (even just conceptually)?",
        ],
        dares: [
            "Invent a new memecoin slogan on the spot and say it out loud.",
            "Do a dramatic reading of a random memecoin's whitepaper summary.",
            "Replace every vowel in a sentence with 'Ape' and say it.",
            "Find the most obscure memecoin on CoinGecko and explain its 'utility'.",
            "For the next 5 minutes, refer to everyone as 'Ser' or 'Wagmi'."
        ]
    },
    solana: {
        truths: [
            "What's your favorite Solana dApp besides this game?",
            "Have you ever been frustrated by Solana network congestion?",
            "What's your go-to Solana wallet?",
            "Do you own any Solana NFTs? Which one?",
            "What's your honest opinion on the future of Solana?",
        ],
        dares: [
            "Explain the concept of 'Solana transactions per second' to a non-crypto person.",
            "Do your best impression of the Solana 'ping' sound.",
            "Find a random Solana project's Twitter and tweet 'LFG Solana!'",
            "Describe the Solana ecosystem using only only three emojis.",
            "Tell a short, fictional story about how you became a Solana millionaire."
        ]
    },
    advanced: {
        truths: [
            "Have you ever used a flash loan?",
            "What's the sketchiest yield farm you've participated in?",
            "Your biggest liquidated position? Details, please!",
            "What's your opinion on MEV (Maximal Extractable Value)?",
            "Have you ever lost funds due to a smart contract exploit?",
        ],
        dares: [
            "Explain 'impermanent loss' in under 30 seconds.",
            "Create a new, highly technical term for a DeFi concept.",
            "Describe your ideal decentralized autonomous organization (DAO).",
            "Use the word 'synergistic' and 'tokenomics' in the same sentence, out loud.",
            "Pretend to be a bot answering questions about token bridging."
        ]
    }
};

// --- Testimonials ---
const testimonials = [
    { quote: "This game is literally mooning my brain! $TOD to Mars!", author: "CryptoQueen_Sol" },
    { quote: "Finally, a True or Dare that understands my degen lifestyle. Wagmi!", author: "DeFi_Dad" },
    { quote: "HODLing my $TOD and my courage! Best community ever.", author: "AnonApe4Life" },
    { quote: "My wife just asked me 'wen lambo?' after playing this. Send help (and $TOD).", author: "WenLamboGuy" },
    { quote: "The only true or dare where I actually learn something about crypto (mostly my own stupidity).", author: "BlockchainBro" },
];

// --- Achievements Definitions ---
const achievements = [
    { id: 'firstApe', title: 'First Ape', description: 'Complete your first truth or dare!', icon: 'https://cdn-icons-png.flaticon.com/512/1041/1041857.png', category: 'General' },
    { id: 'truthSeeker', title: 'Truth Seeker', description: 'Answer 5 truths!', icon: 'https://cdn-icons-png.flaticon.com/512/2836/2836067.png', category: 'Truths', criteria: { truths: 5 } },
    { id: 'daredevil', title: 'Daredevil', description: 'Complete 5 dares!', icon: 'https://cdn-icons-png.flaticon.com/512/2924/2924619.png', category: 'Dares', criteria: { dares: 5 } },
    { id: 'hodlVeteran', title: 'HODL Veteran', description: 'Answer 20 truths!', icon: 'https://cdn-icons-png.flaticon.com/512/3246/3246231.png', category: 'Truths', criteria: { truths: 20 } },
    { id: 'apeCommander', title: 'Ape Commander', description: 'Complete 20 dares!', icon: 'https://cdn-icons-png.flaticon.com/512/1053/1053424.png', category: 'Dares', criteria: { dares: 20 } },
    { id: 'streakStarter', title: 'Streak Starter', description: 'Maintain a 3-day streak!', icon: 'https://cdn-icons-png.flaticon.com/512/2809/2809796.png', category: 'Streak', criteria: { streak: 3 } },
    { id: 'hodlMaster', title: 'HODL Master', description: 'Maintain a 7-day streak!', icon: 'https://cdn-icons-png.flaticon.com/512/4147/4147614.png', category: 'Streak', criteria: { streak: 7 } },
    { id: 'categoryExplorer', title: 'Category Explorer', description: 'Play one prompt from each category!', icon: 'https://cdn-icons-png.flaticon.com/512/2972/2972322.png', category: 'General', criteria: { categoriesPlayed: ['general', 'meme', 'solana', 'advanced'] } },
];

// --- Daily Quests Definitions ---
const dailyQuests = [
    { id: 'play5', text: 'Complete 5 Truths or Dares', reward: 5, criteria: { totalGames: 5 } },
    { id: 'playMeme', text: 'Complete 1 Dare from "Meme Coin Culture" category', reward: 3, criteria: { categoryDare: 'meme' } },
    { id: 'playSolana', text: 'Complete 1 Truth from "Solana Specific" category', reward: 3, criteria: { categoryTruth: 'solana' } },
    { id: 'typeLong', text: 'Submit an answer longer than 50 characters', reward: 2, criteria: { longAnswer: 50 } },
    { id: 'skip3', text: 'Skip 3 prompts', reward: 1, criteria: { skips: 3 } },
];

// --- DOM Element References ---
// Game Elements
const promptDisplay = document.getElementById('promptDisplay');
const trueBtn = document.getElementById('trueBtn');
const dareBtn = document.getElementById('dareBtn');
const startNextBtn = document.getElementById('startNextBtn');
const randomPromptBtn = document.getElementById('randomPromptBtn');
const skipBtn = document.getElementById('skipBtn');
const answerInputContainer = document.getElementById('answerInputContainer');
const answerTextarea = document.getElementById('answerTextarea');
const submitAnswerBtn = document.getElementById('submitAnswerBtn');
const submittedAnswerDisplay = document.getElementById('submittedAnswerDisplay');
const playerAnswer = document.getElementById('playerAnswer');
const rewardMessage = document.getElementById('rewardMessage');

// Score & Streak Elements
const truthScoreDisplay = document.getElementById('truthScore');
const dareScoreDisplay = document.getElementById('dareScore');
const streakDisplay = document.getElementById('streakDisplay');
const currentStreakElement = document.getElementById('currentStreak');

// Sound Elements
const clickSound = document.getElementById('clickSound');
const successSound = document.getElementById('successSound');
const newPromptSound = document.getElementById('newPromptSound');
const typewriterSound = document.getElementById('typewriterSound');
const toggleSound = document.getElementById('toggleSound');
const achievementSound = document.getElementById('achievementSound');
// Removed: const backgroundMusic = document.getElementById('backgroundMusic'); // This is no longer an <audio> element

// Volume Control Elements
const sfxVolumeSlider = document.getElementById('sfxVolumeSlider');
const sfxVolumeIcon = document.getElementById('sfxVolumeIcon');
const musicVolumeSlider = document.getElementById('musicVolumeSlider');
const musicVolumeIcon = document.getElementById('musicVolumeIcon');

// Challenge Suggestion Elements
const challengeSuggestionTextarea = document.getElementById('challengeSuggestionTextarea');
const submitSuggestionBtn = document.getElementById('submitSuggestionBtn');
const suggestionThanks = document.getElementById('suggestionThanks');
const pendingSuggestionsList = document.getElementById('pendingSuggestions');
const clearSuggestionsBtn = document.getElementById('clearSuggestionsBtn');

// Player Name & Leaderboard Elements
const playerNameInputContainer = document.getElementById('playerNameInputContainer');
const playerNameInput = document.getElementById('playerName');
const savePlayerNameBtn = document.getElementById('savePlayerNameBtn');
const currentPlayerNameDisplay = document.getElementById('currentPlayerName');
const leaderboardList = document.getElementById('leaderboardList');
const clearLeaderboardBtn = document.getElementById('clearLeaderboardBtn');

// Category Selector
const promptCategorySelector = document.getElementById('promptCategory');

// Share Buttons
const shareXBtn = document.getElementById('shareXBtn');
const shareTelegramBtn = document.getElementById('shareTelegramBtn');

// Testimonial Display
const testimonialDisplay = document.getElementById('testimonialDisplay');

// Theme Toggle
const themeToggleBtn = document.getElementById('themeToggle');

// Achievements Display
const achievementsDisplay = document.getElementById('achievementsDisplay');
const achievementNotification = document.getElementById('achievementNotification');
const notificationIcon = achievementNotification.querySelector('.achievement-icon');
const notificationTitle = achievementNotification.querySelector('.achievement-title');
const notificationDesc = achievementNotification.querySelector('.achievement-desc');

// Session History Display
const sessionHistoryDisplay = document.getElementById('sessionHistoryDisplay');

// Live Price Display Elements
const todPriceDisplay = document.getElementById('todPriceDisplay');

// Staking Calculator Elements
const stakingAmountInput = document.getElementById('stakingAmount');
const stakingPeriodInput = document.getElementById('stakingPeriod');
const calculateRewardsBtn = document.getElementById('calculateRewardsBtn');
const estimatedRewardsSpan = document.querySelector('#estimatedRewards span');

// Staking System Elements (these are now part of the "Coming Soon" section)
const stakingSectionCard = document.querySelector('.staking-section .info-card.coming-soon-card');
const stakingBalanceDisplay = document.getElementById('stakingBalance');
const stakedAmountDisplay = document.getElementById('stakedAmount');
const pendingRewardsDisplay = document.getElementById('pendingRewards');
const currentApyDisplay = document.getElementById('currentApy');
const stakeAmountInput = document.getElementById('stakeAmount');
const availableToStakeDisplay = document.getElementById('availableToStake');
const maxStakeBtn = document.getElementById('maxStakeBtn');
const halfStakeBtn = document.getElementById('halfStakeBtn');
const stakeButton = document.getElementById('stakeBtn');
const dailyRewardsEstimate = document.getElementById('dailyRewards');
const weeklyRewardsEstimate = document.getElementById('weeklyRewards');
const monthlyRewardsEstimate = document.getElementById('monthlyRewards');
const unstakingCard = document.querySelector('.unstaking-card');
const availableUnstakeDisplay = document.getElementById('availableUnstake');
const cooldownTimerDisplay = document.getElementById('cooldownTimer');
const unstakeAmountInput = document.getElementById('unstakeAmount');
const maxUnstakeBtn = document.getElementById('maxUnstakeBtn');
const unstakeButton = document.getElementById('unstakeBtn');
const claimRewardsButton = document.getElementById('claimRewardsBtn');
const cooldownProgressBar = document.querySelector('.cooldown-progress');

// Wallet Elements
const connectWalletBtn = document.getElementById('connectWalletBtn');
const walletAddressDisplay = document.getElementById('walletAddressDisplay');

// Daily Quest Elements
const dailyQuestDisplay = document.getElementById('dailyQuestDisplay');
const claimDailyQuestRewardBtn = document.getElementById('claimDailyQuestRewardBtn');

// --- Game State Variables ---
let currentPromptType = '';
let currentPromptText = '';
let truthCount = 0;
let dareCount = 0;
let skipsUsedToday = 0;
let skipCooldown = 0;
let skipTimerInterval = null;
let playerName = "Anon Ape";
let currentStreak = 0;
let lastPlayedDate = null;
let leaderboardScores = [];
let unlockedAchievements = [];
let categoriesPlayed = new Set();
let sessionHistory = [];
let pendingSuggestions = [];

// Wallet State (Always "Coming Soon" for now)
let isWalletConnected = false;
let userWalletAddress = '';

// Daily Quest State
let currentDailyQuest = null;
let dailyQuestProgress = 0;
let dailyQuestCompletedToday = false;
let lastDailyQuestResetDate = null;

// --- Volume Control Variables ---
let sfxVolume = 0.3;
let musicVolume = 0.1;
let musicPlayedOnce = false; // Flag to track if music has started due to user interaction

// NEW: YouTube Player Variable
let youtubePlayer;
const YOUTUBE_VIDEO_ID = 'a1lOHh13JlU'; // From your YouTube link

// --- Staking System Variables (Simplified for Coming Soon) ---
const stakingData = {
    staked: 0,
    balance: 10000.00,
    rewards: 0,
    lastRewardClaim: Date.now(),
    cooldownStart: 0,
    isCoolingDown: false,
    stakedAt: 0
};

const STAKING_CONFIG = {
    apy: 5000,
    minStake: 100,
    cooldownPeriod: 7 * 24 * 60 * 60 * 1000,
    dailyRate: 0.0137
};

// --- Utility Functions ---
function playSound(audioElement, volume) {
    if (audioElement && volume > 0) {
        audioElement.volume = volume;
        audioElement.currentTime = 0;
        audioElement.play().catch(e => console.warn(`Audio playback failed for ${audioElement.id}:`, e.message));
    }
}

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function showToast(message, type = 'info', duration = 3000) {
    if (!rewardMessage) return;

    rewardMessage.textContent = message;
    rewardMessage.className = 'reward-message'; // Reset classes
    rewardMessage.classList.remove('hidden');

    if (type === 'success') {
        rewardMessage.style.color = 'var(--border-color)';
        rewardMessage.style.textShadow = '0 0 5px var(--border-color)';
    } else if (type === 'error') {
        rewardMessage.style.color = 'red';
        rewardMessage.style.textShadow = '0 0 5px red';
    } else { // info
        rewardMessage.style.color = 'var(--accent-color-1)';
        rewardMessage.style.textShadow = '0 0 5px var(--accent-color-1)';
    }

    setTimeout(() => {
        rewardMessage.classList.add('hidden');
    }, duration);
}

// Coin particle animation
function createCoinParticle(x, y) {
    const particle = document.createElement('div');
    particle.className = 'coin-particle';
    document.body.appendChild(particle);

    const randomOffsetX = (Math.random() - 0.5) * 100;
    const randomOffsetY = (Math.random() - 1.5) * 100;
    const randomRotation = Math.random() * 720 - 360;

    const randomEndOffsetX = randomOffsetX * 2;
    const randomEndOffsetY = randomOffsetY * 2;
    const randomEndRotation = randomRotation + (Math.random() * 360 - 180);

    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.setProperty('--dx', `${randomOffsetX}px`);
    particle.style.setProperty('--dy', `${randomOffsetY}px`);
    particle.style.setProperty('--rot', `${randomRotation}deg`);
    particle.style.setProperty('--dx-end', `${randomEndOffsetX}px`);
    particle.style.setProperty('--dy-end', `${randomEndOffsetY}px`);
    particle.style.setProperty('--rot-end', `${randomEndRotation}deg`);

    particle.addEventListener('animationend', () => {
        particle.remove();
    });
}

// Text Typing Animation
let typingInterval;
function typeText(element, text, speed = 50) {
    clearInterval(typingInterval);
    if (typewriterSound) {
        typewriterSound.pause();
        typewriterSound.currentTime = 0;
    }

    if (element) {
        element.textContent = '';
        let i = 0;

        if (typewriterSound && sfxVolume > 0) {
            typewriterSound.volume = sfxVolume * 0.5;
            typewriterSound.play().catch(e => console.warn("Typewriter sound failed:", e.message));
        }

        typingInterval = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typingInterval);
                if (typewriterSound) typewriterSound.pause();
            }
        }, speed);
    }
}

// --- NEW: YouTube Player API Loading and Initialization ---
let ytApiReady = false;

// This function is called by the YouTube IFrame Player API when it's ready.
function onYouTubeIframeAPIReady() {
    ytApiReady = true;
    console.log('YouTube IFrame API is ready.');
    createYouTubePlayer();
}

// Load the YouTube IFrame Player API asynchronously.
function loadYouTubeAPI() {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

function createYouTubePlayer() {
    if (!ytApiReady) {
        console.warn("YouTube API not ready. Retrying player creation.");
        setTimeout(createYouTubePlayer, 100);
        return;
    }

    youtubePlayer = new YT.Player('youtubeBackgroundPlayer', {
        height: '1',
        width: '1',
        videoId: YOUTUBE_VIDEO_ID,
        playerVars: {
            autoplay: 1,      // Autoplay (will likely be muted)
            loop: 1,          // Loop the video
            playlist: YOUTUBE_VIDEO_ID, // Required for 'loop' to work for a single video
            controls: 0,      // Hide player controls
            mute: 1,          // Start muted to attempt autoplay
            enablejsapi: 1,   // Enable JavaScript API control
            modestbranding: 1,// Hide YouTube logo
            rel: 0,           // Don't show related videos at the end
            showinfo: 0,      // Hide video title and uploader info
            fs: 0             // Disable fullscreen button
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    console.log('YouTube player ready.');
    if (musicVolume > 0) {
        // Attempt to set volume and unmute if music should be playing
        event.target.setVolume(musicVolume * 100);
        event.target.unMute();
        event.target.playVideo(); // Ensure it's playing
        musicPlayedOnce = true; // Mark as played if successful
    }
    updateMusicVolumeIcon(); // Update icon based on actual player state
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
        // If it starts playing, we've had user interaction or browser allowed
        musicPlayedOnce = true;
    } else if (event.data === YT.PlayerState.ENDED) {
        // If loop=1, this shouldn't happen, but as a fallback
        event.target.playVideo();
    }
    updateMusicVolumeIcon(); // Keep icon updated
}

// This function is the entry point for starting background music, now YouTube specific
function initBackgroundMusic() {
    if (ytApiReady) {
        createYouTubePlayer();
    } else {
        // API not ready, it will be called by onYouTubeIframeAPIReady
        // For now, ensure musicPlayedOnce is false, and rely on gestures
        musicPlayedOnce = false;
    }
}


// --- Volume Control Functions (Adapted for YouTube Player) ---
function loadVolumePreferences() {
    const savedSfxVolume = parseFloat(localStorage.getItem('sfxVolume'));
    if (!isNaN(savedSfxVolume) && sfxVolumeSlider) {
        sfxVolume = savedSfxVolume;
        sfxVolumeSlider.value = sfxVolume;
    } else {
        sfxVolume = 0.3;
        if (sfxVolumeSlider) sfxVolumeSlider.value = sfxVolume;
    }
    updateSfxVolumeIcon();

    const savedMusicVolume = parseFloat(localStorage.getItem('musicVolume'));
    if (!isNaN(savedMusicVolume) && musicVolumeSlider) {
        musicVolume = savedMusicVolume;
        musicVolumeSlider.value = musicVolume;
    } else {
        musicVolume = 0.1;
        if (musicVolumeSlider) musicVolumeSlider.value = musicVolume;
    }
    // No direct player control here yet, just setting the variable.
    // The player will be configured in onPlayerReady or by user gesture.
    updateMusicVolumeIcon();
}

function updateSfxVolumeIcon() {
    if (sfxVolumeIcon) {
        if (sfxVolume === 0) sfxVolumeIcon.textContent = '🔇';
        else if (sfxVolume < 0.5) sfxVolumeIcon.textContent = '🔉';
        else sfxVolumeIcon.textContent = '🔊';
    }
}

function updateMusicVolumeIcon() {
    if (musicVolumeIcon) {
        if (!youtubePlayer || youtubePlayer.isMuted() || musicVolume === 0) { // Check if muted or slider is at 0
            musicVolumeIcon.textContent = '🔇';
        } else if (musicVolume < 0.5) {
            musicVolumeIcon.textContent = '🎶';
        } else {
            musicVolumeIcon.textContent = '🎵';
        }
    }
}

function setSfxGlobalVolume(volume) {
    sfxVolume = volume;
    localStorage.setItem('sfxVolume', sfxVolume.toString());
    updateSfxVolumeIcon();
    playSound(clickSound, sfxVolume);
    if (typewriterSound && sfxVolume === 0) {
        typewriterSound.pause();
    }
}

function setMusicGlobalVolume(volume) {
    musicVolume = volume;
    localStorage.setItem('musicVolume', musicVolume.toString());

    if (youtubePlayer && youtubePlayer.setVolume) {
        youtubePlayer.setVolume(musicVolume * 100);
        if (musicVolume === 0) {
            youtubePlayer.mute();
        } else {
            youtubePlayer.unMute();
            // If the player was paused by the browser, try to play it now.
            // This relies on the interaction with the slider/icon.
            if (youtubePlayer.getPlayerState() !== YT.PlayerState.PLAYING) {
                 youtubePlayer.playVideo().catch(e => console.warn("YouTube player play failed after volume change:", e.message));
            }
        }
        musicPlayedOnce = true; // Any interaction with music controls counts as user gesture
    }
    updateMusicVolumeIcon();
}

// NEW: Wallet Functions (Modified for Coming Soon)
function loadWalletState() {
    isWalletConnected = false;
    userWalletAddress = '';
    updateWalletUI();
}

function updateWalletUI() {
    if (connectWalletBtn) {
        connectWalletBtn.classList.remove('hidden');
    }
    if (walletAddressDisplay) walletAddressDisplay.classList.add('hidden');
}

function connectWallet() {
    console.log("Attempting to connect wallet (Coming Soon!)...");
    showToast("Wallet connection is coming soon! Please check back later.", 'info', 2000);
    playSound(clickSound, sfxVolume);
}

// --- Player Name & Leaderboard Functions ---
function loadPlayerName() {
    const storedName = localStorage.getItem('playerName');
    if (storedName) {
        playerName = storedName;
        if (currentPlayerNameDisplay) {
            currentPlayerNameDisplay.textContent = `Playing as: ${playerName}`;
            currentPlayerNameDisplay.classList.remove('hidden');
        }
        if (playerNameInputContainer) playerNameInputContainer.classList.add('hidden');
    } else {
        if (playerNameInputContainer) playerNameInputContainer.classList.remove('hidden');
        if (currentPlayerNameDisplay) currentPlayerNameDisplay.classList.add('hidden');
    }
}

function savePlayerName() {
    if (!playerNameInput) return;
    const name = playerNameInput.value.trim();
    if (name) {
        playerName = name;
        localStorage.setItem('playerName', playerName);
        loadPlayerName();
        playSound(clickSound, sfxVolume);
        checkAchievements();
    } else {
        alert("Please enter a name, Ape!");
    }
}

function loadLeaderboard() {
    const storedScores = localStorage.getItem('leaderboardScores');
    leaderboardScores = storedScores ? JSON.parse(storedScores) : [];
    renderLeaderboard();
}

function saveLeaderboard() {
    localStorage.setItem('leaderboardScores', JSON.stringify(leaderboardScores));
}

function addScoreToLeaderboard(newScore) {
    leaderboardScores.push(newScore);
    leaderboardScores.sort((a, b) => {
        const scoreA = a.truths + a.dares;
        const scoreB = b.truths + b.dares;
        if (scoreA !== scoreB) return scoreB - scoreA;
        if (a.truths !== b.truths) return b.truths - a.truths;
        return b.dares - a.dares;
    });
    leaderboardScores = leaderboardScores.slice(0, 10);
    saveLeaderboard();
    renderLeaderboard();
}

function renderLeaderboard() {
    if (!leaderboardList) return;
    leaderboardList.innerHTML = '';
    if (leaderboardScores.length === 0) {
        leaderboardList.innerHTML = '<p class="placeholder">No scores yet. Be the first to earn your spot!</p>';
        return;
    }

    const ol = document.createElement('ol');
    leaderboardScores.forEach((score, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="player-rank">#${index + 1}</span>
            <span class="player-name">${score.name}</span>
            <span class="scores">T:${score.truths} D:${score.dares}</span>
        `;
        ol.appendChild(li);
    });
    leaderboardList.appendChild(ol);
}

function clearLeaderboard() {
    if (confirm("Are you sure you want to clear the leaderboard? This cannot be undone.")) {
        leaderboardScores = [];
        saveLeaderboard();
        renderLeaderboard();
        playSound(clickSound, sfxVolume);
    }
}

// --- Streak Functions ---
function updateStreak() {
    const storedLastPlayed = localStorage.getItem('lastPlayedDate');
    const storedStreak = parseInt(localStorage.getItem('currentStreak') || '0', 10);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (storedLastPlayed) {
        lastPlayedDate = new Date(storedLastPlayed);
        lastPlayedDate.setHours(0, 0, 0, 0);

        const oneDay = 24 * 60 * 60 * 1000;
        const diffDays = Math.round(Math.abs((today - lastPlayedDate) / oneDay));

        if (diffDays === 0) {
            currentStreak = storedStreak;
        } else if (diffDays === 1) {
            currentStreak = storedStreak + 1;
        } else {
            currentStreak = 0;
        }
    } else {
        currentStreak = 0;
    }
    if (currentStreakElement) currentStreakElement.textContent = currentStreak.toString();
    if (streakDisplay) streakDisplay.classList.remove('hidden');
}

function incrementStreak() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const storedLastPlayed = localStorage.getItem('lastPlayedDate');
    const storedStreak = parseInt(localStorage.getItem('currentStreak') || '0', 10);

    if (storedLastPlayed) {
        lastPlayedDate = new Date(storedLastPlayed);
        lastPlayedDate.setHours(0, 0, 0, 0);

        const oneDay = 24 * 60 * 60 * 1000;
        const diffDays = Math.round(Math.abs((today - lastPlayedDate) / oneDay));

        if (diffDays === 0) {
            // Already played today, streak remains the same as loaded
        } else if (diffDays === 1) {
            // Played yesterday, increment streak
            currentStreak = storedStreak + 1;
        } else {
            // Streak broken, start new
            currentStreak = 1;
        }
    } else {
        // First time playing
        currentStreak = 1;
    }
    localStorage.setItem('currentStreak', currentStreak.toString());
    localStorage.setItem('lastPlayedDate', today.toISOString());
    if (currentStreakElement) currentStreakElement.textContent = currentStreak.toString();
    checkAchievements();
}

// --- Achievement System Functions ---
function loadAchievements() {
    const storedAchievements = localStorage.getItem('unlockedAchievements');
    unlockedAchievements = storedAchievements ? JSON.parse(storedAchievements) : [];
    const storedCategoriesPlayed = localStorage.getItem('categoriesPlayed');
    categoriesPlayed = new Set(storedCategoriesPlayed ? JSON.parse(storedCategoriesPlayed) : []);
    renderAchievements();
}

function saveAchievements() {
    localStorage.setItem('unlockedAchievements', JSON.stringify(unlockedAchievements));
}

function unlockAchievement(id) {
    if (!unlockedAchievements.includes(id)) {
        unlockedAchievements.push(id);
        saveAchievements();
        renderAchievements();
        playSound(achievementSound, sfxVolume);
        console.log(`Achievement Unlocked: ${id}`);

        const ach = achievements.find(a => a.id === id);
        if (ach && achievementNotification && notificationIcon && notificationTitle && notificationDesc) {
            notificationIcon.src = ach.icon;
            notificationTitle.textContent = ach.title;
            notificationDesc.textContent = ach.description;
            achievementNotification.classList.add('show');
            setTimeout(() => {
                achievementNotification.classList.remove('show');
            }, 5000);
        }
    }
}

function renderAchievements() {
    if (!achievementsDisplay) return;
    achievementsDisplay.innerHTML = '';
    if (achievements.length === 0) {
        achievementsDisplay.innerHTML = '<p>No achievements defined.</p>';
        return;
    }
    achievements.forEach(ach => {
        const achItem = document.createElement('div');
        achItem.classList.add('achievement-item');
        if (unlockedAchievements.includes(ach.id)) {
            achItem.classList.add('unlocked');
        }
        achItem.innerHTML = `
            <img src="${ach.icon}" alt="${ach.title} icon">
            <span class="achievement-title">${ach.title}</span>
            <span class="achievement-description">${ach.description}</span>
        `;
        achievementsDisplay.appendChild(achItem);
    });
}

function checkAchievements() {
    if (truthCount + dareCount > 0 && playerName !== "Anon Ape") {
        unlockAchievement('firstApe');
    }
    if (truthCount >= 5) unlockAchievement('truthSeeker');
    if (truthCount >= 20) unlockAchievement('hodlVeteran');
    if (dareCount >= 5) unlockAchievement('daredevil');
    if (dareCount >= 20) unlockAchievement('apeCommander');
    if (currentStreak >= 3) unlockAchievement('streakStarter');
    if (currentStreak >= 7) unlockAchievement('hodlMaster');

    const categoryExplorerAch = achievements.find(a => a.id === 'categoryExplorer');
    if (categoryExplorerAch && categoryExplorerAch.criteria && categoryExplorerAch.criteria.categoriesPlayed) {
        const requiredCategories = new Set(categoryExplorerAch.criteria.categoriesPlayed);
        let allRequiredCategoriesPlayed = true;
        for (const cat of requiredCategories) {
            if (!categoriesPlayed.has(cat)) {
                allRequiredCategoriesPlayed = false;
                break;
            }
        }
        if (allRequiredCategoriesPlayed) {
            unlockAchievement('categoryExplorer');
        }
    }
}

// --- Session History Functions ---
function addEntryToSessionHistory(type, prompt, answer) {
    sessionHistory.push({ type, prompt, answer });
    renderSessionHistory();
}

function renderSessionHistory() {
    if (!sessionHistoryDisplay) return;
    sessionHistoryDisplay.innerHTML = '';
    if (sessionHistory.length === 0) {
        sessionHistoryDisplay.innerHTML = '<p>Play some truths and dares to see your journey unfold!</p>';
        return;
    }

    const ul = document.createElement('ul');
    sessionHistory.slice().reverse().forEach(entry => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${entry.type.toUpperCase()}:</strong> ${entry.prompt.replace(`${entry.type.toUpperCase()}: `, '')}<br>
            <span class="answer-text">Your Answer: ${entry.answer}</span>
        `;
        ul.appendChild(li);
    });
    sessionHistoryDisplay.appendChild(ul);
}

// --- Daily Quest Functions ---
function resetDailyQuest() {
    const today = new Date().toDateString();
    const storedResetDate = localStorage.getItem('lastDailyQuestResetDate');

    if (storedResetDate !== today) {
        // Reset for a new day
        currentDailyQuest = getRandomElement(dailyQuests);
        dailyQuestProgress = 0;
        dailyQuestCompletedToday = false;
        localStorage.setItem('currentDailyQuestId', currentDailyQuest.id);
        localStorage.setItem('dailyQuestProgress', dailyQuestProgress.toString());
        localStorage.setItem('dailyQuestCompletedToday', 'false');
        localStorage.setItem('lastDailyQuestResetDate', today);
        skipsUsedToday = 0;
        localStorage.setItem('skipsUsedToday', skipsUsedToday.toString());
        showToast("New daily quest available!", 'info', 3000);
    } else {
        // Load existing quest for today
        const storedQuestId = localStorage.getItem('currentDailyQuestId');
        currentDailyQuest = dailyQuests.find(q => q.id === storedQuestId) || getRandomElement(dailyQuests);
        dailyQuestProgress = parseInt(localStorage.getItem('dailyQuestProgress') || '0', 10);
        dailyQuestCompletedToday = localStorage.getItem('dailyQuestCompletedToday') === 'true';
        skipsUsedToday = parseInt(localStorage.getItem('skipsUsedToday') || '0', 10);
    }
    updateDailyQuestUI();
}

function updateDailyQuestUI() {
    if (!dailyQuestDisplay || !claimDailyQuestRewardBtn || !currentDailyQuest) return;

    if (dailyQuestCompletedToday) {
        dailyQuestDisplay.innerHTML = `<p class="quest-title">Daily Quest: COMPLETED!</p><p>Come back tomorrow for a new quest!</p>`;
        claimDailyQuestRewardBtn.classList.add('hidden');
    } else {
        let progressText = '';
        let currentProgressValue = dailyQuestProgress; // Default to stored progress
        let requiredProgress = 1; // Default for quests without explicit count

        if (currentDailyQuest.criteria.totalGames) {
            currentProgressValue = truthCount + dareCount;
            requiredProgress = currentDailyQuest.criteria.totalGames;
            progressText = ` (${currentProgressValue}/${requiredProgress} completed)`;
        } else if (currentDailyQuest.criteria.categoryDare) {
            requiredProgress = 1; // It's a binary (0 or 1) state for category-specific
            progressText = dailyQuestProgress >= requiredProgress ? ` (Completed)` : ` (0/1 completed)`;
        } else if (currentDailyQuest.criteria.categoryTruth) {
            requiredProgress = 1;
            progressText = dailyQuestProgress >= requiredProgress ? ` (Completed)` : ` (0/1 completed)`;
        } else if (currentDailyQuest.criteria.longAnswer) {
             requiredProgress = 1;
            progressText = dailyQuestProgress >= requiredProgress ? ` (Completed)` : ` (0/1 completed)`;
        } else if (currentDailyQuest.criteria.skips) {
            currentProgressValue = skipsUsedToday;
            requiredProgress = currentDailyQuest.criteria.skips;
            progressText = ` (${currentProgressValue}/${requiredProgress} skips)`;
        }

        dailyQuestDisplay.innerHTML = `<p class="quest-title">Daily Quest:</p><p>${currentDailyQuest.text}${progressText}</p>`;

        // Update dailyQuestProgress in localStorage if it changed
        if (currentProgressValue !== dailyQuestProgress) {
            dailyQuestProgress = currentProgressValue;
            localStorage.setItem('dailyQuestProgress', dailyQuestProgress.toString());
        }

        if (dailyQuestProgress >= requiredProgress && !dailyQuestCompletedToday) {
            claimDailyQuestRewardBtn.classList.remove('hidden');
            claimDailyQuestRewardBtn.disabled = false;
            claimDailyQuestRewardBtn.textContent = `Claim Reward (${currentDailyQuest.reward} $TOD)`;
        } else {
            claimDailyQuestRewardBtn.classList.add('hidden');
            claimDailyQuestRewardBtn.disabled = true;
        }
    }
}

function checkDailyQuestCompletion(eventTrigger, category = null, answerLen = null) {
    if (dailyQuestCompletedToday || !currentDailyQuest) return;

    let questSatisfied = false;
    let requiredProgress = 1; // Default for binary quests

    if (currentDailyQuest.criteria.totalGames) {
        requiredProgress = currentDailyQuest.criteria.totalGames;
        if ((truthCount + dareCount) >= requiredProgress) {
            questSatisfied = true;
        }
    } else if (currentDailyQuest.criteria.categoryDare && eventTrigger === 'answered' && category === currentDailyQuest.criteria.categoryDare && currentPromptType === 'dare') {
        questSatisfied = true;
    } else if (currentDailyQuest.criteria.categoryTruth && eventTrigger === 'answered' && category === currentDailyQuest.criteria.categoryTruth && currentPromptType === 'true') {
        questSatisfied = true;
    } else if (currentDailyQuest.criteria.longAnswer && eventTrigger === 'answered' && answerLen >= currentDailyQuest.criteria.longAnswer) {
        questSatisfied = true;
    } else if (currentDailyQuest.criteria.skips && eventTrigger === 'skip') {
        requiredProgress = currentDailyQuest.criteria.skips;
        if (skipsUsedToday >= requiredProgress) {
            questSatisfied = true;
        }
    }

    if (questSatisfied) {
        dailyQuestProgress = requiredProgress; // Mark as complete
        localStorage.setItem('dailyQuestProgress', dailyQuestProgress.toString());
        updateDailyQuestUI();
    } else {
        // Ensure UI updates if progress changes incrementally
        updateDailyQuestUI();
    }
}

function claimDailyQuestReward() {
    if (!currentDailyQuest || dailyQuestCompletedToday) return;

    stakingData.balance += currentDailyQuest.reward;
    saveStakingData();

    dailyQuestCompletedToday = true;
    localStorage.setItem('dailyQuestCompletedToday', 'true');
    showToast(`Daily Quest Completed! You earned ${currentDailyQuest.reward} $TOD!`, 'success');
    playSound(successSound, sfxVolume);
    claimDailyQuestRewardBtn.classList.add('hidden');
    updateDailyQuestUI();
}

// --- Dynamic Prompt Submission (Client-side simulation) ---
function loadPendingSuggestions() {
    const storedSuggestions = localStorage.getItem('pendingSuggestions');
    pendingSuggestions = storedSuggestions ? JSON.parse(storedSuggestions) : [];
    renderPendingSuggestions();
}

function savePendingSuggestions() {
    localStorage.setItem('pendingSuggestions', JSON.stringify(pendingSuggestions));
}

function renderPendingSuggestions() {
    if (!pendingSuggestionsList) return;
    pendingSuggestionsList.innerHTML = '';
    if (pendingSuggestions.length === 0) {
        pendingSuggestionsList.innerHTML = '<li>No suggestions yet. Be the first!</li>';
        return;
    }
    pendingSuggestions.forEach(suggestion => {
        const li = document.createElement('li');
        li.textContent = suggestion;
        pendingSuggestionsList.appendChild(li);
    });
}

function submitNewSuggestion() {
    if (!challengeSuggestionTextarea || !submitSuggestionBtn || !suggestionThanks) return;
    const suggestion = challengeSuggestionTextarea.value.trim();
    if (suggestion.length > 0) {
        pendingSuggestions.push(suggestion);
        savePendingSuggestions();
        renderPendingSuggestions();
        challengeSuggestionTextarea.value = '';
        submitSuggestionBtn.disabled = true;
        suggestionThanks.classList.remove('hidden');
        setTimeout(() => {
            suggestionThanks.classList.add('hidden');
        }, 5000);
        playSound(clickSound, sfxVolume);
    }
}

function clearAllSuggestions() {
    if (confirm("Are you sure you want to clear all pending suggestions? This cannot be undone.")) {
        pendingSuggestions = [];
        savePendingSuggestions();
        renderPendingSuggestions();
        playSound(clickSound, sfxVolume);
    }
}

// --- Live $TOD Price Feed ---
const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd&include_24hr_change=true';

async function fetchTodPrice() {
    if (!todPriceDisplay) return;
    try {
        const response = await fetch(COINGECKO_API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const solanaData = data.solana;
        if (solanaData) {
            const price = solanaData.usd;
            const change24h = solanaData.usd_24h_change;
            const changeClass = change24h >= 0 ? 'positive' : 'negative';
            todPriceDisplay.innerHTML = `
                <p>$TOD Price (USD): <span class="price-value">\$${price.toFixed(4)}</span></p>
                <p>24h Change: <span class="change-24h ${changeClass}">${change24h.toFixed(2)}%</span></p>
            `;
        } else {
            todPriceDisplay.innerHTML = '<p>Price data not available for $TOD on CoinGecko.</p>';
        }
    } catch (error) {
        console.error("Error fetching $TOD price:", error);
        todPriceDisplay.innerHTML = '<p>Error loading price data. Try again later.</p>';
    }
}

// --- Staking Calculator (Separate from main staking system) ---
function calculateStakingRewards() {
    playSound(clickSound, sfxVolume);
    if (!stakingAmountInput || !stakingPeriodInput || !estimatedRewardsSpan) return;
    const amount = parseFloat(stakingAmountInput.value);
    const period = parseInt(stakingPeriodInput.value);

    const conceptualAPR = STAKING_CONFIG.apy / 100;

    if (isNaN(amount) || amount <= 0 || isNaN(period) || period <= 0) {
        estimatedRewardsSpan.textContent = "Invalid input";
        return;
    }

    const dailyRate = conceptualAPR / 365;
    const totalEstimatedRewards = amount * dailyRate * period;

    estimatedRewardsSpan.textContent = `${totalEstimatedRewards.toFixed(4)} $TOD`;
}

// --- Seasonal Theme Application ---
function applySeasonalTheme() {
    const currentMonth = new Date().getMonth();
    const body = document.body;

    if (currentMonth === 11 || currentMonth === 0) { // December (11) or January (0)
        body.classList.add('winter-theme');
    } else {
        body.classList.remove('winter-theme');
    }
}

// --- Game UI Management ---
function initializeGameUI() {
    if(promptDisplay) promptDisplay.textContent = 'Click "Start Game" to begin your crypto adventure!';
    if(startNextBtn) startNextBtn.textContent = 'Start Game!';
    if(startNextBtn) startNextBtn.disabled = false;
    if(skipBtn) skipBtn.classList.add('hidden');

    if(answerInputContainer) answerInputContainer.classList.add('hidden');
    if(submittedAnswerDisplay) submittedAnswerDisplay.classList.add('hidden');
    if(answerTextarea) answerTextarea.value = '';
    if(submitAnswerBtn) submitAnswerBtn.disabled = true;

    if(trueBtn) trueBtn.classList.remove('active-true');
    if(dareBtn) dareBtn.classList.remove('active-dare');
    if(promptDisplay) promptDisplay.classList.remove('prompt-true', 'prompt-dare');
    if(truthScoreDisplay) truthScoreDisplay.textContent = truthCount.toString();
    if(dareScoreDisplay) dareScoreDisplay.textContent = dareCount.toString();
    if(rewardMessage) rewardMessage.textContent = '';
    if(playerAnswer) playerAnswer.textContent = '';
    clearInterval(skipTimerInterval);

    loadPlayerName();
    loadWalletState();
    updateStreak();
    loadLeaderboard();
    loadAchievements();
    renderSessionHistory();
    loadPendingSuggestions();
    resetDailyQuest();
    startTestimonialRotation();
    loadVolumePreferences();
    // initBackgroundMusic() will be called after YouTube API is ready, or on DOMContentLoaded
    applySeasonalTheme();
    fetchTodPrice();
    setInterval(fetchTodPrice, 30000);

    initStaking();
}

function resetGameUIForNewPrompt() {
    if(answerInputContainer) answerInputContainer.classList.add('hidden');
    if(submittedAnswerDisplay) submittedAnswerDisplay.classList.add('hidden');
    if(answerTextarea) answerTextarea.value = '';
    if(submitAnswerBtn) submitAnswerBtn.disabled = true;
    if(startNextBtn) startNextBtn.disabled = true;
    if(startNextBtn) startNextBtn.textContent = 'Next Challenge!';
    if(rewardMessage) rewardMessage.textContent = '';
    if(playerAnswer) playerAnswer.textContent = '';

    if(trueBtn) trueBtn.classList.remove('active-true');
    if(dareBtn) dareBtn.classList.remove('active-dare');
    if(promptDisplay) promptDisplay.classList.remove('prompt-true', 'prompt-dare');

    if(skipBtn) skipBtn.classList.add('hidden');
    clearInterval(typingInterval);
    clearInterval(skipTimerInterval);
    if(typewriterSound) typewriterSound.pause();
    if(typewriterSound) typewriterSound.currentTime = 0;
}

// --- Core Game Logic Functions ---
function generatePrompt(randomCategory = false) {
    if (!playerName || playerName.trim() === "") {
        alert("Please enter your Ape Name before starting the game!");
        if(playerNameInputContainer) playerNameInputContainer.classList.remove('hidden');
        if(currentPlayerNameDisplay) currentPlayerNameDisplay.classList.add('hidden');
        return;
    }

    playSound(newPromptSound, sfxVolume);
    if(promptDisplay) promptDisplay.classList.add('hidden');
    resetGameUIForNewPrompt();

    if (!randomCategory && event && event.target && event.target.id === 'skipBtn') {
        skipsUsedToday++;
        localStorage.setItem('skipsUsedToday', skipsUsedToday.toString());
        checkDailyQuestCompletion('skip', null, null);
    }


    setTimeout(() => {
        let selectedCategory;
        if (randomCategory) {
            const categories = Object.keys(prompts);
            selectedCategory = getRandomElement(categories);
        } else {
            selectedCategory = promptCategorySelector ? promptCategorySelector.value : 'general';
        }

        categoriesPlayed.add(selectedCategory);
        localStorage.setItem('categoriesPlayed', JSON.stringify(Array.from(categoriesPlayed)));

        const categoryTruths = prompts[selectedCategory]?.truths || prompts.general.truths;
        const categoryDares = prompts[selectedCategory]?.dares || prompts.general.dares;

        const isTruth = Math.random() < 0.5;
        let promptFullText;

        if (isTruth) {
            currentPromptType = 'true';
            currentPromptText = "TRUTH: " + getRandomElement(categoryTruths);
            if(trueBtn) trueBtn.classList.add('active-true');
            if(promptDisplay) promptDisplay.classList.add('prompt-true');
        } else {
            currentPromptType = 'dare';
            currentPromptText = "DARE: " + getRandomElement(categoryDares);
            if(dareBtn) dareBtn.classList.add('active-dare');
            if(promptDisplay) promptDisplay.classList.add('prompt-dare');
        }

        if(promptDisplay) typeText(promptDisplay, currentPromptText);
        if(promptDisplay) promptDisplay.classList.remove('hidden');
        if(answerInputContainer) answerInputContainer.classList.remove('hidden');

        if(skipBtn) skipBtn.classList.remove('hidden');
        startSkipCooldown();
    }, 300);
}

function submitAnswer() {
    playSound(clickSound, sfxVolume);
    if(typewriterSound) typewriterSound.pause();
    if(typewriterSound) typewriterSound.currentTime = 0;

    if (!answerTextarea || !submitAnswerBtn) return;
    const userAnswer = answerTextarea.value.trim();

    if (userAnswer.length === 0) {
        alert("Come on, ape! You gotta type something!");
        return;
    }

    if (promptDisplay) {
        const rect = promptDisplay.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        for (let i = 0; i < 5; i++) {
            createCoinParticle(centerX, centerY);
        }
    }

    if(answerInputContainer) answerInputContainer.classList.add('hidden');
    if(playerAnswer) playerAnswer.textContent = userAnswer;
    if(submittedAnswerDisplay) submittedAnswerDisplay.classList.remove('hidden');

    const promptCategory = promptCategorySelector ? promptCategorySelector.value : 'general';

    if (currentPromptType === 'true') {
        truthCount++;
        if(truthScoreDisplay) truthScoreDisplay.textContent = truthCount.toString();
        showToast("HODL strong! You've earned 0.0001 $TOD for your honesty!", 'success');
    } else {
        dareCount++;
        if(dareScoreDisplay) dareScoreDisplay.textContent = dareCount.toString();
        showToast("APES together strong! You've earned 0.0001 $TOD for your bravery!", 'success');
    }
    playSound(successSound, sfxVolume);

    if(startNextBtn) startNextBtn.disabled = false;
    if(skipBtn) skipBtn.disabled = true;
    clearInterval(skipTimerInterval);
    if(skipBtn) skipBtn.textContent = 'Skip';

    addScoreToLeaderboard({ name: playerName, truths: truthCount, dares: dareCount, timestamp: Date.now() });
    incrementStreak();
    checkAchievements();
    addEntryToSessionHistory(currentPromptType, currentPromptText, userAnswer);
    checkDailyQuestCompletion('answered', promptCategory, userAnswer.length);
}

function startSkipCooldown() {
    skipCooldown = 10;
    if(skipBtn) skipBtn.disabled = true;
    if(skipBtn) skipBtn.textContent = `Skip (${skipCooldown}s)`;

    skipTimerInterval = setInterval(() => {
        skipCooldown--;
        if(skipBtn) skipBtn.textContent = `Skip (${skipCooldown}s)`;

        if (skipCooldown <= 0) {
            clearInterval(skipTimerInterval);
            if(skipBtn) skipBtn.textContent = 'Skip';
            if(skipBtn) skipBtn.disabled = false;
        }
    }, 1000);
}

// --- Social Share Functions ---
function shareOnX() {
    playSound(clickSound, sfxVolume);
    if(!playerAnswer) return;
    const cleanedPrompt = currentPromptText.replace(`${currentPromptType.toUpperCase()}: `, '');
    const text = encodeURIComponent(`I just tackled a $TOD ${currentPromptType.toUpperCase()}: "${playerAnswer.textContent}" for "${cleanedPrompt}". Think you can do better? Play at ${window.location.href} #TOD #Solana #MemeCoin`);
    window.open(`https://x.com/intent/tweet?text=${text}`, '_blank');
}

function shareOnTelegram() {
    playSound(clickSound, sfxVolume);
    if(!playerAnswer) return;
    const cleanedPrompt = currentPromptText.replace(`${currentPromptType.toUpperCase()}: `, '');
    const text = encodeURIComponent(`I just tackled a $TOD ${currentPromptType.toUpperCase()}: "${playerAnswer.textContent}" for "${cleanedPrompt}". Think you can do better? Play at ${window.location.href}
#TOD #Solana #MemeCoin`);
    window.open(`https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${text}`, '_blank');
}

// --- Testimonial Rotation ---
let currentTestimonialIndex = 0;
function displayRandomTestimonial() {
    if (!testimonialDisplay || testimonials.length === 0) return;

    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    const testimonial = testimonials[currentTestimonialIndex];
    testimonialDisplay.innerHTML = `
        <p>"${testimonial.quote}"</p>
        <span class="author">- ${testimonial.author}</span>
    `;
}
let testimonialInterval;
function startTestimonialRotation() {
    displayRandomTestimonial();
    testimonialInterval = setInterval(displayRandomTestimonial, 7000);
}

// --- Theme Switching ---
function toggleTheme() {
    playSound(toggleSound, sfxVolume);
    document.body.classList.toggle('light-theme');
    const isLightTheme = document.body.classList.contains('light-theme');
    localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
    if(themeToggleBtn) themeToggleBtn.textContent = isLightTheme ? '☀️' : '🌙';
    applySeasonalTheme();
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        if(themeToggleBtn) themeToggleBtn.textContent = '☀️';
    } else {
        document.body.classList.remove('light-theme');
        if(themeToggleBtn) themeToggleBtn.textContent = '🌙';
    }
}

// --- STAKING SYSTEM FUNCTIONS (Modified for "Coming Soon") ---
function initStaking() {
    if (!stakingSectionCard) {
        console.warn("Staking 'coming-soon-card' element not found in HTML. Staking functionality will not be active.");
        return;
    }

    const allStakingInputs = stakingSectionCard.querySelectorAll('input, button');
    allStakingInputs.forEach(element => {
        element.disabled = true;
    });

    loadStakingData();
    console.log("Staking functionality is currently 'Coming Soon!'.");
}

function loadStakingData() {
    const savedBalance = parseFloat(localStorage.getItem('todTokenBalance'));
    if (!isNaN(savedBalance)) {
        stakingData.balance = savedBalance;
    } else {
        stakingData.balance = 10000.00;
        localStorage.setItem('todTokenBalance', stakingData.balance.toFixed(2));
    }
}

function saveStakingData() {
    localStorage.setItem('todTokenBalance', stakingData.balance.toFixed(2));
}

function updateStakingUI() { /* Staking is coming soon, no UI update needed beyond initial render */ }
function updateRewardEstimates() { /* Staking is coming soon */ }
let cooldownTimerInterval = null;
function updateCooldownTimer() { /* Staking is coming soon */ }

function handleStake() { showToast("Staking is coming soon!", 'info', 2000); playSound(clickSound, sfxVolume); }
function handleUnstake() { showToast("Unstaking is coming soon!", 'info', 2000); playSound(clickSound, sfxVolume); }
function handleClaimRewards() { showToast("Claiming rewards is coming soon!", 'info', 2000); playSound(clickSound, sfxVolume); }


// --- Live $TOD Price Feed ---
async function fetchTodPrice() {
    if (!todPriceDisplay) return;
    try {
        const response = await fetch(COINGECKO_API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const solanaData = data.solana;
        if (solanaData) {
            const price = solanaData.usd;
            const change24h = solanaData.usd_24h_change;
            const changeClass = change24h >= 0 ? 'positive' : 'negative';
            todPriceDisplay.innerHTML = `
                <p>$TOD Price (USD): <span class="price-value">\$${price.toFixed(4)}</span></p>
                <p>24h Change: <span class="change-24h ${changeClass}">${change24h.toFixed(2)}%</span></p>
            `;
        } else {
            todPriceDisplay.innerHTML = '<p>Price data not available for $TOD on CoinGecko.</p>';
        }
    } catch (error) {
        console.error("Error fetching $TOD price:", error);
        todPriceDisplay.innerHTML = '<p>Error loading price data. Try again later.</p>';
    }
}

// --- Staking Calculator (Separate from main staking system) ---
function calculateStakingRewards() {
    playSound(clickSound, sfxVolume);
    if (!stakingAmountInput || !stakingPeriodInput || !estimatedRewardsSpan) return;
    const amount = parseFloat(stakingAmountInput.value);
    const period = parseInt(stakingPeriodInput.value);

    const conceptualAPR = STAKING_CONFIG.apy / 100;

    if (isNaN(amount) || amount <= 0 || isNaN(period) || period <= 0) {
        estimatedRewardsSpan.textContent = "Invalid input";
        return;
    }

    const dailyRate = conceptualAPR / 365;
    const totalEstimatedRewards = amount * dailyRate * period;

    estimatedRewardsSpan.textContent = `${totalEstimatedRewards.toFixed(4)} $TOD`;
}

// --- Seasonal Theme Application ---
function applySeasonalTheme() {
    const currentMonth = new Date().getMonth();
    const body = document.body;

    if (currentMonth === 11 || currentMonth === 0) {
        body.classList.add('winter-theme');
    } else {
        body.classList.remove('winter-theme');
    }
}


// --- Event Listeners ---
document.addEventListener('DOMContentLoaded', () => {
    AOS.init();

    // Core Game Listeners
    if(startNextBtn) startNextBtn.addEventListener('click', () => generatePrompt(false));
    if(randomPromptBtn) randomPromptBtn.addEventListener('click', () => generatePrompt(true));
    if(submitAnswerBtn) submitAnswerBtn.addEventListener('click', submitAnswer);
    if(skipBtn) skipBtn.addEventListener('click', () => generatePrompt(false));
    if(savePlayerNameBtn) savePlayerNameBtn.addEventListener('click', savePlayerName);
    if(clearLeaderboardBtn) clearLeaderboardBtn.addEventListener('click', clearLeaderboard);

    // Wallet Button Listener
    if (connectWalletBtn) connectWalletBtn.addEventListener('click', (e) => {
        e.preventDefault();
        connectWallet();
    });

    // Daily Quest Listener
    if (claimDailyQuestRewardBtn) claimDailyQuestRewardBtn.addEventListener('click', claimDailyQuestReward);

    // Volume slider event listeners
    if (sfxVolumeSlider) sfxVolumeSlider.addEventListener('input', (event) => setSfxGlobalVolume(parseFloat(event.target.value)));
    if (sfxVolumeIcon) {
        sfxVolumeIcon.addEventListener('click', () => {
            if (sfxVolumeSlider) {
                if (sfxVolume > 0) {
                    sfxVolumeSlider.dataset.previousVolume = sfxVolume.toString();
                    setSfxGlobalVolume(0);
                    sfxVolumeSlider.value = 0;
                } else {
                    const previousVolume = parseFloat(sfxVolumeSlider.dataset.previousVolume || '0.3');
                    setSfxGlobalVolume(previousVolume);
                    sfxVolumeSlider.value = previousVolume;
                }
            }
        });
        sfxVolumeIcon.addEventListener('touchend', (event) => {
            event.preventDefault();
            sfxVolumeIcon.click();
        });
    }

    // Music Volume control for YouTube Player
    if (musicVolumeSlider) musicVolumeSlider.addEventListener('input', (event) => setMusicGlobalVolume(parseFloat(event.target.value)));
    if (musicVolumeIcon) {
        musicVolumeIcon.addEventListener('click', () => {
            if (youtubePlayer && youtubePlayer.isMuted) {
                if (youtubePlayer.isMuted() || musicVolume === 0) {
                    // Try to unmute and set volume to previous or default
                    const previousVolume = parseFloat(musicVolumeSlider.dataset.previousVolume || '0.1');
                    setMusicGlobalVolume(previousVolume);
                    musicVolumeSlider.value = previousVolume;
                    youtubePlayer.unMute();
                    if (youtubePlayer.getPlayerState() !== YT.PlayerState.PLAYING) {
                        youtubePlayer.playVideo().catch(e => console.warn("YouTube player play failed on icon click:", e.message));
                    }
                } else {
                    // Mute
                    musicVolumeSlider.dataset.previousVolume = musicVolume.toString();
                    setMusicGlobalVolume(0);
                    musicVolumeSlider.value = 0;
                    youtubePlayer.mute();
                }
            } else if (!youtubePlayer) {
                // If player isn't ready yet, or API not loaded, just update the slider value and icon
                const currentSliderValue = parseFloat(musicVolumeSlider.value);
                if (currentSliderValue > 0) {
                    musicVolumeSlider.dataset.previousVolume = currentSliderValue.toString();
                    setMusicGlobalVolume(0);
                    musicVolumeSlider.value = 0;
                } else {
                    const previousVolume = parseFloat(musicVolumeSlider.dataset.previousVolume || '0.1');
                    setMusicGlobalVolume(previousVolume);
                    musicVolumeSlider.value = previousVolume;
                }
            }
        });
        musicVolumeIcon.addEventListener('touchend', (event) => {
            event.preventDefault();
            musicVolumeIcon.click();
        });
    }

    // Enable submit button only if textarea has content
    if(answerTextarea && submitAnswerBtn) answerTextarea.addEventListener('input', () => {
        submitAnswerBtn.disabled = answerTextarea.value.trim().length === 0;
    });

    // Challenge Suggestion Logic
    if(challengeSuggestionTextarea && submitSuggestionBtn) challengeSuggestionTextarea.addEventListener('input', () => {
        submitSuggestionBtn.disabled = challengeSuggestionTextarea.value.trim().length === 0;
    });
    if(submitSuggestionBtn) submitSuggestionBtn.addEventListener('click', submitNewSuggestion);
    if(clearSuggestionsBtn) clearSuggestionsBtn.addEventListener('click', clearAllSuggestions);

    // Category Selector Event
    if(promptCategorySelector) promptCategorySelector.addEventListener('change', () => {
        playSound(clickSound, sfxVolume);
    });

    // Share Button Events
    if(shareXBtn) shareXBtn.addEventListener('click', shareOnX);
    if(shareTelegramBtn) shareTelegramBtn.addEventListener('click', shareOnTelegram);

    // Theme Toggle Event
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
        themeToggleBtn.addEventListener('touchend', (event) => {
            event.preventDefault();
            themeToggleBtn.click();
        });
    }

    // Staking Calculator Events
    if (calculateRewardsBtn) {
        calculateRewardsBtn.addEventListener('click', calculateStakingRewards);
        if(stakingAmountInput && stakingPeriodInput) {
            stakingAmountInput.addEventListener('input', () => {
                if (!isNaN(parseFloat(stakingAmountInput.value)) && !isNaN(parseInt(stakingPeriodInput.value))) {
                    calculateStakingRewards();
                }
            });
            stakingPeriodInput.addEventListener('input', () => {
                if (!isNaN(parseFloat(stakingAmountInput.value)) && !isNaN(parseInt(stakingPeriodInput.value))) {
                    calculateStakingRewards();
                }
            });
        }
    }

    // --- Initial Setup on Page Load ---
    initializeGameUI();
    loadTheme();
    loadYouTubeAPI(); // Load YouTube API first


    // Cursor Trail Effect
    document.addEventListener('mousemove', function(e) {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        document.body.appendChild(trail);
        trail.style.left = e.pageX + 'px';
        trail.style.top = e.pageY + 'px';
        const colors = ['var(--accent-color-1)', 'var(--accent-color-2)', 'var(--border-color)'];
        trail.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        setTimeout(() => {
            trail.style.opacity = '0';
            trail.style.transform = 'scale(0.5)';
            setTimeout(() => {
                trail.remove();
            }, 500);
        }, 100);
    }, { passive: true });

    // Copy-to-clipboard functionality
    document.querySelector('.copy-btn').addEventListener('click', function() {
        const contractAddressElement = document.getElementById('contractAddress');
        const textToCopy = contractAddressElement.textContent;
        navigator.clipboard.writeText(textToCopy).then(() => {
            const originalText = this.textContent;
            this.textContent = 'Copied!';
            setTimeout(() => {
                this.textContent = originalText;
            }, 1500);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
            alert('Failed to copy address. Please copy manually: ' + textToCopy);
        });
    });

    // Preloader Logic
    window.addEventListener('load', () => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    });

    // NEW: Global user gesture listener to play/unmute YouTube video
    function setupGlobalMusicGestureListener() {
        const playMusicOnFirstGesture = () => {
            if (youtubePlayer && youtubePlayer.unMute && youtubePlayer.getPlayerState() !== YT.PlayerState.PLAYING) {
                youtubePlayer.unMute();
                youtubePlayer.setVolume(musicVolume * 100); // Set to user's preferred volume
                youtubePlayer.playVideo().then(() => {
                    musicPlayedOnce = true;
                    console.log("YouTube background music started via first user gesture.");
                    updateMusicVolumeIcon();
                    document.body.removeEventListener('click', playMusicOnFirstGesture);
                    document.body.removeEventListener('touchend', playMusicOnFirstGesture);
                    document.body.removeEventListener('keydown', playMusicOnFirstGesture);
                }).catch(e => console.warn("YouTube player play failed on first gesture:", e.message));
            }
        };

        if (!musicPlayedOnce) {
            document.body.addEventListener('click', playMusicOnFirstGesture, { once: true });
            document.body.addEventListener('touchend', playMusicOnFirstGesture, { once: true });
            document.body.addEventListener('keydown', playMusicOnFirstGesture, { once: true });
        }
    }
    setupGlobalMusicGestureListener();

    // NEW: Add click handlers to the "Coming Soon!" staking section card
    if (stakingSectionCard) {
        stakingSectionCard.addEventListener('click', (e) => {
            if (e.target.classList.contains('coming-soon-text')) {
                showToast("Staking is coming very, very soon!", 'info', 2000);
            } else {
                showToast("Staking is coming soon! Please check back for updates.", 'info', 2000);
            }
            playSound(clickSound, sfxVolume);
        });
    }
});