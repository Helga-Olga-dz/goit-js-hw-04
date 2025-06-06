const profile = {
  username: "Jacob",
  playTime: 300,

  changeUsername(newName) {
    this.username = newName; // Оновлюємо ім'я профілю
  },

  updatePlayTime(hours) {
    this.playTime += hours; // Додаємо години до загального часу гри
  },

  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`; // Формуємо рядок з інформацією
  },
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"