const openEls = document.querySelectorAll('[data-open]');
const closeEls = document.querySelectorAll('[data-close]');
const extendedPopup = document.querySelector('#extended');
const isVisible = 'is-visible';
const profiles = [
  {
    "id": "1",
    "name": "Андрей Николенко",
    "company": "Электрик",
    "image": "https://dummyimage.com/600x800/f7f7f7/fff.jpg",
    "body": '<p>Duis vel nibh at velit scelerisque suscipit. Phasellus blandit leo ut odio. Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. </p> <p>Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus.</p>',
    "price": "343 587"
  },
  {
    "id": "2",
    "name": "Mitchell Fitzgerald",
    "company": "Бизнесмен",
    "image": "https://dummyimage.com/600x800/c1c1c1/fff.jpg",
    "body": "Duis vel nibh at velit scelerisque suscipit. Phasellus blandit leo ut odio. Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus.",
    "price": "275 970"
  },
  {
    "id": "3",
    "name": "Андрей Николенко",
    "company": "Электрик",
    "image": "https://dummyimage.com/600x800/f7f7f7/fff.jpg",
    "body": '<p>Duis vel nibh at velit scelerisque suscipit. Phasellus blandit leo ut odio. Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. </p> <p>Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus.</p>',
    "price": "343 587"
  }
  ,
  {
    "id": "4",
    "name": "Андрей Николенко",
    "company": "Электрик",
    "image": "https://dummyimage.com/600x800/f7f7f7/fff.jpg",
    "body": '<p>Duis vel nibh at velit scelerisque suscipit. Phasellus blandit leo ut odio. Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. </p> <p>Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus.</p>',
    "price": "343 587"
  }
  ,
  {
    "id": "5",
    "name": "Андрей Николенко",
    "company": "Электрик",
    "image": "https://dummyimage.com/600x800/f7f7f7/fff.jpg",
    "body": '<p>Duis vel nibh at velit scelerisque suscipit. Phasellus blandit leo ut odio. Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. </p> <p>Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus.</p>',
    "price": "343 587"
  }
  ,
  {
    "id": "6",
    "name": "Андрей Николенко",
    "company": "Электрик",
    "image": "https://dummyimage.com/600x800/f7f7f7/fff.jpg",
    "body": '<p>Duis vel nibh at velit scelerisque suscipit. Phasellus blandit leo ut odio. Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. </p> <p>Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus.</p>',
    "price": "343 587"
  }
  ,
  {
    "id": "7",
    "name": "Андрей Николенко",
    "company": "Электрик",
    "image": "https://dummyimage.com/600x800/f7f7f7/fff.jpg",
    "body": '<p>Duis vel nibh at velit scelerisque suscipit. Phasellus blandit leo ut odio. Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. </p> <p>Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus.</p>',
    "price": "343 587"
  }
  ,
  {
    "id": "8",
    "name": "Андрей Николенко",
    "company": "Электрик",
    "image": "https://dummyimage.com/600x800/f7f7f7/fff.jpg",
    "body": '<p>Duis vel nibh at velit scelerisque suscipit. Phasellus blandit leo ut odio. Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. </p> <p>Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus.</p>',
    "price": "343 587"
  },
  {
    "id": "9",
    "name": "Андрей Николенко",
    "company": "Электрик",
    "image": "https://dummyimage.com/600x800/f7f7f7/fff.jpg",
    "body": '<p>Duis vel nibh at velit scelerisque suscipit. Phasellus blandit leo ut odio. Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. </p> <p>Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus.</p>',
    "price": "343 587"
  }
];

function filterById(jsonObject, id) {
  return jsonObject.filter(function(jsonObject) {
    return jsonObject.id === id;
  })[0];
}

// eslint-disable-next-line no-restricted-syntax
for (const el of openEls) {
  el.addEventListener('click', function () {
    const modalById = this.dataset.open;
    const modalId = this.dataset.id;
    document.getElementById(modalById).classList.add(isVisible);
    if (modalId && extendedPopup) {
      const selectedObject = filterById(profiles, modalId);
      if (selectedObject) {
        document.getElementById("data_autor").innerHTML = selectedObject.name;
        document.getElementById("data_work").innerHTML = selectedObject.company;
        document.getElementById("data_image").innerHTML = `<img src="${selectedObject.image}" class="responze">`;
        document.getElementById("data_descr").innerHTML = selectedObject.body;
        document.getElementById("data_price").innerHTML = selectedObject.price;
      }
    }
  });
}

// eslint-disable-next-line no-restricted-syntax
for (const el of closeEls) {
  el.addEventListener('click', function () {
    this.closest(`.modalny.${isVisible}`).classList.remove(isVisible);
  });
}

document.addEventListener('click', (e) => {
  // eslint-disable-next-line eqeqeq
  if (e.target == document.querySelector('.modalny.is-visible')) {
    document.querySelector('.modalny.is-visible').classList.remove(isVisible);
  }
});

document.addEventListener('keyup', (e) => {
  // if we press the ESC
  // eslint-disable-next-line eqeqeq
  if (e.key == 'Escape' && document.querySelector('.modalny.is-visible')) {
    document.querySelector('.modalny.is-visible').classList.remove(isVisible);
  }
});

const tmodalnyModal = document.querySelectorAll('.modalny');
const thanksboxModal = document.querySelectorAll('.form_btn');
thanksboxModal.forEach(function (item) {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    tmodalnyModal.forEach(function (elem) {
      elem.classList.remove(isVisible);
    });
    document.getElementById('thanksbox').classList.add(isVisible);
    return false;
  });
});

const filterItemsMob = document.querySelectorAll('.catalog_filter_block .sidebar-title');
filterItemsMob.forEach(function (item) {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    item.closest('.sidebar_group').classList.toggle('active');
    item.nextElementSibling.classList.toggle('active');
    // document.getElementById('thanksbox').classList.add(isVisible);
    return false;
  });
});
