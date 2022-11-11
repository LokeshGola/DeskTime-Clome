function container() {
  return ` <div id="container">
  <div class="popup" id="popup-3">
  <div class="overlay"></div>
  <div class="card content"> 
      <div class="card_header">
          <p>Absence Calendar</p>
          <i class="fa-solid fa-xmark" id="pop3-cross"></i>
      </div>
      <div class="card_body">
          <h2>You need upgrade to <b>Premium plan</b> to use this feature</h2>
          <p>The Absence calendar offers the possibility to plan your days out of office, be it a vacation, business trip or a sickness.</p>
          <p>Add an absence period here, mark what type of absence it is and let your teammates know when you will not be available. DeskTime will know not to track these days as missed.</p>
          <p>For a more detailed guide, watch the video below! </p>
          
          <a href="https://www.youtube.com/watch?v=w1qJcs1Nb_o"><img src="	https://desktime.com/assets/img/yt_covers/absence.png" alt=""></a>
      </div>
      <div class="card_footer">
          <button class="close" id="pop3-close">CLOSE</button>
          <button class="upgrade">UPGRADE</button>
      </div>

  </div>
</div>

  <div class="popup" id="popup-2">
  <div class="overlay"></div>
  <div class="card content"> 
      <div class="card_header">
          <p>Booking</p>
          <i class="fa-solid fa-xmark" id="pop2-cross"></i>
      </div>
      <div class="card_body">
          <h2>You need upgrade to <b>Premium plan</b> to use this feature</h2>
          <p>The Booking feature can be used as a desk or meeting room booking system, as well as for parking spaces, office gadgets, vehicles, different amenities, and much more.</p>
          <p>It's the best way to manage shared and hybrid workspaces.</p>
          <p>All bookings are updated in real-time and can be viewed from a single booking grid so everybody knows what's going on at any given time. </p>
          
          <a href="https://www.youtube.com/watch?v=w1qJcs1Nb_o"><img src="	https://desktime.com/assets/img/upgrade-popups/booking.png" alt=""></a>
      </div>
      <div class="card_footer">
          <button class="close" id="pop2-close">CLOSE</button>
          <button class="upgrade">UPGRADE</button>
      </div>

  </div>
</div>

  
  <div class="popup" id="popup-1">
  <div class="overlay"></div>
  <div class="card content"> 
      <div class="card_header">
          <p>Work Schedules</p>
          <i class="fa-solid fa-xmark" id="pop1-cross"></i>
      </div>
      <div class="card_body">
          <h2>You need upgrade to <b>Premium plan</b> to use this feature</h2>
          <p>Work schedules offer the option to add specific workdays for each of your employees or teams, create night shifts and multiple shifts on the same day.</p>
          <p>View the work schedule of your team members for the day, week, or month here.</p>
          <p>Watch the video below to learn more about this section and how to create a shift. </p>
          
          <a href="https://www.youtube.com/watch?v=w1qJcs1Nb_o"><img src="https://desktime.com/assets/img/schedules/youtube_video.png" alt=""></a>
      </div>
      <div class="card_footer">
          <button id="pop1-close" class="close">CLOSE</button>
          <button class="upgrade">UPGRADE</button>
      </div>

  </div>
</div>



    <div id="side_navbar">

      <div id="image_div">
        <img src="/assets/Screenshot 2022-11-09 111625.png" alt="">
      </div>

       <div class="navTab" id="desktime">
        <i class="fa-solid fa-desktop"></i>
        <h3>My Dashboard</h3>
       </div>

       <div class="navTab" id="projects">
        <i class="fa-solid fa-list-check"></i>
                <h3>Projects</h3>
       </div>
       
       <div class="navTab" id="work-sch">
        <i class="fa-solid fa-clock"></i>
        <h3>Work Schedules </h3>
        <i class="fa-solid fa-star"></i>
       </div>
       <div class="navTab" id="booking">
        <i class="fa-solid fa-ticket"></i> 
        <h3>Booking</h3>
        <i class="fa-solid fa-star"></i>
       </div>
       <div class="navTab" id="ac">
        <i class="fa-regular fa-calendar"></i>
        <h3>Absence Calender</h3>
        <i class="fa-solid fa-star"></i>
       </div>
       <div class="navTab" id="reports">
        <i class="fa-regular fa-flag"></i> 
        <h3>Reports</h3>
       </div>
       <div class="navTab" id="exports">
        <i class="fa-solid fa-file-export"></i>          
          <h3>Exports</h3>
          
       </div>
       <div class="navTab" id="settings">
        <i class="fa-solid fa-gear"></i>            <h3>Settings</h3>
       </div>


    </div>

    <div id="side_page">

        <div id="top_navbar">

            <div>
                <h3>Free trial active - 15 days left</h3>
                <button id="sn">SUBSCRIBE NOW</button>
                <button id="bd">BOOK A DEMO</button>
            </div>
            <div>
                <div>
                    <i id="menu" class="fa-solid fa-bars"></i>
                    <div id="search-bar">
                        <input type="text" placeholder="Search item">
                        <i class="fa-solid fa-magnifying-glass"></i>

                    </div>
                </div>
                <div>

                </div>
                <div>
                    <i class="fa-solid fa-bell"></i>
                    <p id="username">Username</p>
                    <div id="icon">U</div>
                    <i id="logout" class="fa-solid fa-right-from-bracket"></i>
                </div>
            </div>


        </div>

        <div id="content">

       


        </div>




    </div>

   



</div>`;
}

export default container;
