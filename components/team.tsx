'use client'

import Image from 'next/image'
import { useState } from 'react';
import { GoldHeading2, SlateHeading4 } from './util/headings'

const DownSVG = () => {
  return <>
    <svg height="66" width="36" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 25l16 16l16-16" fill="none" stroke="white" stroke-width="2" />
    </svg>
  </>
}

const UpSVG = () => {
  return <>
    <svg height="66" width="36" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 41L20 25L36 41" fill="none" stroke="white" stroke-width="2" />
    </svg>
  </>
}

export default function Team() {

  // State to manage the visibility of team member details
  const [showDetails, setShowDetails] = useState<{ [key: string]: boolean }>({});

  // Toggle the visibility of team member details
  const toggleDetails = (name: string) => {
    setShowDetails({ ...showDetails, [name]: !showDetails[name] });
  };

  return (
    <>
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6" data-aos="fade-up" >
          <div className="py-12 md:py-20 border-t border-gray-800">

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <GoldHeading2 text="Hackers for Good." fadeUp={false} />
              <SlateHeading4 text="Meet the team of white hat hackers behind Bakkhos Labs." fadeUp={false} />
            </div>
            <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">

              {/* 1st item */}
              <div className="bg-gray-50 rounded-lg shadow bg-gray-800 border-gray-700" data-aos="fade-up">
                <img className="w-9/12 rounded-full mx-auto p-5" src="/images/team/zeyu.jpg" alt="Zeyu Avatar" />
                <div className="p-5">
                  <div className="text-center">
                    <div className="grid grid-cols-3 items-center">
                      <div></div> {/* Empty div as spacer */}
                      <h3 className="col-start-2 col-end-3 text-xl font-bold tracking-tight text-gray-900 text-white text-center">
                        <a href="#">Zeyu (Zayne)</a>
                      </h3>
                      <div className="text-right">
                        <button onClick={() => toggleDetails('Zeyu')}>
                          {showDetails['Zeyu'] ? <UpSVG /> : <DownSVG />}
                        </button>
                      </div>
                    </div>
                  </div>
                  {showDetails['Zeyu'] && <>
                    <p className="mt-3 mb-4 font-light">
                      Zeyu was inspired to start Bakkhos Labs after witnessing a gap between
                      existing security training solutions and the security needs of modern organizations.
                      He has worked with ByteDance and Electrovolt (Cure53) to find numerous vulnerabilities
                      in critical <span className='text-amber-400 font-bold'>web and mobile applications</span>.
                    </p>
                    <p className="mt-3 mb-4 font-light">
                      Zeyu is a <span className='text-amber-400 font-bold'>bug bounty veteran</span>, having claimed the
                      lion's share of the bounties in time-limited programs by MINDEF Singapore and GovTech Singapore in 2022 and 2023.
                      Through bug bounty programs, he has helped various Fortune 500 companies secure their assets.
                    </p>
                    <p className="mt-3 mb-4 font-light">
                      Zeyu founded Social Engineering Experts, Singapore's <span className='text-amber-400 font-bold'>#1 CTF team</span> in
                      2022 and 2023, and is an active member of Water Paddler, an international CTF team. He is
                      the <span className='text-amber-400 font-bold'>lead organizer</span> for SEETF,
                      an annual CTF competition that attracts thousands of participants from around the world.
                    </p>
                  </>}
                </div>
              </div>

              {/* 2nd item */}
              <div className="bg-gray-50 rounded-lg shadow bg-gray-800 border-gray-700" data-aos="fade-up">
                <img className="w-9/12 rounded-full mx-auto p-5" src="/images/team/akash.png" alt="Akash Avatar" />
                <div className="p-5">
                  <div className="text-center">
                    <div className="grid grid-cols-3 items-center">
                      <div></div> {/* Empty div as spacer */}
                      <h3 className="col-start-2 col-end-3 text-xl font-bold tracking-tight text-gray-900 text-white text-center">
                        <a href="#">Akash</a>
                      </h3>
                      <div className="text-right">
                        <button onClick={() => toggleDetails('Akash')}>
                          {showDetails['Akash'] ? <UpSVG /> : <DownSVG />}
                        </button>
                      </div>
                    </div>
                  </div>
                  {showDetails['Akash'] && <>
                    <p className="mt-3 mb-4 font-light">
                      Akash's expertise in CTF competitions goes beyond participation, as he has taken on the role of
                      both <span className='text-amber-400 font-bold'>creator and host</span>.
                      Akash has <span className='text-amber-400 font-bold'>organized several successful CTF events</span>, including Geekcamp CTF in 2018 and 2019,
                      as well as Grey Cat The Flag in 2022 and 2023. These events provided platforms for aspiring
                      cybersecurity enthusiasts to showcase their skills and learn from one another.
                    </p>
                    <p className="mt-3 mb-4 font-light">
                      In addition to his involvement in organizing CTF competitions, Akash is an esteemed member
                      of <span className='text-amber-400 font-bold'>NUS Greyhats</span>. NUS Greyhats provides a supportive
                      environment for continuous learning and professional development, allowing Akash to further enhance
                      his skills and stay at the forefront of the ever-evolving field of cybersecurity.
                    </p>
                  </>}
                </div>
              </div>

              {/* 3rd item */}
              <div className="bg-gray-50 rounded-lg shadow bg-gray-800 border-gray-700" data-aos="fade-up">
                <img className="w-9/12 rounded-full mx-auto p-5" src="/images/team/devesh.jpg" alt="Devesh Avatar" />
                <div className="p-5">
                  <div className="text-center">
                    <div className="grid grid-cols-3 items-center">
                      <div></div> {/* Empty div as spacer */}
                      <h3 className="col-start-2 col-end-3 text-xl font-bold tracking-tight text-gray-900 text-white text-center">
                        <a href="#">Devesh</a>
                      </h3>
                      <div className="text-right">
                        <button onClick={() => toggleDetails('Devesh')}>
                          {showDetails['Devesh'] ? <UpSVG /> : <DownSVG />}
                        </button>
                      </div>
                    </div>
                  </div>
                  {showDetails['Devesh'] && <>
                    <p className="mt-3 mb-4 font-light">
                      Devesh is a passionate cybersecurity enthusiast with
                      a <span className='text-amber-400 font-bold'>wealth of experience and expertise</span> in the field.
                      Since 2016, he has been actively competing in CTF competitions, continuously challenging
                      himself and honing his skills in various aspects of cybersecurity.
                    </p>
                    <p>
                      Beyond participating in CTF events, Devesh has also been recognized for his contributions to the
                      community. He has actively contributed to competitions such as <span className='text-amber-400 font-bold'>NUS Greyhats' GreyCTF</span>,
                      where he develops and contributes captivating challenges.
                    </p>
                    <p>
                      His deep understanding of <span className='text-amber-400 font-bold'>web security</span> and meticulous approach to vulnerability assessment have
                      led to the identification and remediation of critical flaws in various digital infrastructures.
                    </p>
                  </>}
                </div>
              </div>

              {/* 4th item */}
              <div className="bg-gray-50 rounded-lg shadow bg-gray-800 border-gray-700" data-aos="fade-up">
                <img className="w-9/12 rounded-full mx-auto p-5" src="/images/team/ariana.jpg" alt="Ariana Avatar" />
                <div className="p-5">
                  <div className="text-center">
                    <div className="grid grid-cols-3 items-center">
                      <div></div> {/* Empty div as spacer */}
                      <h3 className="col-start-2 col-end-3 text-xl font-bold tracking-tight text-gray-900 text-white text-center">
                        <a href="#">Ariana</a>
                      </h3>
                      <div className="text-right">
                        <button onClick={() => toggleDetails('Ariana')}>
                          {showDetails['Ariana'] ? <UpSVG /> : <DownSVG />}
                        </button>
                      </div>
                    </div>
                  </div>
                  {showDetails['Ariana'] && <>
                    <p className="mt-3 mb-4 font-light">
                      Ariana is a highly skilled cybersecurity professional with nine years of experience in programming
                      and a strong passion for addressing intricate security challenges. Her exceptional track record
                      includes winning <span className='text-amber-400 font-bold'>first place</span> in at least seven CTF competitions, earning substantial cash prizes.
                      She has also made significant contributions to the cybersecurity community by organizing and providing
                      challenges in CTFs for three years, establishing herself as a respected figure in the industry.
                    </p>
                    <p className="mt-3 mb-4 font-light">
                      Ariana has published a <span className='text-amber-400 font-bold'>groundbreaking research paper</span> on cryptography, specifically focusing on fault
                      attacks on a post-quantum isogeny cryptosystem. Through her research, Ariana has shed light on
                      vulnerabilities in cutting-edge encryption methods and proposed innovative solutions.
                    </p>
                  </>}
                </div>
              </div>

              {/* 5th item */}
              <div className="bg-gray-50 rounded-lg shadow bg-gray-800 border-gray-700" data-aos="fade-up">
                <img className="w-9/12 rounded-full mx-auto p-5" src="/images/team/ravin.jpg" alt="Ravin Avatar" />
                <div className="p-5">
                  <div className="text-center">
                    <div className="grid grid-cols-3 items-center">
                      <div></div> {/* Empty div as spacer */}
                      <h3 className="col-start-2 col-end-3 text-xl font-bold tracking-tight text-gray-900 text-white text-center">
                        <a href="#">Ravin</a>
                      </h3>
                      <div className="text-right">
                        <button onClick={() => toggleDetails('Ravin')}>
                          {showDetails['Ravin'] ? <UpSVG /> : <DownSVG />}
                        </button>
                      </div>
                    </div>
                  </div>
                  {showDetails['Ravin'] && <>
                    <p className="mt-3 mb-4 font-light">
                      Ravin is a <span className='text-amber-400 font-bold'>penetration tester</span>,
                      widely recognized for his deep understanding of cybersecurity and his innovative approach to
                      unmasking vulnerabilities. Through his collaboration with <span className='text-amber-400 font-bold'>JustHacking Inc</span>,
                      Ravin has played a critical role in creating challenges, designing training sets, and organizing CTFs.
                    </p>
                    <p className="mt-3 mb-4 font-light">
                      In his professional capacity, Ravin takes a meticulous approach to assess and exploit potential
                      weaknesses in systems, providing a <span className='text-amber-400 font-bold'>realistic assessment</span> of
                      cyber risks. His adeptness at bridging the gap between a company's current security measures and looming
                      threats allows him to help organizations fortify their digital infrastructures against sophisticated cyber attacks.
                    </p>
                  </>}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
