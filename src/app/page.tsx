import Image from "next/image";
export default function Home() {
  return (
    <main className=" text-center pt-6 ">
      <h1 className="text-2xl  text-amber-700 h-10 font-serif">Home </h1>
      <p className="h-16">Welcome to all customers of FU Private Ltd .</p>
      <button className="rounded-full bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button"> Hire Us</button>
      <div className=" align-middle mt-5  flex justify-center items-center md:shrink-0">  <Image src="/poster.jpg" alt="pic1"
      width={"500"} height={"500"}/>
    </div>
 </main>
  );
}