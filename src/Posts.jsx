const Posts = [
  {
    id: 1,
    userName: "anchaltyagi",
    caption: "Ditch the laptop, let's go trekking. 💻🚀",
    media: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    date: "a week ago",
  },
  {
    id: 2,
    userName: "anchaltyagi",
    caption: "My newwww laptoppppppppp!! 🔍🐞",
    media: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    date: "3 August",
  },
  {
    id: 3,
    userName: "anchaltyagi",
    caption:
      "Who made the concept of work to eat????? Shouldn't it be free? ☕️❤️",
    media:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfDJ8MHx8fDA%3D&auto=format&fit=crop&q=60&w=700",
    date: "21 January",
  },

  {
    id: 4,
    userName: "rohan.sharma",
    caption:
      "Artist, but I'm out here punching keys on my keyboard (sigh) ✨🎨",
    media:
      "https://images.unsplash.com/photo-1759658865846-1626777be887?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBhaW50ZXJ8ZW58MHwyfDB8fHww&auto=format&fit=crop&q=60&w=700",
    date: "2 days ago",
  },
  {
    id: 5,
    userName: "rohan.sharma",
    caption: "Pixel perfect every time 🎯",
    media:
      "https://images.unsplash.com/photo-1736438615469-5b27a6243975?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWlycm9yJTIwc2VsZmllfGVufDB8MnwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=700",
    date: "4 weeks ago",
  },
  {
    id: 6,
    userName: "rohan.sharma",
    caption:
      "How the hell am I broke every month end, even when I earn 6 figures?!?!",
    media:
      "https://images.unsplash.com/photo-1618109217070-e58df709bd3b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWlycm9yJTIwc2VsZmllfGVufDB8MnwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=700",
    date: "28 May",
  },

  {
    id: 7,
    userName: "sneha.kapoor",
    caption: "Kinda rocking the silver fox look 💖🖌️",
    media:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=700&q=60",
    date: "2 hours ago",
  },
  {
    id: 8,
    userName: "sneha.kapoor",
    caption:
      "We can roam around the world but no, some guy decided we should press keys all day. Ugh. 😤",
    media:
      "https://images.unsplash.com/photo-1723871568860-1321b7790263?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXJjaGl0ZWN0dXJlJTIwYW5jaWVudHxlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&q=60&w=700",
    date: "15 June",
  },
  {
    id: 9,
    userName: "sneha.kapoor",
    caption: "My baby is learning to skate! 🚀",
    media:
      "https://images.unsplash.com/photo-1655009316723-e4af5fe7afe1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2lkcyUyMHBsYXlpbmd8ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=700",
    date: "6 September 2024",
  },

  {
    id: 10,
    userName: "aditya_verma",
    caption: "Magic season is here ✨",
    media:
      "https://images.unsplash.com/photo-1544397838-37a35169ebf0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hyaXN0bWFzJTIwaG91c2V8ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=700",
    date: "6 hours ago",
  },
  {
    id: 11,
    userName: "aditya_verma",
    caption: "Everyone quick! Look at my fiance's hand 💍😊",
    media:
      "https://images.unsplash.com/photo-1574708006681-2f4a32f2b3a1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGVuZ2FnZWR8ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=700",
    date: "11 November",
  },
  {
    id: 12,
    userName: "aditya_verma",
    caption: "💖",
    media:
      "https://images.unsplash.com/photo-1627357898406-d81b302da9e9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJvbWFudGljfGVufDB8MnwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=700",
    date: "2 March",
  },

  {
    id: 13,
    userName: "priya_singh",
    caption: "Algorithm fun! 🤓📊",
    media:
      "https://plus.unsplash.com/premium_photo-1664298515793-1451ed489d95?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGlnZXJzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=700",
    date: "11 November",
  },
  {
    id: 14,
    userName: "priya_singh",
    caption: "Coding problems solved ✔️🔥",
    media:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJlY2tpbmd8ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=700",
    date: "3 October",
  },
  {
    id: 15,
    userName: "priya_singh",
    caption: "I wish you all could see it live...",
    media:
      "https://images.unsplash.com/photo-1610159959853-3288fba3eef6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c25vd2ZhbGx8ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=700",
    date: "12 February",
  },

  {
    id: 16,
    userName: "karanmehta",
    caption: "Data exploring mode on 📊🔍",
    media:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=700&q=60",
    date: "15 June 2025",
  },
  {
    id: 17,
    userName: "karanmehta",
    caption: "Models in production! 🤖🚀",
    media: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    date: "4 August 2023",
  },
  {
    id: 18,
    userName: "karanmehta",
    caption: "Man! I love space ✨🤖",
    media: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
    date: "28 October 2021",
  },

  {
    id: 19,
    userName: "anjalijoshi",
    caption: "Project on track ✅💼",
    media:
      "https://images.unsplash.com/photo-1520121401995-928cd50d4e27?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhdmVzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=700",
    date: "2 days ago",
  },
  {
    id: 20,
    userName: "anjalijoshi",
    caption: "Patience really do pay out 🩷🌸",
    media:
      "https://images.unsplash.com/photo-1455582916367-25f75bfc6710?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zmxvd2VyfGVufDB8MnwwfHx8Mg%3D%3D&auto=format&fit=crop&q=60&w=700",
    date: "20 November",
  },
  {
    id: 21,
    userName: "anjalijoshi",
    caption: "Weekends me with my girls... 🏇",
    media:
      "https://images.unsplash.com/photo-1692981226516-f76bcc8945b3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2lsZCUyMGFuaW1hbHN8ZW58MHwwfDB8fHww&auto=format&fit=crop&q=60&w=700",
    date: "13 November",
  },

  {
    id: 22,
    userName: "siddharth.m",
    caption: "Automate all the things! 🤖⚙️",
    media:
      "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=700&q=60",
    date: "1 January 2024",
  },
  {
    id: 23,
    userName: "siddharth.m",
    caption: "My wife says I should stop 💻",
    media:
      "https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8MnwwfHx8Mg%3D%3D&auto=format&fit=crop&q=60&w=700",
    date: "4 September 2020",
  },
  {
    id: 24,
    userName: "siddharth.m",
    caption: "Bussiness trips are the only trips🚦",
    media:
      "https://images.unsplash.com/photo-1583330357508-1864f8e57785?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFpcnBvcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=700",
    date: "5 May 2018",
  },

  {
    id: 25,
    userName: "nishapatel",
    caption: "Look what I found! A BUGGGG!🐛🔍",
    media:
      "https://images.unsplash.com/photo-1619532474053-e9de8d7d4046?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVnc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=700",
    date: "6 hours ago",
  },
  {
    id: 26,
    userName: "nishapatel",
    caption: "Quality matters! ✅🎯",
    media: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    date: "15 May",
  },
  {
    id: 27,
    userName: "nishapatel",
    caption: "Testing all the things 🔎🧪",
    media: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    date: "4 April",
  },

  {
    id: 28,
    userName: "vikram.chauhan",
    caption: "If you can spot the Big Ben or not, it has already spotted you.",
    media:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZG9ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=700",
    date: "6 days ago",
  },
  {
    id: 29,
    userName: "vikram.chauhan",
    caption: "Are you following me, Mr B?",
    media:
      "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=700&q=60",
    date: "2 weeks ago",
  },
  {
    id: 30,
    userName: "vikram.chauhan",
    caption: "Mr Ben is everywhere",
    media:
      "https://images.unsplash.com/photo-1494922275507-58dc039ed337?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxvbmRvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=700",
    date: "23 March",
  },
];

export default Posts;
