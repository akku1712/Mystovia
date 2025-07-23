const creatures = [
  {
    name: "Abyssal Wyrm",
    img: "abyssal-wyrm.jpg",
    type: "Dragon/Guardian",
    habitat: "Sunken Caves, Lost Seas of Mystovia",
    lore: "Born from the convergence of ancient tides and cosmic magic, the Abyssal Wyrm watches over the submerged world beneath Mystovia. Its massive wings gently stir ocean currents, while its scaled hide casts rippling blue-green light across the abyss.",
    abilities: [
      "Bioluminescent scales for deep-sea illumination",
      "Can manipulate water pressure and form protective barriers",
      "Mystic roar causes seismic tremors beneath the sea floor"
    ],
    trivia: "When the moon is full, the Wyrm's eyes glow with memories of lost civilizations.",
    license: "Art by DALL·E – License Placeholder"
  },
  {
    name: "Fire Phoenix",
    img: "fire-phoenix.jpg",
    type: "Elemental Bird",
    habitat: "Volcanic Peaks, Ember Valleys",
    lore: "A mystical avian woven from pure flame, the Fire Phoenix arises from embers at dawn. Its wings ignite the sky and renew the land with every migration.",
    abilities: [
      "Resurrects from ashes once per century",
      "Feathers shed healing sparks onto scorched earth",
      "Calls forth firestorms during battle"
    ],
    trivia: "The Phoenix's song is said to heal the hearts of those who hear it before sunrise.",
    license: "Art by DALL·E – License Placeholder"
  },
  {
    name: "Moon Dragon",
    img: "moon-dragon.jpg",
    type: "Ethereal Dragon",
    habitat: "Floating amidst the Twin Moons and Starfields",
    lore: "Dreamlike and rarely glimpsed, the Moon Dragon rides starlit winds high above Mystovia. Its silvery scales catch and refract the glow of twin moons, guiding lost souls at night.",
    abilities: [
      "Can become partially invisible under moonlight",
      "Breathes shimmering mist that reveals truth and dispels illusions",
      "Communicates through constellations in the night sky"
    ],
    trivia: "Legends claim a single silver scale can guide travelers home, no matter how lost.",
    license: "Art by DALL·E – License Placeholder"
  }
];

function showCreatureOfDay() {
  if(!document.getElementById('creature-img')) return;
  const idx = new Date().getDate() % creatures.length;
  const c = creatures[idx];
  document.getElementById('creature-img').src = c.img;
  const nameEl = document.getElementById('creature-name');
  if (nameEl) nameEl.textContent = c.name;
  const typeEl = document.getElementById('creature-type');
  if (typeEl) typeEl.textContent = c.type;
  const habitatEl = document.getElementById('creature-habitat');
  if (habitatEl) habitatEl.textContent = c.habitat;
  const loreEl = document.getElementById('creature-lore');
  if (loreEl) loreEl.textContent = c.lore;
  const abilitiesEl = document.getElementById('creature-abilities');
  if (abilitiesEl) abilitiesEl.innerHTML = c.abilities.map(ab => `<li>${ab}</li>`).join('');
  const triviaEl = document.getElementById('creature-trivia');
  if (triviaEl) triviaEl.textContent = c.trivia;
}

document.addEventListener('DOMContentLoaded', () => {
  showCreatureOfDay();
  const summonBtn = document.getElementById('summon-btn');
  if (summonBtn) {
    summonBtn.addEventListener('click', function() {
      const idx = Math.floor(Math.random() * creatures.length);
      const c = creatures[idx];
      document.getElementById('creature-output').innerHTML = `
        <div class="creature-card glass-card">
          <img src="${c.img}" alt="${c.name}">
          <h3 class="glow-1">${c.name}</h3>
          <p><strong>Type:</strong> ${c.type}</p>
          <p><strong>Habitat:</strong> ${c.habitat}</p>
          <p><strong>Lore:</strong> ${c.lore}</p>
          <p><strong>Abilities:</strong></p>
          <ul class="abilities-list">${c.abilities.map(abi => `<li>${abi}</li>`).join('')}</ul>
          <p><strong>Trivia:</strong> ${c.trivia}</p>
          <p class="attribution">${c.license}</p>
        </div>
      `;
    });
  }

  // Footer music toggle
  const btn = document.getElementById('footer-music-btn');
  if(btn) {
    let isOn = false;
    btn.addEventListener('click', () => {
      isOn = !isOn;
      btn.textContent = isOn ? "🔊 Ambience On" : "🎵 Fantasy Ambience";
      btn.style.background = isOn ? "linear-gradient(90deg,#baedfc,#fdf6d5)" : "";
    });
  }
});
