// ══════════════════════════════════════════════
// CONFIG — 아래 값을 교체해주세요
// ══════════════════════════════════════════════
const SUPABASE_URL      = 'https://oyickjksxfjzzrlqswma.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_SrTFw1w5IJpq3uhjK6ri4Q_Spo8Zp61';
// 관리자 로그인은 Supabase Auth로 처리돼요. 아래 이메일들로 Supabase 대시보드 >
// Authentication > Users 에서 관리자 계정을 각각 만들고, 로그인 폼엔 그 계정 비밀번호를 입력하면 돼요.
// (자세한 설정 방법은 supabase_admin_setup.sql 참고)
const ADMIN_EMAILS = ['sionchoi0691@gmail.com', 'dlwoduf2kr@gmail.com'];

// ══════════════════════════════════════════════
// [교체 가능] 갤러리 데이터
// ══════════════════════════════════════════════
const galleryItems = [
  { caption: '분리수거 함께 정리해요', emoji: '♻️', src: '' },
  { caption: '텀블러 들고 카페 갔어요', emoji: '☕', src: '' },
  { caption: '계단으로 올라가는 중',   emoji: '🚶', src: '' },
  { caption: '플러그 뽑기 캠페인',     emoji: '🔌', src: '' },
];

// ══════════════════════════════════════════════
// [교체 가능] 요일별 미션 데이터 (0=월 … 6=일)
// ══════════════════════════════════════════════
const missions = [
  { day:'월요일', theme:'전기 아껴 쓰기', img:'img/001.png', list:[
    { t:'안 보는 TV 플러그, 뽑아주세요. 전기가 몰래 새고 있어요',            c:'플러그 뽑는 데 3초도 안 걸려요' },
    { t:'스마트폰이나 모니터 밝기를 조금만 낮춰주세요. 눈도 덜 피로해요',     c:'저도 해봤는데 배터리도 더 오래 가요' },
    { t:'빈 방이나 화장실 나올 때 꼭 불 꺼주세요',                           c:'불 켜진 빈 방이 마음에 걸렸어요' },
  ]},
  { day:'화요일', theme:'일회용품 거절하기', img:'img/002.png', list:[
    { t:'배달 시킬 때 일회용 수저 빼달라고 해주세요. 집에 있잖아요',          c:'체크 하나면 되는데 안 했던 게 미안해졌어요' },
    { t:'카페에서 텀블러 내밀어 보세요. 처음엔 어색해도 금방 익숙해져요',     c:'텀블러 쓰면 음료도 더 오래 차갑더라고요' },
    { t:'마트나 편의점 갈 때 가방 하나 챙겨 나가주세요',                     c:'저는 현관에 가방 걸어뒀어요' },
  ]},
  { day:'수요일', theme:'제대로 분리수거 하기', img:'img/003.png', list:[
    { t:'생수병 라벨 뜯고 찌그러뜨려서 버려주세요. 저도 해봤는데 쉬워요',    c:'라벨 뜯는 거 생각보다 재밌었어요' },
    { t:'배달 용기 양념 닦아내고 물로 한 번만 헹궈서 버려주세요',            c:'조금만 신경 쓰면 되는 거였어요' },
    { t:'택배 박스 테이프랑 운송장 스티커 뜯어내고 버려주세요',              c:'안 뜯으면 재활용이 안 된대요' },
  ]},
  { day:'목요일', theme:'가까운 거리는 걷기', img:'img/004.png', list:[
    { t:'3층 이하는 계단으로 올라가 주세요. 엘리베이터 저한테 양보해 주세요', c:'계단 오르면서 숨찼는데 기분은 좋았어요' },
    { t:'한두 정거장 거리는 걸어가 주세요. 지구한테도 몸에도 좋아요',        c:'걸으면서 주변을 더 많이 보게 됐어요' },
    { t:'오늘 타는 버스나 지하철, 한 정거장만 먼저 내려서 걸어봐 주세요',    c:'처음엔 귀찮았는데 이제 더 좋아요' },
  ]},
  { day:'금요일', theme:'음식 남기지 않기', img:'img/005.png', list:[
    { t:'안 먹는 밑반찬은 처음부터 빼달라고 말해주세요. 버려지는 게 아까워요', c:'말하기 어색할 수 있는데 해보면 괜찮아요' },
    { t:'밥 먹을 만큼만 그릇에 덜어서 먹어주세요',                           c:'남기면 괜히 죄책감이 들더라고요' },
    { t:'냉장고 유통기한 다 되어가는 것부터 먼저 꺼내 먹어주세요',           c:'냉장고 정리도 되고 일석이조예요' },
  ]},
  { day:'토요일', theme:'물 낭비 줄이기', img:'img/006.png', list:[
    { t:'양치하는 동안 물 잠가주세요. 저 나중에 마셔야 해요',                c:'양치컵 쓰면 훨씬 편해요' },
    { t:'샴푸나 비누칠 할 때 샤워기 잠깐 꺼두세요',                          c:'해보면 생각보다 안 불편해요' },
    { t:'설거지할 때 물 받아두고 한꺼번에 씻어주세요',                       c:'물 쓰는 양이 눈에 띄게 줄었어요' },
  ]},
  { day:'일요일', theme:'일주일 돌아보며 쉬어가기', img:'img/007.png', list:[
    { t:'이번 주 미션 중 가장 쉬웠던 것 하나를 나의 평생 습관으로 정해보세요', c:'저는 불 끄기가 제일 쉬웠어요' },
    { t:'환경을 위해 노력한 순간을 가족이나 친구에게 이야기해 보세요',        c:'말하고 나니까 더 뿌듯했어요' },
    { t:'오늘은 새 미션 없이, 내가 정한 습관 하나만 편안하게 지켜보며 쉬어요', c:'쉬어가는 날도 필요해요' },
  ]},
];

// ══════════════════════════════════════════════
// Supabase
// ══════════════════════════════════════════════
let sb = null;
if (SUPABASE_URL !== 'YOUR_SUPABASE_URL') {
  try { sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY); }
  catch(e) { console.warn('Supabase init failed', e); }
}

// helpers
const jsDay   = new Date().getDay();
const todayIdx = jsDay === 0 ? 6 : jsDay - 1;
const dayNames = ['월','화','수','목','금','토','일'];

function esc(s) {
  return String(s)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

let toastT;
function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastT);
  toastT = setTimeout(() => el.classList.remove('show'), 3000);
}

// ══════════════════════════════════════════════
// STORY (수동 탭 이동)
// ══════════════════════════════════════════════
const SLIDES = ['greet', 'photo1', 'mission', 'photo2', 'invite', 'join'];
let curSlide = 0;

function initStory() {
  if (localStorage.getItem('story_done') || window.location.hash === '#admin') {
    startApp(false); return;
  }

  const prog = document.getElementById('s-progress');
  SLIDES.forEach((_, i) => {
    const seg = document.createElement('div');
    seg.className = 's-seg';
    seg.id = `ss${i}`;
    seg.innerHTML = '<div class="s-seg-fill"></div>';
    prog.appendChild(seg);
  });

  document.getElementById('s-skip').addEventListener('click', () => startApp(true));

  const sCont = document.getElementById('s-content');
  let _sx = 0;
  sCont.addEventListener('touchstart', e => { _sx = e.touches[0].clientX; }, { passive: true });
  sCont.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - _sx;
    if (Math.abs(dx) > 40) { goSlide(dx < 0 ? curSlide + 1 : curSlide - 1); }
  }, { passive: true });
  sCont.addEventListener('click', e => {
    if (e.target.closest('button')) return;
    const rect = sCont.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    goSlide(ratio < 0.3 ? curSlide - 1 : curSlide + 1);
  });

  goSlide(0);
}

function goSlide(idx) {
  if (idx >= SLIDES.length) { startApp(true); return; }
  if (idx < 0) idx = 0;
  curSlide = idx;

  SLIDES.forEach((_, i) => {
    const seg = document.getElementById(`ss${i}`);
    seg.classList.toggle('done', i < idx);
    seg.classList.toggle('active', i === idx);
  });

  const bgs = {
    greet:   'radial-gradient(120% 90% at 15% 0%, rgba(255,246,214,0.32), transparent 60%), linear-gradient(155deg, #1e6b46 0%, #2e8f5b 55%, #4fae6e 100%)',
    photo1:  '#1e6b46',
    mission: 'radial-gradient(120% 90% at 85% 0%, rgba(255,246,214,0.28), transparent 60%), linear-gradient(155deg, #1c6247 0%, #2a8556 55%, #52b477 100%)',
    photo2:  '#1c6247',
    invite:  'radial-gradient(120% 90% at 50% 0%, rgba(255,246,214,0.3), transparent 60%), linear-gradient(160deg, #1d6c3f 0%, #3a9a5c 60%, #63c17f 100%)',
    join:    'radial-gradient(120% 90% at 50% 100%, rgba(255,246,214,0.3), transparent 60%), linear-gradient(160deg, #1a5c3a 0%, #2f8f57 55%, #58b878 100%)'
  };
  document.getElementById('story').style.background = bgs[SLIDES[idx]];

  renderSlide(SLIDES[idx]);
}

// 사진 슬라이드용 — 사진 없으면 플레이스홀더로 대체
// darkCaption: true면 밝은 사진 위에서도 잘 보이게 캡션을 검은 글씨로 표시
function photoSlideHtml(src, alt, caption, phIcon, phText, darkCaption) {
  return `
    <div class="s-photo-wrap">
      <img src="${src}" alt="${alt}"
        onerror="this.parentNode.innerHTML='<div class=\\'s-photo-ph s-photo-ph-club\\'><div class=\\'s-photo-ph-icon\\'>${phIcon}</div><div class=\\'s-photo-ph-text\\'>${phText}</div></div>'">
    </div>
    <div class="s-photo-overlay${darkCaption ? ' light-ov' : ''}"></div>
    <div class="s-photo-caption${darkCaption ? ' dark-cap' : ''}">${caption}</div>`;
}

function renderSlide(type) {
  const cont = document.getElementById('s-content');
  cont.querySelectorAll('.s-slide').forEach(el => el.remove());

  const slide = document.createElement('div');
  slide.className = 's-slide active';

  if (type === 'greet') {
    slide.innerHTML = `
      <div class="blob" style="width:320px;height:320px;background:#a3e076;top:-130px;left:-110px;position:absolute;animation-delay:0s"></div>
      <div class="blob" style="width:160px;height:160px;background:#ffe17d;bottom:-60px;right:-50px;position:absolute;animation-delay:-5s"></div>
      <div class="s-bg-num">01</div>
      <div class="s-inner" style="text-align:left;align-items:flex-start">
        <div class="s-kicker">노원구학교밖청소년지원센터 꿈드림</div>
        <div class="s-title">안녕하세요!<br>저흰 환경동아리<br><span class="s-hl">지구를 시언하게</span>예요</div>
        <div class="s-line" style="margin-left:0"></div>
      </div>`;

  } else if (type === 'photo1') {
    slide.innerHTML = photoSlideHtml(
      'img/story-group.jpg', '동아리 단체 사진',
      '짜잔, 이게 바로 저희예요 👋',
      '🌿', '사진이 곧 올라와요'
    );

  } else if (type === 'mission') {
    slide.innerHTML = `
      <div class="blob" style="width:220px;height:220px;background:#a3e076;top:-80px;right:-70px;position:absolute;animation-delay:-3s"></div>
      <div class="blob" style="width:280px;height:280px;background:#ffe17d;bottom:-100px;left:-90px;position:absolute;animation-delay:-7s"></div>
      <div class="s-bg-num">02</div>
      <div class="s-inner">
        <div class="s-title">2025년부터<br><span class="s-hl">배우고 실천</span>하고<br>또 <span class="s-hl">알리는</span> 일을 해요</div>
        <div class="s-line"></div>
        <div class="s-sub">지구를 시원하게 할 방법을 맨날 고민하고<br>하나씩 직접 해보고 있어요</div>
      </div>`;

  } else if (type === 'photo2') {
    slide.innerHTML = photoSlideHtml(
      'img/story-activity.jpg', '동아리 실천 활동 사진',
      '이렇게 알리는 것도 저희 활동이에요,<br>지금처럼요!',
      '📣', '사진이 곧 올라와요',
      true
    );

  } else if (type === 'invite') {
    slide.innerHTML = `
      <div class="blob" style="width:240px;height:240px;background:#a3e076;bottom:-80px;right:-80px;position:absolute;animation-delay:-2s"></div>
      <div class="blob" style="width:180px;height:180px;background:#ffe17d;top:-60px;left:-50px;position:absolute;animation-delay:-6s"></div>
      <div class="s-bg-num">03</div>
      <div class="s-inner">
        <div class="s-title">저희랑 같이<br><span class="s-hl">지구를 시원하게</span><br>해보실래요?</div>
        <div class="s-line"></div>
        <div class="s-sub">어렵지 않아요, 진짜예요!</div>
      </div>`;

  } else if (type === 'join') {
    slide.innerHTML = `
      <div class="blob" style="width:200px;height:200px;background:#a3e076;top:-60px;right:-60px;position:absolute;animation-delay:-2s"></div>
      <div class="blob" style="width:260px;height:260px;background:#ffe17d;bottom:-90px;left:-90px;position:absolute;animation-delay:-4s"></div>
      <div class="s-bg-num">04</div>
      <div class="s-inner">
        <div class="s-title">요일마다<br><span class="s-hl">미션</span>이 있어요</div>
        <div class="s-line"></div>
        <div class="s-sub">미션 하나만 해보시고<br>사진 한 장 올려주시면 돼요<br>저희 활동도 구경하실 수 있어요!</div>
        <button class="s-start-btn" id="s-start">시작하기 →</button>
      </div>`;
    setTimeout(function() {
      var sStart = document.getElementById('s-start');
      if (sStart) sStart.addEventListener('click', function(e) {
        e.stopPropagation();
        startApp(true);
      });
    }, 0);
  }

  cont.appendChild(slide);
}

function startApp(animate) {
  localStorage.setItem('story_done', '1');
  const story = document.getElementById('story');
  const app   = document.getElementById('app');

  app.classList.add('visible');
  initApp();

  if (animate) {
    story.style.opacity = '0';
    story.style.pointerEvents = 'none';
    setTimeout(() => { story.style.display = 'none'; app.style.opacity = '1'; }, 500);
  } else {
    story.style.display = 'none';
    app.style.opacity = '1';
  }
}

// ══════════════════════════════════════════════
// APP
// ══════════════════════════════════════════════
function initApp() {
  const now  = new Date();
  const mo   = now.getMonth() + 1;
  const d    = now.getDate();
  const fullDays = ['월요일','화요일','수요일','목요일','금요일','토요일','일요일'];
  document.getElementById('hdr-date').textContent = `${mo}월 ${d}일 ${fullDays[todayIdx]}`;

  initTabs();
  initMissions();
  initGalleryYearTabs();
  initGallery();
  initUpload();
  initAbout();
  initAdmin();
  initPullToRefresh();
  loadPosts();
}

// ── TABS
function initTabs() {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const tab = btn.dataset.tab;
      document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
      document.getElementById(`tab-${tab}`).classList.add('active');
    });
  });
}

// ── MISSIONS
function initMissions() {
  const today = missions[todayIdx];
  const todayThemeText = today.theme;
  document.getElementById('today-card').innerHTML = `
    <div class="tc-label">TODAY</div>
    <div class="tc-inner">
      <div class="tc-text">
        <div class="tc-title">${today.day}</div>
        <div class="tc-theme">${todayThemeText}</div>
      </div>
      ${today.img ? `<img class="tc-img" src="${esc(today.img)}" alt="">` : ''}
    </div>`;

  const tabsEl = document.getElementById('day-tabs');
  dayNames.forEach((name, i) => {
    const b = document.createElement('button');
    b.className = 'day-tab' + (i === todayIdx ? ' active' : '');
    b.textContent = name;
    b.addEventListener('click', () => {
      tabsEl.querySelectorAll('.day-tab').forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      document.querySelectorAll('.mission-card').forEach((c,j) => {
        c.style.display = j === i ? 'block' : 'none';
      });
    });
    tabsEl.appendChild(b);
  });

  const container = document.getElementById('mission-cards');
  missions.forEach((d, i) => {
    const card = document.createElement('div');
    card.className = 'mission-card';
    card.style.display = i === todayIdx ? 'block' : 'none';
    card.innerHTML = `
      <div class="mc-header">
        <div class="mc-theme">${d.theme}</div>
      </div>
      <div class="mc-body">
        ${d.list.map((m, j) => `
          <div class="mc-item">
            <div class="mc-num">${j+1}</div>
            <div class="mc-content">
              <div class="mc-text">${esc(m.t)}</div>
              <div class="mc-comment">${esc(m.c)}</div>
            </div>
          </div>`).join('')}
      </div>`;
    container.appendChild(card);
  });
}

// ── GALLERY 연도 서브탭 (한 번만 초기화)
function initGalleryYearTabs() {
  const curBtn = document.getElementById('gallery-tab-current');
  if (curBtn) curBtn.textContent = new Date().getFullYear() + '년 활동';
  document.querySelectorAll('.gallery-year-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.gallery-year-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const isCurrent = tab.dataset.year === 'current';
      document.getElementById('gallery-container-current').style.display = isCurrent ? 'block' : 'none';
      document.getElementById('gallery-container-prev').style.display   = isCurrent ? 'none'  : 'block';
    });
  });
}

// ── GALLERY (Supabase에서 불러오기, 없으면 하드코딩 fallback)
async function initGallery() {
  const thisYear = String(new Date().getFullYear());
  const cCont = document.getElementById('gallery-container-current');
  const pCont = document.getElementById('gallery-container-prev');
  const loader = '<div class="loader"><div class="ld"></div><div class="ld"></div><div class="ld"></div></div>';
  cCont.innerHTML = loader; pCont.innerHTML = loader;

  const fallback = galleryItems.map(i => ({ image_url: i.src || null, caption: i.caption, _emoji: i.emoji }));

  if (!sb) {
    renderGalleryGrid(cCont, fallback);
    renderGalleryGrid(pCont, []);
    return;
  }

  try {
    const { data, error } = await sb
      .from('gallery')
      .select('id, image_url, caption, activity_date')
      .order('activity_date', { ascending: false });
    if (error) throw error;

    if (!data || data.length === 0) {
      renderGalleryGrid(cCont, fallback);
      renderGalleryGrid(pCont, []);
      return;
    }

    const cur  = data.filter(i => i.activity_date && i.activity_date.startsWith(thisYear));
    const prev = data.filter(i => !i.activity_date || !i.activity_date.startsWith(thisYear));

    renderGalleryGrid(cCont, cur.length > 0 ? cur : fallback);
    renderGalleryGrid(pCont, prev);
  } catch(e) {
    renderGalleryGrid(cCont, fallback);
    renderGalleryGrid(pCont, []);
  }
}

function renderGalleryGrid(container, items) {
  if (!items || items.length === 0) {
    const isPrev = container.id === 'gallery-container-prev';
    container.innerHTML = `<div class="gallery-empty">${isPrev ? '기록된 이전 활동이 없어요 🌿<br>올해 열심히 활동하면<br>내년에 여기 쌓여요!' : '아직 활동 사진이 없어요 🌱'}</div>`;
    return;
  }
  const grid = document.createElement('div');
  grid.className = 'gallery-grid';
  items.forEach(item => {
    const el = document.createElement('div');
    el.className = 'gallery-item';
    const dateStr = item.activity_date
      ? `<div style="position:absolute;top:8px;right:8px;background:rgba(0,0,0,0.38);color:#fff;font-size:14px;border-radius:8px;padding:2px 8px;font-family:'Nanum Pen Script',cursive">${item.activity_date}</div>`
      : '';
    if (item.image_url) {
      el.innerHTML = `<img class="gallery-img" src="${item.image_url}" alt="${esc(item.caption)}" loading="lazy"
        onerror="this.parentNode.innerHTML='<div class=\\'gallery-ph\\'>🌿</div>'">
        ${dateStr}
        <div class="gallery-cap">${esc(item.caption)}</div>`;
      el.querySelector('.gallery-img').addEventListener('click', () => {
        window._lightboxOpen && window._lightboxOpen(item.image_url);
      });
    } else {
      el.innerHTML = `<div class="gallery-ph">${item._emoji || '🌿'}</div>
        <div class="gallery-cap">${esc(item.caption)}</div>`;
    }
    grid.appendChild(el);
  });
  container.innerHTML = '';
  container.appendChild(grid);
}

// ── POSTS
var _feedPosts = [];
var _feedPage  = 0;
var FEED_PAGE_SIZE = 20;

async function loadPosts() {
  const container = document.getElementById('posts-container');
  if (!sb) {
    container.innerHTML = `<div class="board-empty"><div class="board-empty-icon">🌱</div>Supabase 설정 후<br>여기에 실천 사진이 나타나요!</div>`;
    return;
  }
  try {
    const { data, error } = await sb
      .from('posts').select('id,text,image_url,created_at')
      .eq('status','approved').order('created_at',{ascending:false});
    if (error) throw error;

    var todayDOW = new Date().getDay();
    var mIdx = todayDOW === 0 ? 6 : todayDOW - 1;
    var todayMission = missions[mIdx];
    var todayImgSrc = (todayMission && todayMission.img) ? todayMission.img : 'img/001.png';
    var todayLabel = todayMission ? todayMission.day + ' — ' + todayMission.theme : '오늘의 미션';

    _feedPosts = (data || []).filter(function(p) {
      return new Date(p.created_at).getDay() === todayDOW;
    });
    _feedPage = 0;

    if (_feedPosts.length === 0) {
      container.innerHTML = `<div class="board-empty"><img class="board-empty-img" src="${todayImgSrc}" alt=""><div class="board-empty-title">오늘 첫 번째 주인공이 되어봐요!</div><div class="board-empty-desc">${todayLabel}<br>미션 하고 사진 올려봐요 🌱</div></div>`;
      return;
    }

    container.innerHTML = '';
    var grid = document.createElement('div');
    grid.className = 'posts-grid';
    grid.id = 'posts-grid';
    container.appendChild(grid);

    renderFeedPage();
  } catch(e) {
    document.getElementById('posts-container').innerHTML = `<div class="board-empty">게시물을 불러오지 못했어요 😅</div>`;
  }
}

function renderFeedPage() {
  var grid = document.getElementById('posts-grid');
  var container = document.getElementById('posts-container');
  var start = _feedPage * FEED_PAGE_SIZE;
  var slice = _feedPosts.slice(start, start + FEED_PAGE_SIZE);

  slice.forEach(function(post) {
    var card = document.createElement('div');
    card.className = 'post-card';
    card.innerHTML = `
      <div class="post-img-wrap">
        ${post.image_url
          ? `<img class="post-img" src="${post.image_url}" alt="" loading="lazy"
              onerror="this.parentNode.innerHTML='<div class=\\'img-error\\'>🌿</div>'">`
          : '<div class="img-error">🌿</div>'}
      </div>
      <div class="post-text">${esc(post.text)}</div>`;
    grid.appendChild(card);
  });
  _feedPage++;

  var oldBtn = document.getElementById('feed-more-btn');
  if (oldBtn) oldBtn.remove();

  if (_feedPage * FEED_PAGE_SIZE < _feedPosts.length) {
    var btn = document.createElement('button');
    btn.id = 'feed-more-btn';
    btn.className = 'feed-more-btn';
    btn.textContent = '더 보기';
    btn.addEventListener('click', renderFeedPage);
    container.appendChild(btn);
  }
}

// ── UPLOAD
function initUpload() {
  const overlay  = document.getElementById('upload-overlay');
  const fileInput = document.getElementById('file-input');
  const prevImg  = document.getElementById('preview-img');
  const hint     = document.getElementById('drop-hint');
  const textarea  = document.getElementById('upload-text');
  const counter  = document.getElementById('char-count');
  const submitBtn = document.getElementById('submit-btn');
  let file = null;

  document.getElementById('feed-upload-btn').addEventListener('click', () => overlay.classList.add('open'));
  overlay.addEventListener('click', e => { if (e.target === overlay) closeSheet(); });

  function closeSheet() { overlay.classList.remove('open'); }

  fileInput.addEventListener('change', async e => {
    const raw = e.target.files[0];
    if (!raw) return;
    if (!raw.type.startsWith('image/')) { toast('이미지 파일만 올릴 수 있어요.'); fileInput.value = ''; return; }
    if (raw.size > 20 * 1024 * 1024) { toast('20MB 이하 파일만 선택해주세요.'); fileInput.value = ''; return; }
    submitBtn.textContent = '이미지 준비 중...';
    file = await compressImage(raw);
    prevImg.src = URL.createObjectURL(file);
    prevImg.style.display = 'block';
    hint.style.display = 'none';
    submitBtn.textContent = '올리기';
    check();
  });

  textarea.addEventListener('input', () => { counter.textContent = textarea.value.length; check(); });

  function check() {
    submitBtn.disabled = !(file && textarea.value.trim().length > 0);
  }

  const POST_COOLDOWN_MS = 60 * 1000;
  submitBtn.addEventListener('click', async () => {
    if (!file || !textarea.value.trim()) return;
    if (!sb) { toast('Supabase 설정이 필요해요!'); return; }
    const lastPost = Number(localStorage.getItem('last_post_ts') || 0);
    const waitLeft = POST_COOLDOWN_MS - (Date.now() - lastPost);
    if (waitLeft > 0) { toast(Math.ceil(waitLeft / 1000) + '초 후에 다시 올릴 수 있어요.'); return; }
    submitBtn.disabled = true; submitBtn.textContent = '올리는 중...';
    try {
      const name = `${Date.now()}.jpg`;
      const { error: se } = await sb.storage.from('post-images').upload(name, file, { cacheControl:'3600', upsert:false });
      if (se) throw se;
      const { data: ud } = sb.storage.from('post-images').getPublicUrl(name);
      const { error: de } = await sb.from('posts').insert({ text: textarea.value.trim(), image_url: ud.publicUrl, status:'pending' });
      if (de) throw de;
      localStorage.setItem('last_post_ts', String(Date.now()));
      file = null; fileInput.value = '';
      prevImg.src = ''; prevImg.style.display = 'none';
      hint.style.display = 'flex';
      textarea.value = ''; counter.textContent = '0';
      submitBtn.textContent = '올리기'; submitBtn.disabled = true;
      closeSheet();
      toast('올렸어요! 검토 후 게시될 거예요 🌿');
    } catch(e) {
      console.error(e);
      toast(friendlyError(e));
      submitBtn.disabled = false; submitBtn.textContent = '올리기';
    }
  });
}

// ── ABOUT
function initAbout() {
  document.getElementById('replay-story-btn').addEventListener('click', () => {
    localStorage.removeItem('story_done');
    location.reload();
  });
}

// ── ADMIN
function initAdmin() {
  const panel    = document.getElementById('admin-panel');
  const closeBtn = document.getElementById('admin-close');
  const loginBtn = document.getElementById('admin-login-btn');
  const pwInput  = document.getElementById('admin-pw');

  function syncHash() {
    if (window.location.hash === '#admin') { panel.classList.add('open'); }
    else {
      panel.classList.remove('open');
      document.getElementById('admin-login-wrap').style.display = 'block';
      document.getElementById('admin-content').style.display = 'none';
      pwInput.value = '';
      if (sb) sb.auth.signOut();
    }
  }
  window.addEventListener('hashchange', syncHash);
  syncHash();

  closeBtn.addEventListener('click', () => { history.pushState('','', ' '); panel.classList.remove('open'); syncHash(); });
  pwInput.addEventListener('keydown', e => { if (e.key === 'Enter') loginBtn.click(); });

  var _adminFails = 0;
  var _adminLockUntil = 0;
  loginBtn.addEventListener('click', async () => {
    var now = Date.now();
    if (now < _adminLockUntil) {
      var sec = Math.ceil((_adminLockUntil - now) / 1000);
      toast(sec + '초 후에 다시 시도해주세요.');
      pwInput.value = '';
      return;
    }
    if (!sb) { toast('Supabase 설정이 필요해요!'); return; }
    loginBtn.disabled = true;
    var ok = false;
    for (var i = 0; i < ADMIN_EMAILS.length; i++) {
      const { error: e } = await sb.auth.signInWithPassword({ email: ADMIN_EMAILS[i], password: pwInput.value });
      if (!e) { ok = true; break; }
    }
    loginBtn.disabled = false;
    if (ok) {
      _adminFails = 0;
      document.getElementById('admin-login-wrap').style.display = 'none';
      document.getElementById('admin-content').style.display = 'block';
      loadPending();
      initGalleryAdmin();
    } else {
      _adminFails++;
      pwInput.value = '';
      if (_adminFails >= 5) {
        _adminLockUntil = Date.now() + 60000;
        _adminFails = 0;
        toast('5회 틀렸어요. 1분 후에 다시 시도해주세요.');
      } else {
        toast('비밀번호가 틀렸어요! (' + _adminFails + '/5)');
      }
    }
  });

  // 관리자 내부 탭 전환
  document.querySelectorAll('.admin-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const sec = tab.dataset.section;
      document.getElementById('admin-posts-section').style.display    = sec === 'posts'    ? 'block' : 'none';
      document.getElementById('admin-approved-section').style.display = sec === 'approved' ? 'block' : 'none';
      document.getElementById('admin-gallery-section').style.display  = sec === 'gallery'  ? 'block' : 'none';
      if (sec === 'approved') loadApproved();
    });
  });
}

async function loadPending() {
  const list = document.getElementById('pending-list');
  const cnt  = document.getElementById('pending-count');
  if (!sb) { list.innerHTML = '<div style="color:#888;font-size:13px">Supabase 설정이 필요해요.</div>'; return; }
  list.innerHTML = '<div class="loader"><div class="ld"></div><div class="ld"></div><div class="ld"></div></div>';
  try {
    const { data, error } = await sb.from('posts').select('*').eq('status','pending').order('created_at',{ascending:true});
    if (error) throw error;
    cnt.textContent = `대기 중인 게시물: ${data.length}개`;
    if (data.length === 0) { list.innerHTML = '<div style="color:#888;font-size:13px;text-align:center;padding:24px">대기 중인 게시물이 없어요 ✅</div>'; return; }
    list.innerHTML = '';
    data.forEach(post => {
      const item = document.createElement('div');
      item.className = 'admin-item';
      const ok = document.createElement('button'); ok.className = 'btn-ok'; ok.textContent = '✅ 승인';
      const no = document.createElement('button'); no.className = 'btn-no'; no.textContent = '❌ 반려';
      item.innerHTML = `
        ${post.image_url ? `<img class="admin-img" src="${post.image_url}" alt="" loading="lazy">` : ''}
        <div class="admin-text">${esc(post.text)}</div>
        <div class="admin-actions"></div>`;
      item.querySelector('.admin-actions').append(ok, no);
      ok.addEventListener('click', async () => {
        [ok,no].forEach(b => b.disabled = true);
        try {
          const { error } = await sb.from('posts').update({status:'approved'}).eq('id', post.id);
          if (error) throw error;
          item.remove(); adjustCnt(-1, cnt);
        } catch(e) { toast('오류가 났어요 😅'); [ok,no].forEach(b => b.disabled = false); }
      });
      no.addEventListener('click', async () => {
        [ok,no].forEach(b => b.disabled = true);
        try {
          if (post.image_url) {
            const p = decodeURIComponent(post.image_url.split('/post-images/').pop());
            if (p) await sb.storage.from('post-images').remove([p]);
          }
          const { error } = await sb.from('posts').delete().eq('id', post.id);
          if (error) throw error;
          item.remove(); adjustCnt(-1, cnt);
        } catch(e) { toast('오류가 났어요 😅'); [ok,no].forEach(b => b.disabled = false); }
      });
      list.appendChild(item);
    });
  } catch(e) {
    list.innerHTML = '<div style="color:#e00;font-size:13px">불러오기 실패</div>';
  }
}

var _approvedAll = [];
var _approvedDow = -1;
var DOW_NAMES = ['일','월','화','수','목','금','토'];

async function loadApproved() {
  const list = document.getElementById('approved-list');
  if (!sb) { list.innerHTML = '<div style="color:#888;font-size:13px">Supabase 설정이 필요해요.</div>'; return; }
  list.innerHTML = '<div class="loader"><div class="ld"></div><div class="ld"></div><div class="ld"></div></div>';
  try {
    const { data, error } = await sb.from('posts').select('*').eq('status','approved').order('created_at',{ascending:false});
    if (error) throw error;
    _approvedAll = data || [];

    var tabsEl = document.getElementById('adm-dow-tabs');
    if (!tabsEl._init) {
      tabsEl._init = true;
      tabsEl.querySelectorAll('.adm-dow-tab').forEach(function(tab) {
        tab.addEventListener('click', function() {
          tabsEl.querySelectorAll('.adm-dow-tab').forEach(function(t) { t.classList.remove('active'); });
          tab.classList.add('active');
          _approvedDow = parseInt(tab.dataset.dow);
          renderApproved();
        });
      });
    }

    // 탭 초기화 (전체 선택 상태로)
    tabsEl.querySelectorAll('.adm-dow-tab').forEach(function(t) { t.classList.remove('active'); });
    tabsEl.querySelector('[data-dow="-1"]').classList.add('active');
    _approvedDow = -1;
    renderApproved();
  } catch(e) {
    document.getElementById('approved-list').innerHTML = '<div style="color:#e00;font-size:13px">불러오기 실패</div>';
  }
}

function renderApproved() {
  const list = document.getElementById('approved-list');
  const cnt  = document.getElementById('approved-count');

  var filtered = _approvedDow === -1
    ? _approvedAll
    : _approvedAll.filter(function(p) { return new Date(p.created_at).getDay() === _approvedDow; });

  cnt.textContent = _approvedDow === -1
    ? '승인된 게시물: ' + _approvedAll.length + '개'
    : DOW_NAMES[_approvedDow] + '요일 게시물: ' + filtered.length + '개';

  if (filtered.length === 0) {
    list.innerHTML = '<div style="color:#888;font-size:13px;text-align:center;padding:24px">해당 요일 게시물이 없어요</div>';
    return;
  }
  list.innerHTML = '';
  filtered.forEach(function(post) {
    var d = new Date(post.created_at);
    var dateStr = (d.getMonth()+1) + '/' + d.getDate() + ' (' + DOW_NAMES[d.getDay()] + ')';
    const item = document.createElement('div');
    item.className = 'admin-item';
    const del = document.createElement('button'); del.className = 'btn-no'; del.textContent = '🗑 삭제';
    item.innerHTML = `
      ${post.image_url ? `<img class="admin-img" src="${post.image_url}" alt="" loading="lazy">` : ''}
      <div class="admin-text">${esc(post.text)}</div>
      <div style="font-size:11px;color:#999;margin:4px 0 6px">${dateStr}</div>
      <div class="admin-actions"></div>`;
    item.querySelector('.admin-actions').append(del);
    del.addEventListener('click', async () => {
      if (!confirm('이 게시물을 삭제할까요?')) return;
      del.disabled = true;
      try {
        if (post.image_url) {
          const p = decodeURIComponent(post.image_url.split('/post-images/').pop());
          if (p) await sb.storage.from('post-images').remove([p]);
        }
        const { error } = await sb.from('posts').delete().eq('id', post.id);
        if (error) throw error;
        _approvedAll = _approvedAll.filter(function(p) { return p.id !== post.id; });
        renderApproved();
        loadPosts();
      } catch(e) { toast('오류가 났어요 😅'); del.disabled = false; }
    });
    list.appendChild(item);
  });
}

// ── GALLERY ADMIN
function initGalleryAdmin() {
  const toggle   = document.getElementById('gallery-add-toggle');
  const formWrap = document.getElementById('gallery-form-wrap');
  const fileInput = document.getElementById('gallery-file');
  const preview  = document.getElementById('gallery-preview');
  const hint     = document.getElementById('gallery-hint');
  const dateInput = document.getElementById('gallery-date');
  const capInput  = document.getElementById('gallery-caption');
  const saveBtn   = document.getElementById('gallery-save-btn');
  let gFile = null;

  // 오늘 날짜 기본값
  dateInput.value = new Date().toISOString().slice(0, 10);

  toggle.addEventListener('click', () => {
    const open = formWrap.style.display === 'block';
    formWrap.style.display = open ? 'none' : 'block';
    toggle.textContent = open ? '＋ 새 활동 추가' : '✕ 닫기';
  });

  fileInput.addEventListener('change', async e => {
    const raw = e.target.files[0];
    if (!raw) return;
    preview.src = URL.createObjectURL(raw);
    preview.style.display = 'block';
    hint.style.display = 'none';
    saveBtn.textContent = '이미지 준비 중...';
    gFile = await compressImage(raw);
    saveBtn.textContent = '저장하기';
    checkGalleryForm();
  });

  [capInput, dateInput].forEach(el => el.addEventListener('input', checkGalleryForm));

  function checkGalleryForm() {
    saveBtn.disabled = !(gFile && capInput.value.trim());
  }

  saveBtn.addEventListener('click', async () => {
    if (!gFile || !capInput.value.trim()) return;
    if (!sb) { toast('Supabase 설정이 필요해요!'); return; }

    saveBtn.disabled = true; saveBtn.textContent = '저장 중...';
    try {
      const ext  = gFile.name.split('.').pop() || 'jpg';
      const name = `gallery_${Date.now()}.${ext}`;
      const { error: se } = await sb.storage.from('gallery-images').upload(name, gFile, { cacheControl:'3600', upsert:false });
      if (se) throw se;

      const { data: ud } = sb.storage.from('gallery-images').getPublicUrl(name);
      const { error: de } = await sb.from('gallery').insert({
        image_url:     ud.publicUrl,
        caption:       capInput.value.trim(),
        activity_date: dateInput.value || null,
      });
      if (de) throw de;

      // 폼 초기화
      gFile = null; fileInput.value = '';
      preview.src = ''; preview.style.display = 'none';
      hint.style.display = 'flex';
      capInput.value = '';
      dateInput.value = new Date().toISOString().slice(0, 10);
      saveBtn.textContent = '저장하기'; saveBtn.disabled = true;
      formWrap.style.display = 'none';
      toggle.textContent = '＋ 새 활동 추가';

      toast('갤러리에 추가했어요 🌿');
      loadGalleryAdmin();
      initGallery(); // 갤러리 탭도 새로고침
    } catch(e) {
      console.error(e);
      toast('저장 중 오류가 났어요 😅');
      saveBtn.disabled = false; saveBtn.textContent = '저장하기';
    }
  });

  loadGalleryAdmin();
}

async function loadGalleryAdmin() {
  const list = document.getElementById('gallery-admin-list');
  if (!sb) {
    list.innerHTML = '<div class="gallery-empty">Supabase 설정이 필요해요.</div>';
    return;
  }
  list.innerHTML = '<div class="loader"><div class="ld"></div><div class="ld"></div><div class="ld"></div></div>';
  try {
    const { data, error } = await sb
      .from('gallery').select('*')
      .order('activity_date', { ascending: false });
    if (error) throw error;

    if (!data || data.length === 0) {
      list.innerHTML = '<div class="gallery-empty">아직 등록된 활동이 없어요.<br>위에서 추가해주세요!</div>';
      return;
    }

    list.innerHTML = '';
    data.forEach(item => {
      const row = document.createElement('div');
      row.className = 'gallery-admin-item';

      const thumb = document.createElement('div');
      thumb.className = 'gallery-admin-thumb';
      if (item.image_url) {
        thumb.innerHTML = `<img src="${item.image_url}" alt="" loading="lazy">`;
      } else {
        thumb.textContent = '🌿';
      }

      const info = document.createElement('div');
      info.className = 'gallery-admin-info';
      info.innerHTML = `
        <div class="gallery-admin-date">${item.activity_date || '날짜 없음'}</div>
        <div class="gallery-admin-cap">${esc(item.caption)}</div>`;

      const delBtn = document.createElement('button');
      delBtn.className = 'btn-del';
      delBtn.innerHTML = '🗑';
      delBtn.title = '삭제';
      delBtn.addEventListener('click', async () => {
        if (!confirm(`"${item.caption}" 을 삭제할까요?`)) return;
        delBtn.disabled = true;
        try {
          if (item.image_url) {
            const path = decodeURIComponent(item.image_url.split('/gallery-images/').pop());
            if (path) await sb.storage.from('gallery-images').remove([path]);
          }
          const { error } = await sb.from('gallery').delete().eq('id', item.id);
          if (error) throw error;
          row.remove();
          toast('삭제했어요 🗑');
          initGallery();
        } catch(e) {
          toast('삭제 중 오류가 났어요 😅');
          delBtn.disabled = false;
        }
      });

      row.append(thumb, info, delBtn);
      list.appendChild(row);
    });
  } catch(e) {
    list.innerHTML = '<div class="gallery-empty" style="color:#e00">불러오기 실패</div>';
    console.error(e);
  }
}

function adjustCnt(delta, el) {
  const m = el.textContent.match(/\d+/);
  const n = m ? parseInt(m[0]) + delta : 0;
  el.textContent = `대기 중인 게시물: ${n}개`;
  if (n <= 0) document.getElementById('pending-list').innerHTML =
    '<div style="color:#888;font-size:13px;text-align:center;padding:24px">대기 중인 게시물이 없어요 ✅</div>';
}

// ══════════════════════════════════════════════
// 이미지 압축 (Canvas API)
// ══════════════════════════════════════════════
function compressImage(file, maxPx = 1280, quality = 0.82) {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.onload = e => {
      const img = new Image();
      img.onload = () => {
        let { width: w, height: h } = img;
        if (w > maxPx || h > maxPx) {
          if (w > h) { h = Math.round(h * maxPx / w); w = maxPx; }
          else        { w = Math.round(w * maxPx / h); h = maxPx; }
        }
        const canvas = document.createElement('canvas');
        canvas.width = w; canvas.height = h;
        canvas.getContext('2d').drawImage(img, 0, 0, w, h);
        canvas.toBlob(blob => {
          resolve(new File([blob], file.name.replace(/\.[^.]+$/, '.jpg'), { type: 'image/jpeg' }));
        }, 'image/jpeg', quality);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
}

// ══════════════════════════════════════════════
// 오류 메시지 해석
// ══════════════════════════════════════════════
function friendlyError(e) {
  const msg = ((e && e.message) || (e && e.error_description) || String(e)).toLowerCase();
  if (msg.includes('row-level security') || msg.includes('rls'))
    return 'Supabase 보안 정책 설정이 필요해요. SQL Editor에서 정책을 추가해주세요.';
  if (msg.includes('bucket') || msg.includes('not found'))
    return '저장소 버킷을 찾을 수 없어요. post-images 버킷이 있는지 확인해주세요.';
  if (msg.includes('file size') || msg.includes('payload too large'))
    return '파일이 너무 커요. 더 작은 사진을 선택해주세요.';
  if (msg.includes('network') || msg.includes('fetch'))
    return '인터넷 연결을 확인해주세요.';
  if (msg.includes('duplicate') || msg.includes('unique'))
    return '이미 올라간 파일이에요.';
  return '오류가 났어요. 잠시 후 다시 시도해주세요.';
}

// ══════════════════════════════════════════════
// 라이트박스
// ══════════════════════════════════════════════
function initLightbox() {
  const lb     = document.getElementById('lightbox');
  const lbImg  = document.getElementById('lightbox-img');
  const lbClose = document.getElementById('lightbox-close');

  function open(src) { lbImg.src = src; lb.classList.add('open'); }
  function close()   { lb.classList.remove('open'); lbImg.src = ''; }

  lbClose.addEventListener('click', close);
  lb.addEventListener('click', e => { if (e.target === lb) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });

  window._lightboxOpen = open;
}

function initPullToRefresh() {}

// ══════════════════════════════════════════════
// 이미지 오류 처리 헬퍼
// ══════════════════════════════════════════════
function safeImg(src, alt = '') {
  return `<img src="${src}" alt="${esc(alt)}" loading="lazy"
    onerror="this.parentNode.innerHTML='<div class=\\'img-error\\'>🌿</div>'"
    style="width:100%;height:100%;object-fit:cover">`;
}

// ══════════════════════════════════════════════
// BOOT
// ══════════════════════════════════════════════
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/nowoneco/sw.js');
  });
}

initStory();
initLightbox();
