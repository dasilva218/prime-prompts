const menuMobil = () => {
    const menuMobil = document.getElementById('content-menu-mobil');
    const navMobil = document.getElementById('menu-mobil');
    const close = document.getElementById('close');

 const openMenu = () => {
    menuMobil.classList.add('start')
 };
 const closeMenu = () => {
    menuMobil.classList.remove('start')
};
navMobil.addEventListener('click', openMenu)
close.addEventListener('click', closeMenu)
};
menuMobil();