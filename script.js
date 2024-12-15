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

// تحديد تاريخ البكالوريا
var countdownDate = new Date("July 7, 2025 00:00:00").getTime();

// تحديث العد التنازلي كل ثانية
var x = setInterval(function() {

    // الحصول على التاريخ الحالي
    var now = new Date().getTime();

    // حساب الفرق بين التاريخين
    var distance = countdownDate - now;

    // حساب الأيام، الساعات، الدقائق، والثواني
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // عرض النتيجة في العنصر المعني
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // إذا انتهى الوقت، عرض رسالة
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "لقد حان موعد الباكالوريا!";
    }
}, 1000);

document.getElementById('add-task-btn').addEventListener('click', function() {
    // إنشاء صف جديد لإضافة مهمة
    let newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td><input type="text" placeholder="اليوم" /></td>
        <td><input type="text" placeholder="المادة" /></td>
        <td><input type="text" placeholder="الوقت" /></td>
        <td><input type="text" placeholder="الأستاذ" /></td>
        <td><input type="text" placeholder="الملاحظات" /></td>
        <td><input type="date" placeholder="التاريخ" /></td>
        <td><input type="text" placeholder="الموقع" /></td>
        <td><input type="text" placeholder="المدة" /></td>
        <td><button class="delete-btn"><i class="fa fa-trash"></i> حذف</button></td>
    `;
    
    // إضافة الصف الجديد إلى الجدول
    document.querySelector('#study-schedule tbody').appendChild(newRow);

    // إضافة حدث لحذف الصف عند الضغط على زر الحذف
    newRow.querySelector('.delete-btn').addEventListener('click', function() {
        newRow.remove();
    });
});
document.addEventListener('DOMContentLoaded', function () {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', function () {
      item.classList.toggle('active');
    });
  });
});
