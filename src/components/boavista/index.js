import React from "react";

import { BoavistaIllustration } from "@components/illustrations";
import Carousel from "@components/carousel";
import DividerWithIllustration from "../dividerWithIllustration";

import cleancityImage from "@images/cleancity/cleancity-lg.png";
import allprintsImage from "@images/cleancity/allprints.png";
import wireframesImage from "@images/cleancity/wireframes.png";
import userflowImage from "@images/cleancity/userflow.png";
import usermapImage from "@images/cleancity/usermap.png";
import print1 from "@images/cleancity/print-1.png";
import print2 from "@images/cleancity/print-2.png";
import print3 from "@images/cleancity/print-3.png";
import videoOnboarding from "@images/cleancity/print-onboarding.mp4";
import videoQuiz from "@images/cleancity/print-quiz.mp4";
import printWaste from "@images/cleancity/print-waste.png";
import printRedeem1 from "@images/cleancity/print-redeem-1.png";
import printRedeem2 from "@images/cleancity/print-redeem-2.png";

import prev1 from "@images/cleancity/prev-1.png";
import prev2 from "@images/cleancity/prev-2.png";
import prev3 from "@images/cleancity/prev-3.png";

// Hooks
import useScroll from "@hooks/useScroll";

import "@styles/case.scss";

const BoaVista = () => {
  useScroll();
  return (
    <div className="page -case -cleancity">
      <section className="casesection -hero">
        <div className="container">
          <div className="thumb" data-scroll>
            <div className="opacity" style={{ transitionDelay: "200ms" }}>
              <BoavistaIllustration filled />
            </div>
            <img
              className="image opacity"
              style={{ transitionDelay: "400ms" }}
              src={cleancityImage}
              alt=""
            />
          </div>
          <div className="content projectinfo">
            <div data-scroll>
              <div className="tags opacity">
                {["ux", "research", "product thinking"].map((item, index) => {
                  return (
                    <span className="tag categorylabel" key={index}>
                      {item}
                    </span>
                  );
                })}
              </div>
              <br />
            </div>
            <div data-scroll className="name">
              <div className="target">iq + Boa Vista</div>
            </div>
          </div>
        </div>
      </section>
      <section className="casesection container -synopsis">
        <div className="item">
          <div data-scroll className="title">
            <div className="target">The Challenge</div>
          </div>
          <div data-scroll className="sectionparagraph">
            <div className="opacity" style={{ transitionDelay: "400ms" }}>
              The Stakeholders from iq with the ones from Boa Vista had an idea
              to create a new product for people who were targeted with bad
              Credit Score. The main hypothesis was that they didn't want to pay
              their debts to the financial companies and with that they chose to
              remain with a bad credit score. As a designer, we always have to
              question every hypothesis and start to dig into the problem, so my
              colleague Andrey and I had the responsibility to go deeper and
              learn if this was true.
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <section className="casesection container -synopsis">
        <div className="item">
          <div data-scroll className="title">
            <div className="target">My Role</div>
          </div>
          <div data-scroll className="sectionparagraph">
            <ul className="sectionlist">
              <li>Create a Research Plan for this challenge;</li>
              <li>Facilitate the interviews;</li>
              <li>Make a Thematic Analysis.</li>
            </ul>
          </div>
        </div>
      </section>
      <br />
      <br />
      <section className="casesection container -synopsis">
        <div className="item">
          <div data-scroll className="title">
            <div className="target">Timeline</div>
          </div>
          <div data-scroll className="sectionparagraph">
            <p>3 months in 2022</p>
          </div>
        </div>
      </section>
      <br />
      <br />
      <section className="container -divider">
        <hr className="divider" />
      </section>
      <br />
      <br />
      <section className="casesection -uxproccess">
        <div className="container">
          <h3 className="sectiontitle">
            Research Process - Before, During and After the Interviews
          </h3>
        </div>
        <div className="container">
          <div className="processes">
            <div className="item">
              <p className="title">Before</p>
              <ol className="list">
                <li className="item">Doing the research plan</li>
                <li className="item -sub">Main goals</li>
                <li className="item -sub">Research questions</li>
                <li className="item -sub">How many participate?</li>
              </ol>
            </div>
            <div className="item">
              <p className="title">During</p>
              <ol className="list">
                <li className="item">Interview Questions</li>
                <li className="item">Study Interview</li>
              </ol>
            </div>
            <div className="item">
              <p className="title">After</p>
              <ol className="list">
                <li className="item">Analyzing qualitative data</li>
                <li className="item">Findings</li>
                <li className="item">How might we?</li>
                <li className="item">User Needs</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <section className="container -divider -secondary">
        <div className="title">Before</div>
        <DividerWithIllustration />
        <hr className="divider -light" />
      </section>
      <br />
      <br />
      <div className="casesection -targetaudience">
        <div className="container">
          <div className="holder">
            <div className="icon -left">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 127 63"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M126.982 20.1285L127 63C120.145 63 114.818 59.787 110.691 55.692C105.036 50.085 98.1455 50.085 92.4909 55.692C88.3636 59.787 83.0364 63 76.1818 63C69.3273 63 64 59.787 59.8727 55.692C54.2182 50.085 47.3273 50.085 41.6727 55.692C37.5455 59.787 32.2182 63 25.3636 63C11.5091 63 4.07273 50.148 0 43.0605H0.0181818L0 0C6.85455 0 12.1818 3.213 16.3091 7.308C21.9636 12.915 28.8545 12.915 34.5091 7.308C38.6364 3.213 43.9636 0 50.8182 0C57.6727 0 63 3.213 67.1273 7.308C72.7818 12.915 79.6727 12.915 85.3273 7.308C89.4545 3.213 94.7818 0 101.636 0C115.527 0 122.891 13.041 126.964 20.1285H126.982Z"
                  fill="#D604C1"
                />
                <path
                  d="M54.5 27C55.8807 27 57 25.6569 57 24C57 22.3431 55.8807 21 54.5 21C53.1193 21 52 22.3431 52 24C52 25.6569 53.1193 27 54.5 27Z"
                  fill="#400039"
                />
                <path
                  d="M73.5 27C74.8807 27 76 25.6569 76 24C76 22.3431 74.8807 21 73.5 21C72.1193 21 71 22.3431 71 24C71 25.6569 72.1193 27 73.5 27Z"
                  fill="#400039"
                />
                <path
                  d="M73.4977 44C73.2649 43.9975 73.0356 43.9365 72.8274 43.8218C72.6191 43.707 72.4372 43.5415 72.2957 43.3377C71.4291 41.7079 70.2271 40.3253 68.7865 39.3014C67.3459 38.2776 65.707 37.6413 64.0022 37.4437C62.3489 37.7348 60.7655 38.389 59.346 39.3673C57.9265 40.3457 56.6999 41.6283 55.7388 43.1391C55.6273 43.3207 55.4841 43.4762 55.3176 43.5963C55.151 43.7165 54.9645 43.799 54.7688 43.8391C54.5731 43.8791 54.3721 43.8759 54.1775 43.8296C53.983 43.7834 53.7987 43.6949 53.6354 43.5695C53.3171 43.3163 53.0992 42.9381 53.0265 42.513C52.9538 42.0879 53.0319 41.6483 53.2448 41.2848C53.425 40.9868 57.6921 34.1656 63.9422 34C67.7885 34 71.3942 36.351 74.6995 41.2185C74.8179 41.3925 74.904 41.5904 74.953 41.801C75.002 42.0116 75.0128 42.2308 74.9849 42.4461C74.957 42.6613 74.891 42.8684 74.7905 43.0554C74.69 43.2425 74.557 43.406 74.3991 43.5364C74.1565 43.8015 73.8379 43.9654 73.4977 44Z"
                  fill="#400039"
                />
              </svg>
            </div>
            <div className="icon -right">
              <svg
                width="239"
                height="265"
                viewBox="0 0 239 265"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M92.0863 52.6327L119.589 29.217L113.046 64.733L112.745 66.3672L114.401 66.5L150.416 69.3869L120.667 89.8818L119.298 90.8247L120.376 92.0898L143.804 119.589L108.275 113.049L106.641 112.748L106.509 114.405L103.634 150.415L83.1264 120.67L82.1833 119.302L80.9186 120.379L53.4321 143.804L59.9595 108.278L60.2597 106.644L58.6037 106.512L22.6052 103.634L52.339 83.1295L53.7063 82.1866L52.6294 80.922L29.2171 53.432L64.7303 59.9626L66.3639 60.263L66.4968 58.6073L69.387 22.6051L89.8788 52.3417L90.8214 53.7096L92.0863 52.6327Z"
                  fill="#3DDC97"
                  stroke="#3DDC97"
                  strokeWidth="3"
                />
                <path
                  d="M71.5 81C73.433 81 75 79.433 75 77.5C75 75.567 73.433 74 71.5 74C69.567 74 68 75.567 68 77.5C68 79.433 69.567 81 71.5 81Z"
                  fill="#400039"
                />
                <path
                  d="M100 81C102.209 81 104 79.433 104 77.5C104 75.567 102.209 74 100 74C97.7909 74 96 75.567 96 77.5C96 79.433 97.7909 81 100 81Z"
                  fill="#400039"
                />
                <path
                  d="M99.7465 103C99.3973 102.997 99.0534 102.918 98.741 102.768C98.4286 102.619 98.1558 102.404 97.9435 102.139C96.6437 100.02 94.8406 98.2228 92.6797 96.8919C90.5188 95.5609 88.0605 94.7336 85.5033 94.4768C83.0234 94.8553 80.6482 95.7057 78.519 96.9775C76.3898 98.2494 74.5498 99.9168 73.1083 101.881C72.9409 102.117 72.7261 102.319 72.4764 102.475C72.2266 102.631 71.9468 102.739 71.6532 102.791C71.3597 102.843 71.0582 102.839 70.7663 102.779C70.4745 102.718 70.1981 102.603 69.9531 102.44C69.4757 102.111 69.1488 101.62 69.0398 101.067C68.9307 100.514 69.0479 99.9427 69.3671 99.4702C69.6376 99.0828 76.0382 90.2152 85.4134 90C91.1827 90 96.5913 93.0563 101.549 99.3841C101.727 99.6102 101.856 99.8675 101.929 100.141C102.003 100.415 102.019 100.7 101.977 100.98C101.935 101.26 101.837 101.529 101.686 101.772C101.535 102.015 101.335 102.228 101.099 102.397C100.735 102.742 100.257 102.955 99.7465 103Z"
                  fill="#400039"
                />
                <mask id="path-5-inside-1_401_67" fill="white">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M111.155 190.249C102.728 186.098 92.5307 189.565 88.3798 197.992C84.2288 206.42 87.6956 216.617 96.1232 220.768L106.225 225.743L101.249 235.845C97.0983 244.272 100.565 254.469 108.993 258.62C117.42 262.771 127.617 259.304 131.768 250.877L136.744 240.775L146.845 245.75C155.272 249.901 165.469 246.434 169.62 238.007C173.771 229.579 170.304 219.382 161.877 215.231L151.776 210.256L156.751 200.155C160.902 191.728 157.435 181.531 149.007 177.38C140.58 173.229 130.383 176.696 126.232 185.123L121.257 195.224L111.155 190.249Z"
                  />
                </mask>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M111.155 190.249C102.728 186.098 92.5307 189.565 88.3798 197.992C84.2288 206.42 87.6956 216.617 96.1232 220.768L106.225 225.743L101.249 235.845C97.0983 244.272 100.565 254.469 108.993 258.62C117.42 262.771 127.617 259.304 131.768 250.877L136.744 240.775L146.845 245.75C155.272 249.901 165.469 246.434 169.62 238.007C173.771 229.579 170.304 219.382 161.877 215.231L151.776 210.256L156.751 200.155C160.902 191.728 157.435 181.531 149.007 177.38C140.58 173.229 130.383 176.696 126.232 185.123L121.257 195.224L111.155 190.249Z"
                  fill="#FF4522"
                />
                <path
                  d="M88.3798 197.992L85.6885 196.667L85.6885 196.667L88.3798 197.992ZM111.155 190.249L109.83 192.94L111.155 190.249ZM96.1232 220.768L94.7976 223.459L96.1232 220.768ZM106.225 225.743L108.916 227.069L110.242 224.377L107.55 223.052L106.225 225.743ZM101.249 235.845L98.558 234.519L98.558 234.519L101.249 235.845ZM108.993 258.62L110.318 255.929L110.318 255.929L108.993 258.62ZM131.768 250.877L134.459 252.202L131.768 250.877ZM136.744 240.775L138.069 238.084L135.378 236.758L134.052 239.45L136.744 240.775ZM169.62 238.007L172.311 239.332L169.62 238.007ZM161.877 215.231L160.551 217.923L160.551 217.923L161.877 215.231ZM151.776 210.256L149.084 208.931L147.759 211.622L150.45 212.948L151.776 210.256ZM149.007 177.38L150.333 174.689L150.333 174.689L149.007 177.38ZM126.232 185.123L123.541 183.798L123.541 183.798L126.232 185.123ZM121.257 195.224L119.931 197.916L122.623 199.241L123.948 196.55L121.257 195.224ZM91.071 199.318C94.4899 192.377 102.888 189.521 109.83 192.94L112.481 187.557C102.567 182.674 90.5716 186.753 85.6885 196.667L91.071 199.318ZM97.4487 218.076C90.5075 214.657 87.6521 206.259 91.071 199.318L85.6885 196.667C80.8054 206.58 84.8837 218.576 94.7976 223.459L97.4487 218.076ZM107.55 223.052L97.4487 218.076L94.7976 223.459L104.899 228.434L107.55 223.052ZM103.941 237.17L108.916 227.069L103.534 224.418L98.558 234.519L103.941 237.17ZM110.318 255.929C103.377 252.51 100.522 244.112 103.941 237.17L98.558 234.519C93.6749 244.433 97.7532 256.428 107.667 261.311L110.318 255.929ZM129.077 249.551C125.658 256.492 117.259 259.348 110.318 255.929L107.667 261.311C117.581 266.195 129.576 262.116 134.459 252.202L129.077 249.551ZM134.052 239.45L129.077 249.551L134.459 252.202L139.435 242.101L134.052 239.45ZM148.17 243.059L138.069 238.084L135.418 243.466L145.519 248.442L148.17 243.059ZM166.929 236.681C163.51 243.623 155.111 246.478 148.17 243.059L145.519 248.442C155.433 253.325 167.428 249.246 172.311 239.332L166.929 236.681ZM160.551 217.923C167.492 221.342 170.348 229.74 166.929 236.681L172.311 239.332C177.194 229.419 173.116 217.423 163.202 212.54L160.551 217.923ZM150.45 212.948L160.551 217.923L163.202 212.54L153.101 207.565L150.45 212.948ZM154.06 198.83L149.084 208.931L154.467 211.582L159.442 201.481L154.06 198.83ZM147.682 180.071C154.623 183.49 157.478 191.889 154.06 198.83L159.442 201.481C164.325 191.567 160.247 179.572 150.333 174.689L147.682 180.071ZM128.923 186.449C132.342 179.508 140.741 176.652 147.682 180.071L150.333 174.689C140.419 169.806 128.424 173.884 123.541 183.798L128.923 186.449ZM123.948 196.55L128.923 186.449L123.541 183.798L118.566 193.899L123.948 196.55ZM109.83 192.94L119.931 197.916L122.582 192.533L112.481 187.557L109.83 192.94Z"
                  fill="#FD4D40"
                  mask="url(#path-5-inside-1_401_67)"
                />
                <path
                  d="M118.298 216.083C119.605 215.622 120.233 213.927 119.699 212.298C119.166 210.67 117.674 209.724 116.367 210.185C115.06 210.646 114.432 212.341 114.966 213.97C115.499 215.598 116.991 216.544 118.298 216.083Z"
                  fill="#400039"
                />
                <path
                  d="M136.287 209.733C137.594 209.272 138.222 207.578 137.688 205.949C137.155 204.32 135.663 203.374 134.356 203.835C133.048 204.297 132.421 205.991 132.954 207.62C133.488 209.249 134.98 210.195 136.287 209.733Z"
                  fill="#400039"
                />
                <path
                  d="M141.757 226.445C141.536 226.521 141.299 226.537 141.065 226.494C140.831 226.451 140.605 226.349 140.406 226.196C139.061 224.883 137.478 223.926 135.784 223.401C134.091 222.876 132.334 222.798 130.656 223.174C129.185 224.013 127.896 225.185 126.867 226.621C125.838 228.057 125.09 229.728 124.666 231.534C124.619 231.75 124.534 231.951 124.415 232.125C124.296 232.298 124.146 232.442 123.973 232.547C123.801 232.651 123.609 232.715 123.41 232.735C123.211 232.754 123.008 232.729 122.813 232.66C122.43 232.518 122.102 232.219 121.897 231.825C121.691 231.432 121.623 230.974 121.708 230.545C121.783 230.192 123.627 222.06 129.491 219.809C133.133 218.523 137.303 219.629 142 223.309C142.168 223.441 142.313 223.607 142.427 223.797C142.541 223.988 142.622 224.2 142.665 224.421C142.708 224.642 142.712 224.867 142.677 225.085C142.642 225.302 142.569 225.507 142.461 225.688C142.317 226.03 142.068 226.298 141.757 226.445Z"
                  fill="#400039"
                />
                <path
                  d="M233.944 133.682L233.548 134.089V134.699V134.72V134.768L233.551 134.816C234.041 142.539 229.095 149.477 221.867 151.368L221.708 151.41L221.561 151.485L221.541 151.496L221.167 151.688L220.948 152.046C216.941 158.577 209.005 161.208 202.07 158.359L201.5 158.125L200.93 158.359C193.995 161.208 186.059 158.577 182.052 152.046L181.833 151.688L181.459 151.496L181.438 151.485L181.292 151.41L181.133 151.368C173.905 149.477 168.959 142.539 169.449 134.816L169.452 134.768V134.72V134.699V134.09L169.056 133.682C164.314 127.765 164.315 119.223 169.055 113.319L169.452 112.911V112.301V112.28V112.232L169.449 112.184C168.959 104.461 173.905 97.5227 181.133 95.6316L181.292 95.5899L181.438 95.5147L181.459 95.5039L181.833 95.312L182.052 94.9541C186.059 88.4234 193.995 85.792 200.93 88.6407L201.5 88.8748L202.07 88.6407C209.005 85.792 216.941 88.4234 220.948 94.9541L221.167 95.3119L221.541 95.5038L221.561 95.5146L221.708 95.5899L221.867 95.6316C229.095 97.5227 234.041 104.461 233.551 112.184L233.548 112.232V112.28V112.301V112.911L233.945 113.319C238.685 119.223 238.686 127.765 233.944 133.682Z"
                  fill="#9CEAEF"
                  stroke="#9CEAEF"
                  strokeWidth="3"
                />
                <path
                  d="M192.5 118.229C193.881 118.229 195 116.835 195 115.115C195 113.395 193.881 112 192.5 112C191.119 112 190 113.395 190 115.115C190 116.835 191.119 118.229 192.5 118.229Z"
                  fill="#400039"
                />
                <path
                  d="M211.5 118.229C212.881 118.229 214 116.835 214 115.115C214 113.395 212.881 112 211.5 112C210.119 112 209 113.395 209 115.115C209 116.835 210.119 118.229 211.5 118.229Z"
                  fill="#400039"
                />
                <path
                  d="M211.498 135.88C211.265 135.877 211.036 135.814 210.827 135.695C210.619 135.575 210.437 135.404 210.296 135.192C209.429 133.5 208.227 132.064 206.786 131.001C205.346 129.938 203.707 129.278 202.002 129.073C200.349 129.375 198.765 130.054 197.346 131.07C195.927 132.086 194.7 133.417 193.739 134.986C193.627 135.174 193.484 135.336 193.318 135.461C193.151 135.585 192.965 135.671 192.769 135.713C192.573 135.754 192.372 135.751 192.178 135.703C191.983 135.655 191.799 135.563 191.635 135.433C191.317 135.17 191.099 134.777 191.027 134.336C190.954 133.894 191.032 133.438 191.245 133.061C191.425 132.751 195.692 125.669 201.942 125.497C205.788 125.497 209.394 127.938 212.7 132.992C212.818 133.172 212.904 133.378 212.953 133.597C213.002 133.815 213.013 134.043 212.985 134.266C212.957 134.49 212.891 134.705 212.79 134.899C212.69 135.093 212.557 135.263 212.399 135.398C212.157 135.674 211.838 135.844 211.498 135.88Z"
                  fill="#400039"
                />
              </svg>
            </div>
            <h3 className="sectiontitle">Main Goal</h3>
            <p className="sectionparagraph">
              It was given to me a Target Audience:
            </p>
            <ul className="sectionlist -nodots">
              <li>
                a. Couples who frequently order takeout during the week and thus
                accumulate a lot of recyclable materials.
              </li>
              <li>b. Young people who want to start a recycling routine.</li>
              <li className="-highlighted">
                c.{" "}
                <strong>
                  People who casually separate recyclable materials, but have
                  questions about how to separate the waste for collection
                  correctly.
                </strong>
              </li>
            </ul>
            <br />
            <p className="sectionparagraph">And some User Pains:</p>
            <ul className="sectionlist -number">
              <li>
                They don't know where they can start recycling. They think they
                need to do all the steps at once.
              </li>
              <li>They have a very busy routine between work and college.</li>
              <li className="-highlighted">
                <strong>
                  They find it difficult to find practical information on
                  recycling.
                </strong>
              </li>
              <li>
                They do not see value in recycling (“… what is the use of
                recycling, if most do not do it?”).
              </li>
            </ul>
            <br />
            <p className="sectionparagraph">
              Since the time was short, I decided to focus on the topics
              highlighted above. <br />
              This was the starting point for me, because I wanted to learn
              everything about this target audience with these pain points. So,
              I decided to gather some information with a Desk Research and then
              with a Semi-Structured Interview.
            </p>
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
      <br />
      <br />
      <section className="container -divider -secondary">
        <div className="title">Discover</div>
        <DividerWithIllustration />
        <hr className="divider -light" />
      </section>
      <br />
      <br />
      <br />
      <section className="casesection">
        <div className="container">
          <div className="holder">
            <h3 className="sectiontitle">
              Desk Research and Semi-Structured Interview
            </h3>
            <p className="sectionparagraph">
              In order to gather quantitative data, I carried out a Desk
              Research on the topic of recycling and found interesting data from
              a survey carried out in 2018 by Ibope, commissioned by Ambev, with
              1.181.600 people in all the states of Brazil. This research
              reinforces some presented pains:
            </p>
          </div>
        </div>
      </section>
      <section className="casesection">
        <div className="container">
          <div className="holder -cellwrapper">
            <div className="cell">
              <p className="sectiontitle -bignumber">98%</p>
              <p className="sectionparagraph">
                think recycling is important to planet's future.
              </p>
            </div>
            <div className="cell">
              <p className="sectiontitle -bignumber">66%</p>
              <p className="sectionparagraph">
                claim to know little or nothing about selective collection.
              </p>
            </div>
            <div className="cell">
              <p className="sectiontitle -bignumber">81%</p>
              <p className="sectionparagraph">
                claim to know little or nothing about recycling cooperatives.
              </p>
            </div>
            <div className="cell">
              <p className="sectiontitle -bignumber">71%</p>
              <p className="sectionparagraph">
                disagree that the garbage is no longer their responsibility when
                thrown away.
              </p>
            </div>
          </div>
          <div className="holder">
            <br />
            <p className="sectionparagraph">
              For qualitative data, an interview was carried out with 7 people,
              aged 22 to 30 years, male and female. Some people who already had
              the habit of recycling and others who had just incorporated it
              into their routine were interviewed. With the help of the CSD
              Matrix, I developed some questions focused on the difficulty of
              the recycling process:
            </p>
            <br />
            <br />
            <ul className="sectionlist -highlighted">
              <li>Tell me about what you think about recycling.</li>
              <li>
                Tell me what goes through (went through) your mind when you
                separate the garbage for recycling.
              </li>
              <li>
                Do you know how to identify the correct disposal for each type
                of waste?
              </li>
              <li>
                Is there something that would make the recycling process better,
                easier and more intuitive?
              </li>
            </ul>
          </div>
        </div>
      </section>
      <br />
      <section className="container -divider">
        <hr className="divider -light" />
      </section>
      <br />

      <section className="casesection">
        <div className="container">
          <div className="holder">
            <h3 className="sectiontitle">Interview Results</h3>
            <p className="sectionparagraph">
              With the interview, I could see that the pain points presented
              previously were reinforced, such as the difficulty of finding
              practical information on recycling. But other points also emerged:
            </p>
          </div>
        </div>
      </section>
      <br />
      <br />

      <section className="casesection container  -marginonmobile">
        <div className="holder -padding">
          <p className="sectiontitle -bignumber">71%</p>
          <p className="sectionparagraph">
            of the respondents only sort the <br />
            waste for collection, because there is this service convenience in
            ther building or street.
          </p>
        </div>
        <div className="holder -padding">
          <p className="sectiontitle -bignumber">85%</p>
          <p className="sectionparagraph">
            say they would not have the <br /> availability to take the waste to
            a collection point. And that they wouldn't recycle if that was the
            case.
          </p>
        </div>
        <div className="holder -padding">
          <p className="sectiontitle -bignumber">85%</p>
          <p className="sectionparagraph">
            also state that they do not know what is the correct handling for
            the packaging that will be discarded.
          </p>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <section className="casesection -recycle">
        <div className="holder">
          <svg
            width="829"
            height="709"
            className="illustration"
            viewBox="0 0 829 709"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M738.252 458.909H490.026V706.989H738.252V458.909Z"
              fill="#86FF85"
            />
            <path
              d="M585.277 458.527C585.277 458.527 583.492 444.621 572.797 452.104C562.102 459.588 559.244 488.351 576.004 496.425C592.765 504.499 585.277 458.527 585.277 458.527Z"
              fill="#CCE2DB"
            />
            <path
              d="M608.102 551.97L606.919 593.435L608.102 627.527L684.075 624.682L683.954 582.495L670.872 530.581C670.872 530.581 610.959 540.143 608.102 551.97Z"
              fill="#E7F2EF"
            />
            <path
              d="M273.896 0.00195312H-1.43549V275.171H273.896V0.00195312Z"
              fill="#E7F2EF"
            />
            <path
              d="M369.771 568.141C496.621 568.141 599.453 465.369 599.453 338.594C599.453 211.819 496.621 109.048 369.771 109.048C242.921 109.048 140.089 211.819 140.089 338.594C140.089 465.369 242.921 568.141 369.771 568.141Z"
              fill="#00CD4B"
            />
            <path
              d="M149.788 314.853L71.363 349.567L58.522 316.745L50.443 299.634L-8.55114 329.108L-5.69395 343.845L14.2846 409.905C14.2846 409.905 28.067 444.128 52.3259 436.043C76.5848 427.957 164.053 382.389 164.053 382.389L212.078 352.445C212.078 352.445 250.601 327.281 234.902 321.548C234.902 321.548 252.024 306.341 237.76 300.17C237.76 300.17 249.167 284.011 232.998 283.529C232.998 283.529 235.384 268.322 211.103 279.252L193.041 290.192C193.041 290.192 197.792 271.659 191.136 271.188C184.48 270.718 168.311 292.096 164.983 303.026C165.005 302.971 161.195 309.153 149.788 314.853Z"
              fill="#86FF85"
            />
            <path
              d="M488.011 397.302C487.125 400.245 486.599 403.363 485.296 406.055C480.02 417.236 470.901 423.418 458.717 424.14C448.054 424.774 437.326 424.326 426.62 424.359H422.985V434.905L396.8 413.976C405.481 407.04 413.888 400.333 422.854 393.189V403.407C424.102 403.517 424.967 403.637 425.832 403.648C435.837 403.648 445.832 403.648 455.838 403.648C465.613 403.648 469.85 396.241 464.957 387.762C450.2 362.154 435.418 336.556 420.61 310.969C418.65 307.589 417.599 304.186 419.187 300.433C420.774 296.681 423.358 294.427 427.485 294C431.863 293.541 435.399 294.985 437.687 298.814C441.158 304.646 444.496 310.554 447.89 316.44C459.45 336.516 471.109 356.548 482.494 376.723C484.848 380.913 486.194 385.661 487.968 390.158L488.011 397.302Z"
              fill="white"
            />
            <path
              d="M407.922 246.845L415.913 242.305C415.913 243.191 415.913 243.683 415.913 244.165L412.191 274.864C411.745 274.87 411.3 274.818 410.867 274.711C401.321 270.663 391.786 266.593 381.66 262.272C384.55 260.488 387.013 258.99 389.673 257.294C389.312 256.55 389.027 255.849 388.655 255.193C383.97 247.053 379.273 238.921 374.566 230.795C369.749 222.513 361.265 222.579 356.449 230.927L310.93 309.842C307.942 315.017 303.837 317.435 299.37 316.658C292.036 315.4 288.357 307.763 292.046 301.002C295.922 293.901 300.082 286.954 304.088 279.941C315.605 259.956 327.125 239.964 338.649 219.964C350.986 198.586 379.459 198.389 392.147 219.647C396.909 227.623 401.419 235.74 406.061 243.793C406.63 244.734 407.21 245.631 407.922 246.845Z"
              fill="white"
            />
            <path
              d="M263.266 350.815L255.045 345.957L285.588 332.927L289.551 365.836L281.45 361.46C280.891 362.291 280.355 363.003 279.939 363.747C275.396 371.613 271.181 379.742 266.222 387.302C261.263 394.862 265.324 403.877 275.648 403.713C304.953 403.385 334.248 403.614 363.553 403.571C367.199 403.571 370.581 404.161 373.099 406.984C374.442 408.354 375.355 410.086 375.726 411.968C376.097 413.849 375.911 415.798 375.19 417.575C374.569 419.386 373.44 420.98 371.938 422.167C370.435 423.354 368.623 424.084 366.717 424.27C365.726 424.391 364.726 424.435 363.728 424.402C334.324 424.402 304.92 424.402 275.516 424.402C260.847 424.402 249.123 416.415 244.7 403.538C243.358 399.962 242.786 396.144 243.02 392.332C243.254 388.521 244.289 384.801 246.057 381.416C250.83 372.313 256.096 363.473 261.154 354.513C261.843 353.386 262.434 352.27 263.266 350.815Z"
              fill="white"
            />
            <path
              d="M232.998 283.486C232.998 283.486 214.935 300.127 197.813 306.779"
              stroke="#122B1D"
              strokeMiterlimit="10"
            />
            <path
              d="M237.76 300.127C237.76 300.127 214.453 321.035 204.918 324.842"
              stroke="#122B1D"
              strokeMiterlimit="10"
            />
            <path
              d="M234.902 321.505C234.902 321.505 219.215 335.29 212.559 337.664"
              stroke="#122B1D"
              strokeMiterlimit="10"
            />
            <path
              d="M172.635 528.743H126.624V631.4H172.635V528.743Z"
              fill="#00CD4B"
            />
            <path
              d="M739.347 214.724H631.288V261.769H739.347V214.724Z"
              fill="#1D4831"
            />
            <path
              d="M517.043 706.956H738.252V608.589C738.252 608.589 697.748 587.2 683.954 582.44C683.954 582.44 669.208 619.989 638.305 619.989C638.305 619.989 614.046 623.796 606.919 593.381C606.919 593.381 559.365 612.385 551.756 631.4C544.148 650.415 517.043 706.956 517.043 706.956Z"
              fill="#00CD4B"
            />
            <path
              d="M713.96 613.808C713.96 613.808 702.542 606.149 682.575 641.849C662.607 677.548 648.332 707.908 648.332 707.908"
              stroke="#86FF85"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M665.169 538.01C665.169 538.01 642.344 574.727 607.39 578.644L608.102 551.915L665.169 538.01Z"
              fill="#CCE2DB"
            />
            <path
              d="M596.454 437.016C596.454 437.016 577.438 460.309 576.004 496.424C574.57 532.54 593.443 547.167 602.157 550.603C614.527 555.471 656.893 553.885 668.256 533.491C668.256 533.491 685.859 542.999 698.218 532.069C710.578 521.139 712.964 500.702 691.081 501.654L695.843 454.128L657.32 422.761L596.454 437.016Z"
              fill="#E7F2EF"
            />
            <path
              d="M646.165 478.438C648.39 478.438 650.193 476.636 650.193 474.412C650.193 472.188 648.39 470.386 646.165 470.386C643.94 470.386 642.136 472.188 642.136 474.412C642.136 476.636 643.94 478.438 646.165 478.438Z"
              fill="#122B1D"
            />
            <path
              d="M601.577 464.544C603.802 464.544 605.606 462.741 605.606 460.517C605.606 458.294 603.802 456.491 601.577 456.491C599.352 456.491 597.548 458.294 597.548 460.517C597.548 462.741 599.352 464.544 601.577 464.544Z"
              fill="#122B1D"
            />
            <path
              d="M591.221 434.642L637.352 447.475L654.944 429.894L648.759 450.801L687.753 461.26C687.753 461.26 684.469 493.098 691.037 501.654C691.037 501.654 700.079 500.702 703.407 505.45C703.407 505.45 720.047 470.757 702.455 434.171C702.455 434.171 708.158 411.83 727.633 424.182C747.108 436.535 808.949 490.242 828.927 420.386C828.927 420.386 804.198 431.786 782.325 417.531C760.453 403.275 708.618 369.534 689.121 420.386C689.187 420.386 643.056 379.512 591.221 434.642Z"
              fill="#1D4831"
            />
            <path
              d="M596.695 506.643C596.695 506.643 617.735 507.737 642.344 490.954C642.344 490.954 641.983 519.827 624.511 525.888C607.04 531.949 596.695 506.643 596.695 506.643Z"
              fill="#1D4831"
            />
            <path
              d="M639.52 507.004C639.52 507.004 617.407 503.438 614.911 525.888C614.911 525.888 621.337 529.455 629.536 523.043C634.549 518.949 638.06 513.308 639.52 507.004Z"
              fill="#00CD4B"
            />
            <path
              d="M619.158 490.627C619.056 490.641 618.953 490.641 618.852 490.627L601.227 485.419L602.759 484.117C609.973 477.935 618.786 457.969 618.873 457.772C618.999 457.521 619.216 457.328 619.48 457.233C619.743 457.138 620.034 457.147 620.291 457.26C620.547 457.372 620.751 457.578 620.86 457.836C620.97 458.095 620.975 458.385 620.877 458.647C620.537 459.435 612.82 476.907 605.551 484.434L619.432 488.526C619.722 488.568 619.984 488.724 620.159 488.958C620.335 489.193 620.41 489.488 620.368 489.779C620.326 490.069 620.17 490.33 619.935 490.506C619.7 490.681 619.405 490.756 619.114 490.714L619.158 490.627Z"
              fill="#00CD4B"
            />
            <path
              d="M681.458 533.557C680.165 533.581 678.876 533.385 677.649 532.978C677.399 532.865 677.201 532.663 677.093 532.411C676.985 532.159 676.976 531.876 677.066 531.618C677.157 531.36 677.342 531.145 677.583 531.016C677.825 530.887 678.106 530.853 678.371 530.921C681.929 532.168 687.906 530.68 691.957 528.557C694.759 527.091 695.985 525.702 696.215 524.892C695.722 523.678 688.442 523.164 680.955 523.798L678.393 524.006L680.013 522.015C684.819 516.107 699.576 512.168 700.2 512.026C700.473 511.972 700.757 512.023 700.993 512.171C701.23 512.318 701.401 512.55 701.473 512.819C701.544 513.089 701.509 513.375 701.377 513.62C701.244 513.865 701.023 514.05 700.758 514.138C700.627 514.138 689.548 517.113 683.823 521.424C688.574 521.194 696.04 521.227 697.879 523.448C698.117 523.723 698.283 524.054 698.361 524.409C698.44 524.764 698.428 525.133 698.328 525.483C697.704 527.748 694.715 529.608 692.975 530.516C689.412 532.38 685.477 533.419 681.458 533.557Z"
              fill="#00CD4B"
            />
            <path
              d="M572.797 482.431C572.59 482.432 572.388 482.372 572.217 482.256C572.095 482.179 571.99 482.079 571.907 481.962C571.824 481.845 571.766 481.712 571.734 481.572C571.703 481.431 571.699 481.286 571.724 481.145C571.748 481.003 571.8 480.868 571.877 480.747C574.953 475.9 576.026 472.169 574.888 470.254C573.749 468.34 570.761 468.526 570.728 468.526L568.21 468.679L576.596 458.537C576.781 458.313 577.048 458.173 577.338 458.146C577.627 458.12 577.916 458.209 578.139 458.395C578.363 458.58 578.503 458.847 578.53 459.137C578.557 459.426 578.467 459.714 578.281 459.937L572.808 466.502C573.611 466.634 574.378 466.933 575.059 467.379C575.74 467.826 576.319 468.41 576.76 469.095C578.38 471.841 577.351 476.13 573.706 481.873C573.614 482.036 573.483 482.173 573.324 482.27C573.165 482.368 572.983 482.423 572.797 482.431Z"
              fill="#00CD4B"
            />
            <path
              d="M613.093 706.956L521.794 582.44C521.794 582.44 527.027 550.602 522.276 540.624C517.525 530.646 508.953 542.998 509.435 558.206C509.435 558.206 477.568 514.957 469.959 519.235C462.351 523.513 469.489 535.395 469.489 535.395C469.489 535.395 462.351 517.813 454.272 522.561C446.193 527.309 453.32 540.624 453.32 540.624C453.32 540.624 443.807 534.443 449.039 555.35C449.039 555.35 444.288 560.11 450.944 576.269C457.6 592.428 504.673 666.092 504.673 666.092L530.836 706.956C530.836 706.956 614.046 707.907 613.093 706.956Z"
              fill="#E7F2EF"
            />
            <path
              d="M479.232 551.38C479.042 551.38 478.855 551.331 478.69 551.237C478.525 551.143 478.387 551.007 478.29 550.844L465.46 529.214C465.312 528.965 465.269 528.667 465.341 528.386C465.413 528.105 465.594 527.863 465.843 527.715C466.093 527.567 466.391 527.525 466.673 527.597C466.954 527.668 467.195 527.849 467.343 528.098L480.184 549.728C480.332 549.978 480.375 550.276 480.303 550.557C480.231 550.838 480.051 551.079 479.801 551.227C479.628 551.326 479.431 551.379 479.232 551.38Z"
              fill="#CCE2DB"
            />
            <path
              d="M465.778 565.428C465.589 565.429 465.403 565.381 465.238 565.289C465.073 565.197 464.934 565.064 464.836 564.902C462.647 561.347 451.7 539.848 451.251 538.929C451.129 538.672 451.112 538.378 451.203 538.108C451.295 537.839 451.488 537.616 451.741 537.486C451.995 537.357 452.289 537.331 452.561 537.414C452.833 537.498 453.062 537.684 453.199 537.934C453.32 538.163 464.617 560.285 466.719 563.776C466.868 564.024 466.912 564.321 466.843 564.602C466.773 564.883 466.595 565.125 466.347 565.274C466.175 565.377 465.978 565.43 465.778 565.428Z"
              fill="#CCE2DB"
            />
            <path
              d="M460.786 578.228C460.619 578.228 460.454 578.189 460.304 578.115C460.154 578.041 460.023 577.934 459.921 577.802C457.502 574.662 447.397 554.487 446.97 553.623C446.901 553.494 446.859 553.352 446.845 553.206C446.832 553.06 446.848 552.913 446.892 552.773C446.937 552.634 447.009 552.505 447.104 552.393C447.2 552.282 447.316 552.191 447.448 552.126C447.579 552.061 447.722 552.023 447.868 552.014C448.015 552.005 448.161 552.025 448.3 552.074C448.438 552.123 448.565 552.199 448.673 552.298C448.781 552.396 448.869 552.516 448.93 552.649C452.532 559.848 459.822 574.093 461.651 576.467C461.827 576.696 461.905 576.986 461.869 577.273C461.832 577.561 461.682 577.821 461.453 577.999C461.262 578.147 461.028 578.228 460.786 578.228Z"
              fill="#CCE2DB"
            />
            <path
              d="M144.074 221.704C119.114 206.737 113.761 205.665 113.761 205.665L52.0632 186.42C52.0632 186.42 4.99051 201.037 -17.8452 222.415C-40.681 243.793 -32.0765 270.182 -27.829 285.149C-23.5815 300.115 -7.85048 347.171 -7.85048 347.171C-7.85048 347.171 17.8206 310.815 61.3355 315.804L44.2141 275.171H148.978C152.571 262.679 157.222 250.517 162.881 238.815C157.495 232.163 151.201 225.938 144.074 221.704Z"
              fill="#1D4831"
            />
            <path
              d="M162.881 238.815C157.222 250.517 152.571 262.68 148.978 275.171H184.009C184.009 275.171 176.368 255.478 162.881 238.815Z"
              fill="#00CD4B"
            />
            <path
              d="M180.834 116.914C180.834 116.914 192.603 106.936 198.35 112.636C204.097 118.336 194.792 139.014 184.797 141.147C174.803 143.281 170.183 141.87 170.183 141.87L168.399 126.553L180.834 116.914Z"
              fill="#00CD4B"
            />
            <path
              d="M83.0874 107.286L52.0632 186.42C52.0632 186.42 73.1036 227.054 113.761 205.665L129.81 171.453L83.0874 107.286Z"
              fill="#86FF85"
            />
            <path
              d="M83.0874 107.286C83.0874 107.286 70.9689 173.237 117.68 196.398L129.81 171.453L83.0874 107.286Z"
              fill="#00CD4B"
            />
            <path
              d="M97.7128 80.5578C97.7128 80.5578 98.074 60.9522 82.7371 61.3132C67.4001 61.6742 53.8476 97.6691 83.0874 107.264C83.0874 107.264 75.2493 154.309 112.645 171.07C150.04 187.831 174.354 132.931 174.354 132.931L192.898 88.3804C192.898 88.3804 204.305 47.3857 177.912 37.4078C151.518 27.4299 115.546 17.824 97.7128 80.5578Z"
              fill="#86FF85"
            />
            <path
              d="M77.7343 95.5583C77.5905 95.5669 77.4464 95.5472 77.3103 95.5002C77.1742 95.4532 77.0487 95.3799 76.9409 95.2844C76.8332 95.1889 76.7453 95.073 76.6823 94.9436C76.6193 94.8141 76.5825 94.6736 76.5739 94.5299C76.5652 94.3863 76.585 94.2423 76.6321 94.1063C76.6791 93.9703 76.7525 93.8447 76.848 93.737C76.9436 93.6293 77.0595 93.5416 77.189 93.4786C77.3185 93.4157 77.4591 93.3788 77.6029 93.3702C77.9204 93.3702 85.3863 92.2761 86.6453 85.3507C86.8642 84.2566 86.7219 83.4252 86.2293 83.0532C84.6967 81.8825 79.7814 83.3376 76.7819 84.7599L74.6909 85.7445L75.2492 83.5564C77.154 75.8979 84.5543 73.2722 84.8718 73.1628C85.0077 73.1153 85.1515 73.0952 85.2952 73.1033C85.4388 73.1115 85.5795 73.1478 85.7091 73.2103C85.8387 73.2728 85.9548 73.3601 86.0506 73.4674C86.1464 73.5747 86.2201 73.6998 86.2675 73.8356C86.315 73.9714 86.3352 74.1152 86.3271 74.2588C86.3189 74.4024 86.2825 74.5429 86.22 74.6724C86.1574 74.802 86.07 74.9179 85.9627 75.0137C85.8553 75.1094 85.7302 75.1831 85.5943 75.2306C82.4364 76.4882 79.8184 78.8105 78.194 81.795C80.9746 80.7009 85.3206 79.6069 87.5648 81.3136C88.3858 81.9482 89.2616 83.2283 88.8018 85.6899C87.2473 94.2236 77.9751 95.5365 77.8547 95.5365L77.7343 95.5583Z"
              fill="#00CD4B"
            />
            <path
              d="M108.791 134.977C107.796 133.227 107.293 131.24 107.335 129.227C107.377 127.214 107.964 125.251 109.032 123.544C112.678 117.165 120.428 121.542 123.263 126.027C126.099 130.513 132.766 132.592 135.305 133.587C137.845 134.583 139.597 137.329 138.929 139.484C138.261 141.64 135.645 148.609 125.179 147.427C114.714 146.246 108.791 134.977 108.791 134.977Z"
              fill="#122B1D"
            />
            <path
              d="M125.256 147.428C125.256 147.428 126.964 132.308 108.113 125.404C107.465 127.21 107.256 129.144 107.504 131.046C107.751 132.948 108.448 134.765 109.536 136.345C113.28 141.958 118.83 146.75 125.256 147.428Z"
              fill="#00CD4B"
            />
            <path
              d="M133.269 95.1314C135.494 95.1314 137.298 93.3289 137.298 91.1053C137.298 88.8817 135.494 87.0791 133.269 87.0791C131.044 87.0791 129.241 88.8817 129.241 91.1053C129.241 93.3289 131.044 95.1314 133.269 95.1314Z"
              fill="#122B1D"
            />
            <path
              d="M175.361 111.171C177.586 111.171 179.389 109.368 179.389 107.144C179.389 104.921 177.586 103.118 175.361 103.118C173.136 103.118 171.332 104.921 171.332 107.144C171.332 109.368 173.136 111.171 175.361 111.171Z"
              fill="#122B1D"
            />
            <path
              d="M97.7128 80.5579C97.7128 80.5579 131.955 71.2912 144.786 40.2853C144.786 40.2853 168.672 58.8188 187.939 58.4578C187.939 58.4578 190.785 76.6412 194.715 84.8358C197.372 73.6987 199.042 62.3495 199.707 50.9196C200.419 34.1695 150.128 23.4694 146.209 22.4082C142.29 21.3469 111.254 3.80896 94.8447 66.9586C94.8556 67.0133 98.7856 73.4246 97.7128 80.5579Z"
              fill="#122B1D"
            />
            <path
              d="M152.865 133.73L151.562 133.271C151.179 133.139 142.06 129.988 138.031 126.706C137.92 126.615 137.827 126.503 137.759 126.376C137.691 126.249 137.649 126.11 137.635 125.967C137.621 125.823 137.635 125.679 137.676 125.541C137.718 125.403 137.787 125.275 137.878 125.163C137.969 125.052 138.082 124.96 138.209 124.892C138.335 124.824 138.475 124.782 138.618 124.767C138.761 124.753 138.906 124.767 139.044 124.809C139.182 124.851 139.31 124.919 139.421 125.01C142.322 127.384 148.431 129.813 151.047 130.787C152.744 121.859 162.575 93.2822 163.013 92.0022C163.114 91.7379 163.315 91.5235 163.572 91.404C163.829 91.2844 164.122 91.2691 164.39 91.3612C164.658 91.4534 164.88 91.6457 165.009 91.8979C165.138 92.15 165.164 92.4423 165.082 92.7133C164.972 93.0416 153.707 125.82 153.04 132.384L152.865 133.73Z"
              fill="#122B1D"
            />
            <path
              d="M44.2141 275.171L29.95 243.093L55.4459 275.171H44.2141Z"
              fill="black"
            />
            <path
              d="M180.101 136.224C179.85 136.226 179.607 136.141 179.411 135.985C179.216 135.829 179.08 135.61 179.026 135.365C178.972 135.121 179.004 134.865 179.116 134.641C179.228 134.417 179.413 134.239 179.641 134.135C186.21 131.093 187.468 129.649 187.698 129.233C186.954 128.741 183.856 128.511 180.9 128.73L178.36 128.927L179.959 126.947C184.874 120.908 190.216 120.842 190.446 120.842C190.736 120.842 191.015 120.957 191.22 121.162C191.425 121.368 191.541 121.646 191.541 121.936C191.541 122.226 191.425 122.504 191.22 122.71C191.015 122.915 190.736 123.03 190.446 123.03C190.271 123.03 187.02 123.129 183.44 126.433H183.549C188.224 126.433 189.603 127.592 189.888 128.621C190.26 130.076 189.395 131.99 180.561 136.071C180.422 136.159 180.264 136.212 180.101 136.224Z"
              fill="#1D4831"
            />
          </svg>
        </div>
        <div className="holder">
          <div className="quotation">
            <svg
              width="44"
              height="27"
              className="icon"
              viewBox="0 0 44 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.0449 26.0259C24.3969 26.0259 23.8929 25.81 23.5329 25.378C23.1729 24.874 23.0289 24.262 23.1009 23.5419L26.1249 3.88595C26.2689 2.94995 26.6289 2.12195 27.2049 1.40195C27.7809 0.681949 28.6449 0.321949 29.7969 0.321949H41.0289C41.6049 0.321949 42.0729 0.537948 42.4329 0.969947C42.8649 1.40195 43.0809 1.86995 43.0809 2.37395C43.0809 2.87795 43.0089 3.30995 42.8649 3.66995L35.3049 23.11C35.0169 23.83 34.5849 24.514 34.0089 25.162C33.5049 25.738 32.6769 26.0259 31.5249 26.0259H25.0449ZM2.90492 26.0259C2.25692 26.0259 1.71692 25.81 1.28492 25.378C0.92492 24.874 0.78092 24.262 0.85292 23.5419L3.98492 3.88595C4.12892 2.94995 4.48892 2.12195 5.06492 1.40195C5.64092 0.681949 6.50492 0.321949 7.65692 0.321949H18.8889C19.4649 0.321949 19.9329 0.537948 20.2929 0.969947C20.7249 1.40195 20.9409 1.86995 20.9409 2.37395C20.9409 2.87795 20.8329 3.30995 20.6169 3.66995L13.1649 23.11C12.8769 23.83 12.4449 24.514 11.8689 25.162C11.3649 25.738 10.5369 26.0259 9.38492 26.0259H2.90492Z"
                fill="#3DDC97"
              />
            </svg>
            <p className="sectionparagraph">
              I sort the waste for recycling, because the recycling truck passes
              on the street and we take advantage of it, but if the truck didn't
              pass every week, I don't know if we would do all of that.
            </p>
            <div className="author">Fernando Tavolaro</div>
          </div>
          <div className="quotation">
            <svg
              width="44"
              height="27"
              className="icon"
              viewBox="0 0 44 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.0449 26.0259C24.3969 26.0259 23.8929 25.81 23.5329 25.378C23.1729 24.874 23.0289 24.262 23.1009 23.5419L26.1249 3.88595C26.2689 2.94995 26.6289 2.12195 27.2049 1.40195C27.7809 0.681949 28.6449 0.321949 29.7969 0.321949H41.0289C41.6049 0.321949 42.0729 0.537948 42.4329 0.969947C42.8649 1.40195 43.0809 1.86995 43.0809 2.37395C43.0809 2.87795 43.0089 3.30995 42.8649 3.66995L35.3049 23.11C35.0169 23.83 34.5849 24.514 34.0089 25.162C33.5049 25.738 32.6769 26.0259 31.5249 26.0259H25.0449ZM2.90492 26.0259C2.25692 26.0259 1.71692 25.81 1.28492 25.378C0.92492 24.874 0.78092 24.262 0.85292 23.5419L3.98492 3.88595C4.12892 2.94995 4.48892 2.12195 5.06492 1.40195C5.64092 0.681949 6.50492 0.321949 7.65692 0.321949H18.8889C19.4649 0.321949 19.9329 0.537948 20.2929 0.969947C20.7249 1.40195 20.9409 1.86995 20.9409 2.37395C20.9409 2.87795 20.8329 3.30995 20.6169 3.66995L13.1649 23.11C12.8769 23.83 12.4449 24.514 11.8689 25.162C11.3649 25.738 10.5369 26.0259 9.38492 26.0259H2.90492Z"
                fill="#3DDC97"
              />
            </svg>
            <p className="sectionparagraph">
              The biggest difficulty in separating waste for me is not knowing
              the amount of food waste allowed. I try to keep everything
              extremely clean, but it is hard, because there are some materials
              that make cleaning a difficult task.
            </p>
            <div className="author">Laís Soares</div>
          </div>
          <br />
          <br />
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <section className="container -divider">
        <hr className="divider -light" />
      </section>
      <br />
      <br />
      <section className="casesection">
        <div className="container">
          <div className="holder">
            <p className="sectionparagraph">
              With the interviews I was able to understand a little better the
              way people felt or thought about the subject. To avoid
              generalizations, I created a qualitative persona: Juliana
              Medeiros, to represent this group of people who wants to recycle
              and make right choices. With this persona, I developed a User
              Journey Map, in which I could see the pain points and
              opportunities in each step.
            </p>
          </div>
        </div>
      </section>
      <section className="casesection">
        <div className="container">
          <img src={usermapImage} alt="" />
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <section className="container -divider -secondary">
        <div className="title -black">Define & Develop</div>
        <DividerWithIllustration flagBg="black" />
        <hr className="divider -light" />
      </section>
      <br />
      <br />
      <section className="casesection">
        <div className="container">
          <div className="holder">
            <p className="sectionparagraph">
              After a long process of research and ideation, I had a description
              of what I wanted my product to be:
            </p>
            <br />
            <p className="sectionparagraph">
              Brazil is the 4th largest producer of plastic waste in the world,
              behind the United States, China and India. And it recycles only
              145,043 tones of garbage, or 1.2%.
            </p>

            <br />
            <br />
            <p className="sectiontitle -nomargin">
              I would not like to create a solution where the user would be
              rewarded for the amount of waste they recycle. Therefore, the
              purpose of this app is nothing more than to reward them for how
              much knowledge on the subject they acquire and how many people
              they encourage to join the cycle. The idea is for the app to be
              more of an educational proposal in order to create awareness for
              the user and their contact network.
            </p>

            <br />
            <br />

            <p className="sectionparagraph">
              To come up with this solution, I thought the targeted audience
              that I interviewed had difficulty to find information in one place
              about recycling. Given this, I know that Duolingo has a high
              bounce rate, so I decided to recompensate, with coupons and
              discounts, the users with the knowledge acquired over time. After
              a long process of research and ideation, I had a description of
              what I wanted my product to be:
            </p>

            <br />
            <br />
            <br />
            <p className="sectionparagraph">
              I would not like to create a solution where the user would be
              rewarded for the amount of waste they recycle. Therefore, the
              purpose of this app is nothing more than to reward them for how
              much knowledge on the subject they acquire and how many people
              they encourage to join the cycle. The idea is for the app to be
              more of an educational proposal in order to create awareness for
              the user and their contact network.
            </p>
          </div>
        </div>
      </section>
      <section className="casesection">
        <div className="container">
          <div className="holder">
            <h3 className="sectiontitle -nomargin">User Flow</h3>
          </div>
        </div>
      </section>
      <section className="casesection">
        <img src={userflowImage} alt="" />
      </section>
      <section className="casesection">
        <div className="container">
          <div className="holder">
            <h3 className="sectiontitle">Wireframes</h3>
            <p className="sectionparagraph">
              After having a better vision of the app with the Wireframes
              design, I started to develop the layout and prototype it. At this
              point, I had to rush with the wireframe, so I did some iterations
              in the final design some time after I delivered this project to
              the company I was applying for.
            </p>
          </div>
        </div>
      </section>
      <section className="casesection">
        <img src={wireframesImage} alt="" />
      </section>
      <br />
      <br />
      <br />
      <section className="casesection container -fullstory">
        <div className="holder">
          <p className="sectiontitle">Some previous designs</p>
          <ul className="sectionlist">
            <li>
              Since I had little time to execute the layout, I decided to
              revisit the UI Design afterwards time. Here are some reasons:
            </li>
            <li>
              In general, there was a lot of white spaces. This can be good, but
              in my opinion this can also show a lack of personality.{" "}
            </li>
            <li>
              I chose a plain typography. This is another thing that I did to
              give more personality to the app.
            </li>
            <li>The illustrations had some flaws and were badly executed. </li>
            <li>
              In the quiz section, the feedback was boring and could be
              confusing.{" "}
            </li>
            <li>
              Everytime the user had to comeback to the home to access the quiz
              feature. So in the newer version, I put a button in the navigation
              bar.
            </li>
          </ul>
          <br />
          <p className="sectionparagraph">
            Below, you can see more about the first version of the designs.
          </p>
          <br />
        </div>
      </section>
      <br />
      <br />
      <br />
      <section className="casesection -grid">
        <div className="container">
          <img className="image" src={prev1} alt="" />
          <img className="image" src={prev2} alt="" />
          <img className="image" src={prev3} alt="" />
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <section className="container -divider -secondary -stuck">
        <div className="title -pink">Deliver</div>
        <DividerWithIllustration />
        <hr className="divider -light" />
      </section>
      <section className="casesection -onboarding">
        <div className="container">
          <div className="holder">
            <video
              className="videoprint"
              autoPlay={true}
              muted
              loop={true}
              width="100%"
              height="100%"
            >
              <source src={videoOnboarding} type="video/mp4" />
            </video>
          </div>
          <div className="holder">
            <h3 className="sectiontitle -huge">Onboarding</h3>
            <p className="sectionparagraph">
              Short and clear description of the app, what is for and how to use
              it.
            </p>
            <div className="illustrationwrapper">
              <svg
                width="233"
                height="121"
                viewBox="0 0 233 121"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M110.269 106.509C110.269 100.637 107.476 95.5915 103.491 93.4195C103.298 93.2865 103.087 93.1802 102.866 93.1035C101.691 92.5619 100.414 92.2778 99.1213 92.2703C96.6428 92.0193 94.1454 92.0193 91.6669 92.2703C91.8428 93.2038 92.1257 94.114 92.5098 94.9825C89.7116 97.5682 87.9225 101.769 87.9225 106.509C87.9225 112.014 90.3767 116.789 93.972 119.15C91.621 119.909 89.8549 120.547 89.8549 120.547C89.8549 120.547 100.75 122.517 105.452 118.248C108.353 115.662 110.269 111.37 110.269 106.509Z"
                  fill="#1D4831"
                />
                <path
                  d="M91.6784 120.747C97.8539 120.747 102.86 114.372 102.86 106.508C102.86 98.6444 97.8539 92.2695 91.6784 92.2695C85.5029 92.2695 80.4967 98.6444 80.4967 106.508C80.4967 114.372 85.5029 120.747 91.6784 120.747Z"
                  fill="#1D4831"
                />
                <path
                  d="M220.492 106.509C220.492 100.636 217.699 95.5913 213.714 93.4193C213.52 93.2874 213.31 93.1812 213.089 93.1033C211.914 92.5616 210.637 92.2775 209.344 92.2701C206.866 92.0194 204.368 92.0194 201.89 92.2701C202.069 93.2035 202.354 94.1134 202.738 94.9822C199.94 97.568 198.117 101.768 198.117 106.509C198.117 112.013 200.577 116.788 204.172 119.15C201.815 119.908 200.049 120.546 200.049 120.546C200.049 120.546 210.978 122.517 215.652 118.248C218.576 115.662 220.492 111.37 220.492 106.509Z"
                  fill="#1D4831"
                />
                <path
                  d="M201.901 120.747C208.077 120.747 213.083 114.372 213.083 106.508C213.083 98.6444 208.077 92.2695 201.901 92.2695C195.726 92.2695 190.719 98.6444 190.719 106.508C190.719 114.372 195.726 120.747 201.901 120.747Z"
                  fill="#1D4831"
                />
                <path d="M122.156 0H29.6802V101.09H122.156V0Z" fill="#00CD4B" />
                <path d="M178.202 0H122.156V101.09H178.202V0Z" fill="#1D4831" />
                <path
                  d="M72.5318 106.509C72.5318 100.637 69.7393 95.5915 65.754 93.4195C65.5609 93.2865 65.3506 93.1802 65.129 93.1035C63.9543 92.5619 62.6777 92.2778 61.3846 92.2703C58.9061 92.0193 56.4086 92.0193 53.9301 92.2703C54.1061 93.2038 54.3889 94.114 54.773 94.9825C51.9748 97.5682 50.157 101.769 50.157 106.509C50.157 112.014 52.6112 116.789 56.2066 119.15C53.8556 119.909 52.0894 120.547 52.0894 120.547C52.0894 120.547 62.9844 122.517 67.6865 118.248C70.6166 115.662 72.5318 111.37 72.5318 106.509Z"
                  fill="#1D4831"
                />
                <path
                  d="M53.9417 120.747C60.1172 120.747 65.1234 114.372 65.1234 106.508C65.1234 98.6444 60.1172 92.2695 53.9417 92.2695C47.7662 92.2695 42.76 98.6444 42.76 106.508C42.76 114.372 47.7662 120.747 53.9417 120.747Z"
                  fill="#86FF85"
                />
                <path
                  d="M217.556 71.4003L208.57 49.732C207.874 48.0541 206.698 46.6204 205.189 45.6121C203.681 44.6037 201.908 44.0658 200.095 44.0664H147.747L156.349 104.457H232.006V85.1677C232.006 84.8296 231.931 84.4957 231.787 84.1898C231.644 83.8839 231.434 83.6135 231.174 83.398L218.869 73.17C218.295 72.6946 217.845 72.0875 217.556 71.4003Z"
                  fill="#1D4831"
                />
                <path
                  d="M173.402 65.5225H206.087C206.464 65.5225 206.835 65.4296 207.167 65.2519C207.499 65.0742 207.783 64.8173 207.992 64.5038C208.202 64.1903 208.332 63.8299 208.369 63.4544C208.407 63.0789 208.352 62.6998 208.209 62.3507L203.621 51.1574C203.449 50.7359 203.155 50.3753 202.777 50.1216C202.399 49.8678 201.955 49.7324 201.5 49.7324H168.884C168.508 49.7322 168.138 49.8245 167.806 50.0011C167.474 50.1778 167.191 50.4334 166.981 50.7455C166.771 51.0576 166.641 51.4166 166.601 51.791C166.562 52.1654 166.615 52.5438 166.756 52.8927L171.263 64.0802C171.435 64.5077 171.73 64.8738 172.111 65.131C172.493 65.3881 172.943 65.5246 173.402 65.5225Z"
                  fill="#EAF3F0"
                />
                <path
                  d="M42.2209 14.5605L8.22284 34.7808V68.4756L0 74.0895V101.05H42.2209V14.5605Z"
                  fill="#00CD4B"
                />
                <path
                  d="M168.815 71.4003L159.829 49.732C159.134 48.0541 157.957 46.6204 156.449 45.6121C154.94 44.6037 153.168 44.0658 151.354 44.0664H129.455V104.457H183.259V85.1677C183.259 84.8296 183.185 84.4957 183.041 84.1898C182.897 83.8839 182.688 83.6135 182.428 83.398L170.122 73.17C169.55 72.6949 169.101 72.0876 168.815 71.4003Z"
                  fill="#00CD4B"
                />
                <path
                  d="M168.184 106.509C168.184 100.636 165.391 95.5913 161.406 93.4193C161.211 93.2863 160.999 93.1801 160.775 93.1033C159.603 92.5616 158.328 92.2775 157.037 92.2701C154.558 92.0194 152.061 92.0194 149.582 92.2701C149.761 93.2035 150.046 94.1134 150.431 94.9822C147.633 97.568 145.809 101.768 145.809 106.509C145.809 112.013 148.269 116.788 151.864 119.15C149.508 119.908 147.742 120.546 147.742 120.546C147.742 120.546 158.671 122.517 163.339 118.248C166.269 115.662 168.184 111.37 168.184 106.509Z"
                  fill="#1D4831"
                />
                <path
                  d="M149.594 120.747C155.769 120.747 160.775 114.372 160.775 106.508C160.775 98.6444 155.769 92.2695 149.594 92.2695C143.418 92.2695 138.412 98.6444 138.412 106.508C138.412 114.372 143.418 120.747 149.594 120.747Z"
                  fill="#86FF85"
                />
                <path
                  d="M134.857 52.2668V63.7991C134.857 64.2563 135.038 64.6948 135.361 65.018C135.683 65.3413 136.121 65.5229 136.577 65.5229H156.383C156.667 65.5238 156.946 65.4544 157.196 65.321C157.446 65.1877 157.66 64.9945 157.818 64.7585C157.975 64.5225 158.072 64.2511 158.1 63.9684C158.128 63.6858 158.086 63.4006 157.977 63.1383L153.229 51.6117C153.1 51.296 152.88 51.0259 152.597 50.8357C152.314 50.6454 151.982 50.5435 151.641 50.543H136.577C136.121 50.543 135.683 50.7246 135.361 51.0479C135.038 51.3712 134.857 51.8096 134.857 52.2668Z"
                  fill="#EAF3F0"
                />
                <path
                  d="M198.919 90.2305H191.66C190.111 90.2305 188.856 91.4885 188.856 93.0403V93.046C188.856 94.5978 190.111 95.8558 191.66 95.8558H198.919C200.468 95.8558 201.724 94.5978 201.724 93.046V93.0403C201.724 91.4885 200.468 90.2305 198.919 90.2305Z"
                  fill="#EAF3F0"
                />
                <path
                  d="M223.943 89.4609H216.684C215.135 89.4609 213.88 90.7189 213.88 92.2707V92.2765C213.88 93.8283 215.135 95.0863 216.684 95.0863H223.943C225.492 95.0863 226.747 93.8283 226.747 92.2765V92.2707C226.747 90.7189 225.492 89.4609 223.943 89.4609Z"
                  fill="#EAF3F0"
                />
                <path
                  d="M53.9415 111.352C56.0444 111.352 57.749 109.183 57.749 106.508C57.749 103.833 56.0444 101.664 53.9415 101.664C51.8387 101.664 50.134 103.833 50.134 106.508C50.134 109.183 51.8387 111.352 53.9415 111.352Z"
                  fill="#1D4831"
                />
                <path
                  d="M148.321 111.352C150.424 111.352 152.128 109.183 152.128 106.508C152.128 103.833 150.424 101.664 148.321 101.664C146.218 101.664 144.513 103.833 144.513 106.508C144.513 109.183 146.218 111.352 148.321 111.352Z"
                  fill="#1D4831"
                />
                <path
                  d="M8.21704 53.7425L29.6802 40.9863"
                  stroke="#1D4831"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
                <path
                  d="M8.21704 68.2287L29.6802 55.4668"
                  stroke="#1D4831"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
                <path
                  d="M29.6802 22.0195V101.091"
                  stroke="#1D4831"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section className="casesection -quiz">
        <div className="container">
          <div className="holder">
            <div className="starwrapper">
              <svg
                width="262"
                height="262"
                viewBox="0 0 262 262"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M140.652 65.0163L196.201 17.7214L182.986 89.4573L182.685 91.0915L184.341 91.2242L257.082 97.0552L196.996 138.451L195.627 139.394L196.705 140.659L244.024 196.201L172.264 182.993L170.629 182.692L170.497 184.348L164.69 257.082L123.27 197.002L122.327 195.634L121.062 196.712L65.5448 244.024L78.7288 172.27L79.029 170.636L77.3731 170.504L4.66364 164.691L64.7192 123.277L66.0865 122.334L65.0096 121.069L17.7214 65.5449L89.4511 78.7354L91.0847 79.0358L91.2176 77.3801L97.0552 4.6637L138.444 64.7254L139.387 66.0933L140.652 65.0163Z"
                  fill="#3DDC97"
                  stroke="#3DDC97"
                  strokeWidth="3"
                />
              </svg>
            </div>
            <h3 className="sectiontitle -huge">Daily Quiz</h3>
            <p className="sectionparagraph">
              <strong>With questions about recycling</strong> <br />
              To start accumulating points, the user must answer a daily quiz,
              with 3 questions on the topic. Each question is worth 20 points,
              thus reaching a total of 60 points per day.
            </p>
            <div className="illustrationwrapper">
              <svg
                width="1202"
                height="465"
                viewBox="0 0 1202 465"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.8649 378.888L208.79 378.085C208.79 378.085 195.631 354.107 211.588 334.95L26.1482 331.057L20.8649 378.888Z"
                  fill="#122B1D"
                />
                <path
                  d="M206.519 346.988L24.363 347.22L22.1645 367.118L205.095 368.088C205.095 368.088 203.711 356.471 206.519 346.988Z"
                  fill="#3DDC97"
                />
                <path
                  d="M7.37303 353.177C5.91078 366.384 11.8587 377.88 20.658 378.855C29.4574 379.829 37.7761 369.912 39.2383 356.705C40.7006 343.498 34.7527 332.001 25.9533 331.027C17.154 330.053 8.83528 339.97 7.37303 353.177Z"
                  fill="#9CEAEF"
                />
                <path
                  d="M17.9981 354.354C17.5113 358.751 19.4929 362.579 22.4242 362.903C25.3555 363.228 28.1264 359.927 28.6132 355.53C29.1 351.133 27.1184 347.305 24.1871 346.981C21.2558 346.656 18.4849 349.958 17.9981 354.354Z"
                  fill="#122B1D"
                />
                <path
                  d="M211.192 334.838L240.241 357.518L208.79 378.085C208.79 378.085 195.526 359.301 211.192 334.838Z"
                  fill="#9CEAEF"
                />
                <path
                  d="M240.241 357.518L231.584 350.765C231.584 350.765 226.823 355.635 231.178 363.445L240.241 357.518Z"
                  fill="#122B1D"
                />
                <path
                  d="M249.006 358.721C262.747 356.247 269.571 351.954 280.117 343.165C298.929 327.489 318.416 312.254 338.117 297.721C362.314 279.871 388.295 261.285 416.562 250.721C432.588 244.731 451.916 236.05 468.895 243.832C483.068 250.328 487.134 267.082 486.673 281.387C485.457 319.094 470.211 355.866 465.006 393.165C462.78 409.121 458.436 434.781 477.451 442.387C491.166 447.873 508.473 439.722 520.117 432.943C550.907 415.018 577.641 386.865 603.006 362.276C663.943 303.205 721.781 241.187 780.117 179.609C832.184 124.65 883.948 73.0978 946.673 30.2761C974.359 11.3754 1044.88 -23.7098 1048.56 37.6095C1050.38 67.8599 1031.93 102.638 1021.78 129.943C1006.18 171.958 986.405 215.012 981.562 260.054C978.771 286.008 975.24 337.045 1007.01 347.054C1025.76 352.964 1046.87 346.384 1063.45 337.387C1095.1 320.22 1122.45 295.561 1148.56 271.165C1217.42 206.839 1287.89 145.77 1362.78 88.4984C1381.42 74.245 1400.39 60.8376 1419.9 47.8317C1423.44 45.4658 1441.01 35.9235 1441.01 32.7206"
                  stroke="#122B1D"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          <div className="holder">
            <video
              className="videoprint"
              autoPlay={true}
              muted
              loop={true}
              width="100%"
              height="100%"
            >
              <source src={videoQuiz} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
      <section className="casesection -waste">
        <div className="container">
          <div className="holder">
            <img src={printWaste} alt="" />
          </div>
          <div className="holder">
            <h3 className="sectiontitle -huge">Waste Collection</h3>
            <p className="sectionparagraph">
              Collection is the item that will offer the least reward, as we
              don't want to encourage the idea that producing more garbage would
              benefit the user. When the collection takes place at the user's
              residence, the cooperative must confirm the withdrawal and thus
              they will earn 10 points per week.
            </p>
          </div>
        </div>
      </section>
      <section className="casesection -redeem">
        <div className="container">
          <div className="holder">
            <div className="starwrapper"></div>
            <h3 className="sectiontitle -huge">Redeem Coupon</h3>
            <p className="sectionparagraph">
              As a reward for all the effort to educate themselves on the
              subject, the users will be able to exchange their points for
              discount coupons at partner supermarkets and pharmacies.
            </p>
          </div>
          <div className="holder">
            <img src={printRedeem1} alt="" />
            <img src={printRedeem2} alt="" />
          </div>
        </div>
      </section>
      <section className="casesection -center">
        <div className="container">
          <h3 className="sectiontitle -huge">FAQ</h3>
          <p className="sectionparagraph">
            In this section, the user has the possibility to consult the most
            frequently asked questions about recycling and about each material:
            plastic, paper, metal, glass and organic food. This is going to help
            them acquire knowledge about this subject and be prepared for the
            daily quiz.
          </p>
        </div>
      </section>
      <section className="casesection -gridbig -faq">
        <div className="container">
          <img className="image" src={print1} alt="" />
          <img className="image" src={print2} alt="" />
          <img className="image" src={print3} alt="" />
        </div>
        <br />
        <br />
        <br />
      </section>
      <section className="casesection -nopadding -bggreen">
        <img src={allprintsImage} className="allprints" alt="" />
      </section>
      <br />
      <br />
      <br />
      <br />
      <section className="casesection -carousel">
        <Carousel />
      </section>
      <br />
      <br />
      <br />
    </div>
  );
};
export default BoaVista;
