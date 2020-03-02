document.body.addEventListener('mousemove',function(e){
    const x = e.clientX /  50;
    const y = e.clientY / 50;
    const r = Math.round(e.clientX / innerWidth * 255);
    const g = Math.round(e.clientY / innerHeight * 255);
    const nums = document.getElementById('error-code');

    nums.style.top = y + 'px';
    nums.style.left = x + 'px';
    nums.style.color = 'rgba('+r+','+g+',150)';
    nums.style.textShadow = '0 0 20px rgba('+r+','+g+',200,.5)';
});