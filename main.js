const creatures = [
  {
    name: "Abyssal Wyrm",
    img: "abyssal-wyrm.jpg",
    lore: "Guardian of the Lost Seas, lurking in the abyssal caverns beneath Mystovia. Its glowing aquatic scales and massive wings shimmer with bioluminescent power.",
    license: "Art by DALL·E – License Placeholder"
  },
  {
    name: "Fire Phoenix",
    img: "fire-phoenix.jpg",
    lore: "Reborn from golden embers, the Fire Phoenix illuminates Mystovia’s skies with a trail of incandescent feathers.",
    license: "Art by DALL·E – License Placeholder"
  },
  {
    name: "Moon Dragon",
    img: "moon-dragon.jpg",
    lore: "Soaring beneath twin moons, the Moon Dragon glides silently, its silver scales catching ethereal light.",
    license: "Art by DALL·E – License Placeholder"
  }
];

function showCreatureOfDay() {
  if(!document.getElementById('creature-img')) return;
  const idx = new Date().getDate() % creatures.length;
  const creature = creatures[idx];
  document.getElementById('creature-img').src = creature.img;
  document.getElementById('creature-name').textContent = creature.name;
  document.getElementById('creature-lore').textContent = creature.lore;
}

document.addEventListener('DOMContentLoaded', () => {
  showCreatureOfDay();
  const summonBtn = document.getElementById('summon-btn');
  if (summonBtn) {
    summonBtn.addEventListener('click', function() {
      const idx = Math.floor(Math.random() * creatures.length);
      const c = creatures[idx];
      document.getElementById('creature-output').innerHTML = `
        <div class="creature-card glass-card pop-in">
          <img src="${c.img}" alt="${c.name}">
          <h3 class="glow-1">${c.name}</h3>
          <p>${c.lore}</p>
          <p class="attribution">${c.license}</p>
        </div>
      `;
    });
  }
});
