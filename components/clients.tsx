import { GoldHeading2, SlateHeading4 } from './util/headings'
import Image from 'next/image'

export default function Clients() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6" data-aos="fade-up" >
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <GoldHeading2 text="Trusted by the Best." fadeUp={false} />
            <div>
              <SlateHeading4 text="Meet our valued partners." fadeUp={false} />
            </div>
          </div>

          {/* Clients */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start items-center lg:max-w-none">

            {/* 1st client */}
            <div className="flex flex-col" data-aos="fade-up" data-aos-delay="200">
              <Image src="/images/clients/ensign.png" alt="Ensign Infosecurity" width={0} height={0} sizes="100vw" style={{ height: '100%', width: '100%' }}></Image>
            </div>
            {/* 2nd client */}
            <div className="flex flex-col" data-aos="fade-up" data-aos-delay="200">
              <Image src="/images/clients/CSA.png" alt="CSA" width={0} height={0} sizes="100vw" style={{ height: '100%', width: '100%' }}></Image>
            </div>
            {/* 3rd client */}
            <div className="flex flex-col" data-aos="fade-up" data-aos-delay="200">
              <Image src="/images/clients/blockcyber.png" alt="Blockcyber" width={0} height={0} sizes="100vw" style={{ height: '100%', width: '100%' }}></Image>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
