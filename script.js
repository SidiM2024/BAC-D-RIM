// وظيفة لفتح وإغلاق القائمة الجانبية في الهواتف
document.getElementById('sidebar-toggle').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var hamburger = document.getElementById('sidebar-toggle');

    // التبديل بين فتح وإغلاق القائمة الجانبية
    if (sidebar.style.transform === 'translateX(0%)') {
        sidebar.style.transform = 'translateX(100%)'; // إغلاق القائمة
        hamburger.classList.remove('open'); // إعادة الوضع الطبيعي للزر
    } else {
        sidebar.style.transform = 'translateX(0%)'; // فتح القائمة
        hamburger.classList.add('open'); // تغيير شكل الزر
    }
});

function calculateGrade() {
    // جمع الدرجات مع الأوزان
    var sn = parseFloat(document.getElementById("sn").value) || 0;
    var pc = parseFloat(document.getElementById("pc").value) || 0;
    var m = parseFloat(document.getElementById("m").value) || 0;
    var ar = parseFloat(document.getElementById("ar").value) || 0;
    var fr = parseFloat(document.getElementById("fr").value) || 0;
    var ir = parseFloat(document.getElementById("ir").value) || 0;
    var an = parseFloat(document.getElementById("an").value) || 0;

    // الأوزان
    var snWeight = 8;
    var pcWeight = 7;
    var mWeight = 6;
    var arWeight = 3;
    var frWeight = 3;
    var irWeight = 2;
    var anWeight = 2;

    // حساب المعدل
    var totalWeight = snWeight + pcWeight + mWeight + arWeight + frWeight + irWeight + anWeight;
    var totalPoints = (sn * snWeight) + (pc * pcWeight) + (m * mWeight) + (ar * arWeight) + (fr * frWeight) + (ir * irWeight) + (an * anWeight);

    var average = totalPoints / totalWeight;

    // عرض النتيجة
    document.getElementById("average").innerText = average.toFixed(2);
}

const countdown = () => {
  const targetDate = new Date("2025-07-07T00:00:00").getTime();
  const now = new Date().getTime();
  const timeDifference = targetDate - now;

  if (timeDifference >= 0) {
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Update text
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    // Update circles
    const totalDays = 365; // Adjust for leap year if needed
    const totalHours = 24;
    const totalMinutes = 60;
    const totalSeconds = 60;

    document.getElementById("days-circle").style.strokeDashoffset = 283 - (283 * days) / totalDays;
    document.getElementById("hours-circle").style.strokeDashoffset = 283 - (283 * hours) / totalHours;
    document.getElementById("minutes-circle").style.strokeDashoffset = 283 - (283 * minutes) / totalMinutes;
    document.getElementById("seconds-circle").style.strokeDashoffset = 283 - (283 * seconds) / totalSeconds;
  } else {
    document.querySelector(".countdown-container").innerHTML = "<h2>انتهى العد التنازلي!</h2>";
  }
};

setInterval(countdown, 1000);



document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', function () {
      item.classList.toggle('active');
    });
  });
});
