import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export const Hero = () => {
  return (
    <main className="bg-[url('/HeroImg.png')] py-8 sm:py-28 flex flex-col items-center gap-12">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-5xl font-black text-white text-center">Are You a Supplier?</h1>
        <h2 className="text-5xl font-medium text-white text-center">Explore Matching Opportunities.</h2>
      </div>

      <div className="flex flex-col sm:flex-row w-full max-w-xs sm:max-w-2xl items-center sm:space-x-2 gap-2">
      <Input type="email" placeholder="Search your required service here" />
      <Input type="email" placeholder="Search your desired location here" />
      <Button type="submit" className="px-8 bg-[#00732F]">Search</Button>
      </div>

      <div className="px-2">
      <p className="text-center font-bold text-white">Are you a buyer? <a href="" className="underline">Click here if you are looking to post a requirements</a></p>
      </div>
    </main>
  )
}
