const links = document.querySelectorAll('nav a');
const currentPath = window.location.pathname;

links.forEach(link => {
  if (link.getAttribute('href') === currentPath) {
    link.classList.add('active');
  }
});

const showSidebar = () => {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display='flex'
}
const hideSidebar = () => {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display='none'
}