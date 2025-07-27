window.onload = () => {
  setTimeout(() => {
    document.getElementById('progress').style.width = '100%';
    setTimeout(() => {
      document.getElementById('loader').style.display = 'none';
      startFlowerAnimation();
    }, 500);
  }, 500);
}

function showProducts() {
  document.getElementById('products').style.display = 'block';
}

function orderNow() {
  window.open('https://wa.me/+38345496430', '_blank');
}

function startFlowerAnimation() {
  const container = document.body;
  for (let i = 0; i < 30; i++) {
    const flower = document.createElement('div');
    flower.textContent = '🌸';
    flower.style.position = 'fixed';
    flower.style.left = Math.random() * 100 + 'vw';
    flower.style.top = '-5vh';
    flower.style.fontSize = Math.random() * 3 + 7 + 'px';
    flower.style.opacity = Math.random() + 0.5;
    flower.style.animation = `fall ${Math.random() * 5 + 5}s linear infinite`;
    container.appendChild(flower);

    setTimeout(() => flower.remove(), 10000);
  }
}

const style = document.createElement('style');
style.innerHTML = `
@keyframes fall {
  0% { transform: translateY(0); }
  100% { transform: translateY(110vh); }
}`;
document.head.appendChild(style);

window.onload = () => {
  setTimeout(() => {
    document.getElementById('progress').style.width = '100%';
    setTimeout(() => {
      document.getElementById('loader').style.display = 'none';
    }, 500);
  }, 500);

  const products = [
    {
      name: "Kukull e butë me kapuç rozë",
      price: "18€",
      image: "https://example.com/kukull1.jpg"
    },
    {
      name: "Kukull tradicionale me shall",
      price: "20€",
      image: "https://example.com/kukull2.jpg"
    },
    {
      name: "Batanije me buqetë trëndafilash 
Madhësia: 65 cm",
      price: "100€",
      image:"https://i.imgur.com/VsNj1up.jpeg"
    },
    {
      name: "Set kukull + çantë mini",
      price: "25€",
      image: "https://example.com/kukull4.jpg"
    },
    {
      name: "Kukull me kapuç blu",
      price: "18€",
      image: "https://example.com/kukull5.jpg"
    },
    {
      name: "Kukull për fëmijë",
      price: "17€",
      image: "https://example.com/kukull6.jpg"
    },
    {
      name: "Kukull me shall të leshtë",
      price: "22€",
      image: "https://example.com/kukull7.jpg"
    },
    {
      name: "Kukull klasike handmade",
      price: "20€",
      image: "https://example.com/kukull8.jpg"
    },
    {
      name: "Kukull me fustan vjollcë",
      price: "19€",
      image: "https://example.com/kukull9.jpg"
    },
    {
      name: "Kukull me kapele dimri",
      price: "21€",
      image: "https://example.com/kukull10.jpg"
    },
    {
      name: "Kukull me përparëse kuzhine",
      price: "24€",
      image: "https://example.com/kukull11.jpg"
    },
    {
      name: "Kukull me kapuç të thurur",
      price: "22€",
      image: "https://example.com/kukull12.jpg"
    },
    {
      name: "Kukull me fustan me pika",
      price: "20€",
      image: "https://example.com/kukull13.jpg"
    },
    {
      name: "Kukull me fustan pastel",
      price: "18€",
      image: "https://example.com/kukull14.jpg"
    },
    {
      name: "Kukull me shall me ngjyra",
      price: "23€",
      image: "https://example.com/kukull15.jpg"
    }
  ];

  const grid = products.map(p => `
    <div class="product">
      <img src="${p.image}" alt="${p.name}">
      <p>${p.name}</p>
      <p>${p.price}</p>
      <button onclick="orderNow()" data-i18n="order_now">POROSIT TANI</button>
    </div>
  `);

  document.querySelector('.product-grid').innerHTML = grid.join('');
}
