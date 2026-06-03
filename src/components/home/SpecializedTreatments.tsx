import Image from "next/image";
import React from "react";

const treatments = [
  {
    title: "Back Pain",
    icon: "accessibility",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDeIYB19RUyL8EddPLFNkAkHIS5oG97ZaVGQrm3NoXJBKdqb_E2MyjShsxBAbS_P8w_d8LGTxHwueTQTXkgMLCHwdSNg88RSBqqss3cBxdjXEJFkYGtZOUEXOvyKUbMt9Wbp0OfITdiI4Z4-ZzfLk3l5_y1pXXDbnny6fR_9HOyRPJ4_KsV0CKNU0d7RWBkYV4H__PAr2WL4KCg_MI4NU_WoUQa0kp7JOjbf8w49OkZtMPSamZ-KCZxBc3btCyk31pfsEbJIm8OUS4",
  },
  {
    title: "Neck Pain",
    icon: "airline_seat_flat",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXuI5xadx5yLrZm3yrrEwAORXyuwMUEhsOLorQAGap0_IUQjq-aesqwLJerByAX82Ybb1DUNLFDLF5NT6pvxszI07Yxkq2f91mTMVZQCZ55Y0Q4PekFQIYuSyHQ994dWftm9q33odL2hLgQJ8Vg5FTe5sYFzhdPf2gXvtf6cD5jynHAI8Ya85I_qWlXU1Q1TojO1TNtZjJsr4wltDoB4RiyqlADxMQ45oQxACzAQsgOPpmp1b2ItFcwQBsWz5psIp_lKQBrxwg9NY",
  },
  {
    title: "Knee Pain",
    icon: "sports_gymnastics",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8sU4oXSyOyS-AASGjk9YJUYwmsKc2sfCYrJKEFHw8dlhqLJbGO87yN8VNLhdLt-9vGzzF-pLbJLmYZnWFMaFLwpBidLTwakHsjvMckyuVAMIgmWjmOWzhklABTLOzM_KF_9KaxMlVyjhczWEBE30yjAHJ7H-XO0BeLj8Mp7ni-RXyRwD3zJfuPm8Qyng998cxYY0bIeoYbznFjY6bUg0fP0s_QXzEPpnnzCN-KjsFPN6wjNL4WBlAvCs8IhyMhy5zZrjNAcDyuQY",
  },
  {
    title: "Sciatica Pain",
    icon: "bolt",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYNg6SUcKbY7qhsSpn4Hah3AnYbpmiR-V0KHvH3BjyRPN8SqWcfiriT68ohGppyTo6rLDD6QjNinkxR3FRFDqNv8peK5YtLk2vYNiHbt5cl1-9y6_0G2PCbgd1kPpalh094DEz5QB4EA4v8F7lw7p-JgMdIv9rZQTgL8_jey_DxmYc8_8Re17POEMBH6IJLY9bPp7lyNh-YmIlgJa4uTxLhI2sI_VkOw4nm-3VtTTW4u9Gpyi-_JeGUi7HRO4eI_mToPVbDwzHxyg",
  },
  {
    title: "Slip Disc",
    icon: "healing",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1aunqWUlnNnG8XracZmTY5RLBK4Mybcz69Niq65mUcnAJXNWsKt3OtmfLUyXV14O_EuXKIbpC9wgSskuJTVXpw078j0MmcoRsqiIrV4dQODvIwDpP9KLieZlRQ2-0kdbKzkVZhiJmuvWqAcDqVPHwWywZwq5c_lIfYAYFp1u31sh054qwYpBzM_8j9lRLJUPZChkXxXLV0M-dYDCJ9ulEbrEdJam6pDvaR42skwygDh0ZweMhCLP21yI_sBeuNN8T-U3PBz9hlWY",
  },
  {
    title: "Joint Pain",
    icon: "sports_martial_arts",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuACrt19Fh_4KyQSrNE-0V2Xa0kz8BWM-HtdoSrQgDO5_w2nFxbUTkp5u-FC-y474BxB-6z9HVjcu6KuE97tThoEs89wSCzcFYakapOeqBVS--nqYHY5sRjyB9B9FHi8LEc3h5Hcmwy5HUtSvWatPleHfCjU63Tcv0TpFNtIcT4I6nk-E_h4LXGzbrdoW_1OeZBsaExBMx9QfXvEtf-sePuzAp6SytlyTfaaRLK_3HPeg64juRod3Az6NFclNyhDxsXghXX_l7vDniI",
  },
  {
    title: "Kinesio Taping",
    icon: "medical_information",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4EaWzldV6-D7o4OuYyFk46UdqnIPIlUM-28VR-ubjzpLCnq-hI_EHce-pGTzeD9uYBNElAt0ud3kITrpQchLhRN-0VHg0jI2aHws-HOYgNEUlzYA08chiAcD6Ie1JoSxor8TbjdOtp4lxbuAUVOjM6zO9pESFE0oHp5mDl5WVcqS7UpbyvEZNLXlP-8zHE5HQgwRybKKwV4EM1NaePdFbeIutbQkMOrz68R9LBzUjtoB0l2sa3Q1WIH_nqamaHjT9XQiEVUcn43A",
  },
  {
    title: "Headache",
    icon: "sentiment_very_dissatisfied",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMjhVbuTj-EK9YCZfLcSKkko3K0RZXtuxVgWjoxaXyhXXqPQTjHWrsORJPacaU-PWvdYTTHp3YUU4eubhUcCv0U9jdhU0x7mpaURbwIqQHGiK9FQ1bE84ZYDoQr6DIO-mDXIikCsRWJJbgRbkoaPzVFLruJwkTununUwOp_VZjWEK0z_MuUo6LGnOUwXKmGTt51v3LoNnvn-a_QHE5oA0qWnDiunMN9qFG_gUoRIzsJYTpGwVq3dB8x-cWAzhDHQwTWujtoA9E6O8",
  },
  {
    title: "Tingling & Dizziness",
    icon: "neurology",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcGN_R5mFrLS9PmvLxLuBcGmgzeofVU47-VANRDFHO7-sEbMno3AIrtPyGPjK6JNKPKlnyJW61aZS0KbwDHl8Kt3XekIKAgok5Wyoir2gHNnb9rT-_okFbWjfGFQhLa4fwL_AeoDjJw0TIwhv6iY5jWuyCKlDHKLGJ6AzuWwNzxGiCSYvCVnukEyDaYKasJ9WTAZbtJdxWCIBlspBbqe4M090djFzXH_O-kP8wqMZ-fkEVwqXFtWMTKdvx-7eD3K3yPsAFrc0f4NY",
  },
  {
    title: "Frozen Shoulder",
    icon: "physical_therapy",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuALA5_e-BFo8yC7raZBYAFGiSowVUw2NeuwG8G_CKpSf6OKD4WB3qI0zbJv1SJh6AtZu0MW9KpZ00hWEsbhr8ZOukx6KRrg8OAweYTWd-wX5rIqFgsVCsc2yMyXI4jtcy2tjdUj08UQfmOzRzLXjPOJ61cwrcqsgvWbXri6uLX8v9BbFNeZGOX57xGBn8tvxBMhoVJab_gOrENeLrnRu__qJTsDOjTavPH0hgyYgzUrNeKLc6-nEZxCHgLs0U460GO_HvFnQ_kOSa4",
  },
  {
    title: "Cupping Therapy",
    icon: "spa",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDI-2ftWIDeOewZhagi7OVoG8QZzKN6ir1Fonm0BzmB2d_HiEGIcsrUM9Ag-UTJNk7f1r5W2V4pYIxN06FH8Io7pU12dZ43FTrm9BFTA7ObThjpteiXgVdIgC5kXr_GgvklANLFEUznImzAgxlC4QAMBJOgfVv5fkwZfw17G_mFvs29JgZIugeg8hvhYa3MT1huO1PMTLZtiTZf9arWPCH2kUoMInuXdY17hcSYRbQcx12IwpJTWJOAZM42wlFixK5oU3W8gg2ElJI",
  },
  {
    title: "Dry Needling",
    icon: "vaccines",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAN63g57-xhGibwaBjtRRzEAuxKLx_A_eg8CJnDDSQ7P2zu_yRfXb_OfIIhVnGTIy5NlnhTziliEllXOPOUblOcV6PfSzHmja0o4UxDa96VYRCJPf0J9Y-lbLw0MUQ6jHbZ_PFjIG-tER9SZVtciUzDY0t6ZTG0fNYItnZh1LlRXq3Ybo_hl_tm28FR7LNroeeZE2z1UnBstsp-J5kT_C6EudzprZUgDPpGfGK0h5DMan9X9sZnIW90ttH_IHU_i2QZ8Tky0DVMuXQ",
  }
];

export default function SpecializedTreatments() {
  return (
    <section className="py-20 md:py-32 bg-background" id="services">
      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-headline-lg font-headline-lg text-deep-blue-primary">Specialized Treatments</h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant">We offer targeted therapies for various musculoskeletal conditions to help you return to a pain-free life.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {treatments.map((treatment, index) => (
            <div key={index} className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden shadow-sm hover:shadow-medical-hover transition-all duration-300 group cursor-pointer">
              <div className="aspect-video overflow-hidden relative">
                <Image 
                  src={treatment.image} 
                  alt={`${treatment.title} Treatment`} 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
              <div className="p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-soft-blue-accent rounded-lg flex items-center justify-center text-healthcare-teal shrink-0">
                  <span className="material-symbols-outlined text-xl">{treatment.icon}</span>
                </div>
                <h3 className="text-body-md font-headline-md text-deep-blue-primary font-bold">{treatment.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
