import './App.css';
import Card from "./components/Card"

const App = () => {

  const cards = [
    {
      img: "https://d3caycb064h6u1.cloudfront.net/wp-content/uploads/2021/06/Machine_Learning.jpg",
      name: "AI & Machine Learning Courses",
      desc: "Join hands-on workshops to learn the latest in AI and Machine Learning.",
      url: "https://www.coursera.org/search?query=machine+learning&language=English"
    },
    {
      img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Virtual_Reality_1.jpg",
      name: "Virtual Reality (VR) Demos",
      desc: "Explore immersive experiences with our cutting-edge VR demos.",
      url: "https://www.oculus.com/experiences/"
    },
    {
      img: "https://d226lax1qjow5r.cloudfront.net/blog/blogposts/the-ultimate-list-of-ideas-for-your-next-hackathon/hackathon_1200x600.png",
      name: "Hackathon",
      desc: "Collaborate with like-minded innovators to solve real-world social issues using technology.",
      url: "https://devpost.com/hackathons"
    },
    {
      img: "https://www.dice.com/binaries/content/gallery/dice/insights/2019/01/Bootcamp-MOOC-Learning-Tech-Coding-Programming-Dice-1024x640.png",
      name: "Coding Bootcamps",
      desc: "Sharpen your coding skills with Python, JavaScript, and more.",
      url: "https://www.forbes.com/advisor/education/bootcamps/best-coding-bootcamps/"
    },
    {
      img: "https://i0.wp.com/bizsystemsnews.com/wp-content/uploads/2022/04/How_To_Get_A_Tech_Internship.png?fit=1920%2C1080&ssl=1",
      name: "Tech Internships list",
      desc: "Find and apply to top tech internships. Stay ahead by exploring opportunities from leading companies in software development, data science, AI, and more.",
      url: "https://github.com/SimplifyJobs/Summer2025-Internships"
    },
    {
      img: "https://online.stanford.edu/sites/default/files/inline-images/1600X900-How-does-blockchain-work.jpg",
      name: "Blockchain and Cryptocurrencies Explained",
      desc: "Demystify blockchain technology and its applications in various industries.",
      url: "https://academy.binance.com/en/start-here"
    },
    {
      img: "https://media.licdn.com/dms/image/D5612AQGMYqeKqZ20gg/article-cover_image-shrink_720_1280/0/1708119263982?e=2147483647&v=beta&t=Y7v-0Rn3RdEiw_digyiJZH-huZaX3vbvCVZqk6JTdhI",
      name: "Women in Tech Meetups",
      desc: "Connect and collaborate with inspiring women in technology.",
      url: "https://women-in-tech.org/"
    },
    {
      img: "https://www.theforage.com/blog/wp-content/uploads/2022/12/what-is-cybersecurity.jpg",
      name: "Cybersecurity Awareness Webinar",
      desc: "Learn how to protect your systems and data from cyber threats.",
      url: "https://www.cybrary.it/catalog/cyber-security-courses/"
    },
    {
      img: "https://media.licdn.com/dms/image/v2/C4D1BAQH4cbimZMdE8g/company-background_10000/company-background_10000/0/1583765437545/open_source_initiative_osi__cover?e=2147483647&v=beta&t=GAXQDGvnKdVld_KmvMMWu_PdoXGG6kkOYgKA1J7ftgY",
      name: "Open Source",
      desc: "Contribute to open source projects and collaborate with other developers globally.",
      url: "https://opensource.guide/how-to-contribute/"
    },
    {
      img: "https://cdn.sanity.io/images/tlr8oxjg/production/5d89f75fb4e6732aef0fdbe99d2215b2f456368a-1456x816.png?w=3840&q=100&fit=clip&auto=format",
      name: "Startups",
      desc: "Stay ahead with the latest trends in the startup ecosystem and entrepreneurial success stories.",
      url: "https://www.ycombinator.com/"
    }
  ];

  return (
    <div className="App">
    <div className="header">
      <h1>Tech Innovator's Hub</h1>
      <h2>Where innovation meets opportunity</h2>
    </div>
    <div className = "container">
    {cards.map((card, index) => (
        <Card key={index} img={card.img} name={card.name} desc={card.desc} url={card.url} />
      ))}
    
    </div>

      
    </div>
  )
}

export default App