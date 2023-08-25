import Image from 'next/image'

import TestimonialImage01 from '@/public/images/testimonial-01.jpg'
import TestimonialImage02 from '@/public/images/testimonial-02.jpg'
import TestimonialImage03 from '@/public/images/testimonial-03.jpg'

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Trusted by the best.</h2>
            {/* <p className="text-xl text-gray-400">
              Here's what our clients are saying.
            </p> */}
            <p className="text-xl text-gray-400">
              Meet our valued partners.
            </p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-2 lg:gap-6 items-start items-center lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col" data-aos="fade-up" data-aos-delay="200">
              <Image src="/images/clients/blockcyber.png" width={0} height={0} sizes="100vw" style={{ height: '100%', width: '100%' }}></Image>
            </div>
            {/* 2nd testimonial */}
            <div className="flex flex-col" data-aos="fade-up" data-aos-delay="200">
              <Image src="/images/clients/CSA.png" width={0} height={0} sizes="100vw" style={{ height: '100%', width: '100%' }}></Image>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
