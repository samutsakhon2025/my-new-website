document.addEventListener('DOMContentLoaded', function() {
    
    // หาปุ่ม Call-to-Action ของเรา
    const ctaButton = document.getElementById('cta-button');

    // ตรวจสอบว่าหาปุ่มเจหรือไม่
    if (ctaButton) {
        // เพิ่ม Event Listener เมื่อมีการคลิกที่ปุ่ม
        ctaButton.addEventListener('click', function() {
            alert('ขอบคุณที่สนใจ! เว็บไซต์นี้กำลังอยู่ในระหว่างการพัฒนาครับ');
        });
    }

});