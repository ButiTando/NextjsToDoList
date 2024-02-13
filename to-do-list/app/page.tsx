import Image from "next/image";
import ListItem from "@/components/listItem"

export default function Home() {
  return (
    <div className="flex flex-col
                    h-screen w-full">
      <div className="h-[2.25em] w-full
                      flex flex-row
                      items-center
                      bg-green-500 
                      text-red-500 text-2xl
                      relative
                      ">
        To do list
      </div>

      {/* This should be displayed on small screens */}
      <ul className="w-full 
                      flex-1
                     bg-red-300
                     ">
        
        <ListItem/>

      </ul>

      {/* This should be displayed on medium screens */}
      <ul className="sm:hidden">
          
      </ul>

      {/* This should be displayed on large screens  */}
      <ul className="sm:hidden"></ul>

    </div>
  );
}
