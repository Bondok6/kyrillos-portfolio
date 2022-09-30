import tasteFoodImg from '../assets/images/projects/taste-food.PNG';
import tasteFoodImg2 from '../assets/images/projects/taste-food-2.PNG';
import youtubeImg from '../assets/images/projects/youtube.PNG';
import youtubeImg2 from '../assets/images/projects/youtube-2.PNG';
import reservifyImg from '../assets/images/projects/reservify.PNG';
import reservifyImg2 from '../assets/images/projects/reservify-2.PNG';
import natoursImg from '../assets/images/projects/natours.PNG';
import natoursImg2 from '../assets/images/projects/natours-2.PNG';
import greenTravelImg from '../assets/images/projects/green-travel.PNG';
import greenTravelImg2 from '../assets/images/projects/green-travel-2.PNG';
import nextTodoImg from '../assets/images/projects/nextTodoImg.PNG';
import nextTodoImg2 from '../assets/images/projects/nextTodoImg2.PNG';
import todoListJsImg from '../assets/images/projects/todo-list.PNG';
import todoListJsImg2 from '../assets/images/projects/todo-list-2.PNG';
import pigGameImg from '../assets/images/projects/pigGame.PNG';
import spaceTravelImg from '../assets/images/projects/space-travelers.PNG';
import spaceTravelImg2 from '../assets/images/projects/space-travelers-2.PNG';
import mathMagiciansImg from '../assets/images/projects/math-magicians.PNG';
import mathMagiciansImg2 from '../assets/images/projects/math-magicians-2.PNG';
import qualbyImg from '../assets/images/projects/qualby.PNG';
import qualbyImg2 from '../assets/images/projects/qualby-2.PNG';
import bankistImg from '../assets/images/projects/Bankist.PNG';
import bankistImg2 from '../assets/images/projects/Bankist-2.PNG';
import maptyImg from '../assets/images/projects/mapty-app.PNG';
import maptyImg1 from '../assets/images/projects/mapty-app-1.PNG';
import expenseTrackerImg from '../assets/images/projects/expense-tracker-1.PNG';
import trilloImg from '../assets/images/projects/trillo.PNG';

// import leaderboardImg from '../assets/images/projects/Leaderboard.PNG';
// import awesomeBooksImg from '../assets/images/projects/awesome-books.PNG';
// import countriesImg from '../assets/images/projects/countries.PNG';
// import zenvaImg from '../assets/images/projects/zenva.png';
// import guessGameImg from '../assets/images/projects/guessGame.PNG';

const projects = [
  {
    img: [tasteFoodImg, tasteFoodImg2],
    title: 'Taste Food',
    description:
      'Taste food is a web application based on an external food API, showing data about foods and we used Used involvement API to record the different user interactions (likes, comments).',
    live: 'https://bondok6.github.io/Taste-Food/',
    github: 'https://github.com/Bondok6/taste-food/',
    tech: ['HTML', 'CSS', 'JavaScript', 'Jest', 'Webpack5', 'API', 'gh-pages'],
  },
  {
    img: [youtubeImg, youtubeImg2],
    title: 'Youtube Clone',
    description:
      'Built a Youtube Clone Application with React.js, Redux-Toolkit, Material UI 5 and Youtube V3 RapidAPI.',
    live: 'https://youtube-clone-eq1v2izqx-bondok6.vercel.app/',
    github: 'https://github.com/Bondok6/youtube-clone',
    tech: ['React.js', 'Redux-Toolkit', 'MUIv5', 'RapidAPI', 'Vercel'],
  },
  {
    img: [reservifyImg, reservifyImg2],
    title: 'Reservify',
    description:
      'Hotel booking app displays all current hotels and details of each hotel allowing user to book the hotel they want and allows administrator to add and delete their hotels.',
    live: 'https://reservify.netlify.app/login',
    github: 'https://github.com/Bondok6/Reservify',
    tech: [
      'Ruby on Rails',
      'PostgreSQL',
      'React.js',
      'Redux-Toolkit',
      'Jest',
      'Rspec',
      'CSS-Modules',
      'Netlify',
    ],
  },
  {
    img: [natoursImg, natoursImg2],
    title: 'Natours',
    live: 'https://bondok6.github.io/Natours/',
    github: 'https://github.com/Bondok6/Natours',
    description:
      'Natours is a website about nature tours, Built with pure SCSS to practice the latest advanced CSS and SASS features. ',
    tech: ['HTML', 'SASS', 'SCSS', 'CSS3', 'gh-pages'],
  },
  {
    img: [greenTravelImg, greenTravelImg2],
    title: 'Green Travel',
    description:
      'This is a website for tourism and traveling around the world, exploring the world, and offering exciting tours for adventurers.',
    live: 'https://bondok6.github.io/Green-Travel/',
    github: 'https://github.com/Bondok6/Green-Travel',
    tech: ['JavaScript', 'HTML', 'CSS', 'Bootstrap5', 'gh-pages'],
  },
  {
    img: [nextTodoImg, nextTodoImg2],
    title: 'Next Todo',
    description:
      'My first Next.js App, I built a Todo App with Airtable for data storage and Tailwind CSS for Styling.',
    live: 'https://next-todo-cuhqqcug0-bondok6.vercel.app/',
    github: 'https://github.com/Bondok6/next-todo',
    tech: ['Next.js', 'Tailwind CSS', 'Airtable', 'Vercel'],
  },
  {
    img: [todoListJsImg2, todoListJsImg],
    title: 'Todo List',
    description:
      'In this project, I built a simple To-Do App for managing the daily tasks and to keep track on tasks during the day.',
    live: 'https://bondok6.github.io/ToDo-List/',
    github: 'https://github.com/Bondok6/ToDo-List/',
    tech: ['JavaScript', 'Jest', 'HTML', 'CSS', 'gh-pages'],
  },
  {
    img: [pigGameImg, pigGameImg],
    title: 'Pig Game',
    description:
      "Dice Game. Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to 'hold'. If the player rolls a 1, they score nothing and it becomes the next player's turn. If the player rolls any other number, it is added to their turn total and the player's turn continues. If a player chooses to 'hold', their turn total is added to their score, and it becomes the next player's turn. The first player to score 100 or more points wins 🏆.",
    live: 'https://bondok6.github.io/Pig-Game/',
    github: 'https://github.com/Bondok6/Pig-Game',
    tech: ['JavaScript', 'DOM', 'HTML', 'CSS', 'gh-pages'],
  },
  {
    img: [spaceTravelImg, spaceTravelImg2],
    title: 'Space Travelers',
    description:
      'A web app that provides commercial and scientific space travel services. The app allows users to book rockets and join selected space missions using real live data from the SpaceX API.',
    live: 'https://space-travelers.herokuapp.com/',
    github: 'https://github.com/Bondok6/space-travelers',
    tech: ['React.js', 'Redux-Toolkit', 'React-Bootstrap', 'API', 'Heroku'],
  },
  {
    img: [mathMagiciansImg, mathMagiciansImg2],
    title: 'Math Magicians',
    description:
      'A website for all fans of mathematics. It is a React.js project that allows users to make simple calculations and read a random math-related quote.',
    live: 'https://bondok6.github.io/math-magicians/',
    github: 'https://github.com/Bondok6/math-magicians',
    tech: [
      'React.js',
      'Redux-toolkit',
      'React-Bootstrap',
      'Eslint',
      'gh-pages',
    ],
  },
  {
    img: [qualbyImg, qualbyImg2],
    title: 'Qualby Etmaa`n',
    description:
      'Qualby_Etmaa`n, A website to display episodes of a famous Arabic program shown on YouTube',
    live: 'https://qalby-etma2n.herokuapp.com/',
    github: 'https://github.com/Bondok6/qalby_etmaa-n',
    tech: ['Ruby on Rails', 'PostgreSQL', 'Heroku'],
  },
  {
    img: [bankistImg, bankistImg2],
    title: 'Bankist',
    description:
      'A beautiful website with a lot of different components and visual effects that require some pretty advanced DOM manipulation techniques.',
    live: 'https://bondok6.github.io/Bankist/',
    github: 'https://github.com/Bondok6/Bankist',
    tech: ['JavaScript', 'DOM', 'HTML', 'CSS', 'gh-pages'],
  },
  {
    img: [maptyImg1, maptyImg],
    title: 'Mapty App',
    description:
      ' 💡 NOTE: Chrome no longer supports geolocation on insecure origins. To use this app, you need to run it on a secure origin, such as over HTTPS. So, you can run it on localhost. In this app, you can log your running or cycling workouts with location, distance, time, and steps/ minute.You can also see all your workouts on a map. ',
    live: 'https://bondok6.github.io/Mapty-app/',
    github: 'https://github.com/Bondok6/Mapty-app',
    tech: [
      'JavaScript',
      'OOP',
      'Geolocation',
      'HTML',
      'CSS',
      'Leaflet Map',
      'gh-pages',
    ],
  },
  {
    img: [expenseTrackerImg, expenseTrackerImg],
    title: 'Expense Tracker',
    description:
      'App helps you manage your money on the go. By understanding what you spend money on and how much you spend, you can see exactly where your cash is going.',
    live: 'https://bondok6.github.io/Expense-tracker-app/',
    github: 'https://github.com/Bondok6/Expense-tracker-app',
    tech: ['React', 'HTML', 'CSS-Modules', 'gh-pages'],
  },
  {
    img: [trilloImg, trilloImg],
    title: 'Trillo',
    description:
      'A hotel booking website. Pure CSS website to practice advanced CSS/SCSS (SASS) and delve deeper into Flexbox.',
    live: 'https://bondok6.github.io/trillo/',
    github: 'https://github.com/Bondok6/trillo',
    tech: ['SASS/SCSS', 'Animation', 'HTML', 'SVG', 'gh-pages'],
  },
  // {
  //   img: [zenvaImg, zenvaImg],
  //   title: 'Zenva',
  //   description:
  //     'A website for Zenva, a company that provides a variety of services to the people of the world.',
  //   live: 'https://bondok6.github.io/ZENVA/',
  //   github: 'https://github.com/Bondok6/ZENVA',
  //   tech: ['JavaScript', 'HTML', 'CSS', 'Icons8', 'Heroku'],
  // },
  // {
  //   img: [leaderboardImg, leaderboardImg],
  //   title: 'Leaderboard',
  //   description:
  //     'A website displays scores submitted by different players. All data is preserved thanks to the external Leaderboard API.',
  //   live: 'https://bondok6.github.io/Leaderboard/',
  //   github: 'https://github.com/Bondok6/Leaderboard/',
  //   tech: ['JavaScript', 'HTML', 'CSS', 'API', 'gh-pages'],
  // },
  // {
  //   img: [awesomeBooksImg, awesomeBooksImg],
  //   title: 'Awesome Books',
  //   description:
  //     'In this project, I built a basic website that allows users to add/remove books from a book list.',
  //   live: 'https://bondok6.github.io/Awesome-Books/',
  //   github: 'https://github.com/Bondok6/Awesome-Books',
  //   tech: ['JavaScript', 'HTML', 'CSS', 'gh-pages'],
  // },
  // {
  //   img: [countriesImg, countriesImg],
  //   title: 'Countries',
  //   description:
  //     'search for any country that you want to know information about. Build with RestCountry API, javaScript, CSS, HTML',
  //   live: 'https://bondok6.github.io/countries/',
  //   github: 'https://github.com/Bondok6/countries/',
  //   tech: ['JavaScript', 'HTML', 'CSS', 'API', 'gh-pages'],
  // },

  // {
  //   img: guessGameImg,
  //   title: 'Guess My Number',
  //   description:
  //     'Simple Game, Try to guess a number from 1 to 20 in the fewest number of attempts possible',
  //   live: 'https://bondok6.github.io/Guess-My-Number/',
  //   github: 'https://github.com/Bondok6/Guess-My-Number',
  // },
];

export default projects;
