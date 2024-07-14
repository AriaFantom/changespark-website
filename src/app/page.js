import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav className="flex justify-between items-center w-full px-24 py-8">
        <Image src="/logo.png" alt="ChangeSpark Foundation logo" width={150} height={100} />
        <ul className="flex space-x-12">
          {["Home", "Skills", "Projects", "Contact"].map((item) => (
            <li key={item} className="list-none">
              <a
                href={`#${item.toLowerCase()}`}
                className="text-base font-medium text-gray-900 capitalize hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-0.5 hover:after:bg-black hover:after:m-auto"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      
    </main>
  );
}
