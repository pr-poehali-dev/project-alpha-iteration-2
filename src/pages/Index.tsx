import { LiquidMetalBackground } from "@/components/LiquidMetalBackground"
import { FloatingNavbar } from "@/components/FloatingNavbar"
import { ShinyButton } from "@/components/ui/shiny-button"
import { Feature } from "@/components/ui/feature-with-advantages"
import { BentoPricing } from "@/components/ui/bento-pricing"
import { ContactCard } from "@/components/ui/contact-card"
import { AboutQuote } from "@/components/ui/about-quote"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"

export default function Index() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const pricingSectionRef = useRef<HTMLDivElement>(null)
  const aboutSectionRef = useRef<HTMLDivElement>(null)
  const contactSectionRef = useRef<HTMLDivElement>(null)
  const [lightbox, setLightbox] = useState<{ src: string; label: string } | null>(null)

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (!scrollContainer) return

    const handleWheel = (e: WheelEvent) => {
      const delta = e.deltaY
      const currentScroll = scrollContainer.scrollLeft
      const containerWidth = scrollContainer.offsetWidth
      const currentSection = Math.round(currentScroll / containerWidth)

      if (currentSection === 3 && pricingSectionRef.current) {
        const pricingSection = pricingSectionRef.current
        const isAtTop = pricingSection.scrollTop === 0
        const isAtBottom = pricingSection.scrollTop + pricingSection.clientHeight >= pricingSection.scrollHeight - 1

        if (delta > 0 && !isAtBottom) {
          return
        }

        if (delta < 0 && !isAtTop) {
          return
        }

        if (delta < 0 && isAtTop) {
          e.preventDefault()
          scrollContainer.scrollTo({
            left: 2 * containerWidth,
            behavior: "smooth",
          })
          return
        }

        if (delta > 0 && isAtBottom) {
          e.preventDefault()
          scrollContainer.scrollTo({
            left: 4 * containerWidth,
            behavior: "smooth",
          })
          return
        }
      }

      if (currentSection === 4 && aboutSectionRef.current) {
        const aboutSection = aboutSectionRef.current
        const isAtTop = aboutSection.scrollTop === 0
        const isAtBottom = aboutSection.scrollTop + aboutSection.clientHeight >= aboutSection.scrollHeight - 1

        if (delta > 0 && !isAtBottom) {
          return
        }

        if (delta < 0 && !isAtTop) {
          return
        }

        if (delta < 0 && isAtTop) {
          e.preventDefault()
          scrollContainer.scrollTo({
            left: 3 * containerWidth,
            behavior: "smooth",
          })
          return
        }

        if (delta > 0 && isAtBottom) {
          e.preventDefault()
          scrollContainer.scrollTo({
            left: 5 * containerWidth,
            behavior: "smooth",
          })
          return
        }
      }

      if (currentSection === 5 && contactSectionRef.current) {
        const contactSection = contactSectionRef.current
        const isAtTop = contactSection.scrollTop === 0
        const isAtBottom = contactSection.scrollTop + contactSection.clientHeight >= contactSection.scrollHeight - 1

        if (delta > 0 && !isAtBottom) {
          return
        }

        if (delta < 0 && !isAtTop) {
          return
        }

        if (delta < 0 && isAtTop) {
          e.preventDefault()
          scrollContainer.scrollTo({
            left: 4 * containerWidth,
            behavior: "smooth",
          })
          return
        }

        if (delta > 0 && isAtBottom) {
          e.preventDefault()
          return
        }
      }

      e.preventDefault()

      if (Math.abs(delta) > 10) {
        let targetSection = currentSection
        if (delta > 0) {
          targetSection = Math.min(currentSection + 1, 5)
        } else {
          targetSection = Math.max(currentSection - 1, 0)
        }

        scrollContainer.scrollTo({
          left: targetSection * containerWidth,
          behavior: "smooth",
        })
      }
    }

    scrollContainer.addEventListener("wheel", handleWheel, { passive: false })
    return () => scrollContainer.removeEventListener("wheel", handleWheel)
  }, [])

  return (
    <main className="relative h-screen overflow-hidden">
      <LiquidMetalBackground />

      <div className="fixed inset-0 z-[5] bg-black/50" />

      <FloatingNavbar />

      <div
        ref={scrollContainerRef}
        className="relative z-10 flex h-screen w-full overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory hide-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <section id="home" className="flex min-w-full snap-start items-center justify-center px-4 py-20">
          <div className="mx-auto max-w-4xl">
            <div className="text-center px-0 leading-5">
              <h1 className="mb-8 text-balance text-5xl tracking-tight text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] md:text-6xl lg:text-8xl">
                <span className="font-open-sans-custom not-italic">Защита.</span>{" "}
                <span className="font-serif italic">Стиль.</span>{" "}
                <span className="font-open-sans-custom not-italic">Комфорт.</span>
              </h1>

              <p className="mb-8 mx-auto max-w-2xl text-pretty leading-relaxed text-gray-300 [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] font-thin font-open-sans-custom tracking-wide leading-7 text-xl">
                Бронирование кузова PPF-плёнкой, шумоизоляция, полировка и тонировка —{" "}
                <span className="font-serif italic">профессионально</span> в Казани
              </p>

              <div className="flex justify-center">
                <ShinyButton className="px-8 py-3 text-base">записаться</ShinyButton>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="flex min-w-full snap-start items-center justify-center px-4 py-20">
          <div className="mx-auto max-w-7xl w-full">
            <Feature />
          </div>
        </section>

        <section id="gallery" className="relative min-w-full snap-start overflow-y-auto px-4 pt-24 pb-8 hide-scrollbar" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
          <div className="mx-auto w-full max-w-6xl">
            <div className="mx-auto mb-6 max-w-2xl text-center">
              <h2 className="text-4xl font-extrabold tracking-tight lg:text-6xl text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] font-open-sans-custom">
                Наши работы
              </h2>
              <p className="text-gray-300 mt-3 text-sm md:text-base font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
                Нажмите на фото чтобы увеличить
              </p>
            </div>
            <div className="columns-2 md:columns-3 lg:columns-5 gap-2 space-y-2">
              {[
                { src: "https://cdn.poehali.dev/files/3a157972-9fb2-47f1-8cc4-b7c358b858d0.jpg", label: "Матовое бронирование" },
                { src: "https://cdn.poehali.dev/files/0bd45d3d-9a0a-45d3-8119-5d49402ef127.jpg", label: "Детейлинг кузова" },
                { src: "https://cdn.poehali.dev/files/2f64cea6-cd81-4e90-a71e-02058b7a012c.jpg", label: "PPF — бок двери" },
                { src: "https://cdn.poehali.dev/files/07c2a7e6-273e-4032-a3bf-192eedc97346.jpg", label: "Audi в сервисе" },
                { src: "https://cdn.poehali.dev/files/6bcbce0d-4dc6-4d10-8541-a886aef81957.jpg", label: "Шумоизоляция Mercedes" },
                { src: "https://cdn.poehali.dev/files/0a94c62f-abef-48c9-ad0d-b84054b8c542.jpg", label: "Подготовка к бронированию" },
                { src: "https://cdn.poehali.dev/files/bdb87756-a60d-4b6e-afa6-7d79d3c328b2.jpg", label: "Полировка кузова" },
                { src: "https://cdn.poehali.dev/files/800b3ca2-401b-42db-a8d1-c4fedae90b54.jpg", label: "Наклейка PPF плёнки" },
                { src: "https://cdn.poehali.dev/files/32a70e2f-09ca-4b25-ab48-6840c21145e4.jpg", label: "Бронирование капота" },
                { src: "https://cdn.poehali.dev/files/68395596-f76e-4718-8456-c67f0e32eacc.jpg", label: "Готовый результат" },
                { src: "https://cdn.poehali.dev/files/9f11613a-eaa2-4563-a4c9-671804f62563.jpg", label: "Шумоизоляция пола Mercedes" },
                { src: "https://cdn.poehali.dev/files/2477e1a6-1e48-4d47-b040-e20acd8879a5.jpg", label: "Шумоизоляция багажника" },
                { src: "https://cdn.poehali.dev/files/68022ddb-df9f-4a02-b404-956e4ae0a1f8.jpg", label: "Шумоизоляция дверей" },
                { src: "https://cdn.poehali.dev/files/71d01989-e146-4214-ba50-45db3d7384ab.jpg", label: "Виброизоляция двери" },
                { src: "https://cdn.poehali.dev/files/cabef499-bed7-4407-9ea0-4296eb29ff98.jpg", label: "Zeekr — матовое PPF" },
              ].map((photo, i) => (
                <div
                  key={i}
                  className="relative break-inside-avoid overflow-hidden rounded-xl cursor-zoom-in group"
                  onClick={() => setLightbox(photo)}
                >
                  <img
                    src={photo.src}
                    alt={photo.label}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {lightbox && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setLightbox(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full" onClick={e => e.stopPropagation()}>
              <img
                src={lightbox.src}
                alt={lightbox.label}
                className="w-full h-full object-contain rounded-xl max-h-[80vh]"
              />
              <p className="text-white text-center mt-3 font-open-sans-custom text-sm opacity-80">{lightbox.label}</p>
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-4 -right-4 bg-white/20 hover:bg-white/40 text-white rounded-full w-9 h-9 flex items-center justify-center backdrop-blur-sm transition-colors text-lg"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        <section
          id="pricing"
          ref={pricingSectionRef}
          className="relative min-w-full snap-start overflow-y-auto px-4 pt-24 pb-20 hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div
            aria-hidden="true"
            className={cn(
              "absolute inset-0 z-0 size-full pointer-events-none",
              "bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)]",
              "bg-[size:12px_12px]",
              "opacity-30",
            )}
          />

          <div className="relative z-10 mx-auto w-full max-w-5xl">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] font-open-sans-custom">
                Цены на услуги
              </h1>
              <p className="text-gray-300 mt-4 text-sm md:text-base font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
                Прозрачные цены без скрытых платежей. Точную стоимость рассчитаем под ваш автомобиль.
              </p>
            </div>
            <BentoPricing />
          </div>
        </section>

        <section
          id="about"
          ref={aboutSectionRef}
          className="relative min-w-full snap-start overflow-y-auto px-4 pt-24 pb-20 hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div
            aria-hidden="true"
            className={cn(
              "absolute inset-0 z-0 size-full pointer-events-none",
              "bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)]",
              "bg-[size:12px_12px]",
              "opacity-30",
            )}
          />

          <div className="relative z-10 mx-auto w-full max-w-7xl">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] font-open-sans-custom">
                О нас
              </h1>
              <p className="text-gray-300 mt-4 text-sm md:text-base font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
                Профессионалы с опытом от 5 лет. Работаем с любыми марками и классами авто.
              </p>
            </div>
            <AboutQuote />
          </div>
        </section>

        <section
          id="contact"
          ref={contactSectionRef}
          className="relative min-w-full snap-start overflow-y-auto px-4 pt-24 pb-20"
        >
          <div
            aria-hidden="true"
            className={cn(
              "absolute inset-0 z-0 size-full pointer-events-none",
              "bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)]",
              "bg-[size:12px_12px]",
              "opacity-30",
            )}
          />

          <div className="relative z-10 mx-auto w-full max-w-5xl mt-[5vh]">
            <ContactCard
              title="Записаться на услугу"
              description="Оставьте заявку — и мы перезвоним в течение 30 минут, подберём удобное время и рассчитаем точную стоимость для вашего автомобиля."
              contactInfo={[
                {
                  icon: PhoneIcon,
                  label: "Телефон",
                  value: "+7 (843) 000-00-00",
                },
                {
                  icon: MailIcon,
                  label: "Почта",
                  value: "info@ppf-kazan.ru",
                },
                {
                  icon: MapPinIcon,
                  label: "Адрес",
                  value: "Казань, ул. Автомобильная, 1",
                  className: "col-span-2",
                },
              ]}
            >
              <form action="" className="w-full space-y-4">
                <div className="flex flex-col gap-2">
                  <Label className="text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)] font-open-sans-custom">
                    Имя
                  </Label>
                  <Input
                    type="text"
                    placeholder="Ваше имя"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)] font-open-sans-custom">
                    Телефон
                  </Label>
                  <Input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)] font-open-sans-custom">
                    Марка и модель авто
                  </Label>
                  <Input
                    type="text"
                    placeholder="Например: Toyota Camry 2022"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label className="text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)] font-open-sans-custom">
                    Интересующая услуга
                  </Label>
                  <Textarea placeholder="PPF, шумоизоляция, тонировка..." className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)]" />
                </div>
                <Button
                  className="w-full bg-white text-black hover:bg-gray-100 [text-shadow:_0_1px_2px_rgb(0_0_0_/_10%)] font-open-sans-custom"
                  type="button"
                >
                  Записаться
                </Button>
              </form>
            </ContactCard>
          </div>
        </section>
      </div>
    </main>
  )
}