const allMembersContainer = document.querySelector("#allMembersContainer");

const members = [
    {
        classFilter: 'masters',
        photoPath: 'HimanshuDagar.jpg',
        link: 'https://himanshudagar.com/',
        name: 'Himanshu Dagar',
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
        photoPath: "OlofPersson.jpeg",
        link: "http://linkedin.com/in/larsolof-persson",
        name: "Olof Persson",
        title: "Undergraduate Student"
    },
    {
        classFilter: "undergrad",
        photoPath: "OmarElkhafif.jpg",
        link: "www.linkedin.com/in/omar-elkhafif-3bbbb2274",
        name: "Omar Elkhafif",
        title: "Undergraduate Student"
    },
         {
        classFilter: "undergrad",
        photoPath: "JocelynMo.png",
        link: "members.html",
        name: "Jocelyn Mo",
        title: "Undergraduate Student"
    },
     {
        classFilter: "undergrad",
        photoPath: "JamesGrant.png",
        link: "https://www.linkedin.com/in/james-grant-3720932a9/",
        name: "James Grant",
        title: "Undergraduate Student"
    },
     {
        classFilter: "undergrad",
        photoPath: "SaikarthikMummadisingu.png",
        link: "https://www.linkedin.com/in/saikarthik-m/",
        name: "Saikarthik Mummadisingu",
        title: "Undergraduate Student"
    },
       {
        classFilter: "undergrad",
        photoPath: "BowenJiang.png",
        link: "https://www.linkedin.com/in/bowen-jiang-099791251/",
        name: "Bowen Jiang",
        title: "Undergraduate Student"
    },
        {
        classFilter: "undergrad",
        photoPath: "DylanFaulhaber.png",
        link: "https://www.linkedin.com/in/dylan-faulhaber-ab0282283/",
        name: "Dylan Faulhaber",
        title: "Undergraduate Student"
    },
         {
        classFilter: "undergrad",
        photoPath: "SarahKorczukowski.jpeg",
        link: "https://www.linkedin.com/in/sarah-korczukowski-530b97206/",
        name: "Sarah Korczukowski",
        title: "Undergraduate Student"
    },
         {
        classFilter: "undergrad",
        photoPath: "KensaySato.jpg",
        link: "https://www.linkedin.com/in/kensay-sato/",
        name: "Kensay Sato",
        title: "Undergraduate Student"
    },

 
];

allMembersContainer.innerHTML = members.map(member =>
    `
      <div class="members ${member.classFilter}">
        <img class="memberImage" alt="${member.name} photo" src="./img/members/${member.photoPath || "not_available.jpg"} " style="width:230px; height:220px;">
        <h4><a href="${member.link || 'https://sail.cs.queensu.ca/members.html'}">${member.name}</a></h4>
        <h5><strong>${member.title}</strong></h5>
      </div>
    `
).join('');