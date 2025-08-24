"use client";

import Link from "next/link";
import { BsFire } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaLaptopCode } from "react-icons/fa";
import { FaBoxArchive } from "react-icons/fa6";

const NavigationBar = () => {
  return (
    <nav className="p-3 font-bold fixed top-0 left-0 w-full z-50">
      <div className="flex justify-end pt-3">
        <div className="flex text-white w-fit cursor-default">
          <Link href="/" className="flex flex-col justify-center items-center gap-1 w-25 group">
            <div className="group-hover:text-orange-500 group-hover:scale-120 transition-transform duration-700">
              <BsFire size={20} />
            </div>
            <p       className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            >
              ホーム
            </p>
          </Link>

          <Link href="/profile"  className="flex flex-col justify-center items-center gap-1 w-25   group">
            <div className="group-hover:text-blue-500 group-hover:scale-120 transition-transform duration-700">
              <CgProfile size={20} />
            </div>
            <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              プロフィール
            </p>
          </Link>

          <Link href="/portfolio"  className="flex flex-col justify-center items-center gap-1 w-25  group">
            <div className="group-hover:text-green-500 group-hover:scale-120 transition-transform duration-700">
              <FaLaptopCode size={20} />
            </div>
            <p  className="text-sm opacity-0 group-hover:opacity-100  transition-opacity duration-700">
              ポートフォリオ
            </p>
          </Link>

          <Link href="/archive" className="flex flex-col justify-center items-center gap-1 w-25  group">
            <div className="group-hover:text-cyan-500 group-hover:scale-120 transition-transform duration-700">
              <FaBoxArchive size={20} />
            </div>
            <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              アーカイブ
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
