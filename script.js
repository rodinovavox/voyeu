const gthieu = document.getElementById('intro');
const cuaso = document.getElementById('window');
const messenger = document.getElementById('tinnhan');
const dong = document.getElementById('function_bar');

gthieu.addEventListener('click', function() {
    cuaso.classList.add('hien-popup');
    gthieu.classList.add('lammo');
})

dong.addEventListener('click', function() {
    cuaso.classList.add('lammo');
    messenger.classList.add('hien-popup');
})

const form = document.getElementById('contact-form');
const stt = document.getElementById('status-msg');
const nutgui = document.getElementById('btn-gui-thu');

const showmem = document.getElementById('mem');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const service_id = 'service_97q0er8';
    const template_id = 'template_mn227gu';

    nutgui.innerText = 'Đang gửi thư ạ';
    nutgui.disabled = true;

    emailjs.sendForm(service_id, template_id, this)
        .then(function(response) {
            console.log('Gửi thành công oiii', response.status, response.text);
    
            stt.style.color = '#2ecc71';
            stt.innerText = 'Thư đã gửi đến chồng oiii, chồng sẽ đọc sau vài phút ạaa';
            
            form.reset();
            nutgui.innerText = 'Đã gửi thành công <3';

            showmem.classList.add('hien-popup');

        }, function(error) {
            console.error('Gửi lỗi. Chi tiết lỗi:', error);

            stt.style.color = '#e74c3c';
            stt.innerText = 'Mãng nghẽn mất tiu òi aaa, vợ gửi lại nhaaaa';

            nutgui.innerText = 'Gửi lại cho anh nee';
            nutgui.disabled = false;
        });
})

const xemanh = document.getElementById('showpic');
const anh1 = document.getElementById('anh');

xemanh.addEventListener('click', function(e) {
    e.preventDefault();
    
    anh1.classList.add('hien-popup');
    messenger.style.setProperty('opacity','0','important');
    messenger.style.setProperty('transform','translate(-50%,-50%) scale(0)','important');
    messenger.style.setProperty('pointer-events','auto','important');
    messenger.style.setProperty('transition','transform 0.3s cubic-bezier(0.34,1.56,0.65,1), opacity 0.3s ease','important')
})