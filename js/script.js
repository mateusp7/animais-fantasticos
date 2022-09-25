import ScrollSuave from './modules/scroll-suave.js';
import initAnimacaoScroll from './modules/scroll-animacao.js';
import initTabNav from './modules/animacao-tab.js';
import initAccordion from './modules/animacao-accordion.js';
import initModal from './modules/modal.js';
import initToolTip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

initAnimacaoScroll();
initTabNav();
initAccordion();
initModal();
initToolTip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
