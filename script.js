// 1. ระบบสลับ Dark / Light Mode
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // บันทึกสถานะลงเครื่อง (Optional)
    const isDark = body.classList.contains('dark-mode');
    themeToggle.innerText = isDark ? "☀️ Light Mode" : "🌓 Dark Mode";
});

// 2. ระบบแบ่งหมวดหมู่ (Filtering)
function filterCategory(category) {
    const cards = document.querySelectorAll('.card');
    const buttons = document.querySelectorAll('.filter-btn');

    // อัปเดตสถานะปุ่ม
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // แสดง/ซ่อน การ์ดตามหมวดหมู่
    cards.forEach(card => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = "block";
            card.style.animation = "fadeIn 0.5s ease";
        } else {
            card.style.display = "none";
        }
    });
}

