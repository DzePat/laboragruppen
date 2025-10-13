import Image from "next/image";

export default function ContactsPage() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/logo.png"
          alt="Next.js logo"
          width={360}
          height= {48}
          priority
        />
        <label>Contacts Page</label>
        </main>
    </div>
    )
}