import c1 from "../assets/images/c1.jpg"
import c2 from "../assets/images/c2.jpg"
import c3 from "../assets/images/c3.jpg"
import c4 from "../assets/images/c4.jpg"

function Recommended() {
    return(
  <div class="recommended">
  <h1 class="recommended__title">Recommended for you</h1>
  <p>Pick the best fit</p>
  <div class="recommended__container">
      <div class="course-card">
          <img src={c1} alt="c1_image"></img>
          <h3>2023 Python Data Visualisation Masterclass</h3>
          <p>Col Steele</p>
          <p>4.9⭐⭐⭐⭐</p>
          <p>449 <del>1999</del></p>
  
      </div>
      <div class="course-card">
          <img src={c2} alt="c2_image"></img>
          <h3>Basic to Advanced Programming with EMC</h3>
          <p>Col Steele</p>
          <p>4.5⭐⭐⭐⭐</p>
          <p>799 <del>2999</del></p>
  
      </div>
      <div class="course-card">
          <img src={c3} alt="c3_image"></img>
          <h3>Web Development Bootcamp 2023</h3>
          <p>Col Steele</p>
          <p>3.9⭐⭐⭐</p>
          <p>599 <del>999</del></p>
  
      </div>
      <div class="course-card">
          <img src={c4} alt="c4_image"></img>
          <h3>Master UI/UX Designing with Figma</h3>
          <p>Col Steele</p>
          <p>4.1⭐⭐⭐⭐</p>
          <p>799 <del>2999</del></p>
  
      </div>
  </div>
  </div>
    )
  }

  export default Recommended