import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function SearchSection() {
  return (
    <section className="py-8 md:py-10">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl rounded-[1.75rem] border border-amber-100 bg-white/80 p-4 shadow-[0_20px_50px_rgba(251,146,60,0.08)] backdrop-blur-sm md:p-6">
          <div className="flex flex-col gap-4 md:flex-row">
            <Input
              placeholder="Search architects, contractors, interior designers..."
              className="h-12 rounded-full border-amber-100 bg-amber-50/60 text-base focus-visible:ring-amber-200"
            />

            <Button className="h-12 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-6 text-white hover:from-amber-600 hover:to-orange-600">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchSection;