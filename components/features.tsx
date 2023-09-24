import { GoldHeading2, SlateHeading4 } from './util/headings'

export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6" data-aos="fade-up" >
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <GoldHeading2 text="Been there, done that." fadeUp={false} />
            <p className="text-xl text-gray-400">
              The little details matter. We know how difficult it can be to learn cybersecurity.
              We've been there, and we've done that. We're here to help.
            </p>
          </div>

          {/* Items */}
          <div className="text-left max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-2 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-amber-600" width="64" height="64" rx="32" />
                <path className="stroke-current text-amber-100" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-amber-300" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
              </svg>
              <SlateHeading4 text="A World-Class Team" fadeUp={false} />
              <p className="text-lg text-gray-400 mb-2">
                With Bakkhos, you get access to some of the <span className='text-amber-400 font-bold'>best hackers 
                in the world.</span> Our members founded the #1 Singaporean CTF team, 
                Social Engineering Experts, and were part of the winning team in the DEF CON 2023 CTF Qualifiers.
                CTFs are the <span className='text-amber-400 font-bold'>Olympics of Cybersecurity</span>
                 , attracting world-renowned security professionals to exploit vulnerabilities in systems.
              </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <circle className="fill-current text-amber-600" cx="32" cy="32" r="32" />
                <path className="stroke-current text-amber-100" strokeWidth="2" strokeLinecap="square" d="M21 23h22v18H21z" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-amber-300" d="M26 28h12M26 32h12M26 36h5" strokeWidth="2" strokeLinecap="square" />
              </svg>
             <SlateHeading4 text="Best-in-Class Content" fadeUp={false} />
              <p className="text-lg text-gray-400">
                CTF isn't about guessing the right attack vector. It's about <span className='text-amber-400 font-bold'>learning how to think like a 
                hacker.</span> We've designed our challenges to be <span className='text-amber-400 font-bold'>fun and engaging</span>,
                while also highlighting the latest trends in cybersecurity. And we've done it before - our team has
                successfully run SEETF and Grey Cat The Flag, two of the largest CTFs in Singapore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
