/* Custom cursor */
const cur = document.getElementById('cur');
const ring = document.getElementById('cur-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; cur.style.left=mx+'px'; cur.style.top=my+'px'; });
(function animRing(){rx+=(mx-rx)*.12; ry+=(my-ry)*.12; ring.style.left=rx+'px'; ring.style.top=ry+'px'; requestAnimationFrame(animRing);})();
document.querySelectorAll('a,button,.product-card,.gal-item,.latest-item,.blog-card').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cur.style.transform='translate(-50%,-50%) scale(2.2)'; ring.style.opacity='0.2';});
  el.addEventListener('mouseleave',()=>{cur.style.transform='translate(-50%,-50%) scale(1)'; ring.style.opacity='0.6';});
});

/* Sticky nav */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => { navbar.classList.toggle('scrolled', window.scrollY > 60); });

/* Reveal on scroll */
const revealEls = document.querySelectorAll('.reveal,.reveal-left');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('visible'); observer.unobserve(e.target); } });
},{threshold:.1, rootMargin:'0px 0px -40px 0px'});
revealEls.forEach(el => observer.observe(el));

/* Staggered card reveals */
document.querySelectorAll('.products-grid, .blog-grid, .support-channels, .latest-grid').forEach(grid => {
  const cards = grid.children;
  Array.from(cards).forEach((c,i) => {
    c.style.transitionDelay = (i*0.08)+'s';
  });
});

/* Filter tags */
document.querySelectorAll('.filter-tag').forEach(tag => {
  tag.addEventListener('click', function(){ 
    document.querySelectorAll('.filter-tag').forEach(t=>t.classList.remove('active'));
    this.classList.add('active');
  });
});

/* Add to cart animation */
document.querySelectorAll('.add-btn, .ssc-btn').forEach(btn => {
  btn.addEventListener('click', function(){
    const orig = this.textContent;
    this.textContent = orig === '+' ? '✓' : '✓ Added!';
    this.style.background = '#2C7A2C';
    setTimeout(()=>{ this.textContent=orig; this.style.background=''; }, 1600);
  });
});