export default class DevCardManager {
  constructor(filepath) {
    this.filepath = filepath;
  }

  async readFile() {
    let res = await fetch("devData.json");
    const data = await res.json();

    return data;
  }

  async displayAllDevs() {
    let data = await this.readFile();

    data.map((card) => {
      let col = document.createElement("div");
      col.classList.add("col");
      // card
      let divCard = document.createElement("div");
      divCard.classList.add("card");

      let cardHeader = document.createElement("div");
      cardHeader.classList.add("card-header");
      cardHeader.style.background = `url(${card.pictureUrl})`;
      cardHeader.style.backgroundRepeat = `no-repeat`;
      cardHeader.style.backgroundPosition = `center`;
      cardHeader.style.width = `100%`;
      cardHeader.style.height = `40%`;
      cardHeader.style.position = "relative";

      let cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      let gradientDiv = document.createElement("div");
      gradientDiv.classList.add("gradient");

      // card info

      let name = document.createElement("h4");
      name.textContent = card.username;

      let activeStatus = document.createElement("p");
      activeStatus.classList.add("status-badge");
      activeStatus.innerHTML = card.isActive
        ? `<span class='active-dot'></span> Active`
        : `<span class='not-active-dot'></span> Not Active`;

      let devId = document.createElement("span");
      devId.id = "dev-id";
      devId.textContent = card.devID;

      let email = document.createElement("p");
      email.innerHTML = `<b>Email</b>: ${card.email}`;

      let phone = document.createElement("p");
      phone.innerHTML = `<b>Phone</b>: ${card.phone}`;

      let yearsExperience = document.createElement("p");
      yearsExperience.innerHTML = `<b>yearsExperience</b>: ${card.yearsExperience} Years`;

      // skills
      let skillsDiv = document.createElement("div");
      skillsDiv.classList.add("skills-list");

      let java = document.createElement("span");
      java.classList.add("badge");
      java.classList.add("secondary");

      let aws = document.createElement("span");
      aws.classList.add("badge");
      aws.classList.add("secondary");

      let spring = document.createElement("span");
      spring.classList.add("badge");
      spring.classList.add("secondary");

      java.textContent = card.skills[0];
      aws.textContent = card.skills[1];
      spring.textContent = card.skills[2];

      // bio
      let bio = document.createElement("p");
      bio.classList.add("bio");
      bio.innerHTML = card.bio;
      let bioIndex = 0;

      // add elements
      skillsDiv.append(java, aws, spring);
      cardHeader.append(devId, gradientDiv);
      cardBody.append(
        name,
        activeStatus,
        bio,
        email,
        phone,
        yearsExperience,
        skillsDiv
      );
      divCard.append(cardHeader, cardBody);
      col.append(divCard);
      root.append(col);
    });
  }
}
