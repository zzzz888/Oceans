const galleryData = [
    {
    src:'img_gallery/photo-1456753510773-a8bd200a4a26.jpg',
    },
    {
    src: 'img_gallery/photo-1471922694854-ff1b63b20054.jpg',
    },
    {
    src: 'img_gallery/photo-1472738805989-ede1a5b9a821.jpg',
    },
    {
    src: 'img_gallery/photo-1506666486876-fec82d6e1efc.jpg',
    },
    {
    src: 'img_gallery/photo-1530099531892-0932c5324757.jpg',
    },
    {
     src: 'img_gallery/photo-1537038392207-29ad7e76ca91.jpg',
    },
        {
    src: 'img_gallery/photo-1544828165-d5ccd8ab86b7.jpg',
    },
    {
    src: 'img_gallery/photo-1560304043-cdd7f7b1ca6d.jpg',
        },
    {
    src: 'img_gallery/photo-1568430462989-44163eb1752f.jpg',
    },
    {
    src: 'img_gallery/photo-1576124344805-c47cea66b0db.jpg',
    },
    {
    src: 'img_gallery/waves.jpg',
    },
    {
    src: 'img_gallery/photo-1499070022014-ccac3a6416f4.jpg',
    },
    ];

    const galleryElement = document.getElementById('gallery');
    let galleryHTML = '';
    for (const index in galleryData) {
        const imageData = galleryData[index];
        if (imageData) {
            galleryHTML += `
                <a href="#" class="gallery-item" style="background-image: url('${imageData.src}')">
                </a>
            `;
        }
    
    }
    galleryElement.innerHTML = galleryHTML;