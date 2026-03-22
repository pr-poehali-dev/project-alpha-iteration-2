import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, SparklesIcon } from "lucide-react"
import DotPattern from "@/components/ui/dot-pattern"

type PricingCardProps = {
  titleBadge: string
  priceLabel: string
  priceSuffix?: string
  features: string[]
  cta?: string
  className?: string
}

function PricingCard({
  titleBadge,
  priceLabel,
  priceSuffix = "/мес",
  features,
  cta = "Подписаться",
  className,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "bg-white/5 border-white/10 relative overflow-hidden rounded-md border-2",
        "backdrop-blur-sm",
        className,
      )}
    >
      <DotPattern width={5} height={5} />
      <div className="flex items-center gap-3 p-3">
        <Badge variant="secondary" className="bg-white/10 text-white border-white/20 font-open-sans-custom text-xs">
          {titleBadge}
        </Badge>
        <div className="ml-auto">
          <Button
            variant="outline"
            size="sm"
            className="bg-white/5 text-white border-white/20 hover:bg-white/10 font-open-sans-custom text-xs"
          >
            {cta}
          </Button>
        </div>
      </div>

      <div className="flex items-end gap-2 px-3 py-1">
        <span className="font-mono text-3xl font-semibold tracking-tight text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)]">
          {priceLabel}
        </span>
        {priceLabel.toLowerCase() !== "бесплатно" && priceLabel !== "0 ₽" && (
          <span className="text-gray-300 text-xs font-open-sans-custom">{priceSuffix}</span>
        )}
      </div>

      <ul className="text-gray-300 grid gap-2 p-3 text-xs font-open-sans-custom">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2">
            <Check className="w-[1.05rem] h-[1.05rem] text-white flex-shrink-0" strokeWidth={3} />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function BentoPricing() {
  return (
    <div className="grid grid-cols-1 gap-1.5 md:grid-cols-2 lg:grid-cols-8">
      <div
        className={cn(
          "bg-white/5 border-white/10 relative w-full overflow-hidden rounded-md border-2",
          "backdrop-blur-sm",
          "lg:col-span-5",
        )}
      >
        <DotPattern width={5} height={5} />
        <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
          <div className="from-white/5 to-white/2 absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
            <div
              aria-hidden="true"
              className={cn(
                "absolute inset-0 size-full mix-blend-overlay",
                "bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px)]",
                "bg-[size:24px]",
              )}
            />
          </div>
        </div>
        <div className="flex items-center gap-3 p-3">
          <Badge variant="secondary" className="bg-white/10 text-white border-white/20 font-open-sans-custom text-xs">
            PPF ПОЛНЫЙ
          </Badge>
          <Badge
            variant="outline"
            className="hidden lg:flex bg-white/5 text-white border-white/20 font-open-sans-custom text-xs"
          >
            <SparklesIcon className="me-1 size-3" /> Популярный
          </Badge>
          <div className="ml-auto">
            <Button size="sm" className="bg-white text-black hover:bg-gray-100 font-open-sans-custom text-xs">
              Записаться
            </Button>
          </div>
        </div>
        <div className="flex flex-col p-3 lg:flex-row">
          <div className="pb-2 lg:w-[30%]">
            <span className="font-mono text-3xl font-semibold tracking-tight text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)]">
              от 35 000 ₽
            </span>
            <span className="text-gray-300 text-xs font-open-sans-custom"> / авто</span>
          </div>
          <ul className="text-gray-300 grid gap-2 text-xs lg:w-[70%] font-open-sans-custom">
            {[
              "Бронирование всего кузова PPF-плёнкой",
              "Самовосстанавливающееся покрытие",
              "Гарантия 5 лет на плёнку",
              "Защита от сколов, царапин и UV-излучения",
            ].map((f, i) => (
              <li key={i} className="flex items-center gap-2">
                <Check className="w-[1.05rem] h-[1.05rem] text-white flex-shrink-0" strokeWidth={3} />
                <span className="leading-relaxed">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <PricingCard
        titleBadge="PPF ЗОНЫ"
        priceLabel="от 8 000 ₽"
        priceSuffix=" / зона"
        features={[
          "Капот, бампер или зеркала на выбор",
          "Плёнка премиум-класса",
          "Защита от сколов и царапин",
          "Гарантия 3 года",
        ]}
        className="lg:col-span-3"
        cta="Записаться"
      />

      <PricingCard
        titleBadge="ШУМОИЗОЛЯЦИЯ"
        priceLabel="от 15 000 ₽"
        priceSuffix=" / авто"
        features={[
          "Виброизоляция дверей и пола",
          "Шумопоглощающие материалы",
          "Заметный результат с первой поездки",
        ]}
        className="lg:col-span-4"
        cta="Записаться"
      />

      <PricingCard
        titleBadge="ТОНИРОВКА"
        priceLabel="от 4 000 ₽"
        priceSuffix=" / авто"
        features={["Качественная тонировочная плёнка", "Защита от UV и перегрева", "Установка за 1 день"]}
        className="lg:col-span-4"
        cta="Записаться"
      />

      <PricingCard
        titleBadge="КОМПЛЕКС"
        priceLabel="По запросу"
        priceSuffix=""
        features={[
          "PPF + шумоизоляция + полировка",
          "Химчистка салона в подарок",
          "Тонировка и доп. оборудование",
          "Персональный менеджер и скидка",
        ]}
        className="lg:col-span-8"
        cta="Рассчитать стоимость"
      />
    </div>
  )
}