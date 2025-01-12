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
    let science = parseFloat(document.getElementById('science').value) || 0;
    let physics = parseFloat(document.getElementById('physics').value) || 0;
    let math = parseFloat(document.getElementById('math').value) || 0;
    let arabic = parseFloat(document.getElementById('arabic').value) || 0;
    let french = parseFloat(document.getElementById('french').value) || 0;
    let islamic = parseFloat(document.getElementById('islamic').value) || 0;
    let english = parseFloat(document.getElementById('english').value) || 0;
    
    let totalScore = (science * 8) + (physics * 7) + (math * 6) + (arabic * 3) + (french * 3) + (islamic * 2) + (english * 2);
    let totalWeight = 8 + 7 + 6 + 3 + 3 + 2 + 2;
    let average = totalScore / totalWeight;

    let gradeMessage = "";
    if (average >= 12) {
        gradeMessage = "مبروك! أنت على الطريق الصحيح. استمر في التفوق!";
    } else if (average >= 10) {
        gradeMessage = "أحسنت! ولكن تحتاج إلى المزيد من الاجتهاد لتحقق أفضل النتائج.";
    } else if (average >= 8) {
        gradeMessage = "تحتاج إلى بذل المزيد من الجهد لتحقيق نتائج أفضل.";
    } else {
        gradeMessage = "عليك ببذل جهد أكبر لتحقيق نتائج أفضل. لا تيأس!";
    }

    document.getElementById('grade-message').innerText = `معدلك هو: ${average.toFixed(2)}\n${gradeMessage}`;
    document.getElementById('result').style.display = 'flex';
}

function closeResult() {
    document.getElementById('result').style.display = 'none';
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
