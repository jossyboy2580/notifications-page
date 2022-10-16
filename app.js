const markAll = document.querySelector('.mark-all')
const unreadCount = document.querySelector('.count')

markAll.addEventListener('click', () => {
    const unread = document.querySelectorAll('.new')
    unread.forEach(notificate => {
        notificate.classList.remove('new')
        unreadCount.textContent = ''
        unreadCount.style.display = 'none'
    })

})