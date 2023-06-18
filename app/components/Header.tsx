import Image from "next/image";
import Container from "./Container";

const navLinks = [
  { name: "About Us", href: "#" },
  { name: "Broker Reviews", href: "#" },
  { name: "News", href: "#" },
  { name: "Compare", href: "#" },
];

export default function Header() {
  return (
    <header className=" bg-white">
      <Container className="flex justify-between py-4 px-8">
        <div className="flex items-center">
          <Image
            src={"/tbslogo.svg"}
            alt="logo"
            width={32}
            height={32}
            className="mr-2"
          />
          <span className="font-semibold text-xl tracking-tight">
            Top Broker Sites
          </span>
        </div>
        <div className="flex items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="py-2 px-4 text-gray-600 font-semibold hover:text-gray-800"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-blue-500 ml-4 hover:bg-blue-600 py-2 px-4 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            Compare
          </button>
        </div>
      </Container>
    </header>
  );
}
