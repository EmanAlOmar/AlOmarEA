const allMembersContainer = document.querySelector("#allMembersContainer");

const members = [{
        classFilter: 'profs-postdocs',
        photoPath: 'EmanAlOmar.png',
        link: 'https://scholar.google.com/citations?user=aZJysCwAAAAJ&hl=en',
        name: 'Eman Abdullah AlOmar',
        title: 'Assistant Professor'
    },
    {
        classFilter: 'masters',
        photoPath: 'SohamManishMehta.jpeg',
        link: 'www.linkedin.com/in/mehtasoham214/',
        name: 'Soham Manish Mehta',
        title: 'Master`s Student'
    },
    {
        classFilter: 'undergrad',
        photoPath: 'LaurenKibalo.jpg',
        link: 'https://www.linkedin.com/in/lauren-kibalo-56542a234/',
        name: 'Lauren Kibalo',
        title: 'Undergraduate Student'
    },
    {
        classFilter: "undergrad",
        photoPath: "BenjaminKnobloch.jpg",
        link: 'https://www.linkedin.com/in/benjamin-knobloch-890660210/',
        name: "Benjamin Knobloch",
        title: "Undergraduate Student"
    },
    {
        classFilter: "undergrad",
        photoPath: "DrewCarranti.jpg",
        link: 'https://www.linkedin.com/in/andrewcarranti/',
        name: "Drew Carranti",
        title: "Undergraduate Student"
    },
    {
        classFilter: "undergrad",
        photoPath: "KateMoss.png",
        link: 'https://www.linkedin.com/in/kate-moss-92b099254',
        name: "Kate Moss",
        title: "Undergraduate Student"
    },
    {
        classFilter: "undergrad",
        photoPath: "ChiaraHenselder.jpg",
        link: 'www.linkedin.com/in/chiara-henselder-4478b3227',
        name: "Chiara Henselder",
        title: "Undergraduate Student"
    },
    {
        classFilter: "undergrad",
        photoPath: "ChristopherKalish.jpg",
        link: 'https://www.linkedin.com/in/christopher-kalish-b85950224/',
        name: "Christopher Kalish",
        title: "Undergraduate Student"
    },
    {
        classFilter: "undergrad",
        photoPath: "KaylaDePalma.jpg",
        link: 'www.linkedin.com/in/kayla-depalma-ab76b7272',
        name: "Kayla DePalma",
        title: "Undergraduate Student"
    },
    {
        classFilter: "undergrad",
        photoPath: "ThomasKain.jpg",
        link: 'members.html',
        name: "Thomas Kain",
        title: "Undergraduate Student"
    },
    {
        classFilter: "undergrad",
        photoPath: "IzabelMiminoshvili.jpg",
        link: "www.linkedin.com/in/izabelmiminoshvili",
        name: "Izabel Miminoshvili",
        title: "Undergraduate Student"
    },
    {
        classFilter: "undergrad",
        photoPath: "JonathanMemoli.jpg",
        link: "www.linkedin.com/in/jonathan-memoli-a6a207251",
        name: "Jonathan Memoli",
        title: "Undergraduate Student"
    },
    {
        classFilter: "undergrad",
        photoPath: "JosephWeimer.png",
        link: "linkedin.com/in/joseph-weimer-b32727259/",
        name: "Joseph Weimer",
        title: "Undergraduate Student"
    },
    {
        classFilter: "undergrad",
        photoPath: "ChristianTemplin.png",
        link: "https://www.linkedin.com/in/christian-templin-3087b7251/",
        name: "Christian Templin",
        title: "Undergraduate Student"
    },
    {
        classFilter: "undergrad",
        photoPath: "OmarElkhafif.jpg",
        link: "www.linkedin.com/in/omar-elkhafif-3bbbb2274",
        name: "Omar Elkhafif",
        title: "Undergraduate Student"
    },
 
];

allMembersContainer.innerHTML = members.map(member =>
    `
      <div class="members ${member.classFilter}">
        <!--<img class="memberImage" alt="${member.name} photo" src="./img/members/${member.photoPath || "not_available.jpg"} " style="width:230px; height:220px;">-->
         <img class="memberImage" alt="${member.name} photo" src="../_pages/img/members/${member.photoPath || "not_available.jpg"} "  style="width:230px; height:220px;">
        <h4><a href="${member.link || 'https://sail.cs.queensu.ca/members.html'}">${member.name}</a></h4>
        <h5><strong>${member.title}</strong></h5>
      </div>
    `
).join('');