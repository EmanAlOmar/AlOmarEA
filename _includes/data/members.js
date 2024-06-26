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
         {
        classFilter: "undergrad",
        photoPath: "NeelKulkarni.jpg",
        link: "www.linkedin.com/in/neel-kulkarni-",
        name: "Neel Kulkarni",
        title: "Undergraduate Student"
    },
         {
        classFilter: "undergrad",
        photoPath: "AnnanyaJain.JPG",
        link: "https://www.linkedin.com/in/jain-annanya/",
        name: "Annanya Jain",
        title: "Undergraduate Student"
    },
         {
        classFilter: "undergrad",
        photoPath: "DanicaChakroborty.jpg",
        link: "https://www.linkedin.com/in/danica-chakroborty-3512a2215/",
        name: "Danica Chakroborty",
        title: "Undergraduate Student"
    },
         {
        classFilter: "undergrad",
        photoPath: "JackyLei.jpg",
        link: "members.html",
        name: "Jacky Lei",
        title: "Undergraduate Student"
    },
         {
        classFilter: "undergrad",
        photoPath: "CatherineDeMario.jpg",
        link: "https://www.linkedin.com/in/catherine-demario",
        name: "Catherine DeMario",
        title: "Undergraduate Student"
    },
        {
        classFilter: "undergrad",
        photoPath: "KarinaBerberian.JPG",
        link: "https://www.linkedin.com/in/karina-berberian-3914a221a/",
        name: "Karina Berberian",
        title: "Undergraduate Student"
    },
      {
        classFilter: "undergrad",
        photoPath: "CindyTran.jpg",
        link: "https://www.linkedin.com/in/cindy-tran-b1377a180/",
        name: "Cindy Tran",
        title: "Undergraduate Student"
    },
     {
        classFilter: "undergrad",
        photoPath: "BrandonKreiser.jpg",
        link: "https://www.linkedin.com/in/brandon-kreiser/",
        name: "Brandon Kreiser",
        title: "Undergraduate Student"
    },
     {
        classFilter: "undergrad",
        photoPath: "RogerShagawat.jpeg",
        link: "https://www.linkedin.com/in/roger-shagawat/",
        name: "Roger Shagawat",
        title: "Undergraduate Student"
    },
     {
        classFilter: "undergrad",
        photoPath: "SuneedhiLaddha.png",
        link: " https://www.linkedin.com/in/suneedhi-laddha/",
        name: "Suneedhi Laddha",
        title: "Undergraduate Student"
    },
        {

        classFilter: "undergrad",
        photoPath: "DimitriosHaralampopoulos.jpeg",
        link: "https://www.linkedin.com/in/dimitrios-haralampopoulos-5ab928270?trk=contact-info",
        name: "Dimitrios Haralampopoulos",
        title: "Undergraduate Student"
    },
         {
        classFilter: "undergrad",
        photoPath: "MarkFalletta.jpg",
        link: "https://www.linkedin.com/in/mark-falletta/",
        name: "Mark Falletta",
        title: "Undergraduate Student"
    },
        {
        classFilter: "undergrad",
        photoPath: "RobertFeliciano.jpg",
        link: "https://www.linkedin.com/in/feliciano-robert/",
        name: "Robert Feliciano",
        title: "Undergraduate Student"
    },
        {
        classFilter: "undergrad",
        photoPath: "MatthewAngelakos.jpg",
        link: "LinkedIn: www.linkedin.com/in/matthew-angelakos",
        name: "Matthew Angelakos",
        title: "Undergraduate Student"
    },
    {
        classFilter: "undergrad",
        photoPath: "JacobAshkenas.png",
        link: "https://www.linkedin.com/in/jacob-ashkenas/",
        name: "Jacob Ashkenas",
        title: "Undergraduate Student"
    },
    {
        classFilter: "undergrad",
        photoPath: "CavinGada.png",
        link: "https://www.linkedin.com/in/cavingada/",
        name: "Cavin Gada",
        title: "Undergraduate Student"
    },
       {
        classFilter: "undergrad",
        photoPath: "DanielCraig.jpg",
        link: "https://www.linkedin.com/in/daniel-craig-395085210/",
        name: "Daniel Craig",
        title: "Undergraduate Student"
    },
       {
        classFilter: "undergrad",
        photoPath: "StevenTruong.jpg",
        link: "https://www.linkedin.com/in/steven-truong-226576202",
        name: "Steven Truong",
        title: "Undergraduate Student"
    },
   {
        classFilter: "undergrad",
        photoPath: "AngeloNicosia.jpg",
        link: "https://stevens.joinhandshake.com/stu/users/28007144",
        name: "Angelo Nicosia",
        title: "Undergraduate Student"
    },
   {
        classFilter: "undergrad",
        photoPath: "MatthewOyales.jpeg",
        link: "https://www.linkedin.com/in/mattoyales",
        name: "Matthew Oyales",
        title: "Undergraduate Student"
    },
   {
        classFilter: "undergrad",
        photoPath: "ConnorPhillips.jpg",
        link: "https://www.linkedin.com/in/connor-phillips-b29158265/",
        name: "Connor Phillips",
        title: "Undergraduate Student"
    },
   {
        classFilter: "undergrad",
        photoPath: "RudolphSedlin.jpg",
        link: "https://www.linkedin.com/in/rudolph-sedlin",
        name: "Rudolph Sedlin",
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