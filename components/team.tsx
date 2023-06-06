import Image from 'next/image'

import TestimonialImage01 from '@/public/images/testimonial-01.jpg'
import TestimonialImage02 from '@/public/images/testimonial-02.jpg'
import TestimonialImage03 from '@/public/images/testimonial-03.jpg'

export default function Team() {
  return (
    <>
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20 border-t border-gray-800">

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 mb-4">Hackers for good.</h2>
              <p className="text-xl text-gray-400">
                Meet the team of white hat hackers behind Bakkhos Labs.
              </p>
            </div>
            <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">

              {/* 1st item */}
              <div className="bg-gray-50 rounded-lg shadow bg-gray-800 border-gray-700" data-aos="fade-up">
                <img className="w-max rounded-full mx-auto p-5" src="/images/team/zeyu.jpg" alt="Zeyu Avatar" />
                <div className="p-5">
                  <div className="text-center">
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 text-white">
                      <a href="#">Zeyu (Zayne)</a>
                    </h3>
                  </div>
                  <p className="mt-3 mb-4 font-light">
                    Zeyu was inspired to start Bakkhos Labs after witnessing a gap between
                    existing security training solutions and the security needs of modern organizations.
                    He is <span className='text-amber-400 font-bold'>hacking web and mobile applications</span> at 
                    ByteDance and Electrovolt (Cure53).
                  </p>
                  <p className="mt-3 mb-4 font-light">
                    Zeyu is a <span className='text-amber-400 font-bold'>bug bounty veteran</span>, having claimed the
                    lion's share of the bounties in time-limited programs by MINDEF Singapore and GovTech Singapore in 2022 and 2023.
                    He has helped various Fortune 500 companies secure their assets.
                  </p>
                  <p className="mt-3 mb-4 font-light">
                    Zeyu founded Social Engineering Experts, Singapore's <span className='text-amber-400 font-bold'>#1 CTF team</span> in 
                    2022 and 2023, and is an active member of Water Paddler, an international CTF team.
                  </p>
                </div>
              </div>

              {/* 2nd item */}
              <div className="bg-gray-50 rounded-lg shadow bg-gray-800 border-gray-700" data-aos="fade-up">
                <img className="w-max rounded-full mx-auto p-5" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar" />
                <div className="p-5">
                  <div className="text-center">
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 text-white">
                      <a href="#">Akash</a>
                    </h3>
                  </div>
                  <p className="mt-3 mb-4 font-light">
                    Akash is Akash.
                  </p>
                </div>
              </div>

              {/* 3rd item */}
              <div className="bg-gray-50 rounded-lg shadow bg-gray-800 border-gray-700" data-aos="fade-up">
                <img className="w-max rounded-full mx-auto p-5" src="/images/team/devesh.jpg" alt="Bonnie Avatar" />
                <div className="p-5">
                  <div className="text-center">
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 text-white">
                      <a href="#">Devesh</a>
                    </h3>
                  </div>
                  <p className="mt-3 mb-4 font-light">
                    Devesh is Devesh.
                  </p>
                </div>
              </div>

              {/* 4th item */}
              <div className="bg-gray-50 rounded-lg shadow bg-gray-800 border-gray-700" data-aos="fade-up">
                <img className="w-max rounded-full mx-auto p-5" src="/images/team/ariana.jpg" alt="Bonnie Avatar" />
                <div className="p-5">
                  <div className="text-center">
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 text-white">
                      <a href="#">Ariana</a>
                    </h3>
                  </div>
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
                </div>
              </div>

              {/* 5th item */}
              <div className="bg-gray-50 rounded-lg shadow bg-gray-800 border-gray-700" data-aos="fade-up">
                <img className="w-max rounded-full mx-auto p-5" src="/images/team/ravin.jpg" alt="Bonnie Avatar" />
                <div className="p-5">
                  <div className="text-center">
                    <h3 className="text-xl font-bold tracking-tight text-gray-900 text-white">
                      <a href="#">Ravin</a>
                    </h3>
                  </div>
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
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
