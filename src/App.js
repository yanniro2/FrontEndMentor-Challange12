import "./index.css"
import img from "./images/drawers.jpg"
import profile from "./images/avatar-michelle.jpg"
import share_icon from "./images/icon-share.svg"
import face_icon from "./images/icon-facebook.svg"
import pinster_icon from "./images/icon-pinterest.svg"
import twiter_icon from "./images/icon-twitter.svg"
// import { ReactComponent as share_icon } from "./images/icon-share.svg"
function App()
{
  return (
    <div className="App w-screen h-screen bg-Light-Grayish-Blue flex justify-center items-center">
      <div className="content w-7/12 h-1/2 flex items-center bg-[#ffffff] rounded-md shadow-xl Mobile:h-4/5 Mobile:w-11/12 Mobile:flex-col Mobile:overflow-hidden">
        <div className="left w-[40%] h-full rounded-l-md overflow-hidden Mobile:w-full Mobile:h-[40%] Mobile:rounded-none">
          <img src={img} alt="img" className="h-full w-full object-cover Mobile:w-full " />

        </div>
        <div className="right w-[60%] h-full Mobile:p-0 p-[2rem] flex justify-evenly flex-col Mobile:w-full Mobile:h-[70%]">
          <div className="Mobile:p-[1.5rem] Mobile:flex Mobile:flex-col Mobile:justify-between Mobile:h-[75%] mb-3 Mobile:mb-0">

            <h3 className="font-lg text-[1.2rem] font-Manrope text-Very-Dark-Grayish-Blue mb-3 Mobile:-mb-0">
              Shift the overall look and feel by adding these wonderful
              touches to furniture in your home
            </h3>
            <p className="font-Manrope text-Desaturated-Dark-Blue">
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I’ve got some simple tips
              to help you make any room feel complete.
            </p>
          </div>
          <div className="profile w-full flex items-center justify-between Mobile:relative Mobile:h-[25%] p-1 Mobile:px-[2rem]">

            <img src={profile} alt="img profile" className="h-[2.5rem] w-[2.5rem] object-cover rounded-full" />
            <div className="details  -ml-[12rem] Mobile:-m-0">
              <h2 className="font-Manrope text-ms font-lg text-Very-Dark-Grayish-Blue">Michelle Appleton</h2>
              <span className="font-Manrope text-ms  text-Desaturated-Dark-Blue" > 28 Jun 2020</span>
            </div>
            <div className="share relative group justify-end Mobile:static">


              <img src={share_icon} alt="share icon" className="peek share_icon h-[2rem] w-[2rem] bg-Light-Grayish-Blue p-2 rounded-full cursor-pointer transition-all hover:bg-Very-Dark-Grayish-Blue " />


              <div className="hidden w-[14rem] bg-Very-Dark-Grayish-Blue absolute p-3  -top-[2rem] -translate-y-2/4 -translate-x-2/4 rounded items-center justify-evenly  z-50 shadow-xl  group-hover:flex  ease-in-out    text-Grayish-Blue Mobile:w-full Mobile:left-0 Mobile:right-0  Mobile:z-50  Mobile:top-0 Mobile:bottom-0 Mobile:items-center Mobile:justify-evenly Mobile:translate-x-0 Mobile:translate-y-0 " id="show">


                <span className="uppercase font-ms tracking-[.3rem] font-Manrope text-ms z-20 ">share</span>
                <img src={face_icon} alt="facebook icon " className="z-[2000]" />
                <img src={twiter_icon} alt="facebook icon z-20" className="z-100" />
                <img src={pinster_icon} alt="facebook icon" className="z-100" />
                <div class="-z-1 absolute -bottom-[.8rem] w-6 h-6 transform rotate-45 origin-top-left bg-Very-Dark-Grayish-Blue left-[50%] translate-x-2/4 shadow-xs-inset -translate-y-2/4 Mobile:hidden"></div>

                <img src={share_icon} alt="share icon" className="peek hidden share_icon h-[2rem] w-[2rem] bg-Light-Grayish-Blue p-2 rounded-full cursor-pointer transition-all hover:bg-Very-Dark-Grayish-Blue Mobile:block ml-[3rem]" />
              </div>

            </div>



          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
