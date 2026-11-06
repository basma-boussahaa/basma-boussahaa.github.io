/* =========================================================
   Publications: add new papers at the top of this list.
   tags: models | eval | speech | dialogue
   ========================================================= */
const ME = /(B\.?\s?E\.?\s?A\.?\s?Boussaha|Basma El Amel Boussaha|Basma Boussaha)/;

const PUBS = [
  // ---------------- 2026 ----------------
  { year: 2026, tags: ['eval'],
    title: "Are Arabic Benchmarks Reliable? QIMMA's Quality-First Approach to LLM Evaluation",
    authors: 'L. AlQadi, A. Alzubaidi, M. Alyafeai, H. Alobeidli, M. Alhammadi, S. Alsuwaidi, …, Basma El Amel Boussaha, et al.',
    venue: 'arXiv preprint 2604.03395',
    links: { arXiv: 'https://arxiv.org/abs/2604.03395', Leaderboard: 'https://huggingface.co/spaces/qimma/leaderboard', Code: 'https://github.com/tiiuae/QIMMA-leaderboard', Blog: 'https://huggingface.co/blog/tiiuae/qimma-arabic-leaderboard' } },
  { year: 2026, tags: ['speech', 'eval'],
    title: 'Hamsa: A Manually Annotated Emirati Arabic Corpus for Speech and Language Technologies',
    authors: 'M. Alyafeai, H. Alobeidli, O. Alkaabi, S. Alsuwaidi, L. AlQadi, A. Alzubaidi, …, Basma El Amel Boussaha, et al.',
    venue: 'Interspeech 2026', badge: 'Interspeech',
    links: { PDF: 'https://www.isca-archive.org/interspeech_2026/alyafeai26_interspeech.pdf' } },
  { year: 2026, tags: ['models'],
    title: 'Falcon-H1-Arabic: State-of-the-Art Arabic Language Models with Hybrid Mamba-Transformer Architecture',
    authors: 'Basma El Amel Boussaha, M. Alyafeai, A. Alzubaidi, L. AlQadi, S. Alsuwaidi, O. Alkaabi, et al.',
    venue: 'Technical report · Hugging Face', badge: 'Flagship',
    links: { Blog: 'https://huggingface.co/blog/tiiuae/falcon-h1-arabic', Demo: 'https://chat.falconllm.tii.ae/' } },
  { year: 2026, tags: ['models'],
    title: 'Falcon-Emirati-7B: A Dialect-Specialized Arabic LLM for the Emirati Dialect',
    authors: 'S. Alsuwaidi, O. Alkaabi, M. Alhammadi, H. Alobeidli, A. Alzubaidi, M. Alyafeai, …, Basma El Amel Boussaha, et al.',
    venue: 'Technical report · Hugging Face',
    links: { Blog: 'https://huggingface.co/blog/tiiuae/falcon-emirati', Demo: 'https://chat.falconllm.tii.ae/?model=Falcon-Emirati-7B' } },
  { year: 2026, tags: ['eval'],
    title: 'Alyah: An Emirati Dialect Benchmark for Evaluating Arabic Large Language Models',
    authors: 'O. Alkaabi, A. Alzubaidi, H. Alobeidli, S. Alsuwaidi, M. Alyafeai, L. AlQadi, …, Basma El Amel Boussaha, et al.',
    venue: 'Hugging Face',
    links: { Dataset: 'https://huggingface.co/datasets/tiiuae/alyah-emirati-benchmark', Blog: 'https://huggingface.co/blog/tiiuae/emirati-benchmarks' } },

  // ---------------- 2025 ----------------
  { year: 2025, tags: ['models'],
    title: 'Adapting Falcon3-7B Language Model for Arabic: Methods, Challenges, and Outcomes',
    authors: 'Basma El Amel Boussaha, M. Alyafeai, A. Alzubaidi, L. Al Qadi, S. Alsuwaidi, H. Hacid',
    venue: 'Third Arabic NLP Conference (ArabicNLP 2025)', badge: 'ArabicNLP',
    links: { Blog: 'https://huggingface.co/blog/tiiuae/falcon-arabic', Demo: 'https://chat.falconllm.tii.ae/' } },
  { year: 2025, tags: ['eval'],
    title: '3LM: Bridging Arabic, STEM, and Code through Benchmarking',
    authors: 'Basma El Amel Boussaha, L. Al Qadi, M. Farooq, S. Alsuwaidi, G. Campesan, et al.',
    venue: 'Third Arabic NLP Conference (ArabicNLP 2025)', badge: 'ArabicNLP',
    links: { arXiv: 'https://arxiv.org/abs/2507.15850', Code: 'https://github.com/tiiuae/3LM-benchmark', Blog: 'https://huggingface.co/blog/tiiuae/3lm-benchmark' } },
  { year: 2025, tags: ['eval'],
    title: 'Evaluating Arabic Large Language Models: A Survey of Benchmarks, Methods, and Gaps',
    authors: 'A. Alzubaidi, S. Alsuwaidi, Basma El Amel Boussaha, L. AlQadi, O. Alkaabi, M. Alyafeai, et al.',
    venue: 'arXiv preprint 2510.13430',
    links: { arXiv: 'https://arxiv.org/abs/2510.13430' } },
  { year: 2025, tags: ['eval'],
    title: 'NeurIPS 2025 E2LM Competition: Early Training Evaluation of Language Models',
    authors: 'M. Yagoubi, Y. Dahou, B. Mokeddem, Y. Belkada, P. H. Le-Khac, …, Basma El Amel Boussaha, et al.',
    venue: 'NeurIPS 2025 Competition Track', badge: 'NeurIPS',
    links: { arXiv: 'https://arxiv.org/abs/2506.07731', Blog: 'https://huggingface.co/blog/tiiuae/e2lm-competition' } },

  // ---------------- 2024 ----------------
  { year: 2024, tags: ['models'],
    title: 'Falcon2-11B Technical Report',
    authors: 'Q. Malartic, N. R. Chowdhury, R. Cojocaru, M. Farooq, G. Campesan, …, Basma El Amel Boussaha, et al.',
    venue: 'arXiv preprint 2407.14885',
    links: { arXiv: 'https://arxiv.org/abs/2407.14885' } },
  { year: 2024, tags: ['eval'],
    title: 'Open Arabic LLM Leaderboard',
    authors: 'A. El Filali, H. Alobeidli, C. Fourrier, Basma El Amel Boussaha, R. Cojocaru, N. Habib, et al.',
    venue: 'Hugging Face',
    links: { 'v1 blog': 'https://huggingface.co/blog/leaderboard-arabic', 'v2 blog': 'https://huggingface.co/blog/leaderboard-arabic-v2' } },

  // ---------------- 2020 and earlier ----------------
  { year: 2020, tags: ['dialogue'],
    title: 'End-to-End Response Selection Based on Multi-Level Context Response Matching',
    authors: 'Basma El Amel Boussaha, N. Hernandez, C. Jacquin, E. Morin',
    venue: 'Computer Speech & Language, vol. 63', badge: 'Journal',
    links: { Paper: 'https://www.sciencedirect.com/science/article/pii/S0885230820300139' } },
  { year: 2019, tags: ['dialogue'],
    title: 'Response Selection for End-to-End Retrieval-Based Dialogue Systems',
    authors: 'Basma El Amel Boussaha',
    venue: 'PhD thesis · Université de Nantes', badge: 'Thesis',
    links: { PDF: 'https://hal.science/tel-02926608/file/Boussaha_thesis_final%20%281%29.pdf', Slides: 'assets/publications/thesis/slides.pptx' } },
  { year: 2019, tags: ['dialogue'],
    title: 'Deep Retrieval-Based Dialogue Systems: A Short Review',
    authors: 'Basma El Amel Boussaha, N. Hernandez, C. Jacquin, E. Morin',
    venue: 'arXiv preprint 1907.12878',
    links: { arXiv: 'https://arxiv.org/abs/1907.12878' } },
  { year: 2019, tags: ['dialogue'],
    title: 'Towards Simple but Efficient Next Utterance Ranking',
    authors: 'Basma El Amel Boussaha, N. Hernandez, C. Jacquin, E. Morin',
    venue: 'CICLing 2019 · Computación y Sistemas 23(3)',
    links: { PDF: 'assets/publications/towardsSimple/paper.pdf', Poster: 'assets/publications/towardsSimple/poster.pdf', Code: 'https://github.com/basma-boussahaa/multi_level_chatbot' } },
  { year: 2019, tags: ['dialogue'],
    title: 'Multi-Level Context Response Matching in Retrieval-Based Dialog Systems',
    authors: 'Basma El Amel Boussaha, N. Hernandez, C. Jacquin, E. Morin',
    venue: 'DSTC7 Workshop @ AAAI 2019',
    links: { PDF: 'http://workshop.colips.org/dstc7/papers/16.pdf', Poster: 'assets/publications/multiLevel/poster.pdf', Code: 'https://github.com/basma-boussahaa/multi_level_chatbot' } },
  { year: 2018, tags: ['dialogue'],
    title: 'A Multi-Domain Framework for Textual Similarity: A Case Study on Question-to-Question and Question-Answering Similarity Tasks',
    authors: 'A. Hazem, Basma El Amel Boussaha, N. Hernandez',
    venue: 'LREC 2018',
    links: { PDF: 'http://www.lrec-conf.org/proceedings/lrec2018/pdf/34.pdf', Poster: 'assets/publications/aMultiDomain/poster.pdf', Code: 'https://github.com/hazemAmir/StackExchange' } },
  { year: 2018, tags: ['dialogue'],
    title: 'Ordonnancement de réponses dans les systèmes de dialogue basé sur une similarité contexte/réponse',
    authors: 'Basma El Amel Boussaha, N. Hernandez, C. Jacquin, E. Morin',
    venue: 'TALN 2018',
    links: { PDF: 'http://people.irisa.fr/Cedric.Maigrot/CORIA-TALN-2018/Actes_TALN2018_vol1.pdf#page=129', Slides: 'assets/publications/ordonRep/slides.pdf', Code: 'https://github.com/basma-boussahaa/dual_encoder_udc' } },
  { year: 2018, tags: ['dialogue'],
    title: 'Next Utterance Ranking Based on Context Response Similarity',
    authors: 'Basma El Amel Boussaha, N. Hernandez, C. Jacquin, E. Morin',
    venue: 'Machine Learning and Data Analytics Symposium (MLDAS)',
    links: { PDF: 'assets/publications/nextUtterance/paper.pdf', Slides: 'assets/publications/nextUtterance/slides.pdf', Poster: 'assets/publications/nextUtterance/poster.pdf', Code: 'https://github.com/basma-boussahaa/dual_encoder_udc', Blog: 'https://basmaboussaha.wordpress.com/2017/10/18/implementation-of-dual-encoder-using-keras/' } },
  { year: 2017, tags: ['dialogue'],
    title: 'Thread Reconstruction in Conversational Data using Neural Coherence Models',
    authors: 'D. T. Nguyen, S. Joty, Basma El Amel Boussaha, M. de Rijke',
    venue: 'Neu-IR Workshop @ SIGIR 2017',
    links: { arXiv: 'https://arxiv.org/abs/1707.07660', Poster: 'assets/publications/threadRecons/poster.pdf', Code: 'https://github.com/datnt88/neural_coherence' } },
  { year: 2017, tags: ['dialogue'],
    title: 'MappSent: a Textual Mapping Approach for Question-to-Question Similarity',
    authors: 'A. Hazem, Basma El Amel Boussaha, N. Hernandez',
    venue: 'RANLP 2017',
    links: { PDF: 'https://pdfs.semanticscholar.org/d560/8f58e64a80e29168e6a2383a3f389eb3c2ce.pdf', Slides: 'assets/publications/mapSent/slides.pdf', Code: 'https://github.com/hazemAmir/MappSent' } },
  { year: 2017, tags: ['dialogue'],
    title: 'MappSent at IJCNLP-2017 Task 5: A Textual Similarity Approach Applied to Multi-choice Question Answering in Examinations',
    authors: 'A. Hazem, Basma El Amel Boussaha, N. Hernandez',
    venue: 'IJCNLP 2017 Shared Tasks',
    links: { PDF: 'https://aclanthology.org/I17-4034/', Slides: 'assets/publications/mapSentAt/slides.pdf' } },
  { year: 2017, tags: ['dialogue'],
    title: 'Exploitation des plongements de mots pour l’analyse d’opinion et du langage figuratif des tweets (DEFT 2017)',
    authors: 'A. Hazem, Basma El Amel Boussaha, N. Hernandez',
    venue: 'TALN 2017 · DEFT',
    links: { PDF: 'https://deft.limsi.fr/2017/actes_DEFT_2017.pdf#page=85', Slides: 'assets/publications/exploitPlong/slides.pdf' } },
];

/* ---------- rendering ---------- */
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function renderPubs(filter) {
  const list = PUBS.filter(p => filter === 'all' ? true : p.tags.includes(filter));
  const byYear = new Map();
  list.forEach(p => { if (!byYear.has(p.year)) byYear.set(p.year, []); byYear.get(p.year).push(p); });
  const root = document.getElementById('pubList');
  root.innerHTML = [...byYear.entries()].sort((a, b) => b[0] - a[0]).map(([year, items]) => `
    <div class="pub-year">
      <h3>${year}</h3>
      <div class="pub-items">
        ${items.map((p, i) => {
          const main = p.links && Object.values(p.links)[0];
          const title = main ? `<a href="${esc(main)}" target="_blank" rel="noopener">${esc(p.title)}</a>` : esc(p.title);
          const authors = esc(p.authors).replace(ME, '<span class="me">$1</span>');
          const links = p.links ? Object.entries(p.links).map(([k, v]) => `<a href="${esc(v)}" target="_blank" rel="noopener">${esc(k)}</a>`).join('') : '';
          return `
            <article class="pub" style="animation-delay:${Math.min(i, 8) * 40}ms">
              <div class="pub-title">${title}</div>
              <div class="pub-authors">${authors}</div>
              <div class="pub-foot">
                <span class="pub-venue">${esc(p.venue)}</span>
                ${p.badge ? `<span class="pub-badge">${esc(p.badge)}</span>` : ''}
                ${links ? `<span class="pub-links">${links}</span>` : ''}
              </div>
            </article>`;
        }).join('')}
      </div>
    </div>`).join('');
}

function initFilters() {
  const chips = document.querySelectorAll('.chip');
  chips.forEach(chip => {
    const f = chip.dataset.filter;
    const n = f === 'all' ? PUBS.length : PUBS.filter(p => p.tags.includes(f)).length;
    chip.insertAdjacentHTML('beforeend', `<span class="count">${n}</span>`);
    chip.addEventListener('click', () => {
      chips.forEach(c => { c.classList.toggle('is-active', c === chip); c.setAttribute('aria-selected', c === chip); });
      renderPubs(f);
    });
  });
}

/* ---------- theme ---------- */
function initTheme() {
  const btn = document.getElementById('themeToggle');
  const sysDark = window.matchMedia('(prefers-color-scheme: dark)');
  btn.addEventListener('click', () => {
    const cur = document.documentElement.dataset.theme || (sysDark.matches ? 'dark' : 'light');
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
}

/* ---------- scroll effects ---------- */
function initScroll() {
  const nav = document.querySelector('.nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 8);
  onScroll(); window.addEventListener('scroll', onScroll, { passive: true });

  const io = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }) : null;
  document.querySelectorAll('.reveal').forEach((el, i) => {
    if (!io) return el.classList.add('in');
    el.style.transitionDelay = `${(i % 4) * 60}ms`;
    io.observe(el);
  });

  // Highlight the current section in the nav.
  const links = [...document.querySelectorAll('.nav-links a')];
  const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window) {
    const so = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(s => so.observe(s));
  }
}

// Email is assembled at runtime so the address never appears in the HTML.
(function () {
  const a = document.getElementById('emailLink');
  if (!a) return;
  a.addEventListener('click', e => {
    e.preventDefault();
    window.location.href = 'mailto:' + ['basma.boussahaa', 'gmail.com'].join('@');
  });
})();

// Back to top: the nav is sticky, so scroll explicitly instead of relying on the anchor.
document.querySelectorAll('a[href="#top"]').forEach(a => a.addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  history.replaceState(null, '', location.pathname);
}));

document.getElementById('year').textContent = new Date().getFullYear();
renderPubs('all');
initFilters();
initTheme();
initScroll();
