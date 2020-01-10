import React, { Fragment, Component } from 'react';
import logo from './logo.svg';
import './App.css';
/*import 'materialize-css/dist/css/materialize.min.css';*/
import dark from './dark.jpg';
import avengers from './avengers.jpg';
import zaki from './zaki.jpg';
import avengersi from './avengersi.jpg';
import Movierow from './Movierow.js';
import axios from 'axios';
import $ from 'jquery';
import './index.css';
import './tailwind.css';
import logo1 from "./logo1.png";
import "./fontawesome-all.min.css";
import unisi from "./unisi.jpg";
import ou from "./ou.png";
import node from "./nodejs.jpeg";
import react from "./reactjs.png";
import '../node_modules/font-awesome/css/font-awesome.min.css';



class App extends Component {
  constructor(props) {
    super(props)
    console.log("sssss")
    this.state = { row: [] }

    this.searchChangeHandler = this.searchChangeHandler.bind(this)
    // const movies = [{
    //   id: 0, image: avengers, title: "Avengers", Description: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity."
    // }, {
    //   id: 1, image: avengerse, title: "Avengers Endgame", Description: "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe."
    // }, {
    //   id: 2, image: avengersi, title: "Avengers Infinity War", Description: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe."
    // }, {
    //   id: 3, image: avengersi, title: "Avengers Infinity War", Description: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe."
    // }]

    // var movierows = []
    // movies.forEach((movie) => {
    //   const movierow = <Movierow movie={movie} />


    //   movierows.push(movierow)

    // })


    // this.state = { row: movierows }










  }
  performSearch(searchTerm) {
    console.log("its working yo")
    // const urls = "http://www.omdbapi.com/?i=tt3896198&apikey=b5a67d6c&s=" + searchTerm
    const urls = "https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=" + searchTerm
    $.ajax({
      url: urls,
      success: (searchResults) => {
        console.log("Fetched data successfully")
        //console.log(searchResults)
        // const result = searchResults.Search
        const result = searchResults.results


        var movierows = []

        result.forEach((movie) => {
          // const movielink = 'https://www.imdb.com/title/' + movie.imdbID
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path


          const movierow = <Movierow movie={movie} key={movie.id} />

          movierows.push(movierow)



        })
        this.setState({ row: movierows })

      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }
    })
  }

  // componentDidMount() {
  //   console.log("Perform search using moviedb")
  //   axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=b5a67d6c&s=avengers').then(res => {
  //     console.log(res.data.Search);



  //   })
  // }
  searchChangeHandler(event) {
    console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
  }


  render() {
    const styles1 = {
      background: '#212121',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '2000px'
    }

    const pushdown = {
      padding: '7px',
      marginLeft: '5px',
      marginRight: '5px',

    }

    return (
      <div className='app' style={{ background: " #2e3141" }}>
        <Fragment >
          <header className='header' style={{ zIndex: 1, background: "linear-gradient(150deg, rgba(46, 49, 65, 0.8), rgba(46, 49, 65, 0.8))" }} >
            <nav>
              <div className="container-wide"><div className="row">
                <div className="col s12 m3"><img className="responsive-img img-r" src={logo1} >
                </img></div>
                <div className="col s12 m9 "><div className="right py-8 px-8 pr-12"><ul className="flex flex-row px-8 ">
                  <li><a href="">Profile</a></li>
                  <li><a href="">Skills</a></li>
                  <li><a href="" >Contact</a></li>
                </ul></div></div></div></div>

            </nav>
            <div className="hero hero-landing left-align pl-12 m-7 pt-15 sm:pr-5 sm:mr-5   ">
              <div className="col s6 white-text  py-16 px-20  "><h1 className=" px-15 text-5xl caption mr-16 sm:text-center" style={{ borderBottom: "solid 2px rgba(255, 255, 255, 0.125)" }}>Zakiuddin Syed</h1><h5 className="cv text-4xl">Full Stack Developer</h5></div></div>



          </header>

        </Fragment>





        <section id="wrapper">

          <section id="one" class="wrapper spotlight style1" style={{ background: "linear-gradient(50deg, rgba(38,58,97,1) 13%, rgba(69,85,110,1) 69%, rgba(255,255,255,1) 95%)" }}>
            <div class="inner">
              <a href="#" class="image"><img src={zaki} ></img></a>
              <div class="content white-text">
                <h2 class="major  text-4xl" >Zakiuddin Syed</h2>
                <p className="left-align">"I am a <strong classname="font-bold">Full stack Web Developer</strong> with MSc in Computer and Automation Engineering and first degree in
Mechanical Engineer. With assiduous attitude and agile mindset, I am passionate to learn and explore
my skills in the field of  <strong classname="font-bold"> Full stack web development</strong>."</p>
                <a href="#" class="special p-5">Learn more</a>
              </div>
            </div>

          </section>

          <div className="cvv"><h2 className="white-text center major  text-3xl " >Education</h2></div>

          <section id="two" class="wrapper alt spotlight style2" style={{ background: " linear-gradient(50deg, rgba(255,255,255,1) 5%, rgba(38,58,97,1) 35%, rgba(69,85,110,1) 69%)" }}>

            <div class="inner">
              <a href="#" class="image"><img src={unisi} ></img></a>
              <div class="content">
                <h3 class="major text-5xl">
                  Università degli Studi di Siena</h3>
                <span class="major white-text text-2xl">Master's Degree,Computer and Automation engineering<br></br>2016-Present</span>

                <p className="white-text">1. Acquired a better understanding of machine learning and Data Analysis.<br></br>
                  2. It has improved my python programming and Matlab skills a lot.<br></br>
                  3. It has improved my interpersonal skills and as well as boosted my
                                    confidence.<br></br>
                  4. Developed an Image classification program using python libraries like the tensor
                                    flow and Keras.</p>
                <a href="#" class="special">Learn more</a>
              </div>
            </div>
          </section>




          <section id="three" class="wrapper alt spotlight style2 mt-12" style={{ background: "linear-gradient(50deg, rgba(38,58,97,1) 13%, rgba(69,85,110,1) 69%, rgba(255,255,255,1) 95%)" }}>

            <div class="inner">
              <a href="#" class="image"><img src={ou} ></img></a>
              <div class="content">
                <h3 class="major text-5xl">
                  Osmania University</h3>
                <span class="major white-text text-2xl">Bachelors's Degree,Mechanical engineering<br></br>2016-Present</span>

                <p className="white-text">1. I honed my professional skills during my bachelors in Auto cad and Solid
                                    Works<br></br>
                  2. I developed a project that is multiple spindle drilling machine utilizing
                  multiple gears and designing them accurately so that they can run efficiently
                                    without generating excess strain on the drilling machine.<br></br>
                  3. I also have proficient knowledge and experience in welding works and
                  working under CNC Lathe Machines and also theoretically in design of
                                    machine elements and finite element analysis.<br></br>
                  4. I can use CAD, CAN and CAM systems to design and visualize projects.
</p>
                <a href="#" class="special">Learn more</a>
              </div>
            </div>
          </section>
          <section class="wrapper" >
            <div class="inner">
              <h2 class="major text-5xl">E-Certificates
</h2>
              <h5 className="major text-2xl">The Complete Web Developer in 2020: Zero to Mastery </h5>
              <p className="white-text">Issued by:<strong>Udemy</strong><br></br>Issued on:<strong>Dec 2019</strong><br></br>Credentials:<strong>UC-64KJZOOW</strong><br></br><a href="#" class="special">Learn more</a></p>

              <h5 className="major text-2xl">Complete Python Bootcamp: Go from zero to hero in Python 3 </h5>
              <p className="white-text">Issued by:<strong>Udemy</strong><br></br>Issued on:<strong>June 2019</strong><br></br>Credentials:<strong>UC-C40TJ20T</strong><br></br><a href="#" class="special">Learn more</a></p>
            </div></section>
          <section id="four" class="wrapper alt style1" style={{ background: " linear-gradient(50deg, rgba(255,255,255,1) 5%, rgba(38,58,97,1) 35%, rgba(69,85,110,1) 69%)" }}>

            <div class="inner px-64  py-5" >
              <div class="inner">
                <h2 class="major text-5xl">Experience</h2><h5 className="major ">Freelance at PeoplePerHour<p className="text-base">March-2019-April-2019</p></h5>
                <p className="white-text">Hotel Data Analysis and Management<br></br>1.Data Manipulation using pandas, datetime and regex<br></br>

                  2.Sorting the data into High season and low season based on the time period<br></br>

                  3.Removing the dates from the system<br></br>

                  4.Analysing the price based on the data and season</p></div>
            </div>
          </section>



          <section id="four" class="wrapper alt style1">
            <div class="inner">
              <h2 class="major">Skills</h2>

              <div class="flex flex-wrap mb-2">
                <div class="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2">
                  <div class="bg-green-600 border rounded shadow p-2">
                    <div class="flex flex-row items-center center-align">
                      <div class="flex-shrink pl-1 pr-4"></div>
                      <div class="flex-1 text-right">
                        <h5 class="text-white">Node.js</h5>
                        <h3 class="text-white text-3xl"><span class="text-green-400"></span></h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pl-2">
                  <div class="bg-blue-600 border rounded shadow p-2">
                    <div class="flex flex-row items-center center-align">
                      <div class="flex-shrink pl-1 pr-4"></div>
                      <div class="flex-1 text-right">
                        <h5 class="text-white">React.js</h5>
                        <h3 class="text-white text-3xl"> <span class="text-blue-400"></span></h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2 xl:pr-3 xl:pl-1">
                  <div class="bg-orange-600 border rounded shadow p-2">
                    <div class="flex flex-row items-center center-align">
                      <div class="flex-shrink pl-1 pr-4"></div>
                      <div class="flex-1 text-right pr-1">
                        <h5 class="text-white">Javascript</h5>
                        <h3 class="text-white text-3xl"> <span class="text-orange-400"></span></h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pl-2 xl:pl-3 xl:pr-2">
                  <div class="bg-purple-600 border rounded shadow p-2">
                    <div class="flex flex-row items-center center-align">
                      <div class="flex-shrink pl-1 pr-4"></div>
                      <div class="flex-1 text-right">
                        <h5 class="text-white">Html and CSS</h5>
                        <h3 class="text-white text-3xl"></h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2 xl:pl-2 xl:pr-3">
                  <div class="bg-red-600 border rounded shadow p-2">
                    <div class="flex flex-row items-center center-align">
                      <div class="flex-shrink pl-1 pr-4"></div>
                      <div class="flex-1 text-right">
                        <h5 class="text-white">Python</h5>
                        <h3 class="text-white text-3xl"></h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pl-2 xl:pl-1">
                  <div class="bg-pink-600 border rounded shadow p-2">
                    <div class="flex flex-row items-center">
                      <div class="flex-shrink pl-1 pr-4"></div>
                      <div class="flex-1 text-right">
                        <h5 class="text-white"> Mongodb</h5>
                        <h3 class="text-white text-3xl"> <span class="text-pink-400"></span></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button class="block uppercase mx-auto shadow  hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded">Browse More</button>

            </div>
          </section>
        </section>
        <section id="wrapper">

          <section id="one" class="wrapper spotlight style1 " style={{ background: "linear-gradient(50deg, rgba(38,58,97,1) 13%, rgba(69,85,110,1) 69%, rgba(255,255,255,1) 95%)" }}>
            <div class=" px-16 py-24  " >
              <h3 class="major text-5xl ">Academic Projects and Reasearch </h3><br></br><h5 className="major text-2xl ">Image Classifier using Tensor flow and Keras:<p className="text-base">June-2019</p></h5>
              <p className="white-text">This is an image classification python program using tensor flow and keras. I have extensively used
a classifier for classifying two classes Using jquery<br></br>


              </p><button class=" block uppercase mx-auto shadow sm-auto hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded left-align"><a className="text-white " href={'https://www.github.com/zaki1001/Image-classification-using-tensor-flow-and-keras'}
                target="_blank">Github link</a></button>
              <h5 className="major text-2xl ">The Movie Database using React.js<p className="text-base">Oct-2019</p></h5>
              <p className="white-text">Using The movie database api i created a search bar and when you type whatever the movie required the api would hit the specific movie and render it onto the screen <br></br>


              </p><button class=" block uppercase mx-auto shadow  hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded left-align"><a className="text-white " href={'https://www.github.com/zaki1001/'}
                target="_blank">Github link</a></button></div>
          </section>
        </section>

        <section id="footer" style={{ background: "linear-gradient(50deg, rgba(52,68,93,1) 0%, rgba(67,89,122,1) 99%, rgba(255,255,255,1) 100%)" }}>
          <div class="inner flex ">
            <h2 class="major">Get in touch</h2>

            <form method="post" action="#" className="pt-10">
              <div class="fields">
                <div class="field">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" id="name" ></input>
                </div>
                <div class="field">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" ></input>
                </div>
                <div class="field">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" rows="4"></textarea>
                </div>
              </div>
              <ul class="actions">
                <li><input type="submit" value="Send Message" className="block uppercase mx-auto shadow  hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-12 rounded ml-5"></input></li>
              </ul>
            </form>
            <ul class="contact ">
              <li class="icon solid fa-home white-text">
                Zakiuddin Syed<br></br>
                Siena,Italy <br></br>
                53100
								</li>
              <li class="icon solid fa-phone white-text">+39-380-4664182</li>
              <li class="icon solid fa-envelope white-text"><a href="#">syedzaki.uddin@yahoo.com</a></li>
              <li class="icon brands fa-linkedin white-text"><a href="#">twitter.com/untitled-tld</a></li>
              <li class="icon brands fa-facebook-f white-text"><a href="#">facebook.com/untitled-tld</a></li>
              <li class="icon brands fa-instagram white-text"><a href="#">instagram.com/untitled-tld</a></li>
            </ul>
            <ul class="copyright">
              <li>&copy; Untitled Inc. All rights reserved.</li><li>Design: <a href={"https://www.linkedin.com/in/zakiuddin-syed-31710b15a"}>Zaki</a></li>
            </ul>
          </div>
        </section>





      </div>






    )
  }
}

export default App;