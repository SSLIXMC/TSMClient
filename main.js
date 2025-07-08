document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const sideMenu = document.getElementById('side-menu');

    if (menuToggle && menuClose && sideMenu) {
        menuToggle.addEventListener('click', () => {
            sideMenu.classList.remove('hidden');
        });

        menuClose.addEventListener('click', () => {
            sideMenu.classList.add('hidden');
        });
    }

    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdownToggle.addEventListener('click', () => {
        dropdownContent.classList.toggle('hidden');
    });
});

// Popup Aç
function openPopup(id) {
    document.getElementById(id).classList.remove('hidden');
}

// Popup Kapat
function closePopup(id) {
    document.getElementById(id).classList.add('hidden');
}

// Popup dışına tıklanırsa kapat
window.addEventListener('click', function (e) {
    document.querySelectorAll('.popup').forEach(popup => {
        if (!popup.classList.contains('hidden') && e.target === popup) {
            popup.classList.add('hidden');
        }
    });
});
