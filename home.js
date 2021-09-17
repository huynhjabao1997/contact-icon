function callButton() {
    Swal.fire('Liên hệ Hotline', "0931.057.057")
}

function mapButton() {
    Swal.fire({
        html: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3212358512046!2d106.68909401562162!3d10.786690092314558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fd19b5e101f%3A0xc822a8d088e13851!2sMacSG%20-%20Chuy%C3%AAn%20Macbook%2C%20Laptop%2C%20iPhone!5e0!3m2!1svi!2s!4v1628691959571!5m2!1svi!2s" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`,
        width: '860px',
        height: '600px',
        showCloseButton: true,
        showConfirmButton: false,
        footer: `Hotline: <b> 0931.057.057 </b>`
    })
}

window.onload = function prepareFrame() {
    // Only run when user active on homepage
    if (document.location.pathname === "/") {
        let url = 'https://macsg.vn/imac-2021-chip-m1-pc509457.html';
        let imageUrl = './img/imac2021.png';
        Swal.fire({
            title: '',
            text: '',
            imageUrl: '',
            width: '860px',
            height: '600px',
            imageAlt: 'Custom image',
            html: `<a href=${url}><img src=${imageUrl} width="100%"/></a>`,
            showConfirmButton: false,
            showCloseButton: true,
        })
    }
}