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
            <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">

              {/* 1st item */}
              <div class="bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" data-aos="fade-up">
                <img class="w-max rounded-full mx-auto p-5" src="/images/team/zeyu.jpg" alt="Zeyu Avatar" />
                <div class="p-5">
                  <div class="text-center">
                    <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Zeyu (Zayne)</a>
                    </h3>
                  </div>
                  <p class="mt-3 mb-4 font-light">
                    Zeyu was inspired to start Bakkhos Labs after witnessing a gap between
                    existing security training solutions and the security needs of the modern organizations.
                    He is <span className='text-amber-400 font-bold'>hacking web and mobile applications</span> at 
                    ByteDance and Electrovolt (Cure53).
                  </p>
                  <p class="mt-3 mb-4 font-light">
                    Zeyu is a <span className='text-amber-400 font-bold'>bug bounty veteran</span>, having claimed the
                    lion's share of the bounties in time-limited programs by MINDEF Singapore and GovTech Singapore in 2022 and 2023.
                    He has helped various Fortune 500 companies secure their assets.
                  </p>
                  <p class="mt-3 mb-4 font-light">
                    Zeyu founded Social Engineering Experts, Singapore's <span className='text-amber-400 font-bold'>#1 CTF team</span> in 
                    2022 and 2023, and is an active member of Water Paddler, an international CTF team.
                  </p>
                </div>
              </div>

              {/* 2nd item */}
              <div class="bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" data-aos="fade-up">
                <img class="w-max rounded-full mx-auto p-5" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar" />
                <div class="p-5">
                  <div class="text-center">
                    <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Akash</a>
                    </h3>
                  </div>
                  <p class="mt-3 mb-4 font-light">
                    (Why you were inspired to start Bakkhos Labs)
                  </p>
                  <p class="mt-3 mb-4 font-light">
                    (About You)
                  </p>
                </div>
              </div>

              {/* 3rd item */}
              <div class="bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" data-aos="fade-up">
                <img class="w-max rounded-full mx-auto p-5" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar" />
                <div class="p-5">
                  <div class="text-center">
                    <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Devesh</a>
                    </h3>
                  </div>
                  <p class="mt-3 mb-4 font-light">
                    Devesh is Devesh.
                  </p>
                </div>
              </div>

              {/* 4th item */}
              <div class="bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" data-aos="fade-up">
                <img class="w-max rounded-full mx-auto p-5" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar" />
                <div class="p-5">
                  <div class="text-center">
                    <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Ariana</a>
                    </h3>
                  </div>
                  <p class="mt-3 mb-4 font-light">
                    Ariana is a co-founder of Bakkhos Labs.
                  </p>
                </div>
              </div>

              {/* 5th item */}
              <div class="bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" data-aos="fade-up">
                <img class="w-max rounded-full mx-auto p-5" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar" />
                <div class="p-5">
                  <div class="text-center">
                    <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Ravin</a>
                    </h3>
                  </div>
                  <p class="mt-3 mb-4 font-light">
                    Ravin is Ravin.
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
